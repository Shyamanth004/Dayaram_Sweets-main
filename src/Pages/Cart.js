import React, { useContext } from "react";
import { CartContext } from './Cartcontext';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    return (
        <div>
            <Navbar />
            <div className="h-16 bg-[#FEBF52]"></div>
            <section className="py-10 min-h-screen max-h-auto bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-8">Your Cart</h2>

                    {cartItems.length === 0 ? (
                        <p className="text-center text-lg">Your cart is empty.</p>
                    ) : (
                        <>
                            <div className="mb-6">
                                {cartItems.map((item) => (
                                    <div key={`${item.id}-${item.selectedWeight}`} className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-lg">
                                        <div className="flex items-center">
                                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                                            <div className="ml-4">
                                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                                <p className="text-gray-600">Selected Weight: {item.selectedWeight === 1 ? '1kg' : `${item.selectedWeight * 1000}g`}</p>
                                                <p className="text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
                                                <div className="flex items-center">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.selectedWeight, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                        className="bg-gray-300 px-2 py-1 rounded-lg mr-2"
                                                    >
                                                        -
                                                    </button>
                                                    <p className="text-gray-600">{item.quantity}</p>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.selectedWeight, item.quantity + 1)}
                                                        className="bg-gray-300 px-2 py-1 rounded-lg ml-2"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id, item.selectedWeight)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="text-right mb-8">
                                <p className="text-2xl font-bold mb-4">Total Price: ₹{totalPrice.toFixed(2)}</p>
                                <button
                                    onClick={clearCart}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4"
                                >
                                    Clear Cart
                                </button>
                            </div>

                            <div className="text-center">
                                <button
                                    className="bg-[#FEBF52] text-white px-8 py-3 rounded-lg hover:bg-[#FBCC7C]"
                                >
                                    Place Order
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CartPage;
