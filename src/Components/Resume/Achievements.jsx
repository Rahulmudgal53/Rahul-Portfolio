import React from "react";

const Achievements = () => {
  const achievements = [
      {
        title: "MERN Stack Training Certification - GFG Classroom Program",
        year: "2024",
        description:
          "Completed a comprehensive training program on the MERN stack conducted by GeeksforGeeks. Also 'Awarded as Best Performer'.",
      },
      {
          title: "GFG Great India Hackathon - Top Performer",
          year: "2023",
          description:
          "Achieved recognition in the hackathon organized by GeeksforGeeks in collaboration with Google Cloud and AMD.",
        },
        {
            title: "Smart India Hackathon (SIH) - SemiFinalist",
            year: "2022",
            description:
            "Reached the finals of SIH 2022 by collaborating with a team to solve national-level problems through technology.",
        },
        {
          title: "Flipkart Grid 5.0 - Participent",
          year: "2022",
          description:
            "Secured the top position in Flipkart Grid 5.0 by building an innovative solution for real-world logistics optimization.",
        },
  ];

  return (
    <section id="achievements" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-yellow-500">Achievements</span>
        </h2>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {achievement.title}
              </h3>
              <p className="text-yellow-500 font-medium">{achievement.year}</p>
              <p className="mt-4 text-gray-700">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
