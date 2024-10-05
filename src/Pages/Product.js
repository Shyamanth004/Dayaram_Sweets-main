import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Pages/Data';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { CartContext } from './Cartcontext';

const Product = () => {
    const { id } = useParams();
    const product = Data.find((prod) => prod.id === parseInt(id));
    const { addToCart } = useContext(CartContext);

    const [selectedWeight, setSelectedWeight] = useState(1);

    if (!product) {
        return <div>Product not found</div>;
    }
    const calculatePrice = () => {
        const basePrice = parseInt(product.price.replace('₹', '').replace(' per kg', ''));
        return basePrice * selectedWeight;
    };

    const handleAddToCart = () => {
        if (!product.stock) {
            alert("This product is out of stock.");
        } else {
            addToCart({ ...product, selectedWeight, price: calculatePrice() });
            alert(`${product.name} of ${selectedWeight === 1 ? '1kg' : (selectedWeight * 1000) + 'g'} is added to cart`);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='bg-[#F4C430] py-10'></div>
            <section className="py-10 min-h-screen max-h-auto bg-white">
                <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8 ">
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full h-96 mb-4 block object-contain rounded-lg shadow-lg ${
                                !product.stock ? 'grayscale' : ''
                            }`}
                        />
                        {!product.stock && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <span className="text-white text-4xl font-bold">Out of Stock</span>
                            </div>
                        )}
                    </div>
                    
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                        <p className="text-lg mb-6">{product.description}</p>
                        <div className="mb-6">
                            <label className="text-lg font-semibold mb-4 block">Select Weight:</label>
                            <div className="flex space-x-4">
                                <div
                                    onClick={() => setSelectedWeight(0.25)}
                                    className={`p-4 border rounded-lg cursor-pointer ${
                                        selectedWeight === 0.25 ? 'border-amber-500' : 'border-gray-300'
                                    } ${!product.stock ? 'cursor-not-allowed' : ''}`}
                                >
                                    250g
                                </div>
                                <div
                                    onClick={() => setSelectedWeight(0.5)}
                                    className={`p-4 border rounded-lg cursor-pointer ${
                                        selectedWeight === 0.5 ? 'border-amber-500' : 'border-gray-300'
                                    } ${!product.stock ? 'cursor-not-allowed' : ''}`}
                                >
                                    500g
                                </div>
                                <div
                                    onClick={() => setSelectedWeight(1)}
                                    className={`p-4 border rounded-lg cursor-pointer ${
                                        selectedWeight === 1 ? 'border-amber-500' : 'border-gray-300'
                                    } ${!product.stock ? 'cursor-not-allowed' : ''}`}
                                >
                                    1kg
                                </div>
                            </div>
                        </div>
                        <p className="text-xl font-semibold text-amber-500 mb-4">
                            Price: ₹{calculatePrice()}
                        </p>
                        <button
                            onClick={handleAddToCart}
                            className={`${
                                product.stock
                                    ? 'bg-[#F4C430] hover:bg-[#FBCC7C] text-white'
                                    : 'bg-gray-500 text-white cursor-not-allowed'
                            } px-4 py-2 rounded-lg`}
                            disabled={!product.stock}
                        >
                            {product.stock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Product;
