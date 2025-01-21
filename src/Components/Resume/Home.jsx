import React from "react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl md:text-6xl font-bold">Hello! I'm <span className="text-yellow-500">Rahul Mudgal</span></h1>
      <h3 className="text-xl md:text-2xl mt-4">Frontend Developer</h3>
      <p className="text-center max-w-lg mt-4">
      I loves turning ideas into sleek, responsive web applications. Passionate about React.js, I build clean, efficient, and user-friendly websites that make an impact. Let's create something great together!
      </p>
            <div className="flex space-x-4 mt-6">
        <a href="#contact" className="px-6 py-3 bg-yellow-500 rounded-md text-black font-semibold">Hire Me</a>
        <a href="#contact" className="px-6 py-3 bg-gray-700 rounded-md hover:bg-gray-600">Let's Talk</a>
      </div>
    </section>
  );
};

export default Home;
