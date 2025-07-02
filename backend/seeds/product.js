import { sql } from '../config/db.js';

const SAMPLE_PRODUCTS = [
  
  {
    "name": "Black Noise Cancelling Headphones",
    "price": "199",
    "image": "https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Wireless Over-Ear Headphones",
    "price": "149",
    "image": "https://images.unsplash.com/photo-1628116709703-c1c9ad550d36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Stereo Headphones for Gaming",
    "price": "89",
    "image": "https://images.unsplash.com/photo-1718382341267-aef8a9e4ecef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Bluetooth Headphones for Running",
    "price": "99",
    "image": "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Premium Wired Headphones",
    "price": "129",
    "image": "https://images.unsplash.com/photo-1491927570842-0261e477d937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "In-Ear Headphones with Microphone",
    "price": "59",
    "image": "https://images.unsplash.com/photo-1693895592595-9171d91a0f22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Noise Isolating Earphones",
    "price": "45",
    "image": "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Sporty Bluetooth Earphones",
    "price": "75",
    "image": "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Compact Over-Ear Wireless Headphones",
    "price": "169",
    "image": "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Digital Audio Headphones",
    "price": "249",
    "image": "https://plus.unsplash.com/premium_photo-1747664078762-4e72337921c0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Active Noise Cancelling Headphones",
    "price": "320",
    "image": "https://images.unsplash.com/photo-1593121925328-369cc8459c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Studio Quality Headphones",
    "price": "450",
    "image": "https://images.unsplash.com/photo-1677019758448-4c34a78df2c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Gaming Headphones with Mic",
    "price": "110",
    "image": "https://images.unsplash.com/photo-1599139894727-62676829679b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "High-Fidelity Wireless Headphones",
    "price": "399",
    "image": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Portable Headphones for Travel",
    "price": "89",
    "image": "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  }

  // Add more products as needed
];

async function seedDatabase() {
  try {
    // Clear existing data and reset identity
    await sql`TRUNCATE TABLE products RESTART IDENTITY CASCADE;`;

    // Insert all products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image)
        VALUES (${product.name}, ${product.price}, ${product.image});
      `;
    }

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();