import { useTranslation } from 'react-i18next';

const Contact = () => {
  // Hook i18next để lấy translation
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-5 blur-3xl -top-40 -left-40 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 text-center reveal">
          {t('contactSection.title')} <span className="text-secondary">{t('contactSection.titleHighlight')}</span>
        </h2>
        
        <div className="max-w-xl mx-auto">
          <p className="text-text text-center mb-12 reveal">
            {t('contactSection.description')}
          </p>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="reveal bg-primaryLight border border-secondary border-opacity-30 rounded-lg p-6 hover:border-opacity-60 transition duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <a href="mailto:minhduoc611.work@gmail.com" className="text-secondary hover:text-white transition duration-300">
                    minhduoc611.work@gmail.com
                  </a>
                </div>
              </div>
            </div>

          {/* LinkedIn */}
          <div className="reveal bg-primaryLight border border-secondary border-opacity-30 rounded-lg p-6 hover:border-opacity-60 transition duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/minh-duoc-truong-bb773936b" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition duration-300">
                  Minh Duoc Truong
                </a>
              </div>
            </div>
          </div>

            {/* Zalo */}
            <div className="reveal bg-primaryLight border border-secondary border-opacity-30 rounded-lg p-6 hover:border-opacity-60 transition duration-300" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.894c-1.789 1.789-4.729 1.789-6.518 0l-2.682-2.682c-.39-.39-.39-1.024 0-1.414s1.024-.39 1.414 0l2.682 2.682c1.009 1.009 2.683 1.009 3.692 0s1.009-2.683 0-3.692L13.8 9.106c-.39-.39-.39-1.024 0-1.414s1.024-.39 1.414 0l2.682 2.682c1.789 1.789 1.789 4.729 0 6.518z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Zalo</h3>
                  <a href="https://zalo.me/0934853128" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition duration-300">
                    0934853128
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 reveal" style={{ animationDelay: '0.4s' }}>
            <p className="text-text">
              {t('contactSection.callToAction')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );  
};

export default Contact;