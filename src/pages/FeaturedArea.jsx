import React, { useState } from "react";
import Cultural from "./Cultural";
import Farming from "./Farming";
import Mountains from "./Mountains";
import Pilgrimage from "./Pilgrimage";


const FeaturedArea = () => {
  // Set "Cultural" as the default selected category
  const [selectedCategory, setSelectedCategory] = useState("Cultural");

  const renderSelectedComponent = () => {
    switch (selectedCategory) {
      case "Cultural":
        return <Cultural />;
      case "Mountains":
        return <Mountains />;
      case "Pilgrimage":
        return <Pilgrimage />; 
      case "Farming":
        return <Farming />;
      default:
        return null;
    }
  };

  return (
    <div>
      <section className="py-16 px-8 bg-gray-100">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Amazing Places to Visit
        </h2>

        {/* Featured Categories */}
        <ul className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          <li className="relative group cursor-pointer">
            <button
              onClick={() => setSelectedCategory("Cultural")}
              className="block text-lg font-semibold text-gray-700 bg-white py-4 px-6 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Cultural
            </button>
          </li>
          <li className="relative group cursor-pointer">
            <button
              onClick={() => setSelectedCategory("Mountains")}
              className="block text-lg font-semibold text-gray-700 bg-white py-4 px-6 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Mountains
            </button>
          </li>
          <li className="relative group cursor-pointer">
            <button
              onClick={() => setSelectedCategory("Pilgrimage")} // Updated to "Pilgrimage"
              className="block text-lg font-semibold text-gray-700 bg-white py-4 px-6 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Pilgrimage Sites
            </button>
          </li>
          <li className="relative group cursor-pointer">
            <button
              onClick={() => setSelectedCategory("Farming")}
              className="block text-lg font-semibold text-gray-700 bg-white py-4 px-6 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Farming
            </button>
          </li>
        </ul>

        {/* Render Selected Category */}
        <div className="mt-8">{renderSelectedComponent()}</div>
      </section>
    </div>
  );
};

export default FeaturedArea;
