import React from 'react';

const Farming = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Organic Farming */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/ncIOF_ZpbvUf14dLw_7-1kfSiaklO3s2LUVe9q0rO-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzA0LzU1Lzcx/LzM2MF9GXzIwNDU1/NzE3MV8yNlgwQWFv/dVF3VmxScU90a1B0/d3lwYWgyUXJzNFRJ/eC5qcGc"
            alt="Organic Farming"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Organic Farming</h3>
            <p className="text-gray-600">
              Experience the benefits of organic farming, where you learn to grow crops
              without harmful chemicals, promoting a healthy environment.
            </p>
          </div>
        </div>

        {/* Animal Husbandry */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/qA3lkrqIyQ9yfm1S98YBETu8T9-TK0hyrVgT8aMCTDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY5L0JlemVycm9z/X2RlX0lBVEYuanBn"
            alt="Animal Husbandry"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Animal Husbandry</h3>
            <p className="text-gray-600">
              Learn about taking care of farm animals, including feeding, milking, and
              understanding sustainable animal farming techniques.
            </p>
          </div>
        </div>

        {/* Crop Cultivation */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/e3Nj6jVMHzRXcQ0LFFW8UhPYn9gHm1Szxo61EAn5gp8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGJzLm9yZy90aGVz/dG9yeW9maW5kaWEv/aW1hZ2VzL2dhbGxl/cnkvcmljZV9jdWx0/aXZhdGlvbi5qcGc"
            alt="Crop Cultivation"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Crop Cultivation</h3>
            <p className="text-gray-600">
              Participate in hands-on farming activities like planting, watering, and
              harvesting crops, connecting with nature and sustainable practices.
            </p>
          </div>
        </div>

        {/* Farm to Table Experience */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/KNGvwBVud3ZkyqeQSYqAq83tea9SDhVKln5sfS8zB_4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnB1/Z2R1bmRlZXNhZmFy/aXMuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQmhhbmRoYXZn/YXJoMDA2LmpwZz9y/ZXNpemU9OTAwLDQ1/MCZzc2w9MQ"
            alt="Farm to Table"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Farm to Table</h3>
            <p className="text-gray-600">
              Enjoy a farm-to-table experience, where freshly grown produce is served,
              offering a taste of the local farming harvest.
            </p>
          </div>
        </div>

        {/* Sustainable Agriculture */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://imgs.search.brave.com/sBqYw2JEm-60dsh6C62hRDDF_hecc3LC5EXChiNC1Ss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc0L1RyYWRpdGlv/bmFsX3Bsb3VnaGlu/Z18tX0thcm5hdGFr/YS5qcGc"
            alt="Sustainable Agriculture"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Sustainable Agriculture</h3>
            <p className="text-gray-600">
              Learn the principles of sustainable farming and how modern techniques
              can protect the environment while supporting agricultural productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farming;
