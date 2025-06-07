import React from 'react';
import { ArrowLeft, Github, ExternalLink, Brain, Database, Code, Target, BarChart3, Award, CheckCircle, Clock, FileText, Zap, Settings, MessageSquare, Users } from 'lucide-react';

const RAGProjectDetail = () => {
  const projectData = {
    title: "AI-Powered HR Assistant with RAG",
    subtitle: "Intelligent HR Chatbot with Retrieval-Augmented Generation",
    overview: "An advanced conversational AI system that leverages Retrieval-Augmented Generation (RAG) to provide intelligent HR assistance. Built with Google Gemini AI and Django, the system combines vector embeddings with semantic similarity search to deliver contextually accurate responses about employee data, attendance records, and HR policies. Features real-time chat interface, conversation history, and statistical analysis for performance monitoring.",
    
    projectInfo: {
      status: "Production",
      team: "Solo Project",
      role: "AI Engineer & Full-Stack Developer",
      year: "2024"
    },
    
    tags: ["RAG", "Vector Embeddings", "Python", "Machine Learning", "NLP", "Django", "Google Gemini", "AI Chatbot"],
    
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    
    links: {
      github: "https://github.com/minhduoc611/ai-hr-assistant",
      demo: "#"
    },
    
    keyFeatures: [
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description: "Advanced RAG implementation combining Google Gemini AI with vector embeddings for contextually accurate responses based on company data and employee information",
        icon: <Brain className="w-6 h-6" />,
        details: ["Vector embeddings with embedding-001 model", "Semantic similarity search for question matching", "Context-aware response generation", "Real-time data retrieval integration"],
        techDetails: {
          technology: "Google Gemini 2.0-flash + Vector Embeddings",
          features: ["genai.embed_content() for text vectorization", "Cosine similarity for query matching", "Dynamic context injection", "Multi-source data aggregation", "Conversation memory management"]
        }
      },
      {
        title: "Intelligent Data Extraction",
        description: "Sophisticated data extraction system that automatically retrieves relevant employee information, attendance records, and HR statistics based on user queries",
        icon: <Database className="w-6 h-6" />,
        details: ["Employee profile extraction", "Attendance data analysis", "Department and role information", "Historical data comparison"],
        techDetails: {
          technology: "Django ORM + Smart Query Processing",
          features: ["extract_employee_data() for profile info", "extract_attendance_data() for time tracking", "Automatic month/year detection", "Statistical calculations", "Multi-table joins optimization"]
        }
      },
      {
        title: "Real-Time Chat Interface",
        description: "Modern, responsive chat interface with real-time messaging, typing indicators, and conversation history, built with Django templates and JavaScript",
        icon: <MessageSquare className="w-6 h-6" />,
        details: ["Real-time messaging with AJAX", "Typing indicators and loading animations", "Message formatting and display", "Conversation history persistence"],
        techDetails: {
          technology: "Django Templates + JavaScript + Tailwind CSS",
          features: ["Event-driven UI updates", "Auto-scroll to latest messages", "Message bubble styling", "Enter key submission", "Error handling with user feedback"]
        }
      },
      {
        title: "Semantic Query Understanding",
        description: "Advanced natural language processing to understand complex HR queries, extract temporal information, and route to appropriate data sources",
        icon: <Target className="w-6 h-6" />,
        details: ["Natural language query parsing", "Temporal information extraction", "Context keyword detection", "Intent classification"],
        techDetails: {
          technology: "Regular Expressions + NLP Pattern Matching",
          features: ["Month/year extraction with Vietnamese support", "Keyword-based routing logic", "Query similarity scoring", "Context-aware data filtering", "Multi-language date parsing"]
        }
      },
      {
        title: "Vector Similarity Search",
        description: "Sophisticated similarity search system using vector embeddings to find relevant past conversations and provide consistent, contextual responses",
        icon: <Zap className="w-6 h-6" />,
        details: ["Vector embedding generation", "Similarity scoring algorithms", "Past conversation matching", "Context ranking and filtering"],
        techDetails: {
          technology: "Google Gemini Embedding API + Custom Similarity Engine",
          features: ["create_embedding() function", "find_similar_past_questions() matching", "Cosine similarity calculations", "Conversation context scoring", "Dynamic similarity thresholds"]
        }
      },
      {
        title: "Comprehensive HR Analytics",
        description: "Advanced analytics engine that processes attendance data, generates insights, and provides statistical analysis for workforce management",
        icon: <BarChart3 className="w-6 h-6" />,
        details: ["Attendance pattern analysis", "Weekly/monthly statistics", "Comparative data analysis", "Performance trend tracking"],
        techDetails: {
          technology: "Python Statistics + Django Aggregation",
          features: ["Weekday attendance patterns", "Month-over-month comparisons", "Average calculation algorithms", "Missing workday detection", "Time-based trend analysis"]
        }
      },
      {
        title: "Multi-Source Data Integration",
        description: "Seamless integration of multiple HR data sources including employee profiles, attendance records, departments, and job titles for comprehensive responses",
        icon: <Users className="w-6 h-6" />,
        details: ["Employee profile management", "Attendance system integration", "Department structure mapping", "Role-based information access"],
        techDetails: {
          technology: "Django Model Relationships + Foreign Key Optimization",
          features: ["Employee, Department, JobTitle models", "AttendanceRecord with check-in/out data", "Location-based attendance tracking", "Role-based data filtering", "Optimized database queries"]
        }
      },
      {
        title: "Conversation Memory & Learning",
        description: "Intelligent conversation management system that maintains chat history, learns from interactions, and improves response quality over time",
        icon: <Settings className="w-6 h-6" />,
        details: ["Persistent conversation history", "User preference learning", "Response quality optimization", "Context-aware follow-ups"],
        techDetails: {
          technology: "Django Models + JSON Storage + Machine Learning",
          features: ["ChatbotGemini model for history", "JSON field for embedding storage", "User-specific conversation tracking", "Response pattern analysis", "Continuous learning pipeline"]
        }
      }
    ],
    
    
    architecture: {
      description: "The system follows a modern RAG architecture with clear separation between AI processing, data retrieval, and user interface layers, enabling scalable and maintainable HR assistance.",
      components: [
        "Google Gemini AI integration with vector embeddings",
        "Django-based RAG pipeline with smart data extraction",
        "Real-time chat interface with conversation memory",
        "Vector similarity search engine for query matching",
        "Multi-source HR data integration layer",
        "Conversation analytics and learning system"
      ]
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {projectData.title}
            </h1>
            
            <p className="text-xl text-blue-400 mb-6 font-medium">
              {projectData.subtitle}
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed" style={{color: '#e0e0ff'}}>
              {projectData.overview}
            </p>

            {/* Project Info Cards */}

          </div>

          {/* Project Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={projectData.heroImage} 
                alt={projectData.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
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

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features & AI Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.keyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {feature.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-400 mb-2">Core Features:</h4>
                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {feature.techDetails && (
                  <div className="border-t border-gray-600/30 pt-3">
                    <h4 className="text-xs font-medium text-gray-400 mb-2">Technical Implementation:</h4>
                    {feature.techDetails.technology && (
                      <p className="text-xs text-gray-500 mb-1">
                        <span className="text-blue-400">Technology:</span> {feature.techDetails.technology}
                      </p>
                    )}
                    {feature.techDetails.features && feature.techDetails.features.length > 0 && (
                      <div className="mt-2">
                        <p className="text-xs text-blue-400 mb-1">Advanced Features:</p>
                        <ul className="space-y-1">
                          {feature.techDetails.features.slice(0, 3).map((techFeature, idx) => (
                            <li key={idx} className="flex items-center text-xs text-gray-600">
                              <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                              {techFeature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* RAG Architecture Flow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">RAG Architecture & Implementation</h2>
          
          {/* RAG Pipeline */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">RAG Pipeline Flow</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* Query Processing */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <MessageSquare className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Query Processing</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Natural language parsing</p>
                  <p>• Intent classification</p>
                  <p>• Temporal extraction</p>
                  <p>• Context understanding</p>
                </div>
              </div>

              {/* Data Retrieval */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Data Retrieval</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Employee data extraction</p>
                  <p>• Attendance record analysis</p>
                  <p>• Multi-source aggregation</p>
                  <p>• Context-aware filtering</p>
                </div>
              </div>

              {/* Vector Search */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Vector Search</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Embedding generation</p>
                  <p>• Similarity calculation</p>
                  <p>• Past conversation matching</p>
                  <p>• Context ranking</p>
                </div>
              </div>

              {/* AI Generation */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                  <Zap className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">AI Generation</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Google Gemini processing</p>
                  <p>• Context-aware responses</p>
                  <p>• Multi-language support</p>
                  <p>• Conversation memory</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Implementation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">RAG Implementation</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="space-y-2">
                  <div className="text-green-400"># Main RAG function</div>
                  <div className="text-blue-400">def get_rag_answer(query, employee_id):</div>
                  <div className="ml-4">employee_data = extract_employee_data(employee_id)</div>
                  <div className="ml-4">attendance_data = extract_attendance_data(query, employee_id)</div>
                  <div className="ml-4">similar_questions = find_similar_past_questions(query, employee_id)</div>
                  <div className="ml-4">response = model.start_chat().send_message(prompt)</div>
                  <div className="ml-4">return response.text</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Vector Embeddings</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="space-y-2">
                  <div className="text-green-400"># Embedding creation</div>
                  <div className="text-blue-400">def create_embedding(text):</div>
                  <div className="ml-4">result = genai.embed_content(</div>
                  <div className="ml-8">model="models/embedding-001",</div>
                  <div className="ml-8">content=text,</div>
                  <div className="ml-8">task_type="retrieval_document"</div>
                  <div className="ml-4">)</div>
                  <div className="ml-4">return result.embedding</div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flow Architecture */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Smart Data Extraction System</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Employee Data</h4>
                <div className="space-y-3">
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <p className="text-blue-400 font-medium">extract_employee_data()</p>
                    <p className="text-gray-400 text-sm">Profile, department, job title</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <p className="text-blue-400 font-medium">Department Info</p>
                    <p className="text-gray-400 text-sm">Team structure, employee counts</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <p className="text-blue-400 font-medium">Job Titles</p>
                    <p className="text-gray-400 text-sm">Salary rates, bonuses, KPIs</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Attendance Analysis</h4>
                <div className="space-y-3">
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <p className="text-blue-400 font-medium">extract_attendance_data()</p>
                    <p className="text-gray-400 text-sm">Check-in/out records, hours</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <p className="text-blue-400 font-medium">Statistical Analysis</p>
                    <p className="text-gray-400 text-sm">Weekly patterns, comparisons</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <p className="text-blue-400 font-medium">Temporal Processing</p>
                    <p className="text-gray-400 text-sm">Month/year detection, trends</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Conversation Intelligence</h4>
                <div className="space-y-3">
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <p className="text-blue-400 font-medium">find_similar_past_questions()</p>
                    <p className="text-gray-400 text-sm">Query matching, context</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <p className="text-blue-400 font-medium">Chat History</p>
                    <p className="text-gray-400 text-sm">Conversation memory, learning</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <p className="text-blue-400 font-medium">Context Injection</p>
                    <p className="text-gray-400 text-sm">Dynamic prompt building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}


        {/* Chat Interface Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Real-Time Chat Interface</h2>
          
          {/* Chat UI Mockup */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Interactive Chat Experience</h3>
            
            {/* Mock Chat Window */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto">
              {/* Chat Header */}
              <div className="bg-yellow-600 text-white py-4 px-6 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-yellow-600" />
                </div>
                <h4 className="text-lg font-bold">Chat với Gemini</h4>
              </div>
              
              {/* Chat Messages */}
              <div className="p-6 space-y-4 h-80 overflow-y-auto bg-gray-50">
                
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-yellow-600 text-white p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Cho tôi biết thông tin chấm công tháng này</p>
                  </div>
                </div>
                
                {/* AI Response */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg max-w-md">
                    <div className="text-sm font-semibold text-blue-600 mb-1">Gemini</div>
                    <div className="text-sm text-gray-800">
                      <p><strong>Thông tin chấm công tháng 12/2024:</strong></p>
                      <p>• Tổng số ngày làm việc: 22 ngày</p>
                      <p>• Tổng số giờ làm việc: 176.5 giờ</p>
                      <p>• Nhóm làm việc: Development Team</p>
                      <p>• Số giờ làm việc trung bình: 8.02 giờ/ngày</p>
                    </div>
                  </div>
                </div>
                
                {/* User Follow-up */}
                <div className="flex justify-end">
                  <div className="bg-yellow-600 text-white p-3 rounded-lg max-w-xs">
                    <p className="text-sm">So sánh với tháng trước như thế nào?</p>
                  </div>
                </div>
                
                {/* AI Analysis */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg max-w-md">
                    <div className="text-sm font-semibold text-blue-600 mb-1">Gemini</div>
                    <div className="text-sm text-gray-800">
                      <p><strong>So sánh với tháng 11/2024:</strong></p>
                      <p>• Tháng trước: 20 ngày, 160.0 giờ</p>
                      <p>• Tháng hiện tại: 22 ngày, 176.5 giờ</p>
                      <p>• Chênh lệch: +2 ngày, +16.5 giờ</p>
                      <p>📈 Bạn đã làm việc nhiều hơn tháng trước!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t flex space-x-3 bg-white">
                <input 
                  type="text" 
                  placeholder="Nhập tin nhắn..." 
                  className="flex-grow p-2 border rounded-lg text-sm text-gray-600"
                  disabled
                />
                <button className="bg-yellow-600 text-white p-2 rounded-lg">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* UI Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Real-time Messaging</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• AJAX-based message sending</p>
                <p>• Auto-scroll to latest messages</p>
                <p>• Loading animations with bounce effect</p>
                <p>• Enter key submission support</p>
                <p>• Error handling with user feedback</p>
              </div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Message Formatting</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• formatText() function for styling</p>
                <p>• Bold/italic text support (**text**)</p>
                <p>• Bullet point conversion</p>
                <p>• Line break preservation</p>
                <p>• HTML sanitization</p>
              </div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Conversation History</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Persistent chat storage</p>
                <p>• User-specific conversations</p>
                <p>• Message bubble styling</p>
                <p>• Timestamp tracking</p>
                <p>• Context preservation</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Implementation Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">AI Implementation & Code Examples</h2>
          
          {/* Code Examples */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Django View Implementation */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Django RAG View</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="space-y-2">
                  <div className="text-green-400"># AI-powered HR assistant endpoint</div>
                  <div className="text-blue-400">@login_required</div>
                  <div className="text-blue-400">def ask_question(request):</div>
                  <div className="ml-4">text = request.POST.get("text")</div>
                  <div className="ml-4">employee = Employee.objects.get(user=request.user)</div>
                  <div className="ml-4">response_text = get_rag_answer(text, employee.id)</div>
                  <div className="ml-4">embedding = create_embedding(text)</div>
                  <div className="ml-4">ChatbotGemini.objects.create(</div>
                  <div className="ml-8">text_input=text,</div>
                  <div className="ml-8">gemini_output=response_text,</div>
                  <div className="ml-8">Employee=employee,</div>
                  <div className="ml-8">embedding=embedding</div>
                  <div className="ml-4">)</div>
                  <div className="ml-4">return JsonResponse({`"data": {"text": response_text}`})</div>
                </div>
              </div>
            </div>

            {/* Query Processing Function */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Intelligent Query Processing</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="space-y-2">
                  <div className="text-green-400"># Natural language understanding</div>
                  <div className="text-blue-400">def extract_attendance_data(query, employee_id):</div>
                  <div className="ml-4">month_keywords = {`{`}</div>
                  <div className="ml-8">'tháng 1': 1, 'tháng một': 1,</div>
                  <div className="ml-8">'tháng 2': 2, 'tháng hai': 2,</div>
                  <div className="ml-8"># ... Vietnamese month mapping</div>
                  <div className="ml-4">{`}`}</div>
                  <div className="ml-4">for month_name, month_num in month_keywords.items():</div>
                  <div className="ml-8">if month_name in query.lower():</div>
                  <div className="ml-12">current_month = month_num</div>
                  <div className="ml-4">year_match = re.search(r'năm (\d{`{4}`})', query.lower())</div>
                  <div className="ml-4">if year_match:</div>
                  <div className="ml-8">current_year = int(year_match.group(1))</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Model Integration */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Google Gemini Integration</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Embedding Generation</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                  <div className="space-y-1">
                    <div className="text-blue-400">def create_embedding(text):</div>
                    <div className="ml-4">result = genai.embed_content(</div>
                    <div className="ml-8">model="models/embedding-001",</div>
                    <div className="ml-8">content=text,</div>
                    <div className="ml-8">task_type="retrieval_document"</div>
                    <div className="ml-4">)</div>
                    <div className="ml-4">return result.embedding</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Response Generation</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                  <div className="space-y-1">
                    <div className="text-blue-400">model = genai.GenerativeModel("gemini-2.0-flash")</div>
                    <div className="text-blue-400">chat = model.start_chat()</div>
                    <div className="text-blue-400">response = chat.send_message(prompt)</div>
                    <div className="text-blue-400">return response.text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">System Architecture & AI Pipeline</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            <p className="text-gray-300 mb-6 text-center text-lg">
              {projectData.architecture.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectData.architecture.components.map((component, index) => (
                <div key={index} className="flex items-center bg-gray-700/30 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Database Schema */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Database Schema & Data Models</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">ChatbotGemini Model</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="space-y-1">
                  <div className="text-blue-400">class ChatbotGemini(models.Model):</div>
                  <div className="ml-4">Employee = models.ForeignKey(Employee, ...)</div>
                  <div className="ml-4">text_input = models.CharField(max_length=500)</div>
                  <div className="ml-4">gemini_output = models.TextField()</div>
                  <div className="ml-4">date = models.DateTimeField(auto_now_add=True)</div>
                  <div className="ml-4">embedding = models.JSONField()</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Data Relationships</h3>
              <div className="space-y-3">
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h4 className="text-white font-medium mb-1">Employee → ChatbotGemini</h4>
                  <p className="text-gray-400 text-sm">One-to-many relationship for conversation history</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h4 className="text-white font-medium mb-1">Employee → AttendanceRecord</h4>
                  <p className="text-gray-400 text-sm">Time tracking and work hour analysis</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h4 className="text-white font-medium mb-1">Employee → Department</h4>
                  <p className="text-gray-400 text-sm">Organizational structure and role-based access</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Links & Actions */}


      </div>
    </div>
  );
};

export default RAGProjectDetail;