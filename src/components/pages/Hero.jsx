import { useEffect, useState } from "react";
import Header from "../Header";
import { ChevronLeft, ChevronRight } from "lucide-react";

// import portrait image
import Portrait from "../../assets/portrait/portrait1.jpg";
import Portrait2 from "../../assets/portrait/portrait2.jpg";
import Portrait3 from "../../assets/portrait/portrait3.jpg";
import Portrait4 from "../../assets/portrait/portrait4.jpg";

//import landscape image
import Landscape from "../../assets/landscape/landscape.png";
import Landscape2 from "../../assets/landscape/landscape2.jpg";
import Landscape3 from "../../assets/landscape/landscape3.jpg";
import Landscape4 from "../../assets/landscape/landscape4.jpg";

import Logo from "../../assets/logo.png";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const portraitImages = [Portrait, Portrait2, Portrait3, Portrait4];
  const landscapeImages = [Landscape, Landscape2, Landscape3, Landscape4];

  const images = isMobile ? portraitImages : landscapeImages;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : 0;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
            <div className="absolute inset-0 bg-black opacity-65"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="flex flex-col items-center">
          <div className={`flex items-start ${isMobile ? "" : "gap-20"}`}>
            <img src={Logo} alt="Sahara Film" className="w-36 md:w-48" />
            <div className="flex flex-col gap-4 text-lg pt-2">
              <Header inline={!isMobile} vertical />
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <button
              className="p-2 md:p-3 hover:bg-gray-500 rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="p-2 md:p-3 hover:bg-gray-500 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
