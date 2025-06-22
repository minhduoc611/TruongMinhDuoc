import { useTranslation } from 'react-i18next';

const Skills = () => {
  // Hook i18next để lấy translation
  const { t } = useTranslation();

  const skillCategories = [
    {
      categoryKey: "skillsSection.categories.programming",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "SQL", icon: "fas fa-database" },
      ],
    },
    {
      categoryKey: "skillsSection.categories.frontend",
      technologies: [
        { name: "React", icon: "fab fa-react" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Tailwind CSS", icon: "fab fa-css3" }
      ],
    },
    {
      categoryKey: "skillsSection.categories.backend",
      technologies: [
        { name: "Django", icon: "fab fa-python" }
      ],
    },
    {
      categoryKey: "skillsSection.categories.dataVisualization",
      technologies: [
        { name: "Tableau", icon: "fas fa-chart-bar" },
        { name: "Matplotlib", icon: "fas fa-chart-line" },
        { name: "Seaborn", icon: "fas fa-chart-area" },
        { name: "D3.js", icon: "fas fa-chart-pie" },
      ],
    },
    {
      categoryKey: "skillsSection.categories.webScraping",
      technologies: [
        { name: "Selenium", icon: "fas fa-robot" },
        { name: "BeautifulSoup", icon: "fas fa-code" },
      ],
    },
    {
      categoryKey: "skillsSection.categories.databases",
      technologies: [
        { name: "SQL Server", icon: "fas fa-server" },
        { name: "PostgreSQL", icon: "fas fa-database" },
      ],
    },
  ];

  // Hàm render icon cho từng danh mục dựa trên translation key
  const renderCategoryIcon = (categoryKey) => {
    switch (categoryKey) {
      case "skillsSection.categories.programming":
        return <i className="fas fa-code"></i>;
      case "skillsSection.categories.frontend":
        return <i className="fas fa-desktop"></i>;
      case "skillsSection.categories.backend":
        return <i className="fas fa-server"></i>;
      case "skillsSection.categories.databases":
        return <i className="fas fa-database"></i>;
      case "skillsSection.categories.dataVisualization":
        return <i className="fas fa-chart-bar"></i>;
      case "skillsSection.categories.webScraping":
        return <i className="fas fa-spider"></i>;
      case "skillsSection.categories.toolsVersionControl":
        return <i className="fas fa-tools"></i>;
      default:
        return <i className="fas fa-cogs"></i>;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-secondary opacity-5 blur-3xl -bottom-40 -right-40 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 text-center reveal">
          {t('skillsSection.title')} <span className="text-secondary">{t('skillsSection.titleHighlight')}</span>
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
                  {renderCategoryIcon(skillCategory.categoryKey)}
                </span>
                {t(skillCategory.categoryKey)}
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

export default Skills;