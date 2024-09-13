import React, { useState } from 'react';

const AddArea = () => {
  const [area, setArea] = useState({ name: '', description: '', photo: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArea({ ...area, [name]: value });
  };

  const handleFileChange = (e) => {
    setArea({ ...area, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const areas = JSON.parse(localStorage.getItem('areas')) || [];
    areas.push(area);
    localStorage.setItem('areas', JSON.stringify(areas));
    alert('Area added successfully');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add a Rural Area</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Area Name:</label>
          <input 
            type="text" 
            name="name" 
            value={area.name} 
            onChange={handleInputChange} 
            className="w-full p-2 border rounded-md" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea 
            name="description" 
            value={area.description} 
            onChange={handleInputChange} 
            className="w-full p-2 border rounded-md" 
            required 
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Photo:</label>
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="w-full p-2" 
            required 
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default AddArea;
