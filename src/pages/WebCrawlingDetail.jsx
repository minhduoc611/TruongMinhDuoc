import React, { useState, useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, Database, Globe, Search, FileText, Code, Server, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CouseraERD from '../assets/images/coursera_erd.png';
import ETLImage from '../assets/images/ETL - Lark -WebApp.png';
import ERD_ChamCong from '../assets/images/ERD-Chấm công.png';
import ERD_DaoTao from '../assets/images/ERD-Đào tạo.png';
import ERD_TuyenDung from '../assets/images/ERD-Tuyển dụng.png';
import ERD_NhanVien from '../assets/images/ERD-Hồ sơ nhân viên.png';
import ERD_Luong from '../assets/images/ERD-Lương.png';

const WebCrawlerDetail = () => {
  // Hook i18next để lấy translation
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectData = {
    titleKey: "webCrawlingDetail.hero.title",
    subtitleKey: "webCrawlingDetail.hero.subtitle",
    overviewKey: "webCrawlingDetail.hero.overview",
    
    tags: ["Web Crawling","Selenium WebDriver", "Database Design", "ETL pipeline", "Celery", "Lark Suite API"],
    
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    
    links: {
      github: "https://github.com/minhduoc611",
      demo: "#",
      documentation: "#"
    }
  };

  return (
    <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto" style={{
      background: 'linear-gradient(125deg, #09092c 0%, #0d0d35 40%, #101048 100%)'
    }}>
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-full h-full opacity-10"
          style={{
            backgroundSize: '100px 100px',
            backgroundImage: `
              linear-gradient(to right, rgba(30, 144, 255, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(30, 144, 255, 0.02) 1px, transparent 1px)
            `
          }}
        />
        
        <div 
          className="absolute rounded-full animate-pulse"
          style={{
            width: '400px',
            height: '400px',
            top: '-100px',
            left: '-100px',
            filter: 'blur(70px)',
            opacity: 0.07,
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0) 70%)',
            mixBlendMode: 'screen'
          }}
        />
        <div 
          className="absolute rounded-full animate-pulse"
          style={{
            width: '350px',
            height: '350px',
            top: '60%',
            right: '-150px',
            filter: 'blur(70px)',
            opacity: 0.07,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%)',
            mixBlendMode: 'screen',
            animationDelay: '0.2s'
          }}
        />
      </div>

      <div className={`relative z-10 container mx-auto px-4 py-8 max-w-7xl text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center bg-gray-800/30 hover:bg-gray-700/50 text-gray-300 hover:text-white px-6 py-3 rounded-xl border border-gray-600/30 hover:border-emerald-400/50 transition-all duration-300 mb-8 group backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform duration-300" />
          <span className="font-medium">{t('webCrawlingDetail.backButton')}</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">
            {t(projectData.titleKey)}
          </h1>
          
          <p className="text-xl text-emerald-400 mb-6 font-medium">
            {t(projectData.subtitleKey)}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-3 justify-center">
            {projectData.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-2 rounded-full border border-emerald-500/30 hover:border-emerald-400/50 hover:bg-emerald-500/30 transition-all duration-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* PHẦN 1: THU THẬP DỮ LIỆU WEB */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-emerald-400/30">
            <div className="flex items-center mb-8">
              <div className="bg-emerald-500/20 p-4 rounded-xl mr-6">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{t('webCrawlingDetail.webScraping.title')}</h2>
                <p className="text-emerald-400 text-xl font-medium">{t('webCrawlingDetail.webScraping.subtitle')}</p>
              </div>
            </div>

            {/* Quy trình hoạt động - Ảnh nhỏ hơn và tối ưu không gian */}
            <div className="bg-gray-800/40 rounded-xl p-6 border border-emerald-400/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">{t('webCrawlingDetail.webScraping.workflowTitle')}</h3>
              <div className="bg-white rounded-lg p-4 flex justify-center">
                <svg width="100%" height="500" viewBox="50 0 500 700" xmlns="http://www.w3.org/2000/svg" className="max-w-2xl">
                  {/* Background */}
                  <rect width="600" height="700" fill="#f8f9fa"/>
                  
                  {/* Title */}
                  <text x="300" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#333">
                    {t('webCrawlingDetail.webScraping.systemTitle')}
                  </text>
                  
                  {/* Box 1: Course Listings Scraping Module */}
                  <rect x="200" y="60" width="200" height="80" fill="white" stroke="#333" strokeWidth="2"/>
                  <text x="300" y="85" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    {t('webCrawlingDetail.webScraping.listingModule')}
                  </text>
                  <text x="300" y="100" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    {t('webCrawlingDetail.webScraping.courseList')}
                  </text>
                  <text x="300" y="115" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    {t('webCrawlingDetail.webScraping.categoriesSearch')}
                  </text>
                  
                  {/* Arrow 1 */}
                  <line x1="300" y1="140" x2="300" y2="180" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  {/* Box 2: Course URLs Storage */}
                  <rect x="200" y="180" width="200" height="80" fill="white" stroke="#333" strokeWidth="2"/>
                  <text x="300" y="205" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    {t('webCrawlingDetail.webScraping.urlStorage')}
                  </text>
                  <text x="300" y="220" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    {t('webCrawlingDetail.webScraping.localFiles')}
                  </text>
                  
                  {/* Checkpoint box 1 (dotted) */}
                  <rect x="420" y="200" width="140" height="50" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5"/>
                  <text x="490" y="218" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    {t('webCrawlingDetail.webScraping.readFiles')}
                  </text>
                  <text x="490" y="232" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    {t('webCrawlingDetail.webScraping.readCheckpoint')}
                  </text>
                  
                  {/* Arrow from checkpoint to storage */}
                  <line x1="420" y1="225" x2="400" y2="225" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                  
                  {/* Arrow 2 */}
                  <line x1="300" y1="260" x2="300" y2="300" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  {/* Box 3: Detailed Course Information Scraping */}
                  <rect x="200" y="300" width="200" height="80" fill="white" stroke="#333" strokeWidth="2"/>
                  <text x="300" y="320" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    {t('webCrawlingDetail.webScraping.detailModule')}
                  </text>
                  <text x="300" y="335" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    {t('webCrawlingDetail.webScraping.detailInfo')}
                  </text>
                  <text x="300" y="350" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    {t('webCrawlingDetail.webScraping.courseDetails')}
                  </text>
                  <text x="300" y="365" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    {t('webCrawlingDetail.webScraping.programReviews')}
                  </text>
                  
                  {/* Arrow from checkpoint to detailed scraping */}
                  <line x1="420" y1="250" x2="420" y2="340" stroke="#666" strokeWidth="1"/>
                  <line x1="420" y1="340" x2="400" y2="340" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                  
                  {/* Arrow 3 */}
                  <line x1="300" y1="380" x2="300" y2="420" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  {/* Box 4: Course Data Output */}
                  <rect x="200" y="420" width="200" height="80" fill="white" stroke="#333" strokeWidth="2"/>
                  <text x="300" y="445" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    {t('webCrawlingDetail.webScraping.courseData')}
                  </text>
                  <text x="300" y="460" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    {t('webCrawlingDetail.webScraping.completeInfo')}
                  </text>
                  <text x="300" y="475" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    {t('webCrawlingDetail.webScraping.outputFormats')}
                  </text>
                  
                  {/* Checkpoint box 2 (dotted) */}
                  <rect x="60" y="315" width="120" height="50" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5"/>
                  <text x="120" y="333" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    {t('webCrawlingDetail.webScraping.saveFiles')}
                  </text>
                  <text x="120" y="347" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    {t('webCrawlingDetail.webScraping.saveCheckpoint')}
                  </text>
                  
                  {/* Arrow from detailed scraping to checkpoint */}
                  <line x1="200" y1="340" x2="180" y2="340" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                  
                  {/* Return arrow from checkpoint to storage */}
                  <line x1="120" y1="315" x2="120" y2="220" stroke="#666" strokeWidth="1"/>
                  <line x1="120" y1="220" x2="200" y2="220" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                  
                  {/* Arrow back from output to detailed scraping */}
                  <line x1="250" y1="420" x2="250" y2="400" stroke="#666" strokeWidth="1"/>
                  <line x1="250" y1="400" x2="120" y2="400" stroke="#666" strokeWidth="1"/>
                  <line x1="120" y1="400" x2="120" y2="365" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                  
                  {/* Legend */}
                  <rect x="50" y="550" width="500" height="120" fill="#f0f8ff" stroke="#333" strokeWidth="1"/>
                  <text x="300" y="570" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#333">
                    {t('webCrawlingDetail.webScraping.systemComponents')}
                  </text>
                  
                  {/* Legend items */}
                  <text x="70" y="590" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • {t('webCrawlingDetail.webScraping.legend.listingDesc')}
                  </text>
                  <text x="70" y="605" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • {t('webCrawlingDetail.webScraping.legend.storageDesc')}
                  </text>
                  <text x="70" y="620" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • {t('webCrawlingDetail.webScraping.legend.detailDesc')}
                  </text>
                  <text x="70" y="635" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • {t('webCrawlingDetail.webScraping.legend.checkpointDesc')}
                  </text>
                  <text x="70" y="650" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • {t('webCrawlingDetail.webScraping.legend.outputDesc')}
                  </text>
                  
                  {/* Arrow marker definition */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Mô tả chi tiết ở dưới */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-gray-800/40 rounded-xl p-6 border border-emerald-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">{t('webCrawlingDetail.webScraping.introduction.title')}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('webCrawlingDetail.webScraping.introduction.description')}
                  </p>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      <span className="text-gray-300"><strong className="text-emerald-400">{t('webCrawlingDetail.webScraping.introduction.language')}:</strong> Python</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      <span className="text-gray-300"><strong className="text-emerald-400">{t('webCrawlingDetail.webScraping.introduction.tools')}:</strong> Selenium (Selenium Webdriver)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/40 rounded-xl p-6 border border-emerald-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">{t('webCrawlingDetail.webScraping.components.title')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <p className="text-emerald-400 font-semibold">{t('webCrawlingDetail.webScraping.components.listingModule')}</p>
                        <p className="text-gray-300 text-sm">{t('webCrawlingDetail.webScraping.components.listingDesc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <p className="text-emerald-400 font-semibold">{t('webCrawlingDetail.webScraping.components.detailModule')}</p>
                        <p className="text-gray-300 text-sm">{t('webCrawlingDetail.webScraping.components.detailDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/40 rounded-xl p-6 border border-emerald-400/20">
                <h3 className="text-xl font-bold text-white mb-4">{t('webCrawlingDetail.webScraping.detailedDescription.title')}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {t('webCrawlingDetail.webScraping.detailedDescription.content')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PHẦN 2: XÂY DỰNG DATABASE */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
            <div className="flex items-center mb-8">
              <div className="bg-blue-500/20 p-4 rounded-xl mr-6">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{t('webCrawlingDetail.database.title')}</h2>
              </div>
            </div>

            <div className="bg-gray-800/40 rounded-xl p-6 border border-blue-400/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('webCrawlingDetail.database.hrmsTitle')}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('webCrawlingDetail.database.description')}
              </p>

              {/* ERD Images - 1 cột dọc */}
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('webCrawlingDetail.database.erdEmployeeProfile')}</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_NhanVien} 
                      alt={t('webCrawlingDetail.database.erdEmployeeProfile')} 
                      className="w-[400px] h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('webCrawlingDetail.database.erdAttendance')}</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_ChamCong} 
                      alt={t('webCrawlingDetail.database.erdAttendance')} 
                      className="w-[400px] h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('webCrawlingDetail.database.erdRecruitment')}</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_TuyenDung} 
                      alt={t('webCrawlingDetail.database.erdRecruitment')} 
                      className="w-[400px] h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('webCrawlingDetail.database.erdPayroll')}</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_Luong} 
                      alt={t('webCrawlingDetail.database.erdPayroll')} 
                      className="w-[400px] h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('webCrawlingDetail.database.erdTraining')}</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_DaoTao} 
                      alt={t('webCrawlingDetail.database.erdTraining')} 
                      className="w-[400px] h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHẦN 3: ETL PIPELINE */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30">
            <div className="flex items-center mb-8">
              <div className="bg-purple-500/20 p-4 rounded-xl mr-6">
                <Workflow className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{t('webCrawlingDetail.etlPipeline.title')}</h2>
                <p className="text-purple-400 text-xl font-medium">{t('webCrawlingDetail.etlPipeline.subtitle')}</p>
              </div>
            </div>

            <div className="bg-gray-800/40 rounded-xl p-6 border border-purple-400/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">{t('webCrawlingDetail.etlPipeline.architectureTitle')}</h3>
              <div className="bg-white rounded-lg p-4 flex justify-center">
                <img 
                  src={ETLImage} 
                  alt={t('webCrawlingDetail.etlPipeline.architectureTitle')} 
                  className="w-[350px] h-auto rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gray-800/40 rounded-xl p-6 border border-purple-400/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">{t('webCrawlingDetail.etlPipeline.overview.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('webCrawlingDetail.etlPipeline.overview.description')}
              </p>
            </div>

            <div className="bg-gray-800/40 rounded-xl p-6 border border-purple-400/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('webCrawlingDetail.etlPipeline.tasks.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('webCrawlingDetail.etlPipeline.tasks.description')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebCrawlerDetail;