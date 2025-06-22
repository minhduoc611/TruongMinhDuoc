import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Database, Target, BarChart3, Award, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LoginImage from '../assets/images/login.png';
import ERDImage from '../assets/images/ERD.webp';
import TDImage from '../assets/images/tuyendung.png';
import CCImage from '../assets/images/chamcong.png';
import NVImage from '../assets/images/nhanvien.png';
import LImage from '../assets/images/luong.png';
import DTImage from '../assets/images/daotao.png';
import RGImage from '../assets/images/chat_regex.png';
import FormIgmage from '../assets/images/formNhap.png';
import LEMP from '../assets/images/LEMP.png';
import BE1 from '../assets/images/backend1.png';
import BE2 from '../assets/images/backend2.png';
import ERD_ChamCong from '../assets/images/ERD-Chấm công.png';
import ERD_DaoTao from '../assets/images/ERD-Đào tạo.png';
import ERD_TuyenDung from '../assets/images/ERD-Tuyển dụng.png';
import ERD_NhanVien from '../assets/images/ERD-Hồ sơ nhân viên.png';
import ERD_Luong from '../assets/images/ERD-Lương.png';
import CB1 from '../assets/images/chatbot1.png';
import CB2 from '../assets/images/chatbot2.png';

const ProjectDetailPage = () => {
  // Hook i18next để lấy translation
  const { t } = useTranslation();

  const projectData = {
    titleKey: "hrmsDetail.hero.title",
    subtitleKey: "hrmsDetail.hero.subtitle",
    overviewKey: "hrmsDetail.hero.overview",
    
    tags: ["Django", "PostgreSQL", "Tableau", "Lark Suite API", "Phân tích dữ liệu", "Redis", "Celery"],
    
    links: {
      github: "https://github.com/minhduoc611/hrms-system",
      demo: "#"
    },
    
    architecture: {
      descriptionKey: "hrmsDetail.architecture.description",
      componentsKey: "hrmsDetail.architecture.components"
    }
  };

  return (
    <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto" style={{
      background: 'linear-gradient(125deg, #09092c 0%, #0d0d35 40%, #101048 100%)'
    }}>
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid background */}
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
        
        {/* Animated orbs */}
        <div 
          className="absolute rounded-full animate-pulse"
          style={{
            width: '400px',
            height: '400px',
            top: '-100px',
            left: '-100px',
            filter: 'blur(70px)',
            opacity: 0.07,
            background: 'radial-gradient(circle, rgba(0, 162, 255, 0.4) 0%, rgba(0, 162, 255, 0) 70%)',
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
            background: 'radial-gradient(circle, rgba(80, 130, 255, 0.4) 0%, rgba(80, 130, 255, 0) 70%)',
            mixBlendMode: 'screen',
            animationDelay: '0.2s'
          }}
        />
        <div 
          className="absolute rounded-full animate-pulse"
          style={{
            width: '450px',
            height: '450px',
            bottom: '-150px',
            left: '30%',
            filter: 'blur(70px)',
            opacity: 0.05,
            background: 'radial-gradient(circle, rgba(0, 100, 200, 0.3) 0%, rgba(0, 100, 200, 0) 70%)',
            mixBlendMode: 'screen',
            animationDelay: '0.3s'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl text-white">
        
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center bg-gray-800/30 hover:bg-gray-700/50 text-gray-300 hover:text-white px-6 py-3 rounded-xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 mb-8 group backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform duration-300" />
          <span className="font-medium">{t('hrmsDetail.backButton')}</span>
        </button>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="space-y-6 text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t(projectData.titleKey)}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-blue-400 mb-6 font-medium">
              {t(projectData.subtitleKey)}
            </p>
          </div>
        </div>

        {/* System Design & Interface */}
        <section className="mb-16">
          {/* Database ERD */}
          <div className="bg-gray-800/40 rounded-xl p-6 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{t('hrmsDetail.database.title')}</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('hrmsDetail.database.description')}
            </p>

            {/* ERD Images - 1 cột dọc */}
            <div className="space-y-6">
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('hrmsDetail.database.erdEmployeeProfile')}</h4>
                <div className="bg-white rounded-lg p-4 flex justify-center">
                  <img 
                    src={ERD_NhanVien} 
                    alt={t('hrmsDetail.database.erdEmployeeProfile')} 
                    className="w-[400px] h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('hrmsDetail.database.erdAttendance')}</h4>
                <div className="bg-white rounded-lg p-4 flex justify-center">
                  <img 
                    src={ERD_ChamCong} 
                    alt={t('hrmsDetail.database.erdAttendance')} 
                    className="w-[400px] h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('hrmsDetail.database.erdRecruitment')}</h4>
                <div className="bg-white rounded-lg p-4 flex justify-center">
                  <img 
                    src={ERD_TuyenDung} 
                    alt={t('hrmsDetail.database.erdRecruitment')} 
                    className="w-[400px] h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('hrmsDetail.database.erdPayroll')}</h4>
                <div className="bg-white rounded-lg p-4 flex justify-center">
                  <img 
                    src={ERD_Luong} 
                    alt={t('hrmsDetail.database.erdPayroll')} 
                    className="w-[400px] h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                <h4 className="text-blue-400 font-semibold mb-3 text-center">{t('hrmsDetail.database.erdTraining')}</h4>
                <div className="bg-white rounded-lg p-4 flex justify-center">
                  <img 
                    src={ERD_DaoTao} 
                    alt={t('hrmsDetail.database.erdTraining')} 
                    className="w-[400px] h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{t('hrmsDetail.backend.title')}</h3>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Ảnh 1 */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                  <div className="bg-gray-700/30 rounded-lg flex items-center justify-center border border-gray-600 mb-3 overflow-hidden">
                    <img 
                      src={BE1} 
                      alt={t('hrmsDetail.backend.viewDjango')}
                      className="w-full max-w-[500px] h-auto object-cover rounded-lg mx-auto"
                    />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-center">{t('hrmsDetail.backend.viewDjango')}</h4>
                </div>

                {/* Ảnh 2 */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                  <div className="bg-gray-700/30 rounded-lg flex items-center justify-center border border-gray-600 mb-3 overflow-hidden">
                    <img 
                      src={BE2} 
                      alt={t('hrmsDetail.backend.urlDjango')}
                      className="w-full max-w-[500px] h-auto object-cover rounded-lg mx-auto"
                    />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-center">{t('hrmsDetail.backend.urlDjango')}</h4>
                </div>

              </div>

              {/* Mô tả ngắn */}
              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm leading-relaxed max-w-4xl mx-auto">
                  {t('hrmsDetail.backend.description')}
                </p>
              </div>

            </div>
          </div>

          {/* Frontend */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{t('hrmsDetail.frontend.title')}</h3>
            <div className="grid grid-cols-1 gap-6">
              
              {/* Login Interface */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3 overflow-hidden">
                  <img 
                    src={LoginImage} 
                    alt={t('hrmsDetail.frontend.loginInterface.title')}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">{t('hrmsDetail.frontend.loginInterface.title')}</h4>
                <p className="text-gray-400 text-xs">{t('hrmsDetail.frontend.loginInterface.description')}</p>
              </div>

              {/* Attendance Module */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3">
                  <img 
                    src={CCImage} 
                    alt={t('hrmsDetail.frontend.attendanceModule.title')}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">{t('hrmsDetail.frontend.attendanceModule.title')}</h4>
                <p className="text-gray-400 text-xs">{t('hrmsDetail.frontend.attendanceModule.description')}</p>
              </div>

              {/* Payroll System */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3">
                  <img 
                    src={LImage} 
                    alt={t('hrmsDetail.frontend.payrollSystem.title')}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">{t('hrmsDetail.frontend.payrollSystem.title')}</h4>
                <p className="text-gray-400 text-xs">{t('hrmsDetail.frontend.payrollSystem.description')}</p>
              </div>

              {/* Chatbot */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3">
                  <img 
                    src={RGImage} 
                    alt={t('hrmsDetail.frontend.chatbot.title')}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">{t('hrmsDetail.frontend.chatbot.title')}</h4>
                <p className="text-gray-400 text-xs">{t('hrmsDetail.frontend.chatbot.description')}</p>
              </div>

              {/* Data Entry Form */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3">
                  <img 
                    src={FormIgmage} 
                    alt={t('hrmsDetail.frontend.dataForm.title')}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">{t('hrmsDetail.frontend.dataForm.title')}</h4>
                <p className="text-gray-400 text-xs">{t('hrmsDetail.frontend.dataForm.description')}</p>
              </div>

            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{t('hrmsDetail.chatbotSection.title')}</h3>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Ảnh 1 */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg flex items-center justify-center border border-gray-600 mb-3 overflow-hidden">
                  <img 
                    src={CB1} 
                    alt={t('hrmsDetail.chatbotSection.image1Alt')}
                    className="w-full max-w-[500px] h-auto object-cover rounded-lg mx-auto"
                  />
                </div>
              </div>

              {/* Ảnh 2 */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg flex items-center justify-center border border-gray-600 mb-3 overflow-hidden">
                  <img 
                    src={CB2} 
                    alt={t('hrmsDetail.chatbotSection.image2Alt')}
                    className="w-full max-w-[500px] h-auto object-cover rounded-lg mx-auto"
                  />
                </div>
              </div>

            </div>

            {/* Mô tả ngắn */}
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-sm leading-relaxed max-w-4xl mx-auto">
                {t('hrmsDetail.chatbotSection.description')}
              </p>
            </div>

          </div>
        </div>

        {/* Deployment Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{t('hrmsDetail.deployment.title')}</h3>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* LEMP Stack */}
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">{t('hrmsDetail.deployment.lempStack.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">L</div>
                      <h4 className="text-white font-semibold">{t('hrmsDetail.deployment.lempStack.linux.title')}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{t('hrmsDetail.deployment.lempStack.linux.description')}</p>
                  </div>
                  
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">E</div>
                      <h4 className="text-white font-semibold">{t('hrmsDetail.deployment.lempStack.nginx.title')}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{t('hrmsDetail.deployment.lempStack.nginx.description')}</p>
                  </div>
                  
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">M</div>
                      <h4 className="text-white font-semibold">{t('hrmsDetail.deployment.lempStack.postgresql.title')}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{t('hrmsDetail.deployment.lempStack.postgresql.description')}</p>
                  </div>
                  
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">P</div>
                      <h4 className="text-white font-semibold">{t('hrmsDetail.deployment.lempStack.python.title')}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{t('hrmsDetail.deployment.lempStack.python.description')}</p>
                  </div>
                </div>
              </div>

              {/* Deployment Configuration */}
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">{t('hrmsDetail.deployment.configuration.title')}</h3>
                <div className="space-y-4">
                  
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-blue-400" />
                      {t('hrmsDetail.deployment.configuration.appServer.title')}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>• {t('hrmsDetail.deployment.configuration.appServer.gunicorn')}</p>
                      <p>• {t('hrmsDetail.deployment.configuration.appServer.supervisor')}</p>
                      <p>• {t('hrmsDetail.deployment.configuration.appServer.systemd')}</p>
                    </div>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-blue-400" />
                      {t('hrmsDetail.deployment.configuration.backgroundServices.title')}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>• {t('hrmsDetail.deployment.configuration.backgroundServices.redis')}</p>
                      <p>• {t('hrmsDetail.deployment.configuration.backgroundServices.celeryWorker')}</p>
                      <p>• {t('hrmsDetail.deployment.configuration.backgroundServices.celeryBeat')}</p>
                    </div>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-400" />
                      {t('hrmsDetail.deployment.configuration.security.title')}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>• {t('hrmsDetail.deployment.configuration.security.ssl')}</p>
                      <p>• {t('hrmsDetail.deployment.configuration.security.gzip')}</p>
                      <p>• {t('hrmsDetail.deployment.configuration.security.staticFiles')}</p>
                      <p>• {t('hrmsDetail.deployment.configuration.security.dbPooling')}</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Deployment Flow */}
            <div className="mt-8 pt-8 border-t border-gray-600/30">
              <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">{t('hrmsDetail.deployment.flow.title')}</h3>
              <div className="flex justify-center">
                <img 
                  src={LEMP} 
                  alt={t('hrmsDetail.deployment.flow.altText')}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default ProjectDetailPage;