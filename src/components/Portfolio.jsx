const Portfolio = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Human Resource Management System",
      description: "Comprehensive HRMS for The SHEA Company featuring modules for attendance tracking, training management, recruitment, internal communications, payroll processing, and employee records with role-based access control.",
      tags: ["Django", "PostgreSQL", "Tableau", "Lark Suite API", "Data Analytics"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/minhduoc611",
      demo: "#",
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
      highlights: ["Custom WordPress development", "Performance optimization", "Business integration"],
      status: "Live"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30';
      case 'Live':
        return 'bg-secondary bg-opacity-20 text-secondary border border-secondary border-opacity-30';
      case 'Completed':
        return 'bg-purple-500 bg-opacity-20 text-purple-400 border border-purple-500 border-opacity-30';
      default:
        return 'bg-gray-500 bg-opacity-20 text-gray-400 border border-gray-500 border-opacity-30';
    }
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background decorations matching index.html style */}
      <div className="absolute w-96 h-96 rounded-full bg-secondary opacity-10 blur-3xl -top-40 -right-40 z-0 animate-pulse"></div>
      <div className="absolute w-64 h-64 rounded-full bg-blue-400 opacity-10 blur-3xl -bottom-20 -left-20 z-0 animate-pulse" style={{animationDelay: '0.2s'}}></div>
      <div className="absolute w-80 h-80 rounded-full bg-blue-600 opacity-5 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" style={{animationDelay: '0.3s'}}></div>
      
      {/* Force center everything */}
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 animate-fadeIn">
            My <span className="text-secondary">Portfolio</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-text opacity-80 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
              Showcasing real-world projects in <span className="text-secondary font-semibold">data analytics</span>, 
              <span className="text-secondary font-semibold"> automation</span>, and 
              <span className="text-secondary font-semibold"> system integration</span>
              <br />built during my experience as an Analytics Engineer
            </p>
          </div>
        </div>
        
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {portfolioProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="w-full max-w-sm bg-primaryLight border border-secondary border-opacity-10 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 group hover:transform hover:scale-105 hover:border-secondary hover:border-opacity-50 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-80"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)} backdrop-blur-sm`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl text-text font-semibold mb-3 group-hover:text-secondary transition duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text opacity-70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-secondary mb-2">Key Features:</h4>
                  <ul className="text-xs text-text opacity-60 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 opacity-80"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-secondary bg-opacity-10 text-secondary text-xs px-3 py-1 rounded-full border border-secondary border-opacity-20 hover:border-secondary hover:border-opacity-50 hover:bg-opacity-20 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-text opacity-70 hover:text-secondary hover:opacity-100 transition-all duration-300 text-sm group/link"
                  >
                    <svg className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  

                </div>
              </div>
            </div>
                      ))}
          </div>
        </div>
        
        {/* Contact CTA */}

      </div>
    </section>
  );
};

export default Portfolio;