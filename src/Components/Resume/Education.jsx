import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-8">
          My <span className="text-yellow-500">Education</span>
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-semibold">Bachelor of Technology in Computer Science</h3>
            <p className="mt-2">Dr. Babasaheb Ambedkar Technological University (2020 - 2024)</p>
            <p className="mt-2 text-yellow-500">CGPA: 7.86</p>
            <p className="mt-2">Key Subjects: Data Structures, Algorithms, Web Development, Machine Learning</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-semibold">Senior Secondary Education (11th/12th)</h3>
            <p className="mt-2">Cambridge College of Arts, Commerce and Science (2017 - 2019)</p>
            <p className="mt-2 text-yellow-500">Percentage: 60%</p>
            <p className="mt-2">Achievements: Preparing for IITJEE and scored <strong>Percentile : 86%</strong></p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-semibold">Secondary Education (9th/10th)</h3>
            <p className="mt-2">Priyadarshani English Medium School (2015 - 2017)</p>
            <p className="mt-2 text-yellow-500">CGPA: 9.0</p>
            <p className="mt-2">Achievements: National Merit Scholarship, Math Olympiad Winner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
