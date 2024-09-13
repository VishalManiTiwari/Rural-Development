import React from "react";
import Hero from "../pages/Hero";
import FeaturedArea from "../pages/FeaturedArea";
import Testimonials from "../pages/Testimonials";
// import Gallary from "../pages/Gallary";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <FeaturedArea />
      {/* <Gallary/> */}
      <Testimonials />
      <section className="py-16 px-8 text-center bg-gray-600 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Explore or Share Your Area?
        </h2>
        <p className="text-lg mb-8">
          Join our community and start discovering beautiful rural places or
          sharing your own experiences!
        </p>
        <a
          href="/add-area"
          className="px-4 py-2 bg-white text-orange-600
           rounded-lg
           hover:bg-gray-100 transition duration-300"
        >
          Add Your Area
        </a>
      </section>
    </div>
  );
};

export default Home;
