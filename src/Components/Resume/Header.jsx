// import React from "react";

// const Header = () => {
//   return (
//     <header className="bg-gray-800/50 text-white fixed w-full z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <a href="#" className="text-2xl font-bold">RAHUL MUDGAL</a>
//         <nav className="flex space-x-4">
//           <a href="#home" className="hover:text-yellow-500">Home</a>
//           <a href="#education" className="hover:text-yellow-500">Education</a>
//           <a href="#about" className="hover:text-yellow-500">About</a>
//           <a href="#skills" className="hover:text-yellow-500">Skills</a>
//           <a href="#contact" className="hover:text-yellow-500">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800/80 backdrop-blur text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold">RAHUL MUDGAL</a>

        {/* Hamburger Button (for mobile and tablet) */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-yellow-400 p-2 rounded-md focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:space-x-4 flex-col sm:flex-row absolute sm:static bg-gray-800/80 sm:bg-transparent w-full sm:w-auto top-16 left-0 p-4 sm:p-0`}
        >
        
        <div className="flex flex-col sm:flex-row sm:gap-6 text-center">
        <a href="#home" onClick={toggleMenu} className=" hover:text-yellow-500 py-1 w-full">Home</a>
          <a href="#education" onClick={toggleMenu} className="hover:text-yellow-500 py-1 w-full">Education</a>
          <a href="#about" onClick={toggleMenu} className="hover:text-yellow-500 py-1 w-full">About</a>
          <a href="#skills" onClick={toggleMenu} className="hover:text-yellow-500 py-1 w-full">Skills</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-yellow-500 py-1 w-full">Contact</a>
       
        </div>

         </nav>
      </div>
    </header>
  );
};

export default Header;
