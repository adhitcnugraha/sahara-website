import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/pages/Hero";
import Price from "./components/pages/PricingPage";
// import Category from "./components/pages/Category";
// import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/price" element={<Price />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
