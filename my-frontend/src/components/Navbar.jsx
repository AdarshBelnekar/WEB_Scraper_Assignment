import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Adarsh.com</div>
        <div>
          <a href="#" className="text-blue-500 mr-4"> Job seekers</a>
          <a href="#" className="text-blue-500 mr-4">Employers</a>
          <a href="#" className="text-blue-500 mr-4">Pricing</a>
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign up</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded ml-2">Log in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
