import React, { useState } from "react";
import RahulImg from '../../assets/Rahul-removebg.png'
const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-8">
          About <span className="text-yellow-500">Me</span>
        </h2>
        <div className="bg-white shadow-md rounded-md p-8 max-w-3xl mx-auto">
          <div className="relative">
            <img
              src={RahulImg} // Replace with your profile image path
              alt="Rahul Mudgal"
              className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-500 hover:scale-110 transform transition-all duration-300"
            />
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">Rahul Mudgal</h3>
            <p className="mt-2 text-gray-600">MERN Stack Developer | React.js Specialist</p>
          </div>

          <div className="mt-6">
            <p className="text-gray-700">
              Hi there! I’m Rahul Mudgal, a passionate web developer with expertise in creating 
              responsive and dynamic web applications. I specialize in React.js and have hands-on experience with the 
              MERN stack.
            </p>
            {showMore && (
              <p className="text-gray-700 mt-4">
                My journey in development started during college, where I discovered my love for solving real-world 
                problems using technology. I’ve participated in multiple hackathons, winning accolades like the  
                SIH and the GFG Great India Hackathon. I thrive in collaborative environments and enjoy taking on 
                challenges that push me to learn and grow.
              </p>
            )}
          </div>

          <button
            className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-600 transition-all duration-300"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
