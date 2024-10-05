import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  const aboutBlocks = [
    {
      image: "/ab1.jpg",
      title: "Our Mission",
      description:
        "At Sugary Trails, we promise more than confections. We promise memories. Whether you’re celebrating a birthday, a promotion, or simply the joy of being alive, our sweets are there to sweeten the moment. And as you leave, clutching a pink box tied with satin ribbon, you’ll carry a piece of our warmth with you.",
    },
    {
      image: "/ab2.jpg",
      title: "Our Vision",
      description:
        "In the cozy kitchen, the air thick with anticipation, generations gather. Children perch on countertops, eyes wide as they watch flour transform into dough. Grandparents, their hands weathered and wise, measure spices by intuition. And in the center of it all—the heart of the home—sits a platter of sweets.",
    },
    {
      image: "/ab3.jpg",
      title: "Our Values",
      description:
        "Step inside our cozy haven, and you’ll find shelves adorned with colorful jars of jalebis, trays of buttery pedas, and stacks of fragrant coconut laddoos. Whether you’re celebrating a special occasion or simply craving a sweet escape, Siblings’ Sweet Haven promises to make your heart a little lighter and your taste buds dance with joy.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="py-24 bg-[#F4C430]">
          <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-center">About Us</h2>
        </div>
        <section className="py-16 max-w-7xl mx-auto">

          {aboutBlocks.map((block, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              <div className="w-[95%] lg:w-1/2 h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105 animate-slide-In">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 animate-fade-in">{block.title}</h3>
                <p className="playpen-sans-text text-lg px-2 lg:px-0 lg:pr-3 text-gray-700 animate-fade-in">{block.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
