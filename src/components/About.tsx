import React from 'react';
import { Code, Heart, Lightbulb } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code that follows best practices"
    },
    {
      icon: <Heart className="text-blue-600" size={24} />,
      title: "User-Focused",
      description: "Creating interfaces that prioritize user experience and accessibility"
    },
    {
      icon: <Lightbulb className="text-blue-600" size={24} />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and improving my skills"
    }
  ];

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              As a passionate Frontend Developer, I specialize in creating engaging and responsive 
              web applications that deliver exceptional user experiences. My journey in web development 
              has been driven by a love for turning creative ideas into functional, beautiful interfaces.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I believe in the power of clean, semantic code and modern development practices. 
              Every project I work on is an opportunity to learn something new and push the 
              boundaries of what's possible on the web.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-blue-50'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Location
                </h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Port Harcourt, Nigeria
                </p>
              </div>
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-blue-50'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Focus
                </h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Frontend Development
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className={`p-6 rounded-lg transition-transform duration-200 hover:scale-105 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {highlight.title}
                    </h3>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;