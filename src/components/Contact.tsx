import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "fyneboyfynerose@gmail.com",
      href: "mailto:fyneboyfynerose@gmail.com"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "fyneboy001",
      href: "https://github.com/fyneboy001"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Fyneboy Rosemary",
      href: "http://linkedin.com/in/fyneboy-rosemary-724810322"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Port Harcourt, Rivers State, Nigeria",
      href: null
    }
  ];

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always open to discussing new opportunities, collaborating on projects, 
            or just having a chat about frontend development. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Connect
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`text-lg font-semibold hover:text-blue-600 transition-colors duration-200 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`text-lg font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`p-8 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Work Together?
            </h3>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm currently available for freelance projects and full-time opportunities. 
              Let's discuss how we can bring your ideas to life!
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:fyneboyfynerose@gmail.com"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Send Me an Email
              </a>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/fyneboy001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
                <a
                  href="http://linkedin.com/in/fyneboy-rosemary-724810322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;