import React from 'react';
import { MapPin, Mail, Linkedin, GraduationCap, Database } from 'lucide-react';

const Bio = () => {
  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-5xl font-display text-gray-100 mb-6 tracking-wider glitch">
            AMAN KUMAR VIRHA
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 font-mono mb-8">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-green-500" />
              <span>Dublin, Ireland</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-green-500" />
              <a href="mailto:amanvirha12@gmail.com" className="hover:text-green-500 transition-colors">
                amanvirha12@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-4 h-4 mr-2 text-green-500" />
              <a href="https://www.linkedin.com/in/aman-vyrha/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-xl font-display text-gray-100 tracking-wider">EDUCATION</h3>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <p className="text-green-500">2024 - 2025</p>
                <p className="text-gray-100">MS in Data Analytics</p>
                <p className="text-gray-400">Dublin Business School, Ireland</p>
              </div>
              <div>
                <p className="text-green-500">2019 - 2022</p>
                <p className="text-gray-100">Bachelor's in Science in Computer Science</p>
                <p className="text-gray-400">University of Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-xl font-display text-gray-100 tracking-wider">SKILLS</h3>
            </div>
            <div className="flex flex-wrap gap-2 font-mono">
              {['Python', 'R', 'SQL', 'Machine Learning', 'Data Visualization', 'Statistical Analysis', 
                'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Power BI', 'Tableau'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-800 text-green-500 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;