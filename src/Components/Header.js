import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  {
    src: "/slide1.jpg",
  },
  {
    src: "/slide2.jpg",
  },
  {
    src: "/slide3.jpg",
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="relative w-full h-screen">

        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-start max-w-7xl py-44 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-left z-10 lg:-translate-x-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-8 drop-shadow-lg">
            Welcome to Dayaram's
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-12 drop-shadow-md">
            Brand which Shares Happiness
          </p>
          <Link to="./about" className="mt-4 bg-[#F4C430] text-white py-2 px-6 rounded-lg hover:bg-[#DAA520] transition duration-300">
            Learn More
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-white"
                : "bg-gray-400 hover:bg-white transition duration-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Header;
