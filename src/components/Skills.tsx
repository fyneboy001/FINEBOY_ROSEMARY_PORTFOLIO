import React from "react";

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 50 },
        { name: "TypeScript", level: 40 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [{ name: "Next.js", level: 30 }],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 60 },
        { name: "Responsive Design", level: 70 },
        { name: "Version Control", level: 60 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-6 rounded-lg shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-6 text-center ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full rounded-full h-2 ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Always learning and expanding my skill set to stay current with the
            latest technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
