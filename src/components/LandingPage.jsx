import { useState } from "react";
import Foto1 from "../assets/foto5.jpg";
import Foto3 from "../assets/foto4.jpg";
import Foto4 from "../assets/foto3.jpg";
import Foto5 from "../assets/foto1.jpg";
import { Menu, X } from "lucide-react";

const images = [Foto1, Foto3, Foto4, Foto5];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Transparent Header Inside Image */}
      <header className="absolute top-0  w-full bg-transparent text-white py-6 px-8 flex justify-between items-center z-20">
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black bg-opacity-80 md:bg-transparent transition-transform ${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 text-center md:text-left z-30`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0 ">
            <li>
              <a href="#" className="block py-2 md:py-0 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 md:py-0 hover:underline">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 md:py-0 hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 md:py-0 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className="flex w-full h-full transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full shrink-0 relative">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-8">Sahara</h1>
        <button
          className="px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
          onClick={handleNext}
        >
          Next Image
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
