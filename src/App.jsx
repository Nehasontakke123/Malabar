import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import ProductPages from "./pages/ProductPages";
import ProductList from "./components/ProductList";
import GemstoneJewellery from "./components/GemstoneJewellery";
import CategorySection from "./components/ShopByCategory";
import OurCollection from "./components/OurCollection";
import BridesSection from "./components/BridesSection";
import BridesOfIndia from "./components/BridesOfIndia";
import BrideList from "./components/BrideList";
import BrideDetails from "./components/BrideDetails";
import CheckoutPage from "./pages/CheckoutPage";
import LoginForm from "./components/LoginForm";
// import Dashboard from "./pages/Dashboard"; // Import Dashboard Page


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPages />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/gemstone-jewellery" element={<GemstoneJewellery />} />
        <Route path="/shop-by-category" element={<CategorySection />} />
        <Route path="/our-collection" element={<OurCollection />} />
        <Route path="/brides-of-india" element={<BridesOfIndia />} />
        <Route path="/bride-list" element={<BrideList />} />
        <Route path="/bride/:id" element={<BrideDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
