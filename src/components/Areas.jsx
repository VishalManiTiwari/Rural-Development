import React, { useEffect, useState } from "react";

const Areas = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const storedAreas = JSON.parse(localStorage.getItem("areas")) || [];
    setAreas(storedAreas);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Rural Areas to Explore
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {areas.map((area, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={URL.createObjectURL(area.photo)}
              alt={area.name}
              className="h-40 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{area.name}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Areas;
