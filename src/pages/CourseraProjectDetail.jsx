import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Database, Code, Target, BarChart3, Award, CheckCircle, Clock, FileText, Zap, Settings, Download, Upload, GitBranch, Filter, Globe, Table, Server, Image, RefreshCw, Cloud, Eye } from 'lucide-react';
import AutoImage from '../assets/images/task-automation.png';
const CourseraProjectDetail = () => {
  const projectData = {
    title: "Hệ thống tự động hóa tác vụ thu thập và phân tích dữ liệu giáo dục Coursera",
    subtitle: "Pipeline thông minh với Windows Task Scheduler và Tableau Dashboard",
    overview: "Hệ thống tự động hóa này được thiết kế để tạo ra một pipeline thông minh thu thập và phân tích dữ liệu giáo dục trực tuyến. Bằng cách sử dụng Windows Task Scheduler làm trung tâm điều phối, hệ thống tự động kích hoạt chuỗi quy trình crawl dữ liệu từ Coursera mỗi ngày, thu thập thông tin chi tiết về hàng nghìn khóa học miễn phí bao gồm tiêu đề, mô tả, rating, số lượng học viên, và thông tin giảng viên.",
    
    tags: ["Python", "Selenium", "Windows Task Scheduler", "Tableau Public", "Google Sheets API", "Google Drive API", "Data Pipeline", "Automation", "Web Scraping", "Data Visualization"],
    
    heroImage: "https://tse2.mm.bing.net/th/id/OIP.mQSTnOrPTZddnGb5WwSDFQHaEO?r=0&rs=1&pid=ImgDetMain",
    
    links: {
      github: "https://github.com/minhduoc611/coursera-data-collection",
      demo: "#"
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30';
      case 'Live':
        return 'bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500 border-opacity-30';
      case 'Completed':
        return 'bg-purple-500 bg-opacity-20 text-purple-400 border border-purple-500 border-opacity-30';
      default:
        return 'bg-gray-500 bg-opacity-20 text-gray-400 border border-gray-500 border-opacity-30';
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

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl text-white">
        
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center bg-gray-800/30 hover:bg-gray-700/50 text-gray-300 hover:text-white px-6 py-3 rounded-xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 mb-8 group backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform duration-300" />
          <span className="font-medium">Back to Portfolio</span>
        </button>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="space-y-6 text-center">
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
        </div>



        {/* Complete Workflow Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quy trình tự động hóa 4 nhóm task chính</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">1. Crawl dữ liệu</h3>
              <p className="text-gray-400 text-sm">Thu thập dữ liệu từ trang web Coursera bao gồm thông tin khóa học, rating, và giảng viên</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <Filter className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">2. Xử lý dữ liệu</h3>
              <p className="text-gray-400 text-sm">Làm sạch, trích xuất và chuẩn hóa dữ liệu để đảm bảo chất lượng</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                <Cloud className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">3. Upload Data Lake</h3>
              <p className="text-gray-400 text-sm">Upload dữ liệu lên data lake (Google Drive) và đồng bộ với Google Sheets</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                <BarChart3 className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">4. Báo cáo Tableau</h3>
              <p className="text-gray-400 text-sm">Truy xuất dữ liệu vào hệ thống báo cáo (Tableau) với tự động refresh dashboard</p>
            </div>
          </div>
        </section>



        {/* System Architecture Image */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quy trình hoạt động</h2>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600/20 overflow-hidden">
              <img 
                src={AutoImage} 
                alt="Task Automation System Architecture"
                className="w-full h-auto rounded-lg max-h-96 object-contain"
              />
            </div>
            <div className="mt-6">
              <p className="text-gray-300 text-center leading-relaxed">
                Hệ thống hoạt động hoàn toàn tự động thông qua Windows Task Scheduler, khởi động automation.bat script để crawl dữ liệu từ Coursera, xử lý và làm sạch thông tin, sau đó upload lên Google Sheets. Dữ liệu được đọc từ Google Sheets vào database và tự động refresh dashboard Tableau, đảm bảo người dùng luôn nhìn thấy insights mới nhất mà không cần bất kỳ can thiệp thủ công nào.
              </p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default CourseraProjectDetail;