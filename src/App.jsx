import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import ProductDetails from "./screens/ProductDetails";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
