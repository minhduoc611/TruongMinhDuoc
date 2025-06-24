import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  // Hook i18next để lấy translation
  const { t } = useTranslation();

  const portfolioProjects = [
    {
      id: 1,
      titleKey: "portfolioSection.projects.webCrawling.title",
      descriptionKey: "portfolioSection.projects.webCrawling.description",
      tags: ["Web Crawling", "Database Design", "ETL pipeline", "PostgreSQL", "Selenium", "Python"],
      image: "https://tse3.mm.bing.net/th/id/OIP.xiNoT9eRGm2XuO2ndZrzwwHaD5?r=0&w=1140&h=600&rs=1&pid=ImgDetMain&cb=idpwebpc1",
      github: "#",
      demo: "#",
      detailLink: "/project/web-crawling",
      highlights: ["Web Crawling","Selenium WebDriver", "Database Design", "ETL pipeline", "Celery", "Lark Suite API"],
      status: "",
      gradient: "from-emerald-500/20 to-cyan-500/20",
      accentColor: "emerald"
    },
    {
      id: 2,
      titleKey: "portfolioSection.projects.dataVisualization.title",
      descriptionKey: "portfolioSection.projects.dataVisualization.description",
      tags: ["SQL", "Data Processing", "Data Cleaning", "Pandas", "Numpy", "Tableau", 'Matplotlib','Seaborn'],
      image: "https://tse3.mm.bing.net/th/id/OIP.0wrLYUfpiTr9SIDHeHdZRAHaEO?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc1",
      github: "#",
      demo: "#",
      detailLink: "/project/data-visualization",
      highlights: ["Advanced SQL Query Tool", "Real-time Data Processing Pipeline", "Interactive Visualization Dashboard"],
      status: "",
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple"
    },
    {
      id: 3,
      titleKey: "portfolioSection.projects.rag.title",
      descriptionKey: "portfolioSection.projects.rag.description",
      tags: ["RAG", "Vector Embeddings", "Machine Learning", "NLP"],
      image: "https://tse1.mm.bing.net/th/id/OIP.SvokklbDo1pUdDijtMrc2QHaEO?rs=1&pid=ImgDetMain",
      github: "https://github.com/minhduoc611",
      demo: "#",
      detailLink: "/project/rag",
      highlights: ["Semantic Similarity Search", "Context-aware Responses", "Advanced NLP Processing"],
      status: "",
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "orange"
    },
    {
      id: 4,
      titleKey: "portfolioSection.projects.automation.title",
      descriptionKey: "portfolioSection.projects.automation.description",
      tags: ["Task Automation", "Python", "Windows Task Scheduler", "Google Sheets API", "Google Drive API", "Web Scraping"],
      image: "https://tse2.mm.bing.net/th/id/OIP.mQSTnOrPTZddnGb5WwSDFQHaEO?r=0&rs=1&pid=ImgDetMain",
      github: "https://github.com/minhduoc611",
      demo: "#",
      detailLink: "/project/coursera",
      highlights: ["Business Process Automation", "Multi-platform Integration", "Performance Monitoring"],
      status: "",
      gradient: "from-indigo-500/20 to-blue-500/20",
      accentColor: "indigo"
    },
    {
      id: 5,
      titleKey: "portfolioSection.projects.webApp.title",
      descriptionKey: "portfolioSection.projects.webApp.description",
      tags: ["Django", "PostgreSQL", "Database design", "HTML", "Tailwind CSS","JavaScript", "Chatbot","Celery"],
      image: "https://tse1.mm.bing.net/th/id/OIP.8Gr2pMDdhQVf89D6TLuVagHaEK?r=0&rs=1&pid=ImgDetMain",
      github: "https://github.com/minhduoc611/hrms",
      demo: "#",
      detailLink: "/project/hrms",
      highlights: ["Web Development", "Backend", "Frontend", "Database", "UI-UX"],
      status: "",
      gradient: "from-teal-500/20 to-green-500/20",
      accentColor: "teal"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Đang vận hành':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30';
      case 'Hoạt động':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30';
      case 'Hoàn thành':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg shadow-gray-500/30';
    }
  };

  const getAccentColors = (accentColor) => {
    const colors = {
      emerald: {
        border: 'border-emerald-400/50',
        text: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        shadow: 'shadow-emerald-500/20'
      },
      purple: {
        border: 'border-purple-400/50',
        text: 'text-purple-400',
        bg: 'bg-purple-500/10',
        shadow: 'shadow-purple-500/20'
      },
      orange: {
        border: 'border-orange-400/50',
        text: 'text-orange-400',
        bg: 'bg-orange-500/10',
        shadow: 'shadow-orange-500/20'
      },
      indigo: {
        border: 'border-indigo-400/50',
        text: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        shadow: 'shadow-indigo-500/20'
      },
      teal: {
        border: 'border-teal-400/50',
        text: 'text-teal-400',
        bg: 'bg-teal-500/10',
        shadow: 'shadow-teal-500/20'
      }
    };
    return colors[accentColor] || colors.emerald;
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(125deg, #09092c 0%, #0d0d35 40%, #101048 100%)'
    }}>
      {/* Enhanced Background decorations */}
      <div className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl -top-40 -right-40 z-0 animate-pulse" style={{
        background: 'radial-gradient(circle, rgba(0, 162, 255, 0.6) 0%, rgba(0, 162, 255, 0) 70%)'
      }}></div>
      <div className="absolute w-64 h-64 rounded-full opacity-15 blur-3xl -bottom-20 -left-20 z-0 animate-pulse" style={{
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0) 70%)',
        animationDelay: '0.2s'
      }}></div>
      <div className="absolute w-80 h-80 rounded-full opacity-10 blur-3xl top-1/3 right-1/4 z-0 animate-pulse" style={{
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0) 70%)',
        animationDelay: '0.5s'
      }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 w-full">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold text-white mb-12 text-center reveal">
              {t('portfolioSection.title')} 
            </h2>
          </div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto space-y-6">
          {portfolioProjects.map((project, index) => {
            const colors = getAccentColors(project.accentColor);
            const isEven = index % 2 === 0;
            
            return project.detailLink !== "#" ? (
              <Link 
                key={project.id}
                to={project.detailLink}
                className="group block w-full"
              >
                <div className={`relative overflow-hidden rounded-3xl backdrop-blur-xl border ${colors.border} transition-all duration-500 hover:scale-[1.02] hover:${colors.shadow} hover:shadow-2xl`}
                     style={{
                       background: `linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.6) 100%)`
                     }}>
                  
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[220px]`}>
                    
                    {/* Project Image */}
                    <div className="lg:w-2/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent z-10"></div>
                      <img 
                        src={project.image} 
                        alt={t(project.titleKey)} 
                        className="w-full h-40 lg:h-full object-cover transform group-hover:scale-110 transition duration-700"
                      />
                      
                      {/* Floating status badge */}
                      {project.status && (
                        <div className="absolute top-3 left-3 z-20">
                          <span className={`px-2 py-1 text-xs font-bold rounded-full ${getStatusColor(project.status)} transform group-hover:scale-110 transition-transform duration-300`}>
                            {project.status}
                          </span>
                        </div>
                      )}

                      {/* Project number */}
                      <div className="absolute bottom-3 right-3 z-20">
                        <div className={`w-10 h-10 ${colors.bg} backdrop-blur-sm rounded-full flex items-center justify-center border ${colors.border}`}>
                          <span className={`text-sm font-bold ${colors.text}`}>
                            {String(project.id).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500 flex items-center justify-center z-10">
                        <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="text-white font-medium text-xs bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1.5 rounded-full shadow-lg">
                            {t('portfolioSection.viewProject')} →
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="lg:w-3/5 p-4 lg:p-6 flex flex-col justify-center space-y-3">
                      
                      {/* Title with animated underline */}
                      <div className="relative">
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-1 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {t(project.titleKey)}
                        </h3>
                        <div className={`h-0.5 bg-gradient-to-r ${project.gradient} w-0 group-hover:w-16 transition-all duration-500 rounded-full`}></div>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                        {t(project.descriptionKey)}
                      </p>                      
                      {/* Show All Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className={`${colors.bg} ${colors.text} text-xs font-semibold px-2 py-0.5 rounded-full border ${colors.border} group-hover:scale-105 transition-all duration-300 backdrop-blur-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div 
                key={project.id} 
                className="group block w-full"
              >
                <div className={`relative overflow-hidden rounded-3xl backdrop-blur-xl border ${colors.border} transition-all duration-500 hover:scale-[1.02] hover:${colors.shadow} hover:shadow-2xl opacity-75`}
                     style={{
                       background: `linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.6) 100%)`
                     }}>
                  
                  {/* Content - Same structure but for coming soon projects */}
                  <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[220px]`}>
                    
                    {/* Project Image */}
                    <div className="lg:w-2/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent z-10"></div>
                      <img 
                        src={project.image} 
                        alt={t(project.titleKey)} 
                        className="w-full h-40 lg:h-full object-cover transform group-hover:scale-110 transition duration-700 grayscale group-hover:grayscale-0"
                      />
                      
                      {/* Coming Soon badge */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg">
                          {t('portfolioSection.comingSoon')}
                        </span>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 flex items-center justify-center z-10">
                        <div className="text-white font-medium text-xs bg-gray-500/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          {t('portfolioSection.inDevelopment')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content - Same as above but with muted styling */}
                    <div className="lg:w-3/5 p-4 lg:p-6 flex flex-col justify-center space-y-3">
                      <div className="relative">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-300 mb-1 leading-tight">
                          {t(project.titleKey)}
                        </h3>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-2">
                        {t(project.descriptionKey)}
                      </p>
                      
                      {/* Show All Tags for Coming Soon Projects Too */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="bg-gray-500/20 text-gray-400 text-xs font-semibold px-2 py-0.5 rounded-full border border-gray-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;