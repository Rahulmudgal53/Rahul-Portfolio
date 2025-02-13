import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Expert" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "TailwindCSS", level: "Advanced" },
    { name: "Git/GitHub", level: "Advanced" },
    { name: "Redux", level: "Beginner" },
    { name: "GSAP Animation", level: "Intermediate" },
    { name: "AI Tools", level: "Intermediate" },
  ];

  return (
    <section id="skills" className=" py-16">
    <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl text-white font-bold mb-8">
          My <span className="text-yellow-500">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 rounded-md shadow-md hover:bg-yellow-500 hover:text-white transition"
            >
              <p className="text-lg font-semibold leading-none">{skill.name}</p>
              <p className="text-sm mt-2 text-gray-700">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
