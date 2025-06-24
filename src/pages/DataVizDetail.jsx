import React from 'react';
import { ArrowLeft, Database, Zap, BarChart3, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HRDB from '../assets/images/HRM DB.png';
import RFM from '../assets/images/RFM_DB.png';

const DataVisualizationDetail = () => {
  // Hook i18next để lấy translation
  const { t } = useTranslation();

  const projectData = {
    titleKey: "dataVisualizationDetail.hero.title",
    subtitleKey: "dataVisualizationDetail.hero.subtitle",
    overviewKey: "dataVisualizationDetail.hero.overview"
  };

  const dashboards = [
    {
      id: "hrm-dashboard",
      titleKey: "dataVisualizationDetail.dashboards.hrm.title",
      descriptionKey: "dataVisualizationDetail.dashboards.hrm.description",
      image: HRDB,
      link: "https://public.tableau.com/views/HRMS_17479281067570/HRMDB?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      id: "rfm-dashboard",
      titleKey: "dataVisualizationDetail.dashboards.rfm.title",
      descriptionKey: "dataVisualizationDetail.dashboards.rfm.description",
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
          <span className="font-medium">{t('dataVisualizationDetail.backButton')}</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t(projectData.titleKey)}
          </h1>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-16">
          
{/* 1. SQL Query Engine */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/40">
            <div className="flex items-center mb-8">
              <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-blue-400">{t('dataVisualizationDetail.sqlEngine.title')}</h2>
            </div>
            
            {/* Description and Features */}
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('dataVisualizationDetail.sqlEngine.description')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500/20 p-1.5 rounded-lg mt-1">
                    <Database className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-blue-300 font-semibold">{t('dataVisualizationDetail.sqlEngine.features.multiSource.title')}</h4>
                    <p className="text-gray-400 text-sm">{t('dataVisualizationDetail.sqlEngine.features.multiSource.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500/20 p-1.5 rounded-lg mt-1">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-blue-300 font-semibold">{t('dataVisualizationDetail.sqlEngine.features.optimization.title')}</h4>
                    <p className="text-gray-400 text-sm">{t('dataVisualizationDetail.sqlEngine.features.optimization.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500/20 p-1.5 rounded-lg mt-1">
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-blue-300 font-semibold">{t('dataVisualizationDetail.sqlEngine.features.advanced.title')}</h4>
                    <p className="text-gray-400 text-sm">{t('dataVisualizationDetail.sqlEngine.features.advanced.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Example Section */}
            <div>
              <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Advanced SQL Example - Customer RFM Analysis
              </h3>
              
              <div className="bg-gray-900/50 rounded-lg border border-gray-600/30 overflow-hidden">
                <div className="bg-gray-800/50 px-4 py-2 border-b border-gray-600/30 flex items-center justify-between">
                  <span className="text-gray-400 text-sm font-medium">customer_analytics.sql</span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
                  </div>
                </div>
                
                <div className="p-4 max-h-96 overflow-y-auto custom-scrollbar">
                  <div className="font-mono text-sm">
                    <div className="text-blue-400 mb-2">-- Customer Analytics with RFM Analysis and Growth Metrics</div>
                    <div className="text-purple-400">WITH</div>
                    <div className="text-gray-300 ml-2">customer_metrics AS (</div>
                    <div className="text-green-400 ml-4">SELECT</div>
                    <div className="text-gray-300 ml-6">c.customer_id,</div>
                    <div className="text-gray-300 ml-6">c.customer_name,</div>
                    <div className="text-gray-300 ml-6">MAX(o.order_date) as last_order_date,</div>
                    <div className="text-gray-300 ml-6">COUNT(DISTINCT o.order_id) as frequency,</div>
                    <div className="text-gray-300 ml-6">SUM(o.total_amount) as monetary_value,</div>
                    <div className="text-gray-300 ml-6">AVG(o.total_amount) as avg_order_value</div>
                    <div className="text-green-400 ml-4">FROM</div>
                    <div className="text-gray-300 ml-6">customers c</div>
                    <div className="text-green-400 ml-4">LEFT JOIN</div>
                    <div className="text-gray-300 ml-6">orders o ON c.customer_id = o.customer_id</div>
                    <div className="text-green-400 ml-4">WHERE</div>
                    <div className="text-gray-300 ml-6">o.order_date &gt;= CURRENT_DATE - INTERVAL '2 years'</div>
                    <div className="text-green-400 ml-4">GROUP BY</div>
                    <div className="text-gray-300 ml-6">c.customer_id, c.customer_name</div>
                    <div className="text-gray-300 ml-2">),</div>
                    <br/>
                    <div className="text-gray-300 ml-2">rfm_scores AS (</div>
                    <div className="text-green-400 ml-4">SELECT</div>
                    <div className="text-gray-300 ml-6">*,</div>
                    <div className="text-gray-300 ml-6">NTILE(5) OVER (ORDER BY CURRENT_DATE - last_order_date DESC) as recency_score,</div>
                    <div className="text-gray-300 ml-6">NTILE(5) OVER (ORDER BY frequency) as frequency_score,</div>
                    <div className="text-gray-300 ml-6">NTILE(5) OVER (ORDER BY monetary_value) as monetary_score</div>
                    <div className="text-green-400 ml-4">FROM</div>
                    <div className="text-gray-300 ml-6">customer_metrics</div>
                    <div className="text-gray-300 ml-2">)</div>
                    <br/>
                    <div className="text-green-400">SELECT</div>
                    <div className="text-gray-300 ml-2">customer_id,</div>
                    <div className="text-gray-300 ml-2">customer_name,</div>
                    <div className="text-gray-300 ml-2">frequency,</div>
                    <div className="text-gray-300 ml-2">monetary_value,</div>
                    <div className="text-gray-300 ml-2">ROUND(avg_order_value, 2) as avg_order_value,</div>
                    <div className="text-orange-400 ml-2">CASE</div>
                    <div className="text-orange-400 ml-4">WHEN</div>
                    <div className="text-gray-300 ml-6">recency_score &gt;= 4 AND frequency_score &gt;= 4 AND monetary_score &gt;= 4</div>
                    <div className="text-orange-400 ml-4">THEN</div>
                    <div className="text-yellow-300 ml-6">'Champions'</div>
                    <div className="text-orange-400 ml-4">WHEN</div>
                    <div className="text-gray-300 ml-6">recency_score &gt;= 3 AND frequency_score &gt;= 3</div>
                    <div className="text-orange-400 ml-4">THEN</div>
                    <div className="text-yellow-300 ml-6">'Loyal Customers'</div>
                    <div className="text-orange-400 ml-4">WHEN</div>
                    <div className="text-gray-300 ml-6">recency_score &gt;= 4</div>
                    <div className="text-orange-400 ml-4">THEN</div>
                    <div className="text-yellow-300 ml-6">'New Customers'</div>
                    <div className="text-orange-400 ml-4">WHEN</div>
                    <div className="text-gray-300 ml-6">recency_score &lt;= 2 AND frequency_score &gt;= 3</div>
                    <div className="text-orange-400 ml-4">THEN</div>
                    <div className="text-yellow-300 ml-6">'At Risk'</div>
                    <div className="text-orange-400 ml-4">ELSE</div>
                    <div className="text-yellow-300 ml-6">'Others'</div>
                    <div className="text-orange-400 ml-2">END</div>
                    <div className="text-gray-300 ml-2">as customer_segment,</div>
                    <div className="text-gray-300 ml-2">RANK() OVER (ORDER BY monetary_value DESC) as revenue_rank</div>
                    <div className="text-green-400">FROM</div>
                    <div className="text-gray-300 ml-2">rfm_scores</div>
                    <div className="text-green-400">ORDER BY</div>
                    <div className="text-gray-300 ml-2">monetary_value DESC;</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(55, 65, 81, 0.3);
              border-radius: 3px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(59, 130, 246, 0.5);
              border-radius: 3px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(59, 130, 246, 0.7);
            }
          `}</style>

          {/* 2. Data Processing */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/40">
            <div className="flex items-center mb-6">
              <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-purple-400">{t('dataVisualizationDetail.dataProcessing.title')}</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('dataVisualizationDetail.dataProcessing.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-600/30">
                  <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-purple-300 font-bold text-xl mb-3">{t('dataVisualizationDetail.dataProcessing.modules.cleaning.title')}</h4>
                  <p className="text-gray-400 mb-4">{t('dataVisualizationDetail.dataProcessing.modules.cleaning.subtitle')}</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.cleaning.features.missingValues')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.cleaning.features.outliers')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.cleaning.features.duplicates')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.cleaning.features.validation')}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-600/30">
                  <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-purple-300 font-bold text-xl mb-3">{t('dataVisualizationDetail.dataProcessing.modules.transformation.title')}</h4>
                  <p className="text-gray-400 mb-4">{t('dataVisualizationDetail.dataProcessing.modules.transformation.subtitle')}</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.transformation.features.encoding')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.transformation.features.datetime')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.transformation.features.text')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.transformation.features.feature')}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-600/30">
                  <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-purple-300 font-bold text-xl mb-3">{t('dataVisualizationDetail.dataProcessing.modules.normalization.title')}</h4>
                  <p className="text-gray-400 mb-4">{t('dataVisualizationDetail.dataProcessing.modules.normalization.subtitle')}</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.normalization.features.minmax')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.normalization.features.zscore')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.normalization.features.robust')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.normalization.features.unit')}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-600/30">
                  <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                    <ExternalLink className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-purple-300 font-bold text-xl mb-3">{t('dataVisualizationDetail.dataProcessing.modules.dimensionality.title')}</h4>
                  <p className="text-gray-400 mb-4">{t('dataVisualizationDetail.dataProcessing.modules.dimensionality.subtitle')}</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• PCA (Principal Component Analysis)</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.dimensionality.features.selection')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.dimensionality.features.correlation')}</li>
                    <li>• {t('dataVisualizationDetail.dataProcessing.modules.dimensionality.features.variance')}</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-600/30">
                <h4 className="text-purple-300 font-semibold mb-4">{t('dataVisualizationDetail.dataProcessing.technologies')}</h4>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'].map((tech) => (
                    <span key={tech} className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. Data Visualization */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/40">
            <div className="flex items-center mb-8">
              <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-green-400">{t('dataVisualizationDetail.visualization.title')}</h2>
            </div>
            
            <div className="space-y-12">
              {dashboards.map((dashboard, index) => (
                <div key={dashboard.id} className="bg-gray-900/50 rounded-lg p-6 border border-gray-600/30">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-green-400 mb-3">{t(dashboard.titleKey)}</h3>
                    <p className="text-gray-300 text-lg mb-4">{t(dashboard.descriptionKey)}</p>
                  </div>
                  
                  {/* Dashboard Image with Link */}
                  <div className="relative group">
                    <div className="bg-white rounded-lg p-4 overflow-hidden">
                      <img 
                        src={dashboard.image} 
                        alt={t(dashboard.titleKey)}
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
                        <span>{t('dataVisualizationDetail.visualization.viewDashboard')}</span>
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