import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductPage from "./pages/ProductPage"
import HomePage from "./pages/HomePage"
import { useThemeStore } from "./store/useThemeStore.js";
import {Toaster} from "react-hot-toast";

function App() {

  const {theme}= useThemeStore();
  return (
    
      <div data-theme = {theme} className="bg-base-300 transition-colors duration-300  overflow-hidden justify-center mt-4"  >


        <Navbar/>
        <Routes>


          <Route path="/" element={<HomePage/>} />
          <Route path="/product/:id" element={<ProductPage/>} />


        </Routes>
        <Toaster/>
      </div>
 
  )
}

export default App
