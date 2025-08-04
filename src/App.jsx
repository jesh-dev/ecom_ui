
import { BrowserRouter , Routes, Route } from "react-router-dom";
import CartPage from "./Pages/Cart";
import Home from "./Home";
import ProductPage from "./Pages/AllProducts/Components/Grid";
import { Toaster } from "react-hot-toast";
import About from "./Pages/About/About";
import Categories from "./Pages/AllProducts/Components/Categories";


export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/categories" element={<Categories />} />
        </Routes>
    </>
  );
}
