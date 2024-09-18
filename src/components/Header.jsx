import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-10 top-0 bg-slate-500 sticky text-white py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <a href="/" className="hover:text-orange-300 transition duration-300">Rural Tourism</a>
        </div>
          <div>
            <input
            placeholder='Search Destination'
            className=' md:w-[12rem] sm:w-[10rem] rounded-xl p-2 xl:w-[30rem] '
            type="text" />
          </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="/" className="hover:text-orange-300 transition duration-300">Home</a>
          {/* <a href="/add-area" className="hover:text-orange-300 transition duration-300">Add Area</a> */}
          <a href="/contact" className="block text-lg hover:text-orange-300 transition duration-300">Contact</a>
          <a href="/blogs" className="hover:text-orange-300 transition duration-300">Blogs</a>
          <a href="/login" className="hover:text-orange-300 transition duration-300">Login</a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            &#9776;
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-500 text-white text-center py-4 space-y-4">
          <a href="/" className="block text-lg hover:text-orange-300 transition duration-300">Home</a>
          <a href="/add-area" className="block text-lg hover:text-orange-300 transition duration-300">Add Area</a>
          <a href="/blogs" className="block text-lg hover:text-orange-300 transition duration-300">Blogs</a>
          <a href="/contact" className="block text-lg hover:text-orange-300 transition duration-300">Contact</a>
          <a href="/login" className="block text-lg hover:text-orange-300 transition duration-300">Login</a>
        </div>
      )}
    </header>
  );
};

export default Header;
