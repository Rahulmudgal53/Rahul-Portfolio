import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800/50 text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold">RAHUL MUDGAL</a>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:text-yellow-500">Home</a>
          <a href="#education" className="hover:text-yellow-500">Education</a>
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#skills" className="hover:text-yellow-500">Skills</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
