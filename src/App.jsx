import { Routes, Route } from "react-router-dom";
import Hero from "./components/pages/Hero";
import Price from "./components/pages/PricingPage";
import Category from "./components/pages/category/Category";
// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/category" element={<Category />} />
      <Route path="/price" element={<Price />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
