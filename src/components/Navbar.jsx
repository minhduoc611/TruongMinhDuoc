import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Đăng ký plugin
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const translations = {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    skills: 'Skills',
    contact: 'Contact'
  };
  
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'Portfolio', 'contact'];
    
    const updateActiveSection = () => {
      // Thiết lập trạng thái scrolled để thay đổi hiệu ứng navbar
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);
  
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
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

  const getNavItemClass = (section) => {
    const baseClass = "transition duration-300 animate-fadeIn";
    return activeSection === section 
      ? `text-secondary font-medium border-b-2 border-secondary pb-1 ${baseClass}`
      : `text-white hover:text-secondary hover:border-b-2 hover:border-secondary pb-1 ${baseClass}`;
  };

  const getMobileNavItemClass = (section) => {
    return activeSection === section 
      ? "text-secondary font-medium border-l-4 border-secondary pl-3 py-2 w-full block"
      : "text-white hover:text-secondary pl-3 py-2 w-full block transition duration-300";
  };

  return (
    <nav className={`fixed w-full py-4 z-50 ${isScrolled ? 'bg-primary bg-opacity-95' : 'bg-primary bg-opacity-80'} backdrop-blur-sm transition-all duration-300`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center text-white text-2xl font-bold animate-fadeIn">
          <span className="text-secondary">TruongMinhDuoc</span> 
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className={getNavItemClass('home')}
            style={{ animationDelay: '0.1s' }}
          >
            {translations.home}
          </Link>
          <Link 
            to="/#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className={getNavItemClass('about')}
            style={{ animationDelay: '0.2s' }}
          >
            {translations.about}
          </Link>
          <Link 
            to="/#Portfolio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('Portfolio');
            }}
            className={getNavItemClass('Portfolio')}
            style={{ animationDelay: '0.3s' }}
          >
            {translations.portfolio}
          </Link>
          <Link 
            to="/#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
            className={getNavItemClass('skills')}
            style={{ animationDelay: '0.4s' }}
          >
            {translations.skills}
          </Link>
          <Link 
            to="/#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className={getNavItemClass('contact')}
            style={{ animationDelay: '0.5s' }}
          >
            {translations.contact}
          </Link>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.facebook.com/truong.minh.uoc.710276" className="text-white hover:text-secondary transition duration-300 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/in/minh-%C4%91%C6%B0%E1%BB%A3c-tr%C6%B0%C6%A1ng-849376233/" className="text-white hover:text-secondary transition duration-300 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/minhduoc611" className="text-white hover:text-secondary transition duration-300 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-white focus:outline-none border-0 bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="flex flex-col items-center justify-center w-6 h-6">
                <span className="w-5 h-0.5 bg-white transform rotate-45 absolute"></span>
                <span className="w-5 h-0.5 bg-white transform -rotate-45 absolute"></span>
              </span>
            ) : (
              <span className="flex flex-col items-center justify-center w-6 h-6 space-y-1.5">
                <span className="w-5 h-0.5 bg-white block"></span>
                <span className="w-5 h-0.5 bg-white block"></span>
                <span className="w-5 h-0.5 bg-white block"></span>
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-primary bg-opacity-95 backdrop-blur-md shadow-lg animate-fadeIn z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col py-4">
            <Link 
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className={getMobileNavItemClass('home')}
            >
              <div className="flex items-center px-6">
                <i className="fas fa-home mr-3"></i>
                {translations.home}
              </div>
            </Link>
            <Link 
              to="/#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className={getMobileNavItemClass('about')}
            >
              <div className="flex items-center px-6">
                <i className="fas fa-user mr-3"></i>
                {translations.about}
              </div>
            </Link>
            <Link 
              to="/#Portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('Portfolio');
              }}
              className={getMobileNavItemClass('Portfolio')}
            >
              <div className="flex items-center px-6">
                <i className="fas fa-briefcase mr-3"></i>
                {translations.portfolio}
              </div>
            </Link>
            <Link 
              to="/#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
              className={getMobileNavItemClass('skills')}
            >
              <div className="flex items-center px-6">
                <i className="fas fa-cogs mr-3"></i>
                {translations.skills}
              </div>
            </Link>
            <Link 
              to="/#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className={getMobileNavItemClass('contact')}
            >
              <div className="flex items-center px-6">
                <i className="fas fa-envelope mr-3"></i>
                {translations.contact}
              </div>
            </Link>
            
            <div className="flex justify-center space-x-6 mt-6 pt-6 border-t border-gray-700">
              <a href="https://www.facebook.com/truong.minh.uoc.710276" className="text-white hover:text-secondary transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/in/minh-%C4%91%C6%B0%E1%BB%A3c-tr%C6%B0%C6%A1ng-849376233/" className="text-white hover:text-secondary transition duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/minhduoc611" className="text-white hover:text-secondary transition duration-300">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;