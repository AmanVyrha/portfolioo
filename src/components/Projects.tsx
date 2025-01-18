import React from 'react';
import { Brain, BarChart, Network, Link } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ML_PREDICTION_ENGINE",
      description: "Customer churn prediction model using advanced machine learning algorithms",
      icon: <Brain className="w-8 h-8 text-green-500" />,
      tags: ["Python", "Scikit-learn", "TensorFlow"],
      link: "https://churn-prediction-2gz9.onrender.com/" // Added link here
    },
    {
      title: "DATA_VISUALIZATION",
      description: "Interactive dashboard for sales analytics",
      icon: <BarChart className="w-8 h-8 text-green-500" />,
      tags: ["Power BI"],
      link: "https://github.com/AmanVyrha/Power-BI-dashboard/blob/main/NEW%20DASH.pdf" // Added link here
    },
    {
      title: "Twitter Trend Analysis using X API",
      description: "Twitter/X trend analysis with real time streamlit dashboard",
      icon: <Network className="w-8 h-8 text-green-500" />,
      tags: ["Python", "Streamlit", "X"],
      link: "https://tweettrendanalysis.onrender.com/" // Added link here
    }
  ];

  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display text-gray-100 mb-12 glitch tracking-widest">
          {'>'} PROJECTS_
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 bg-gray-900/50 p-6 rounded-lg hover:border-green-500 transition-colors group"
            >
              <div className="mb-4">
                {/* Added link to the icon if project.link exists */}
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.icon}
                  </a>
                ) : (
                  project.icon
                )}
              </div>
              <h3 className="text-xl font-display text-gray-100 mb-2 tracking-wider">
                {/* Added link to the title if project.link exists */}
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-gray-400 mb-4 font-mono text-sm tracking-wide">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-display px-2 py-1 bg-gray-800 text-green-500 rounded tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;