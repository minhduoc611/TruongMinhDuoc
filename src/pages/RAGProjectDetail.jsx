import React from 'react';
import { ArrowLeft, Github, ExternalLink, Brain, Database, Code, MessageSquare, Zap, Search, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RAGImage from '../assets/images/RAG.png';
import EmbedImage from '../assets/images/Embeding.png';

const RAGProjectDetail = () => {
  // Hook i18next để lấy translation
  const { t } = useTranslation();

  const projectData = {
    titleKey: "ragDetail.hero.title",
    subtitleKey: "ragDetail.hero.subtitle",
    overviewKey: "ragDetail.hero.overview",
    
    tags: ["RAG", "Vector Embeddings", "Python", "Machine Learning", "NLP", "Django", "Google Gemini", "AI Assistant"],
    
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
          <span className="font-medium">{t('ragDetail.backButton')}</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t(projectData.titleKey)}
          </h1>
          
          <p className="text-xl text-blue-400 mb-8 font-medium">
            {t(projectData.subtitleKey)}
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto" style={{color: '#e0e0ff'}}>
            {t(projectData.overviewKey)}
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
          <h2 className="text-3xl font-bold mb-8 text-center">{t('ragDetail.architecture.title')}</h2>
          
          {/* System Architecture Overview */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{t('ragDetail.architecture.overview.title')}</h3>
            
            {/* Architecture Diagram */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <img 
                src={RAGImage} 
                alt={t('ragDetail.architecture.overview.title')}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-gray-300 text-center leading-relaxed">
              {t('ragDetail.architecture.overview.description')}
            </p>
          </div>

          {/* Vector Embedding Process */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{t('ragDetail.architecture.embedding.title')}</h3>
            
            {/* Embedding Flow */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <img 
                src={EmbedImage} 
                alt={t('ragDetail.architecture.embedding.title')}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-gray-300 text-center leading-relaxed">
              {t('ragDetail.architecture.embedding.description')}
            </p>
          </div>
          
          {/* Sơ đồ luồng RAG */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{t('ragDetail.workflow.title')}</h3>
            
            {/* Flow Diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4 mb-8">
              
              {/* Step 1: User Query */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 border border-blue-500/30">
                  <MessageSquare className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{t('ragDetail.workflow.steps.userQuery.title')}</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  "{t('ragDetail.workflow.steps.userQuery.example')}"
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
                <h4 className="text-lg font-semibold text-white mb-2">{t('ragDetail.workflow.steps.embedding.title')}</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  {t('ragDetail.workflow.steps.embedding.description')}
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
                <h4 className="text-lg font-semibold text-white mb-2">{t('ragDetail.workflow.steps.vectorSearch.title')}</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  {t('ragDetail.workflow.steps.vectorSearch.description')}
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
                <h4 className="text-lg font-semibold text-white mb-2">{t('ragDetail.workflow.steps.generation.title')}</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  {t('ragDetail.workflow.steps.generation.description')}
                </p>
              </div>
            </div>

            {/* Detailed Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* Embedding Details */}
              <div className="bg-gray-700/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">{t('ragDetail.workflow.details.embedding.title')}</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• {t('ragDetail.workflow.details.embedding.features.nlp')}</p>
                  <p>• {t('ragDetail.workflow.details.embedding.features.timeRecognition')}</p>
                  <p>• {t('ragDetail.workflow.details.embedding.features.vectorConversion')}</p>
                  <p>• {t('ragDetail.workflow.details.embedding.features.normalization')}</p>
                </div>
              </div>

              {/* Data Retrieval */}
              <div className="bg-gray-700/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">{t('ragDetail.workflow.details.dataRetrieval.title')}</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• {t('ragDetail.workflow.details.dataRetrieval.features.employeeInfo')}</p>
                  <p>• {t('ragDetail.workflow.details.dataRetrieval.features.attendanceData')}</p>
                  <p>• {t('ragDetail.workflow.details.dataRetrieval.features.conversationHistory')}</p>
                  <p>• {t('ragDetail.workflow.details.dataRetrieval.features.contextFilter')}</p>
                </div>
              </div>

              {/* Vector Search */}
              <div className="bg-gray-700/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{t('ragDetail.workflow.details.vectorSearch.title')}</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• {t('ragDetail.workflow.details.vectorSearch.features.cosine')}</p>
                  <p>• {t('ragDetail.workflow.details.vectorSearch.features.similarQuestions')}</p>
                  <p>• {t('ragDetail.workflow.details.vectorSearch.features.ranking')}</p>
                  <p>• {t('ragDetail.workflow.details.vectorSearch.features.topResults')}</p>
                </div>
              </div>

              {/* AI Generation */}
              <div className="bg-gray-700/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">{t('ragDetail.workflow.details.aiGeneration.title')}</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• {t('ragDetail.workflow.details.aiGeneration.features.geminiProcessing')}</p>
                  <p>• {t('ragDetail.workflow.details.aiGeneration.features.contextCombination')}</p>
                  <p>• {t('ragDetail.workflow.details.aiGeneration.features.naturalResponse')}</p>
                  <p>• {t('ragDetail.workflow.details.aiGeneration.features.historyStorage')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Công nghệ sử dụng */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/40">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{t('ragDetail.technologies.title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Vector Database */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <Database className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{t('ragDetail.technologies.vectorDatabase.title')}</h4>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <p className="text-blue-400 font-medium mb-2">Django JSONField</p>
                  <p className="text-gray-300 text-sm mb-3">{t('ragDetail.technologies.vectorDatabase.description')}</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>• {t('ragDetail.technologies.vectorDatabase.features.vectors')}</p>
                    <p>• {t('ragDetail.technologies.vectorDatabase.features.similarity')}</p>
                    <p>• {t('ragDetail.technologies.vectorDatabase.features.indexing')}</p>
                  </div>
                </div>
              </div>

              {/* Model AI */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <Brain className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{t('ragDetail.technologies.aiModel.title')}</h4>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <p className="text-green-400 font-medium mb-2">Google Gemini 2.0</p>
                  <p className="text-gray-300 text-sm mb-3">{t('ragDetail.technologies.aiModel.description')}</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>• {t('ragDetail.technologies.aiModel.features.textConversation')}</p>
                    <p>• {t('ragDetail.technologies.aiModel.features.contextAware')}</p>
                    <p>• {t('ragDetail.technologies.aiModel.features.vietnameseSupport')}</p>
                  </div>
                </div>
              </div>

              {/* Kỹ thuật Prompt */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                  <FileText className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{t('ragDetail.technologies.promptEngineering.title')}</h4>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <p className="text-orange-400 font-medium mb-2">Dynamic Prompt Engineering</p>
                  <p className="text-gray-300 text-sm mb-3">{t('ragDetail.technologies.promptEngineering.description')}</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>• {t('ragDetail.technologies.promptEngineering.features.contextInjection')}</p>
                    <p>• {t('ragDetail.technologies.promptEngineering.features.roleBased')}</p>
                    <p>• {t('ragDetail.technologies.promptEngineering.features.fewShot')}</p>
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