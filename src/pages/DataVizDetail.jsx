import React from 'react';
import { ArrowLeft, Database, Zap, BarChart3, ExternalLink } from 'lucide-react';
import HRDB from '../assets/images/HRM DB.png';
import RFM from '../assets/images/RFM_DB.png';

const DataVisualizationDetail = () => {
  const projectData = {
    title: "Công Cụ Truy Vấn SQL, Xử Lý Dữ Liệu và Trực Quan Hóa Dữ Liệu",
    subtitle: "Nền Tảng Phân Tích Dữ Liệu Toàn Diện",
    overview: "Nền tảng phân tích dữ liệu toàn diện với công cụ truy vấn SQL mạnh mẽ, hệ thống xử lý dữ liệu Python tích hợp, và bảng điều khiển trực quan tương tác cho phép phân tích sâu và ra quyết định dựa trên dữ liệu."
  };

  const dashboards = [
    {
      id: "hrm-dashboard",
      title: "Bảng Điều Khiển Quản Lý Nhân Sự",
      description: "Bảng điều khiển phân tích HR toàn diện với các chỉ số hiệu suất nhân viên, thông tin chi tiết theo phòng ban và phân tích lực lượng lao động.",
      image: HRDB,
      link: "https://public.tableau.com/views/HRMS_17479281067570/HRMDB?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      id: "rfm-dashboard",
      title: "Phân Tích Khách Hàng RFM",
      description: "Bảng điều khiển phân khúc khách hàng nâng cao sử dụng phân tích RFM để xác định các mô hình hành vi khách hàng và cơ hội kinh doanh.",
      image: RFM,
      link: "https://public.tableau.com/views/RFMAnalyst/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    }
  ];

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
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl text-white">
        
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center bg-gray-800/30 hover:bg-gray-700/50 text-gray-300 hover:text-white px-6 py-3 rounded-xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 mb-8 group backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform duration-300" />
          <span className="font-medium">Quay lại Portfolio</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {projectData.title}
          </h1>
          
          <p className="text-xl text-blue-400 mb-6 font-medium">
            {projectData.subtitle}
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto" style={{color: '#e0e0ff'}}>
            {projectData.overview}
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-16">
          
          {/* 1. SQL Query Engine */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/40">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-blue-400">1. Công Cụ Truy Vấn SQL</h2>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-600/30 min-h-[200px] flex items-center justify-center">
              <p className="text-gray-400 text-lg italic">Comming Soon....</p>
            </div>
          </section>

          {/* 2. Data Processing */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/40">
            <div className="flex items-center mb-6">
              <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-purple-400">2. Xử Lý Dữ Liệu</h2>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-600/30 min-h-[200px] flex items-center justify-center">
              <p className="text-gray-400 text-lg italic">Đang phát triển...</p>
            </div>
          </section>

          {/* 3. Data Visualization */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/40">
            <div className="flex items-center mb-8">
              <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-green-400">3. Trực Quan Hóa Dữ Liệu</h2>
            </div>
            
            <div className="space-y-12">
              {dashboards.map((dashboard, index) => (
                <div key={dashboard.id} className="bg-gray-900/50 rounded-lg p-6 border border-gray-600/30">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-green-400 mb-3">{dashboard.title}</h3>
                    <p className="text-gray-300 text-lg mb-4">{dashboard.description}</p>
                  </div>
                  
                  {/* Dashboard Image with Link */}
                  <div className="relative group">
                    <div className="bg-white rounded-lg p-4 overflow-hidden">
                      <img 
                        src={dashboard.image} 
                        alt={dashboard.title}
                        className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Overlay with link */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <a 
                        href={dashboard.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl border border-blue-500 hover:border-blue-400 transition-all duration-300 font-medium group/btn"
                      >
                        <BarChart3 className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                        <span>Xem Dashboard Trực Tiếp</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default DataVisualizationDetail;