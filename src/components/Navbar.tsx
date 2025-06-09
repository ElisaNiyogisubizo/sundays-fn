import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="public/sundays_logo__2_-removebg-preview.png" alt="Sundays Art Hub Logo" className="h-8" />
        <span className="text-xl font-bold">sundays art hub</span>
      </div>
      <div className="space-x-6">
        <a href="#" className="hover:text-gray-600">PAINTINGS</a>
        <a href="#" className="hover:text-gray-600">DRAWINGS</a>
        <a href="#" className="hover:text-gray-600">SCULPTURE</a>
        <a href="#" className="hover:text-gray-600">ARTISTS</a>
        <a href="#" className="hover:text-gray-600"><span className="text-lg">🔍</span></a>
        <a href="#" className="hover:text-gray-600"><span className="text-lg">🛒</span></a>
      </div>
    </nav>
  );
};

export default Navbar;