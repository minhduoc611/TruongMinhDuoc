import React from 'react';
import { ArrowLeft, Github, ExternalLink, Brain, Database, Code, MessageSquare, Zap, Search, FileText } from 'lucide-react';
import RAGImage from '../assets/images/RAG.png';
import EmbedImage from '../assets/images/Embeding.png';

const RAGProjectDetail = () => {
  const projectData = {
    title: "Hệ thống Trợ lý AI với RAG",
    subtitle: "Trợ lý HR thông minh sử dụng Retrieval-Augmented Generation",
    overview: "Hệ thống trò chuyện AI tiên tiến sử dụng công nghệ Retrieval-Augmented Generation (RAG) để cung cấp hỗ trợ HR thông minh. Được xây dựng với Google Gemini AI và Django, hệ thống kết hợp vector embeddings với tìm kiếm độ tương đồng ngữ nghĩa để đưa ra các phản hồi chính xác về dữ liệu nhân viên, bảng chấm công và chính sách HR.",
    
    tags: ["RAG", "Vector Embeddings", "Python", "Học máy", "Xử lý ngôn ngữ tự nhiên", "Django", "Google Gemini", "Trợ lý AI"],
    
    links: {
      github: "https://github.com/minhduoc611/ai-hr-assistant",
      demo: "#"
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
          <span className="font-medium">Quay lại Portfolio</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {projectData.title}
          </h1>
          
          <p className="text-xl text-blue-400 mb-8 font-medium">
            {projectData.subtitle}
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto" style={{color: '#e0e0ff'}}>
            {projectData.overview}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-3 justify-center">
            {projectData.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-blue-500/20 text-blue-400 text-sm px-4 py-2 rounded-full border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Kiến trúc hệ thống */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Kiến trúc hệ thống</h2>
          
          {/* System Architecture Overview */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Kiến trúc tổng thể của hệ thống</h3>
            
            {/* Architecture Diagram */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <img 
                src={RAGImage} 
                alt="RAG System Architecture"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-gray-300 text-center leading-relaxed">
              Hệ thống hoạt động theo mô hình đơn giản: User gửi câu hỏi → Query Processor xử lý và tìm kiếm dữ liệu liên quan → 
              Kết hợp với Google Gemini 2.0 để tạo ra câu trả lời chính xác dựa trên ngữ cảnh và dữ liệu thực tế.
            </p>
          </div>

          {/* Vector Embedding Process */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Quy trình Vector Embedding</h3>
            
            {/* Embedding Flow */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <img 
                src={EmbedImage} 
                alt="Vector Embedding Process"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-gray-300 text-center leading-relaxed">
              Quá trình chuyển đổi text thành vector: Câu hỏi được tokenize → Embedding Model Google tạo vector 768 chiều → 
              So sánh với database để tìm những câu hỏi tương tự đã được hỏi trước đó, giúp AI hiểu ngữ cảnh tốt hơn.
            </p>
          </div>
          
          {/* Sơ đồ luồng RAG */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Luồng hoạt động chi tiết</h3>
            
            {/* Flow Diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4 mb-8">
              
              {/* Step 1: User Query */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 border border-blue-500/30">
                  <MessageSquare className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">1. Câu hỏi của người dùng</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  "Tôi làm bao nhiêu giờ tháng này?"
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block text-blue-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Step 2: Embedding */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 border border-purple-500/30">
                  <Code className="w-10 h-10 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">2. Embedding</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  Chuyển câu hỏi thành vector số học
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block text-blue-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Step 3: Vector Search */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                  <Database className="w-10 h-10 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">3. Vector Search</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  Tìm dữ liệu liên quan nhất trong cơ sở dữ liệu
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block text-blue-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Step 4: Generation */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 border border-orange-500/30">
                  <Brain className="w-10 h-10 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">4. Generation</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  AI tạo câu trả lời dựa trên dữ liệu tìm được
                </p>
              </div>
            </div>

            {/* Detailed Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* Embedding Details */}
              <div className="bg-gray-700/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Chi tiết Embedding</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Phân tích ngôn ngữ tự nhiên</p>
                  <p>• Nhận diện thời gian (tháng, năm)</p>
                  <p>• Chuyển đổi thành vector 768 chiều</p>
                  <p>• Chuẩn hóa để so sánh</p>
                </div>
              </div>

              {/* Data Retrieval */}
              <div className="bg-gray-700/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Truy xuất dữ liệu</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Lấy thông tin nhân viên</p>
                  <p>• Dữ liệu chấm công</p>
                  <p>• Lịch sử hội thoại</p>
                  <p>• Lọc theo ngữ cảnh</p>
                </div>
              </div>

              {/* Vector Search */}
              <div className="bg-gray-700/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Tìm kiếm Vector</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Tính độ tương đồng cosine</p>
                  <p>• So khớp câu hỏi tương tự</p>
                  <p>• Xếp hạng kết quả</p>
                  <p>• Lấy top 5 kết quả tốt nhất</p>
                </div>
              </div>

              {/* AI Generation */}
              <div className="bg-gray-700/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Tạo phản hồi AI</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Google Gemini xử lý</p>
                  <p>• Kết hợp ngữ cảnh</p>
                  <p>• Tạo câu trả lời tự nhiên</p>
                  <p>• Lưu lịch sử hội thoại</p>
                </div>
              </div>
            </div>
          </div>

          {/* Công nghệ sử dụng */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Công nghệ sử dụng</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Vector Database */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <Database className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">Vector Database</h4>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <p className="text-blue-400 font-medium mb-2">Django JSONField</p>
                  <p className="text-gray-300 text-sm mb-3">Lưu trữ embeddings và metadata</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>• 768-dimensional vectors</p>
                    <p>• Cosine similarity search</p>
                    <p>• Conversation history indexing</p>
                  </div>
                </div>
              </div>

              {/* Model AI */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <Brain className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">Model AI</h4>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <p className="text-green-400 font-medium mb-2">Google Gemini 2.0</p>
                  <p className="text-gray-300 text-sm mb-3">Large Language Model cho generation</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>• Text-based conversation</p>
                    <p>• Context-aware responses</p>
                    <p>• Vietnamese language support</p>
                  </div>
                </div>
              </div>

              {/* Kỹ thuật Prompt */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                  <FileText className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">Kỹ thuật Prompt</h4>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <p className="text-orange-400 font-medium mb-2">Dynamic Prompt Engineering</p>
                  <p className="text-gray-300 text-sm mb-3">Tối ưu hóa câu lệnh cho AI</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>• Context injection</p>
                    <p>• Role-based prompting</p>
                    <p>• Few-shot learning examples</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>



      </div>
    </div>
  );
};

export default RAGProjectDetail;