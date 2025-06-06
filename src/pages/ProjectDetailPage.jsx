import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Database, Target, BarChart3, Award, CheckCircle } from 'lucide-react';
import ERDImage from '../assets/images/ERD.webp';

const ProjectDetailPage = () => {
  // Data dự án HRMS
  const projectData = {
    title: "Human Resource Management System",
    subtitle: "Enterprise HRMS for The SHEA Company",
    overview: "This enterprise-level Human Resource Management System was developed to transform The SHEA Company's HR operations from manual processes to a fully automated, data-driven approach. The system integrates multiple HR functions into a unified platform, providing real-time analytics and insights that enable strategic decision-making across all HR domains.",
    
    projectInfo: {
      status: "Production",
      team: "5 developers",
      role: "Lead Analytics Engineer & Backend Developer",
      year: "2023-2024"
    },
    
    tags: ["Django", "PostgreSQL", "Tableau", "Lark Suite API", "Data Analytics", "Redis", "Celery"],
    
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    
    links: {
      github: "https://github.com/minhduoc611/hrms-system",
      demo: "#"
    },
    
    keyFeatures: [
      {
        title: "Attendance Management",
        description: "Automated check-in/check-out system integrated with Lark Attendance, featuring real-time data synchronization, work schedule management, and precise working hours calculation",
        icon: <Calendar className="w-6 h-6" />,
        details: ["Auto sync from Lark Attendance API", "Check-in/out time editing", "Work schedule registration", "Working hours calculation"],
        techDetails: {
          integration: "OAuth 2.0 authentication with Lark Suite API",
          automation: "Django Celery for background sync every 10 minutes",
          features: ["GPS/WiFi-based check-in", "Flexible shift management", "OT approval workflow", "Multi-shift support"]
        }
      },
      {
        title: "Recruitment System",
        description: "End-to-end recruitment process from job posting to onboarding with automated candidate evaluation and email workflows",
        icon: <Target className="w-6 h-6" />,
        details: ["Job posting automation", "Resume parsing & storage", "Interview scheduling", "Automated email notifications"],
        techDetails: {
          integration: "Lark Base + Lark Form + Lark Anycross integration",
          automation: "Automated CV download and processing",
          features: ["Multi-stage evaluation", "Email automation for all recruitment stages", "Interview confirmation system", "Candidate management dashboard"]
        }
      },
      {
        title: "Training & Development", 
        description: "Comprehensive training program management with course registration, progress tracking, and performance evaluation",
        icon: <Users className="w-6 h-6" />,
        details: ["Course management", "Employee enrollment", "Progress tracking", "Performance evaluation"],
        techDetails: {
          features: ["Role-based course access", "Automated enrollment", "Training completion tracking", "Post-training assessment"]
        }
      },
      {
        title: "Employee Management",
        description: "Complete employee lifecycle management with role-based access control and profile management",
        icon: <Code className="w-6 h-6" />,
        details: ["Employee profiles", "Role management", "Access control", "Personal information management"],
        techDetails: {
          features: ["3-tier role system (Admin/HR/Employee)", "Middleware-based permissions", "Profile editing", "Password management"]
        }
      },
      {
        title: "Payroll Integration",
        description: "Automated payroll processing with working hours calculation, salary computation, and detailed reporting", 
        icon: <Database className="w-6 h-6" />,
        details: ["Salary calculations", "Working hours integration", "Payroll reports", "Individual pay slips"],
        techDetails: {
          features: ["Automated hour calculation from attendance", "Customizable salary components", "Monthly payroll generation", "Detailed payroll analytics"]
        }
      },
      {
        title: "Analytics Dashboard",
        description: "Advanced HR analytics with Tableau integration providing real-time insights and automated reporting",
        icon: <BarChart3 className="w-6 h-6" />,
        details: ["Real-time dashboards", "Google Sheets sync", "Tableau integration", "Automated data refresh"],
        techDetails: {
          integration: "Google Sheets API + Tableau Public",
          automation: "Selenium-based dashboard refresh",
          features: ["Service Account authentication", "Scheduled data sync", "Interactive dashboards", "Embedded analytics"]
        }
      },
      {
        title: "Internal Communication",
        description: "Integrated communication platform with real-time chat, AI chatbots, and system assistant",
        icon: <Users className="w-6 h-6" />,
        details: ["Peer-to-peer chat", "Google Gemini chatbot", "System assistant", "Real-time messaging"],
        techDetails: {
          technology: "WebSocket + Django Channels",
          features: ["Real-time messaging", "Google Gemini AI integration", "Regex-based system bot", "Employee lookup assistance"]
        }
      },
      {
        title: "Work Schedule Management",
        description: "Flexible work schedule system with registration, modification, and comprehensive schedule viewing",
        icon: <Calendar className="w-6 h-6" />,
        details: ["Schedule registration", "Personal schedule view", "Team schedule overview", "Schedule modifications"],
        techDetails: {
          features: ["Weekly schedule planning", "Individual schedule management", "Team-wide schedule visibility", "Schedule conflict detection"]
        }
      }
    ],
    
    techStack: {
      "Backend Framework": ["Django 4.2", "Django REST Framework", "Celery", "Redis"],
      "Database": ["PostgreSQL 14", "Redis Cache", "Django ORM"],
      "Frontend": ["Django Templates", "JavaScript ES6", "Bootstrap 5", "Chart.js"],
      "Analytics": ["Tableau Server", "Pandas", "NumPy", "Matplotlib"],
      "APIs & Integrations": ["Lark Suite API", "RESTful APIs", "WebHooks"],
      "DevOps": ["Docker", "Nginx", "Gunicorn", "GitHub Actions"]
    },
    
    challenges: [
      {
        title: "Lark Suite API Integration & Authentication",
        problem: "Managing OAuth 2.0 authentication with Lark Suite APIs, handling token expiration (2-hour lifecycle), and ensuring seamless data synchronization across multiple Lark services (Base, Attendance, Form, Anycross)",
        solution: "Implemented automated token refresh mechanism with Redis caching, created unified API gateway with retry mechanisms, and built event-driven architecture using Celery workers for background synchronization tasks"
      },
      {
        title: "Real-time Data Synchronization at Scale", 
        problem: "Synchronizing attendance data, recruitment information, and employee records between Lark Suite and internal database in real-time while handling API rate limits, network failures, and large datasets",
        solution: "Built robust ETL pipeline with Celery Beat scheduling (10-minute intervals), implemented intelligent error handling with exponential backoff, and created data validation layers to ensure consistency across systems"
      },
      {
        title: "Complex Multi-Role Access Control",
        problem: "Implementing granular permission system across 8 major modules with 3-tier role hierarchy (Admin/HR/Employee), ensuring data security and appropriate access levels for sensitive HR information",
        solution: "Developed Django middleware-based permission system with custom decorators, created role-based views and API endpoints, and implemented module-specific access controls with audit logging"
      },
      {
        title: "Performance Optimization for Large Datasets",
        problem: "Dashboard queries becoming slow with 10,000+ employee records, millions of attendance entries, and real-time analytics requirements affecting user experience across multiple modules",
        solution: "Implemented database indexing strategies, Redis caching for frequently accessed data, query optimization with pagination, and asynchronous data processing with background task queues"
      },
      {
        title: "Automated Workflow Orchestration",
        problem: "Coordinating complex workflows across recruitment (email automation), attendance (data sync), payroll (calculation), and analytics (dashboard refresh) while maintaining system reliability",
        solution: "Created microservice-like architecture with Django Celery, implemented workflow state management, built monitoring and alerting systems, and established automated backup and recovery procedures"
      }
    ],
    
    achievements: [
      {
        metric: "8",
        description: "Major modules implemented"
      },
      {
        metric: "75%",
        description: "Reduction in HR processing time"
      },
      {
        metric: "10,000+", 
        description: "Employee records managed"
      },
      {
        metric: "95%",
        description: "Data accuracy improvement"
      },
      {
        metric: "40+",
        description: "Automated HR workflows"
      },
      {
        metric: "24/7",
        description: "Real-time data synchronization"
      },
      {
        metric: "5",
        description: "Lark Suite integrations"
      },
      {
        metric: "3-Tier",
        description: "Role-based access system"
      }
    ],
    
    architecture: {
      description: "The system follows a modular, scalable architecture with clear separation of concerns, enabling easy maintenance and future enhancements.",
      components: [
        "Django backend with RESTful APIs",
        "PostgreSQL for relational data storage",
        "Redis for caching and session management", 
        "Celery for background task processing",
        "Tableau for advanced analytics and reporting",
        "Lark Suite integration for attendance and communication"
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
      {/* Background Elements - đồng bộ với index.html */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Nền lưới dữ liệu */}
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
        
        {/* Hiệu ứng orb */}
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
          <span className="font-medium">Back to Portfolio</span>
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {projectData.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-blue-400 mb-6 font-medium">
              {projectData.subtitle}
            </p>
            
            {/* Overview */}
            <p className="text-gray-300 text-lg leading-relaxed" style={{color: '#e0e0ff'}}>
              {projectData.overview}
            </p>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features & Modules</h2>
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
                
                {/* Main Features */}
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

                {/* Technical Details */}
                {feature.techDetails && (
                  <div className="border-t border-gray-600/30 pt-3">
                    <h4 className="text-xs font-medium text-gray-400 mb-2">Technical Implementation:</h4>
                    {feature.techDetails.integration && (
                      <p className="text-xs text-gray-500 mb-1">
                        <span className="text-blue-400">Integration:</span> {feature.techDetails.integration}
                      </p>
                    )}
                    {feature.techDetails.automation && (
                      <p className="text-xs text-gray-500 mb-1">
                        <span className="text-blue-400">Automation:</span> {feature.techDetails.automation}
                      </p>
                    )}
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

        {/* System Design & Interface */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">System Design & Interface</h2>
          
          {/* Database ERD */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Entity Relationship Diagram (ERD)</h3>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
              <img 
                src={ERDImage} 
                alt="HRMS Database Entity Relationship Diagram"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Web App Interface Screenshots */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Web Application Interface</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Login Interface */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-48 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Login Page</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Authentication Interface</h4>
                <p className="text-gray-400 text-xs">Secure login system with role-based access</p>
              </div>

              {/* Dashboard */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-48 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Dashboard</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Main Dashboard</h4>
                <p className="text-gray-400 text-xs">Overview with key metrics and quick actions</p>
              </div>

              {/* Recruitment Module */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-48 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Recruitment</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Job Management</h4>
                <p className="text-gray-400 text-xs">Job posting and candidate management interface</p>
              </div>

              {/* Attendance Module */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-48 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Attendance</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Attendance Management</h4>
                <p className="text-gray-400 text-xs">Check-in/out records and schedule management</p>
              </div>

              {/* Employee Management */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-48 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Employee Mgmt</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Employee Records</h4>
                <p className="text-gray-400 text-xs">Comprehensive employee profile management</p>
              </div>

              {/* Payroll Module */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-48 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <Database className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Payroll</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Payroll System</h4>
                <p className="text-gray-400 text-xs">Salary calculation and payment processing</p>
              </div>

            </div>
          </div>

          {/* Lark Suite Integration Flow */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Lark Suite Integration Architecture</h3>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
              <div className="bg-gray-700/30 rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-gray-600">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">System Architecture Flow</p>
                  <p className="text-gray-500 text-sm">Lark Suite API integration and data flow diagram</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Interface (Lark App) */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Mobile Interface (Lark App)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Mobile Check-in */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-64 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Check-in</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Mobile Check-in</h4>
                <p className="text-gray-400 text-xs">GPS-based attendance tracking</p>
              </div>

              {/* Recruitment Form */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-64 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Application Form</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Job Application</h4>
                <p className="text-gray-400 text-xs">Candidate application interface</p>
              </div>

              {/* Lark Base Management */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-64 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <Database className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Lark Base</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Data Management</h4>
                <p className="text-gray-400 text-xs">Lark Base data organization</p>
              </div>

              {/* Email Automation */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/40">
                <div className="bg-gray-700/30 rounded-lg h-64 flex items-center justify-center border border-gray-600 mb-3">
                  <div className="text-center">
                    <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Email Flow</p>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Email Automation</h4>
                <p className="text-gray-400 text-xs">Automated recruitment emails</p>
              </div>

            </div>
          </div>

        </section>

        {/* System Workflow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">System Workflow & Integration</h2>
          <div className="space-y-8">
            
            {/* Recruitment Workflow */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Recruitment Automation Workflow</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Automated Process Flow</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <p className="text-white font-medium">Job Posting Creation</p>
                        <p className="text-gray-400 text-sm">HR creates job positions on Lark Base with auto-sync to Web App</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <p className="text-white font-medium">Candidate Application</p>
                        <p className="text-gray-400 text-sm">Candidates apply via Lark Form with automatic CV parsing and storage</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <p className="text-white font-medium">Automated Email Workflows</p>
                        <p className="text-gray-400 text-sm">Lark Anycross triggers automated emails for each recruitment stage</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <div>
                        <p className="text-white font-medium">Interview Management</p>
                        <p className="text-gray-400 text-sm">Automated interview scheduling with confirmation forms</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Integration Architecture</h4>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400">Lark Base</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-white">Web App</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400">Lark Form</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-white">Django API</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400">Lark Anycross</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-white">Gmail</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400">Celery</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-white">Background Sync</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance Workflow */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Attendance Management System</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Shift Types</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <p className="text-blue-400 font-medium">Flexible Shift</p>
                      <p className="text-gray-400 text-sm">24/7 availability, 20 hours/week minimum</p>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <p className="text-blue-400 font-medium">Scheduled Shift</p>
                      <p className="text-gray-400 text-sm">Pre-registered specific work hours</p>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <p className="text-blue-400 font-medium">Fixed Shift</p>
                      <p className="text-gray-400 text-sm">Traditional 9-5 with lunch breaks</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Check-in Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">GPS-based location verification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">WiFi network authentication</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Mobile app integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Real-time data sync</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Data Processing</h4>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">10 min</div>
                      <p className="text-gray-400 text-sm mb-4">Sync Interval</p>
                      <div className="space-y-2 text-xs text-gray-500">
                        <p>• OAuth 2.0 authentication</p>
                        <p>• JSON data processing</p>
                        <p>• Celery background tasks</p>
                        <p>• Redis queue management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">System Architecture</h2>
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
      </div>
    </div>
  );
};

export default ProjectDetailPage;