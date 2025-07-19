import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl font-bold ${
            darkMode 
              ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white' 
              : 'bg-gradient-to-br from-blue-500 to-blue-700 text-white'
          } shadow-lg`}>
            RO
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            FINEBOY, Rosemary Ogheneyole
          </h1>
          <p className="text-xl sm:text-2xl text-blue-600 font-medium mb-6">
            Front-End Developer
          </p>
          <div className={`flex items-center justify-center mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <MapPin size={18} className="mr-2" />
            <span>Port Harcourt, Rivers State, Nigeria</span>
          </div>
        </div>

        <p className={`text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          I am a highly motivated and creative individual with a strong passion for frontend development. 
          I enjoy bringing ideas to life through clean, responsive, and user-friendly interfaces, and I'm 
          always eager to learn new technologies to improve the user experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <a
            href="mailto:fyneboyfynerose@gmail.com"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Mail size={20} className="mr-2" />
            Get In Touch
          </a>
          <div className="flex space-x-4">
            <a
              href="https://github.com/fyneboy001"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              } shadow-lg hover:shadow-xl`}
            >
              <Github size={24} />
            </a>
            <a
              href="http://linkedin.com/in/fyneboy-rosemary-724810322"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              } shadow-lg hover:shadow-xl`}
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;