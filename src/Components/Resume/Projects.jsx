import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "BookStore App",
      description:
        "A MERN stack app where authors manage books and readers explore, review, and bookmark them.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://github.com/Rahulmudgal53/BookStore-App", // Replace with your repo link
    },
    {
      name: "E-commerce Store",
      description:
        "Developed a responsive e-commerce store with cart functionality, Redux state management, and dynamic product rendering.",
      technologies: ["React.js", "Redux", "Tailwind CSS"],
      link: "https://github.com/Rahulmudgal53/E-commerce-Store", // Replace with your repo link
    },
    {
      name: "News App",
      description:
"      A dynamic News App delivering real-time updates, categorized articles, and personalized news feeds for an enhanced reading experience",
      technologies: ["React.js", "NEWS Api", "React Hooks"],
      link: "https://github.com/Rahulmudgal53/News-App", // Add a relevant link
    },
    {
      name: "Portfolio",
      description:
      'A personal portfolio showcasing my skills, projects, experience, and achievements in web development.',
      technologies: ["React.js", "Tailwind CSS"],
      link: "#", // Add a relevant link
    },
  ];

  return (
    <section id="projects" className=" py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-yellow-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {project.name}
              </h3>
              <p className="mt-4 text-gray-700">{project.description}</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-600">
                  Technologies Used:
                </p>
                <ul className="list-disc ml-4 mt-2 text-gray-600">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 px-4 py-2 text-center bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-600 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
