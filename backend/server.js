import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { aj } from "./lib/arcjet.js";

import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());




//apply arcjet rate-limit

app.use(async(req,res,next)=>{
    try {
        const decision = await aj.protect(req,{
            requested:1
        })

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                res.status(429).json({error:"Too many requested"}); 
            }
            else if(decision.reason.isBot()){
                res.status(403).json({error:"Bot access denied"}); 
            }
            else {
                res.status(403).json({error:"Forbidden"}); 
            }
            return
        }

        //check for spoofed bots
        if(decision.results.some((result)=> result.reason.isBot() && result.reason.isSpoofed())){
            res.status(403).json({error: "Spoofed bot detected"})
        }
        next();
    } catch (error) {
        next(error);
        
    }
})




app.use("/api/product", productRoutes);

async function initDB() {
  try {
    await sql`
        CREATE TABLE IF NOT EXISTS products(
        id SERIAL PRIMARY KEY ,
        name  VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        price  DECIMAL (10,2) NOT NULL,
        created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
        `;

        console.log("Database initlize sucnessfully ")
  } catch (error) {
    console.log(error);
  }
}

initDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`SErver going on ${process.env.PORT}`);
  });
});
