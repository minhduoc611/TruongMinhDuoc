import React, { useState, useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, Database, Globe, Search, FileText, Code, Server, Workflow } from 'lucide-react';
import CouseraERD from '../assets/images/coursera_erd.png';
import ETLImage from '../assets/images/ETL - Lark -WebApp.png';
import ERD_ChamCong from '../assets/images/ERD-Chấm công.png';
import ERD_DaoTao from '../assets/images/ERD-Đào tạo.png';
import ERD_TuyenDung from '../assets/images/ERD-Tuyển dụng.png';
import ERD_NhanVien from '../assets/images/ERD-Hồ sơ nhân viên.png';
import ERD_Luong from '../assets/images/ERD-Lương.png';

const WebCrawlerDetail = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectData = {
    title: "Web Data Crawler, Database Architecture và ETL Pipeline",
    subtitle: "Thu thập dữ liệu web, xây dựng database, ETL pipeline",
    overview: "Hệ thống tích hợp hoàn chỉnh bao gồm thu thập dữ liệu web từ Coursera, thiết kế database cho hệ thống quản lý nhân sự, và xây dựng ETL pipeline tự động đồng bộ dữ liệu từ Lark Suite.",
    
    tags: ["Python", "Selenium WebDriver", "PostgreSQL", "Database Design", "ETL Pipeline", "Django", "Celery", "Lark Suite API"],
    
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
          <span className="font-medium">Back to Portfolio</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">
            {projectData.title}
          </h1>
          
          <p className="text-xl text-emerald-400 mb-6 font-medium">
            {projectData.subtitle}
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
                <h2 className="text-3xl font-bold text-white mb-2">1.1 Thu thập dữ liệu web</h2>
                <p className="text-emerald-400 text-xl font-medium">Thu thập dữ liệu web Coursera</p>
              </div>
            </div>

            {/* Quy trình hoạt động - Ảnh nhỏ hơn và tối ưu không gian */}
            <div className="bg-gray-800/40 rounded-xl p-6 border border-emerald-400/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Quy trình hoạt động hệ thống</h3>
              <div className="bg-white rounded-lg p-4 flex justify-center">
                <svg width="100%" height="500" viewBox="50 0 500 700" xmlns="http://www.w3.org/2000/svg" className="max-w-2xl">
                  {/* Background */}
                  <rect width="600" height="700" fill="#f8f9fa"/>
                  
                  {/* Title */}
                  <text x="300" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#333">
                    Hệ thống Thu thập Dữ liệu Coursera
                  </text>
                  
                  {/* Box 1: Course Listings Scraping Module */}
                  <rect x="200" y="60" width="200" height="80" fill="white" stroke="#333" strokeWidth="2"/>
                  <text x="300" y="85" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    Module Thu thập
                  </text>
                  <text x="300" y="100" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    Danh sách Khóa học
                  </text>
                  <text x="300" y="115" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    (Danh mục, Kết quả Tìm kiếm)
                  </text>
                  
                  {/* Arrow 1 */}
                  <line x1="300" y1="140" x2="300" y2="180" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  {/* Box 2: Course URLs Storage */}
                  <rect x="200" y="180" width="200" height="80" fill="white" stroke="#333" strokeWidth="2"/>
                  <text x="300" y="205" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    URL khóa học (lưu trữ cục bộ)
                  </text>
                  <text x="300" y="220" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    File JSON/CSV chứa URL khóa học
                  </text>
                  
                  {/* Checkpoint box 1 (dotted) */}
                  <rect x="420" y="200" width="140" height="50" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5"/>
                  <text x="490" y="218" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    Đọc file URL
                  </text>
                  <text x="490" y="232" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    Đọc điểm checkpoint
                  </text>
                  
                  {/* Arrow from checkpoint to storage */}
                  <line x1="420" y1="225" x2="400" y2="225" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                  
                  {/* Arrow 2 */}
                  <line x1="300" y1="260" x2="300" y2="300" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  {/* Box 3: Detailed Course Information Scraping */}
                  <rect x="200" y="300" width="200" height="80" fill="white" stroke="#333" strokeWidth="2"/>
                  <text x="300" y="320" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    Module Thu thập
                  </text>
                  <text x="300" y="335" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    Thông tin Chi tiết
                  </text>
                  <text x="300" y="350" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    Khóa học
                  </text>
                  <text x="300" y="365" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    (Chương trình, Đánh giá, Giảng viên)
                  </text>
                  
                  {/* Arrow from checkpoint to detailed scraping */}
                  <line x1="420" y1="250" x2="420" y2="340" stroke="#666" strokeWidth="1"/>
                  <line x1="420" y1="340" x2="400" y2="340" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                  
                  {/* Arrow 3 */}
                  <line x1="300" y1="380" x2="300" y2="420" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  {/* Box 4: Course Data Output */}
                  <rect x="200" y="420" width="200" height="80" fill="white" stroke="#333" strokeWidth="2"/>
                  <text x="300" y="445" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#333">
                    Dữ liệu Chi tiết Khóa học
                  </text>
                  <text x="300" y="460" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    Thông tin khóa học hoàn chỉnh
                  </text>
                  <text x="300" y="475" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    (JSON/CSV/Cơ sở dữ liệu)
                  </text>
                  
                  {/* Checkpoint box 2 (dotted) */}
                  <rect x="60" y="315" width="120" height="50" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5"/>
                  <text x="120" y="333" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    Lưu file URL
                  </text>
                  <text x="120" y="347" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">
                    Lưu điểm checkpoint
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
                    Các Thành phần Hệ thống
                  </text>
                  
                  {/* Legend items */}
                  <text x="70" y="590" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • Module Danh sách: Thu thập danh sách khóa học từ danh mục, tìm kiếm
                  </text>
                  <text x="70" y="605" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • Lưu trữ URL: Lưu trữ cục bộ danh sách URL cần thu thập chi tiết
                  </text>
                  <text x="70" y="620" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • Thu thập Chi tiết: Thu thập thông tin chi tiết (giảng viên, chương trình, đánh giá)
                  </text>
                  <text x="70" y="635" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • Hệ thống Checkpoint: Lưu/đọc tiến độ để tránh mất dữ liệu khi gián đoạn
                  </text>
                  <text x="70" y="650" fontFamily="Arial, sans-serif" fontSize="11" fill="#333">
                    • Kết quả: File JSON/CSV chứa dữ liệu khóa học hoàn chỉnh
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
                  <h3 className="text-xl font-bold text-white mb-4">Giới thiệu</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Hệ thống được xây dựng để thu thập dữ liệu khóa học free từ trang web Coursera một cách tự động và hoạt động liên tục. 
                    Giúp cập nhật được các khoá học mới từ Coursera. Và bài viết dưới đây sẽ mô tả tổng quan về cách hoạt động của hệ thống.
                  </p>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      <span className="text-gray-300"><strong className="text-emerald-400">Ngôn ngữ lập trình:</strong> Python</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      <span className="text-gray-300"><strong className="text-emerald-400">Công cụ:</strong> Selenium (Selenium Webdriver)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/40 rounded-xl p-6 border border-emerald-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">Thành phần chính</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <p className="text-emerald-400 font-semibold">Module thu thập danh sách</p>
                        <p className="text-gray-300 text-sm">Thu thập các liên kết đến các khóa học</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <p className="text-emerald-400 font-semibold">Module thu thập dữ liệu chi tiết</p>
                        <p className="text-gray-300 text-sm">Thu thập thông tin chi tiết từ các khóa học</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/40 rounded-xl p-6 border border-emerald-400/20">
                <h3 className="text-xl font-bold text-white mb-4">Mô tả chi tiết</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Đây là một chương trình tự động thu thập thông tin các khóa học miễn phí từ website Coursera bằng cách giả lập hành vi duyệt web của con người. 
                  Hệ thống hoạt động theo hai giai đoạn chính: đầu tiên là thu thập danh sách tổng quan các khóa học (tên, link, hình ảnh), 
                  sau đó truy cập từng khóa học để lấy thông tin chi tiết như mô tả, đánh giá, số người học, giảng viên và thời gian học. 
                  Chương trình có khả năng tự động chuyển trang, tải hình ảnh, và tránh trùng lặp dữ liệu bằng cách chỉ thu thập những khóa học chưa từng cào trước đó. 
                  Dữ liệu được lưu trữ có tổ chức trong các thư mục theo thời gian và xuất ra file CSV để dễ dàng phân tích. 
                  Hệ thống còn tích hợp các biện pháp an toàn như thời gian chờ giữa các lần truy cập để tránh bị website phát hiện và chặn. 
                  Kết quả cuối cùng là một cơ sở dữ liệu hoàn chỉnh về các khóa học Coursera, hữu ích cho việc nghiên cứu thị trường giáo dục trực tuyến, 
                  phân tích xu hướng học tập, và theo dõi sự phát triển của các khóa học theo thời gian.
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
                <h2 className="text-3xl font-bold text-white mb-2">1.2 Xây dựng Database</h2>
                <p className="text-blue-400 text-xl font-medium">Database cho hệ thống thu thập dữ liệu Coursera</p>
              </div>
            </div>

            {/* Database ERD - Ảnh nhỏ hơn */}
            <div className="bg-gray-800/40 rounded-xl p-6 border border-blue-400/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Database ERD Schema</h3>
              <div className="bg-white rounded-lg p-4 flex justify-center">
                <img 
                  src={CouseraERD} 
                  alt="Coursera Database ERD" 
                  className="max-w-2xl h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Mô tả chi tiết ở dưới */}
            <div className="bg-gray-800/40 rounded-xl p-6 border border-blue-400/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Mô tả chi tiết</h3>
              <p className="text-gray-300 leading-relaxed">
                Database được xây dựng trên PostgreSQL với thiết kế normalized để đảm bảo tính toàn vẹn dữ liệu và hiệu suất truy vấn cao. 
                Cấu trúc bao gồm bảng chính Course lưu trữ thông tin khóa học, các bảng lookup (CourseLevel, Instructor, Category) để chuẩn hóa dữ liệu, 
                và các bảng junction (Course_Instructor, CourseCategory) để xử lý quan hệ nhiều-nhiều. 
                Hệ thống sử dụng indexing tối ưu với B-tree index cho tìm kiếm nhanh, GIN index cho full-text search, 
                và composite index cho việc filter phức tạp. Database hỗ trợ JSON fields cho metadata linh hoạt, 
                constraints validation cho data integrity, và backup strategy với point-in-time recovery đảm bảo availability 99.9%. 
                Thiết kế này tối ưu cho việc lưu trữ và truy vấn hàng nghìn khóa học với response time trung bình dưới 50ms.
              </p>
            </div>

            <div className="bg-gray-800/40 rounded-xl p-6 border border-blue-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Database cho hệ thống quản lý nhân sự</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hệ thống HRMS này được thiết kế để quản lý toàn bộ quy trình nhân sự của doanh nghiệp, từ tuyển dụng đến quản lý hàng ngày và phát triển nhân viên. 
                Database được cấu trúc thành các module chức năng riêng biệt nhưng có mối liên kết chặt chẽ với nhau.
              </p>

              {/* ERD Images - 1 cột dọc */}
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">ERD Hồ sơ Nhân viên</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_NhanVien} 
                      alt="ERD Hồ sơ Nhân viên" 
                      className="w-[400px] h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">ERD Chấm công</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_ChamCong} 
                      alt="ERD Chấm công" 
                      className="w-[400px] h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">ERD Tuyển dụng</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_TuyenDung} 
                      alt="ERD Tuyển dụng" 
                      className="w-[400px] h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">ERD Lương</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_Luong} 
                      alt="ERD Lương" 
                      className="w-[400px] h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="text-blue-400 font-semibold mb-3 text-center">ERD Đào tạo</h4>
                  <div className="bg-white rounded-lg p-4 flex justify-center">
                    <img 
                      src={ERD_DaoTao} 
                      alt="ERD Đào tạo" 
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
                <h2 className="text-3xl font-bold text-white mb-2">1.3 ETL Pipeline</h2>
                <p className="text-purple-400 text-xl font-medium">Tự động hóa tích hợp dữ liệu Chấm công, tuyển dụng từ Lark Suite sang hệ thống quản lý nhân sự</p>
              </div>
            </div>

            <div className="bg-gray-800/40 rounded-xl p-6 border border-purple-400/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">ETL Pipeline Architecture</h3>
              <div className="bg-white rounded-lg p-4 flex justify-center">
                <img 
                  src={ETLImage} 
                  alt="ETL Pipeline Architecture" 
                  className="w-[350px] h-auto rounded-lg"

                />
              </div>
            </div>

            <div className="bg-gray-800/40 rounded-xl p-6 border border-purple-400/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Tổng quan hệ thống ETL</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Đây là một hệ thống ETL (Extract, Transform, Load) được thiết kế để tự động đồng bộ dữ liệu từ platform Lark Suite vào hệ thống quản lý nhân sự nội bộ. 
                Pipeline này sử dụng Celery tasks để xử lý bất đồng bộ và đảm bảo hiệu suất cao.
              </p>
              

            </div>

            <div className="bg-gray-800/40 rounded-xl p-6 border border-purple-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Chi tiết các tác vụ ETL</h3>
              <p className="text-gray-300 leading-relaxed">
                ETL Pipeline thực hiện 3 tác vụ chính được chạy song song để tối ưu hiệu suất. 
                <strong className="text-purple-400">Đầu tiên là đồng bộ dữ liệu chấm công</strong>, hệ thống trích xuất thông tin attendance từ Lark Suite API theo thời gian thực với danh sách user ID được định nghĩa sẵn, lấy dữ liệu chấm công của ngày hiện tại bao gồm thông tin check-in và check-out. Quá trình này bao gồm transform timezone từ UTC sang GMT+7, lưu trữ GPS, ảnh chấm công, device info và cập nhật vào AttendanceRecord, CheckInRecord.
                <strong className="text-purple-400"> Tiếp theo là đồng bộ vị trí tuyển dụng</strong>, kết nối với Lark Bitable để trích xuất thông tin các vị trí tuyển dụng với việc mapping các trường như tên công việc, phòng ban, mô tả, yêu cầu, và mức lương. Module này tự động tạo/cập nhật Department objects, sử dụng job_id làm unique identifier, và convert timestamp cùng mapping work type.
                <strong className="text-purple-400"> Cuối cùng là đồng bộ ứng viên</strong>, xử lý dữ liệu phức tạp nhất trong pipeline bằng cách không chỉ tạo Candidate records mà còn tự động download và lưu trữ CV files từ Lark storage. Tác vụ này sử dụng external_record_id để tracking, tự động tạo Application records, và extract portfolio URL từ nested JSON.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebCrawlerDetail;