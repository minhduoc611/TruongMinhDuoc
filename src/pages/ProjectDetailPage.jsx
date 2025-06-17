import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Database, Target, BarChart3, Award, CheckCircle } from 'lucide-react';
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

const ProjectDetailPage = () => {
  const projectData = {
    title: "Hệ Thống Quản Lý Nhân Sự",
    subtitle: "HRMS Doanh Nghiệp cho Công Ty SHEA",
    overview: "Hệ thống quản lý nhân sự cấp doanh nghiệp này được phát triển để chuyển đổi hoạt động HR của Công ty SHEA từ quy trình thủ công sang phương pháp tự động hóa hoàn toàn, dựa trên dữ liệu. Hệ thống tích hợp nhiều chức năng HR vào một nền tảng thống nhất, cung cấp phân tích và thông tin chi tiết theo thời gian thực để hỗ trợ ra quyết định chiến lược trên tất cả các lĩnh vực HR.",
    

    
    tags: ["Django", "PostgreSQL", "Tableau", "Lark Suite API", "Phân tích dữ liệu", "Redis", "Celery"],
    
    links: {
      github: "https://github.com/minhduoc611/hrms-system",
      demo: "#"
    },
    
    architecture: {
      description: "Hệ thống tuân theo kiến trúc modular, có thể mở rộng với sự phân tách rõ ràng các mối quan tâm, cho phép bảo trì dễ dàng và nâng cấp trong tương lai.",
      components: [
        "Backend Django",
        "PostgreSQL cho lưu trữ dữ liệu quan hệ",
        "Redis cho cache và quản lý session", 
        "Celery cho xử lý tác vụ nền",
        "Tableau cho phân tích nâng cao và báo cáo",
        "Tích hợp Lark Suite cho chấm công và giao tiếp"
      ]
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
          <span className="font-medium">Quay lại Portfolio</span>
        </button>

        {/* Hero Section - Removed Image */}
        <div className="mb-16">
          <div className="space-y-6 text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {projectData.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-blue-400 mb-6 font-medium">
              {projectData.subtitle}
            </p>
            
            {/* Overview */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto" style={{color: '#e0e0ff'}}>
              {projectData.overview}
            </p>
          </div>
        </div>


        {/* System Design & Interface */}
        <section className="mb-16">

          
          {/* Database ERD */}
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
          
<div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Back-end</h3>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Ảnh 1 */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg flex items-center justify-center border border-gray-600 mb-3 overflow-hidden">
                  <img 
                    src={BE1} 
                    alt="Giao diện đăng nhập"
                    className="w-full max-w-[500px] h-auto object-cover rounded-lg mx-auto"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2 text-center">View Django</h4>
              </div>

              {/* Ảnh 2 */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg flex items-center justify-center border border-gray-600 mb-3 overflow-hidden">
                  <img 
                    src={BE2} 
                    alt="backend"
                    className="w-full max-w-[500px] h-auto object-cover rounded-lg mx-auto"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2 text-center">URL Django</h4>
              </div>

            </div>

            {/* Mô tả ngắn */}
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-sm leading-relaxed max-w-4xl mx-auto">
                Backend được xây dựng với Django framework, sử dụng các view functions để xử lý logic nghiệp vụ 
                và URL patterns để định tuyến các request. Hệ thống quản lý nhân viên với đầy đủ chức năng CRUD, 
                xử lý dữ liệu JSON và tích hợp với cơ sở dữ liệu thông qua Django ORM.
              </p>
            </div>

          </div>
        </div>


          {/* Web App Interface Screenshots */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Front-end</h3>
            <div className="grid grid-cols-1 gap-6">
              
              {/* Login Interface */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3 overflow-hidden">
                  <img 
                    src={LoginImage} 
                    alt="Giao diện đăng nhập"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Giao Diện Xác Thực</h4>
                <p className="text-gray-400 text-xs">Hệ thống đăng nhập bảo mật với phân quyền theo vai trò</p>
              </div>



              {/* Attendance Module */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3">
                  <img 
                    src={CCImage} 
                    alt="Giao diện danh sách chấm công"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Quản Lý Chấm Công</h4>
                <p className="text-gray-400 text-xs">Bản ghi check-in/out và quản lý lịch làm việc</p>
              </div>



            
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3">
                  <img 
                    src={LImage} 
                    alt="Giao diện lương"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Hệ Thống Bảng Lương</h4>
                <p className="text-gray-400 text-xs">Tính toán lương và xử lý thanh toán</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3">
                  <img 
                    src={RGImage} 
                    alt="Giao diện lương"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Chatbot hỗ trợ sử dụng Regex</h4>
                <p className="text-gray-400 text-xs">Chatbot hỗ trợ nhân viên tra cứu </p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-100 flex items-center justify-center border border-gray-600 mb-3">
                  <img 
                    src={FormIgmage} 
                    alt="Giao diện lương"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Form nhập dữ liệu</h4>
                <p className="text-gray-400 text-xs">Nhập dữ liệu thêm khoá đào tạo nhân viên mới </p>
              </div>

            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Triển Khai Hệ Thống</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* LEMP Stack */}
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">LEMP Stack Deployment</h3>
                <div className="space-y-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">L</div>
                      <h4 className="text-white font-semibold">Linux (Ubuntu 20.04 LTS)</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Hệ điều hành server với tính ổn định cao và bảo mật tốt</p>
                  </div>
                  
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">E</div>
                      <h4 className="text-white font-semibold">Nginx (Web Server)</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Reverse proxy và load balancer cho ứng dụng Django</p>
                  </div>
                  
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">M</div>
                      <h4 className="text-white font-semibold">PostgreSQL</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Cơ sở dữ liệu chính lưu trữ toàn bộ dữ liệu HR</p>
                  </div>
                  
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">P</div>
                      <h4 className="text-white font-semibold">Python (Django + Gunicorn)</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Ứng dụng Django chạy với Gunicorn WSGI server</p>
                  </div>
                </div>
              </div>

              {/* Deployment Configuration */}
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Cấu Hình Triển Khai</h3>
                <div className="space-y-4">
                  
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-blue-400" />
                      Application Server
                    </h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>• Gunicorn với 4 worker processes</p>
                      <p>• Supervisor để quản lý process</p>
                      <p>• Systemd service cho auto-restart</p>
                    </div>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-blue-400" />
                      Background Services
                    </h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>• Redis server cho cache và queue</p>
                      <p>• Celery worker cho background tasks</p>
                      <p>• Celery beat cho scheduled tasks</p>
                    </div>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-400" />
                      Security & Performance
                    </h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>• SSL/TLS với Let's Encrypt</p>
                      <p>• Nginx gzip compression</p>
                      <p>• Static files caching</p>
                      <p>• Database connection pooling</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Deployment Flow */}
            <div className="mt-8 pt-8 border-t border-gray-600/30">
              <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Quy Trình Triển Khai</h3>
              <div className="flex justify-center">
                <img 
                  src={LEMP} 
                  alt="LEMP Stack Deployment Flow"
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
