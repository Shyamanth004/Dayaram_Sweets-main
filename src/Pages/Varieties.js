import React, { useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import Data from "../Pages/Data";
import { CartContext } from "./Cartcontext";

const Varieties = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = Data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Navbar />
      <div>
        <div
          className="relative bg-cover bg-center py-24 flex items-center justify-center"
          style={{
            backgroundImage: "url('/pp.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
          <h2 className="relative text-3xl sm:text-3xl lg:text-5xl font-bold text-white z-10">
            Our Products
          </h2>
        </div>

        <section className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-[80%] lg:w-[50%] p-2 border border-gray-300 rounded-lg placeholder:text-gray-600"
            />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="relative bg-white p-2 rounded-lg shadow-lg">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`bg-red-200 h-52 w-full mb-4 cursor-pointer hover:scale-105 transition duration-500 ${
                        !product.stock ? 'grayscale' : ''
                      }`}
                      onClick={() => handleProductClick(product.id)}
                    />

                    {!product.stock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <h1 className="text-left text-xl mb-1 font-semibold">{product.name}</h1>
                  <h2 className="text-left text-amber-500 mb-4">{product.price}</h2>
                  <button
                    onClick={() => {
                      if (!product.stock) {
                        alert("This product is out of stock.");
                      } else {
                        addToCart(product);
                      }
                    }}
                    className={`w-full h-12 text-white ${
                      product.stock
                        ? 'bg-[#FEBF52] hover:bg-[#FBCC7C]'
                        : 'bg-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.stock}
                  >
                    {product.stock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products found</p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Varieties;
