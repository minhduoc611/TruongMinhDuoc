const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "SQL", icon: "fas fa-database" },
      ],
    },
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "fab fa-react" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Tailwind CSS", icon: "fab fa-css3" }
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Django", icon: "fab fa-python" }
      ],
    },
    {
      category: "Data Visualization",
      technologies: [
        { name: "Tableau", icon: "fas fa-chart-bar" },
        { name: "Matplotlib", icon: "fas fa-chart-line" },
        { name: "Seaborn", icon: "fas fa-chart-area" },
        { name: "D3.js", icon: "fas fa-chart-pie" },
      ],
    },
    {
      category: "Web Scraping",
      technologies: [
        { name: "Selenium", icon: "fas fa-robot" },
        { name: "BeautifulSoup", icon: "fas fa-code" },
      ],
    },
    {
      category: "Databases",
      technologies: [
        { name: "SQL Server", icon: "fas fa-server" },
        { name: "PostgreSQL", icon: "fas fa-database" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-secondary opacity-5 blur-3xl -bottom-40 -right-40 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 text-center reveal">
          My <span className="text-secondary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((skillCategory, index) => (
            <div 
              key={index} 
              className="bg-primaryLight border border-secondary border-opacity-20 rounded-lg p-6 hover:shadow-lg hover:border-opacity-40 transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl text-white font-semibold mb-6 border-b border-secondary border-opacity-20 pb-2 flex items-center">
                <span className="text-secondary mr-2">
                  {renderCategoryIcon(skillCategory.category)}
                </span>
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="flex flex-col items-center justify-center group"
                    style={{ animationDelay: `${0.1 * techIndex + 0.3}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center text-secondary text-xl transition-all duration-300 group-hover:bg-opacity-20 group-hover:scale-110 group-hover:text-white mb-2">
                      <i className={tech.icon}></i>
                    </div>
                    <span className="text-xs text-text group-hover:text-secondary transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Hàm render icon cho từng danh mục
const renderCategoryIcon = (category) => {
  switch (category) {
    case "Programming":
      return <i className="fas fa-code"></i>;
    case "Frontend":
      return <i className="fas fa-desktop"></i>;
    case "Backend":
      return <i className="fas fa-server"></i>;
    case "Databases":
      return <i className="fas fa-database"></i>;
    case "Data Visualization":
      return <i className="fas fa-chart-bar"></i>;
    case "Web Scraping":
      return <i className="fas fa-spider"></i>;
    case "Tools & Version Control":
      return <i className="fas fa-tools"></i>;
    default:
      return <i className="fas fa-cogs"></i>;
  }
};

export default Skills;