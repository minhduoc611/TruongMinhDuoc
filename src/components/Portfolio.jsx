import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Human Resource Management System",
      description: "Comprehensive HRMS for The SHEA Company featuring modules for attendance tracking, training management, recruitment, internal communications, payroll processing, and employee records with role-based access control.",
      tags: ["Django", "PostgreSQL", "Tableau", "Lark Suite API", "Data Analytics"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/minhduoc611/hrms",
      demo: "#",
      detailLink: "/project/hrms",
      highlights: ["Role-based data access", "Advanced analytics integration", "Automated attendance tracking"],
      status: "Production"
    },
    {
      id: 2,
      title: "Automated Coursera Data Collection System",
      description: "End-to-end data pipeline for automated course data collection and processing. Implements ETL processes with batch scripts and Windows Task Scheduler for consistent data quality.",
      tags: ["Python", "Pandas", "ETL", "Web Scraping", "Task Scheduler"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/minhduoc611",
      demo: "#",
      detailLink: "/project/coursera",
      highlights: ["Automated ETL processes", "Data cleaning with Pandas", "Performance monitoring"],
      status: "Completed"
    },
    {
      id: 3,
      title: "AI-Powered HR Assistant with RAG",
      description: "Intelligent HR assistant using Retrieval-Augmented Generation with vector embeddings for semantic similarity search. Features statistical analysis for performance monitoring and query optimization.",
      tags: ["RAG", "Vector Embeddings", "Python", "Machine Learning", "NLP"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/minhduoc611",
      demo: "#",
      detailLink: "#",
      highlights: ["Semantic similarity search", "Statistical analysis", "Query pattern optimization"],
      status: "Production"
    },
    {
      id: 4,
      title: "Timekeeping System Integration",
      description: "Integrated timekeeping system combining Lark Attendance, Lark Approval, and Lark Base with automated data processing and analytics capabilities.",
      tags: ["Lark Suite", "API Integration", "Automation", "Data Processing"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#",
      detailLink: "#",
      highlights: ["Multi-platform integration", "Automated workflows", "Analytics integration"],
      status: "Production"
    },
    {
      id: 5,
      title: "WordPress Company Website",
      description: "Contributed to company website development using WordPress with custom features and optimized performance for business needs.",
      tags: ["WordPress", "Web Development", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#",
      detailLink: "#",
      highlights: ["Custom WordPress development", "Performance optimization", "Business integration"],
      status: "Live"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'Live':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
      case 'Completed':
        return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(125deg, #09092c 0%, #0d0d35 40%, #101048 100%)'
    }}>
      {/* Background decorations */}
      <div className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl -top-40 -right-40 z-0 animate-pulse" style={{
        background: 'radial-gradient(circle, rgba(0, 162, 255, 0.4) 0%, rgba(0, 162, 255, 0) 70%)'
      }}></div>
      <div className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl -bottom-20 -left-20 z-0 animate-pulse" style={{
        background: 'radial-gradient(circle, rgba(80, 130, 255, 0.4) 0%, rgba(80, 130, 255, 0) 70%)',
        animationDelay: '0.2s'
      }}></div>
      <div className="absolute w-80 h-80 rounded-full opacity-5 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" style={{
        background: 'radial-gradient(circle, rgba(0, 100, 200, 0.3) 0%, rgba(0, 100, 200, 0) 70%)',
        animationDelay: '0.3s'
      }}></div>
      
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Portfolio</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Showcasing real-world projects in <span className="text-blue-400 font-semibold">data analytics</span>, 
              <span className="text-blue-400 font-semibold"> automation</span>, and 
              <span className="text-blue-400 font-semibold"> system integration</span>
              <br />built during my experience as an Analytics Engineer
            </p>
          </div>
        </div>
        
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {portfolioProjects.map((project, index) => (
              project.detailLink !== "#" ? (
                <Link 
                  key={project.id}
                  to={project.detailLink}
                  className="w-full max-w-sm bg-gray-800/30 backdrop-blur-sm border border-gray-700/40 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 group hover:transform hover:scale-105 hover:border-blue-400/50 cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-80"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)} backdrop-blur-sm`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500 px-4 py-2 rounded-lg">
                        View Details
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl text-white font-semibold mb-3 group-hover:text-blue-400 transition duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-blue-400 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ) : (
                <div 
                  key={project.id} 
                  className="w-full max-w-sm bg-gray-800/30 backdrop-blur-sm border border-gray-700/40 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 group hover:transform hover:scale-105 hover:border-blue-400/50"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-80"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)} backdrop-blur-sm`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Coming Soon overlay */}
                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500 px-4 py-2 rounded-lg">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl text-white font-semibold mb-3 group-hover:text-blue-400 transition duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-blue-400 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Want to see more projects or discuss potential collaboration?
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-white font-semibold transition-colors duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;