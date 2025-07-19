import React from 'react';
import { ExternalLink, Github, Monitor } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const project = {
    title: "StudyHub",
    description: "StudyHub is a student-focused web application designed to support learning through personalized dashboards, mentorship access, and community engagement. It allows users to sign up, track their progress, connect with mentors, and explore subject-specific resources—all in a user-friendly, interactive environment.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/fyneboy001/StudyHub_Webapp.git",
    liveUrl: "http://study-hub-webapp-juso.vercel.app",
    features: [
      "Personalized student dashboards",
      "Mentorship access and connection",
      "Community engagement features",
      "Progress tracking system",
      "Subject-specific resources",
      "User-friendly interface"
    ]
  };

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Project
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className={`rounded-lg shadow-xl overflow-hidden ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Image/Preview */}
            <div className={`p-8 flex items-center justify-center ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className={`w-full max-w-md aspect-video rounded-lg flex items-center justify-center ${
                darkMode ? 'bg-gray-600' : 'bg-gray-200'
              }`}>
                <Monitor size={64} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>
              
              <p className={`text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Key Features:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className={`flex items-center ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode 
                          ? 'bg-blue-900 text-blue-200' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Github size={20} className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            More projects coming soon! Check my{' '}
            <a 
              href="https://github.com/fyneboy001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              GitHub
            </a>{' '}
            for additional work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;