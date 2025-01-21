import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "AI Enhanced Full Stack Developer",
      company: "Global Investors Forum",
      duration: "Sep 2024 - Present",
      description:
        "Developed responsive UI components, integrated APIs, and optimized frontend performance for scalable web applications.",
    },
    {
        role: "Web Developer {Intern}",
        company: "Oasis Infobyte",
        duration: "Jan 2024 - Apr 2024",
        description:
        "Collaborated with a team to solve real-world problems, delivering innovative solutions under tight deadlines.",
    },
    {
      role: "MERN Stack Developer",
      company: "Freelance",
      duration: "Jul 2023 - Dec 2023",
      description:
        "Built and deployed full-stack applications using the MERN stack, focusing on delivering seamless user experiences.",
    },
  ];

  return (
    <section id="experience" className="bg-gradient-to-tr from-purple-500 via-purple-500 to-red-500 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-yellow-500">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/70 shadow-md rounded-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
              <p className="text-yellow-900/80 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-700">{exp.duration}</p>
              <p className="mt-4 text-gray-800">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
