import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const Home = () => {
  const services = [
    {
      id: 1,
      name: "Odhis' Chenna Pudo",
      image: "/p1.jpg"
    },
    {
      id: 2,
      name: "Bengali Rasgulla",
      image: "/p2.jpg"
    },
    {
      id: 3,
      name: "Punjabi Kaju Katli",
      image: "/p3.jpg"
    },
    {
      id: 4,
      name: "Kakinada Kaja",
      image: "/p4.jpg"
    },
    {
      id: 5,
      name: "Mathuras' Peda",
      image: "/p5.jpg"
    },
    {
      id: 6,
      name: "Rajasthani Laddu",
      image: "/p6.jpg"
    },
  ];

  const bestSellingProducts = [
    {
      id: 1,
      name: "Mysore Pak",
      price: "₹890 per kg",
      image: "/pd2.jpg"
    },
    {
      id: 2,
      name: "Soan Papdi",
      image: "/bs2.jpg"
    },
    {
      id: 3,
      name: "Chikki",
      image: "/bs3.jpg"
    },
    {
      id: 4,
      name: "Rasgulla",
      image: "/bs4.jpg"
    },
    {
      id: 5,
      name: "Jalebi",
      image: "/bs5.jpg"
    },
    {
      id: 6,
      name: "Gulab Jamun",
      image: "/bs6.jpg"
    },
    {
      id: 7,
      name: "Ladoo",
      image: "/bs7.jpg"
    },
    {
      id: 8,
      name: "Kaju Katli",
      image: "/bs8.jpg"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (bestSellingProducts.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (bestSellingProducts.length - 2)) % (bestSellingProducts.length - 2));
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div>
        <Header /><br />

        {/* Best Selling Products Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl max-h-[80vh] mx-auto text-center relative">
          <h2 className="permanent-marker-regular tracking-wider text-2xl sm:text-3xl lg:text-4xl font-bold mb-20">Best Selling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {bestSellingProducts.slice(currentIndex, currentIndex + 3).map((best) => (
              <div
                key={best.id}
                className="relative group w-[350px] p-1 mx-auto mb-12 overflow-hidden transform transition duration-500 ease-in-out hover:scale-110"
              >
                <img
                  src={best.image}
                  alt={best.name}
                  className="w-full h-56 mb-4 object-cover rounded-lg"
                />
                <h1 className="text-left text-xl mb-1 font-semibold">{best.name}</h1>
                <h2 className="text-left text-amber-500 mb-4">{best.price}</h2>
                <button onClick={() => handleProductClick(best.id)}
                    className='w-full h-12 text-white bg-[#F4C430]'>View Item
                  </button>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button onClick={handlePrev} className="mx-2 px-4 py-2 bg-[#F4C430] text-white rounded-full lg:hover:bg-[#DAA520] sm:active:bg-[#DAA520]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button onClick={handleNext} className="mx-2 px-4 py-2 bg-[#F4C430] text-white rounded-full hover:bg-[#DAA520]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
            </button>
          </div>
        </section>

        {/* Main Services Section */}
        <section
          className="relative py-16 px-4 sm:px-6 lg:px-8 mb-16"
          style={{
            backgroundImage: `url('/pr.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

          <div className="relative max-w-7xl mx-auto text-center z-10">
            <h2 className="permanent-marker-regular tracking-wider text-2xl sm:text-3xl lg:text-4xl font-bold mb-20 text-white">
              Discover India’s Sweet Delights!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative group w-64 h-64 mx-auto mb-12 rounded-full overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-110 animate-bounce-on-load"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover rounded-full"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="text-center text-white p-4">
                      <h1 className="text-xl font-bold mb-8">{service.name}</h1>
                      <Link to="./varieties" className="mt-4 px-6 py-2 bg-[#F4C430] text-white rounded-lg hover:bg-[#DAA520]">
                        Explore More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
