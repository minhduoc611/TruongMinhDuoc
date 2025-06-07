import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Database, Code, Target, BarChart3, Award, CheckCircle, Clock, FileText, Zap, Settings } from 'lucide-react';

const CourseraProjectDetail = () => {
  const projectData = {
    title: "Automated Coursera Data Collection System",
    subtitle: "End-to-End ETL Pipeline for Course Data Analytics",
    overview: "This comprehensive data collection system automates the entire process of gathering, processing, and analyzing Coursera course information. Built with robust ETL processes and scheduled automation, the system ensures consistent data quality and provides valuable insights into online education trends, course popularity, and market analysis for educational content strategy.",
    

    
    tags: ["Python", "Pandas", "ETL", "Web Scraping", "Task Scheduler", "Data Analytics", "BeautifulSoup", "Requests"],
    
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    
    links: {
      github: "https://github.com/minhduoc611/coursera-data-collection",
      demo: "#"
    },
    
    keyFeatures: [
      {
        title: "Intelligent Web Scraping Engine",
        description: "Advanced Selenium-based scraping system that navigates Coursera's dynamic course catalog, handles JavaScript-heavy pages, and extracts comprehensive course information with sophisticated anti-detection measures",
        icon: <Code className="w-6 h-6" />,
        details: ["Dynamic content handling with Selenium WebDriver", "Smart pagination with automatic page detection", "Course card extraction from ProductCard grid", "Image download with quality optimization"],
        techDetails: {
          technology: "Selenium WebDriver + Chrome automation + BeautifulSoup4",
          features: ["User-agent spoofing and rotation", "Scroll-based image loading", "Element visibility waiting", "Graceful error recovery", "Anti-bot detection bypass"]
        }
      },
      {
        title: "Dual-Phase Data Collection",
        description: "Two-stage collection process: ListView for bulk URL harvesting and DetailView for comprehensive course information extraction, ensuring complete data coverage",
        icon: <Database className="w-6 h-6" />,
        details: ["ListView: Course URL and thumbnail collection", "DetailView: Detailed course information extraction", "CSV-based tracking and deduplication", "Incremental data processing"],
        techDetails: {
          technology: "Modular Python architecture with CSV state management",
          features: ["list_info_all.csv for URL tracking", "detail_info_attempt.csv for results", "Automatic new URL detection", "Part-based folder organization", "Progress tracking and resumability"]
        }
      },
      {
        title: "Automated Scheduling System",
        description: "Windows Task Scheduler integration with robust batch scripts for fully automated data collection cycles, eliminating manual intervention requirements",
        icon: <Clock className="w-6 h-6" />,
        details: ["Batch script automation (.bat files)", "Virtual environment activation", "Sequential script execution", "Error handling and logging"],
        techDetails: {
          technology: "Windows Batch Scripts + Task Scheduler + Python venv",
          features: ["Automatic venv activation", "Sequential execution (Coursera.py → data-processing.py)", "Error propagation and handling", "Working directory management", "Process monitoring"]
        }
      },
      {
        title: "Advanced Data Processing Pipeline",
        description: "Sophisticated ETL pipeline with data cleaning, format standardization, and quality enhancement specifically designed for Coursera's data structure",
        icon: <CheckCircle className="w-6 h-6" />,
        details: ["Rating format standardization (4.5 from 45)", "Enrollment count cleaning and parsing", "Text field cleaning and validation", "Level classification and filtering"],
        techDetails: {
          technology: "Pandas + Regular Expressions + Custom formatters",
          features: ["format_rating() for decimal conversion", "format_rating_count() for number extraction", "clean_level_field() for validation", "Comprehensive text cleaning", "Data type enforcement"]
        }
      },
      {
        title: "Google Cloud Integration",
        description: "Seamless integration with Google Drive for image storage and Google Sheets for data visualization, creating a complete cloud-based analytics pipeline",
        icon: <BarChart3 className="w-6 h-6" />,
        details: ["Automated image upload to Google Drive", "Google Sheets data synchronization", "Service account authentication", "Retry mechanisms for reliability"],
        techDetails: {
          technology: "Google Drive API v3 + Google Sheets API v4 + Service Account",
          features: ["OAuth 2.0 service account authentication", "Batch image upload with retry logic", "Public link generation for images", "Append-only Google Sheets updates", "Rate limiting and error handling"]
        }
      },
      {
        title: "Hierarchical File Organization",
        description: "Sophisticated file structure with timestamp-based organization and part-based scaling for handling large datasets efficiently",
        icon: <FileText className="w-6 h-6" />,
        details: ["Year/Month/Day/HourMinute folder structure", "ListView and DetailView separation", "Part-based scaling (300 URLs per part)", "Image organization with relative paths"],
        techDetails: {
          technology: "Python pathlib + OS file management + JSON/CSV I/O",
          features: ["Dynamic folder creation", "Relative path management", "JSON and CSV dual storage", "HTML page source backup", "Image subfolder organization"]
        }
      },
      {
        title: "Comprehensive Course Data Extraction",
        description: "Detailed extraction of 15+ course attributes including ratings, enrollment counts, instructor information, learning time, and course descriptions",
        icon: <Target className="w-6 h-6" />,
        details: ["Course name, description, and detailed description", "Rating and review count extraction", "Instructor list and enrollment numbers", "Learning time and difficulty level"],
        techDetails: {
          technology: "CSS selector-based extraction + Multiple fallback selectors",
          features: ["Multi-selector fallback strategy", "Dynamic content waiting", "Text cleaning and normalization", "Image quality optimization", "Comprehensive error logging"]
        }
      },
      {
        title: "Robust Error Handling & Monitoring",
        description: "Enterprise-grade error handling with detailed logging, progress tracking, and automatic recovery mechanisms for production reliability",
        icon: <Settings className="w-6 h-6" />,
        details: ["Comprehensive Python logging system", "Progress tracking and reporting", "Safe element finding with timeouts", "Automatic retry with exponential backoff"],
        techDetails: {
          technology: "Python logging + Exception handling + Timeout management",
          features: ["File-based logging with rotation", "Element waiting with WebDriverWait", "Try-catch with graceful degradation", "Progress percentage reporting", "Success/failure rate tracking"]
        }
      }
    ],
    

    

    

    
    architecture: {
      description: "The system follows a modular, pipeline-based architecture with clear separation between data collection, processing, and storage layers, enabling easy maintenance and scalability.",
      components: [
        "Web scraping engine with intelligent content detection",
        "ETL pipeline with multi-stage data transformation",
        "Automated scheduling with Windows Task Scheduler",
        "Data quality validation and monitoring framework",
        "Flexible storage system with multiple export formats",
        "Performance monitoring and alerting system"
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
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features & Components</h2>
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

        {/* System Architecture & Code Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">System Architecture & Code Structure</h2>
          
          {/* Main Architecture Diagram */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Complete System Flow</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* Batch Script */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <Settings className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Automation.bat</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Activate Python venv</p>
                  <p>• Execute Coursera.py --mode=both</p>
                  <p>• Run data-processing.py</p>
                  <p>• Error handling & logging</p>
                </div>
              </div>

              {/* Coursera.py */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Coursera.py</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• ListView: URL collection</p>
                  <p>• DetailView: Data extraction</p>
                  <p>• Selenium automation</p>
                  <p>• File organization</p>
                </div>
              </div>

              {/* Data Processing */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">data-processing.py</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Data cleaning & formatting</p>
                  <p>• Google Drive image upload</p>
                  <p>• Google Sheets sync</p>
                  <p>• Quality validation</p>
                </div>
              </div>

              {/* Output */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                  <BarChart3 className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Final Output</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Structured CSV files</p>
                  <p>• Google Sheets dashboard</p>
                  <p>• Cloud-hosted images</p>
                  <p>• Analytics-ready data</p>
                </div>
              </div>
            </div>
          </div>

          {/* File Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">File Organization Structure</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="space-y-1">
                  <div>COURSERA/</div>
                  <div className="ml-2">└── 2024/</div>
                  <div className="ml-4">└── 12/</div>
                  <div className="ml-6">└── 15/</div>
                  <div className="ml-8">└── 1430/</div>
                  <div className="ml-10">├── LISTVIEW/</div>
                  <div className="ml-12">│   ├── images/</div>
                  <div className="ml-12">│   ├── courses.json</div>
                  <div className="ml-12">│   ├── list_info_add.csv</div>
                  <div className="ml-12">│   └── page_*.txt</div>
                  <div className="ml-10">└── DETAILVIEW/</div>
                  <div className="ml-12">├── part_1/</div>
                  <div className="ml-12">├── part_2/</div>
                  <div className="ml-12">└── detail_info_attempt.csv</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Key Functions & Methods</h3>
              <div className="space-y-3">
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h4 className="text-white font-medium mb-1">setup_driver()</h4>
                  <p className="text-gray-400 text-sm">Chrome automation with anti-detection</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h4 className="text-white font-medium mb-1">safe_find_element()</h4>
                  <p className="text-gray-400 text-sm">Robust element finding with timeouts</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h4 className="text-white font-medium mb-1">create_folder_structure()</h4>
                  <p className="text-gray-400 text-sm">Hierarchical timestamp-based organization</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h4 className="text-white font-medium mb-1">upload_image_to_drive()</h4>
                  <p className="text-gray-400 text-sm">Google Drive API with retry logic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Implementation Details */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Implementation Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Selenium Configuration</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300 font-mono">
                  <div className="space-y-1">
                    <div className="text-blue-400"># Anti-detection setup</div>
                    <div>options.add_argument("--disable-blink-features=AutomationControlled")</div>
                    <div>options.add_experimental_option("excludeSwitches", ["enable-automation"])</div>
                    <div className="text-green-400"># User agent spoofing</div>
                    <div>driver.execute_cdp_cmd("Network.setUserAgentOverride", ...)</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Data Formatting Functions</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300 font-mono">
                  <div className="space-y-1">
                    <div className="text-blue-400"># Rating format: "45" → "4.5"</div>
                    <div>format_rating(rating)</div>
                    <div className="text-green-400"># Clean enrollment numbers</div>
                    <div>format_enrollment_count(enrollment)</div>
                    <div className="text-purple-400"># Level validation</div>
                    <div>clean_level_field(level)</div>
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

       {/* Data Output & Real Implementation */}
       <section className="mb-16">
         <h2 className="text-3xl font-bold mb-8 text-center">Data Output & Real Implementation</h2>
         
         {/* Actual Data Fields */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
           <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
             <h3 className="text-xl font-semibold text-blue-400 mb-4">Extracted Course Data Fields</h3>
             <div className="space-y-3">
               <div className="grid grid-cols-1 gap-4 text-sm">
                 <div>
                   <h4 className="text-white font-medium mb-2">Core Information</h4>
                   <ul className="space-y-1 text-gray-400">
                     <li>• <span className="text-blue-400">name</span>: Course title from h1 element</li>
                     <li>• <span className="text-blue-400">description</span>: Short course description</li>
                     <li>• <span className="text-blue-400">detailed_description</span>: Full course details</li>
                     <li>• <span className="text-blue-400">url</span>: Direct course link</li>
                     <li>• <span className="text-blue-400">url_id</span>: Unique identifier</li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="text-white font-medium mb-2">Performance Metrics</h4>
                   <ul className="space-y-1 text-gray-400">
                     <li>• <span className="text-green-400">rating</span>: 4.5 format (cleaned from "45")</li>
                     <li>• <span className="text-green-400">rating_count</span>: Number only (from "(1,234 reviews)")</li>
                     <li>• <span className="text-green-400">enrollment_count</span>: Student count</li>
                     <li>• <span className="text-green-400">level</span>: Beginner/Intermediate/Advanced</li>
                     <li>• <span className="text-green-400">learning_time</span>: Duration information</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/40">
             <h3 className="text-xl font-semibold text-blue-400 mb-4">Data Processing Pipeline</h3>
             <div className="space-y-4">
               <div className="bg-gray-700/30 rounded-lg p-4">
                 <h4 className="text-white font-medium mb-2">CSV State Management</h4>
                 <div className="space-y-1 text-sm text-gray-300">
                   <div>• <span className="text-blue-400">list_info_all.csv</span>: Master URL database</div>
                   <div>• <span className="text-green-400">list_info_add.csv</span>: New URLs to process</div>
                   <div>• <span className="text-purple-400">list_info_done.csv</span>: Successfully processed</div>
                   <div>• <span className="text-orange-400">detail_info_attempt.csv</span>: Complete dataset</div>
                 </div>
               </div>
               <div className="bg-gray-700/30 rounded-lg p-4">
                 <h4 className="text-white font-medium mb-2">Google Cloud Integration</h4>
                 <div className="text-sm text-gray-300">
                   <p>Images: <span className="text-blue-400">Google Drive API</span> with public links</p>
                   <p>Data: <span className="text-green-400">Google Sheets API</span> with append-only mode</p>
                   <p>Auth: <span className="text-purple-400">Service Account</span> with retry logic</p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         {/* Code Examples */}
         <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
           <h3 className="text-2xl font-bold text-blue-400 mb-6">Key Implementation Examples</h3>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             
             {/* Data Cleaning Function */}
             <div>
               <h4 className="text-lg font-semibold text-white mb-4">Data Formatting Functions</h4>
               <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                 <div className="space-y-3">
                   <div>
                     <div className="text-green-400"># Rating: "45" → "4.5"</div>
                     <div className="text-blue-400">def format_rating(rating):</div>
                     <div className="ml-4">if re.match(r'^\d{2}$', rating_str):</div>
                     <div className="ml-8">return rating_str[0] + '.' + rating_str[1]</div>
                   </div>
                   <div>
                     <div className="text-green-400"># Clean: "(1,234 reviews)" → "1234"</div>
                     <div className="text-blue-400">def format_rating_count(rating_count):</div>
                     <div className="ml-4">matches = re.search(r'([\d,]+)', rating_count_str)</div>
                     <div className="ml-4">return matches.group(1).replace(',', '')</div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Selenium Implementation */}
             <div>
               <h4 className="text-lg font-semibold text-white mb-4">Smart Element Finding</h4>
               <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                 <div className="space-y-3">
                   <div>
                     <div className="text-blue-400">def safe_find_element(driver, by, selector):</div>
                     <div className="ml-4">element = WebDriverWait(driver, 10).until(</div>
                     <div className="ml-8">EC.presence_of_element_located((by, selector))</div>
                     <div className="ml-4">)</div>
                     <div className="ml-4">return element</div>
                   </div>
                   <div>
                     <div className="text-green-400"># Multi-selector fallback</div>
                     <div className="text-blue-400">selectors = [primary, fallback_1, fallback_2]</div>
                     <div className="text-blue-400">for selector in selectors:</div>
                     <div className="ml-4">element = safe_find_element(driver, By.CSS_SELECTOR, selector)</div>
                   </div>
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

export default CourseraProjectDetail;