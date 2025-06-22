import portfolio1 from '../assets/portfolio1.jpg';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useTranslation } from 'react-i18next';

// Register GSAP plugin
gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  // Hook i18next để lấy translation
  const { t } = useTranslation();

  // Scroll to contact section function
  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 80, 
        autoKill: false
      },
      ease: "power3.out"
    });
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden" id="home">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-secondary opacity-5 blur-3xl -top-20 -left-20 animate-fadeIn delay-400"></div>
        <div className="absolute w-80 h-80 rounded-full bg-blue-500 opacity-5 blur-3xl bottom-20 right-20 animate-fadeIn delay-500"></div>
        <div className="absolute w-2 h-2 bg-secondary rounded-full top-1/4 left-1/3 animate-float"></div>
        <div className="absolute w-3 h-3 bg-secondary rounded-full top-1/2 right-1/4 animate-float delay-300"></div>
        <div className="absolute w-40 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-20 blur-sm top-1/3 left-40 rotate-45 animate-fadeIn delay-200"></div>
        <div className="absolute w-40 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-20 blur-sm bottom-1/3 right-60 -rotate-45 animate-fadeIn delay-300"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-center md:gap-10">
          <div className="md:w-1/3 mb-10 md:mb-0 md:ml-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-fadeInLeft">
              <span className="text-white">Minh</span> <span className="text-secondary">Duoc</span>
            </h1>
            <p className="text-text text-xl mb-8 animate-fadeInLeft delay-100">
              {t('hero.role')}
            </p>
            
            {/* Enhanced Get Connected Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-secondary hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fadeInLeft delay-200"
            >
              {t('hero.getConnected')}
            </button>
          </div>
          
          <div className="md:w-1/3 flex justify-center md:mr-auto">
            <div className="relative animate-scaleIn delay-300">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary flex items-center justify-center overflow-hidden animate-float">
                <img 
                  src={portfolio1} 
                  alt="Minh Duoc" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute w-full h-full inset-0 bg-secondary opacity-20 rounded-full blur-md -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;