// LanguageToggle.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LanguageToggle = ({ language, toggleLanguage }) => {
  const toggleRef = useRef(null);
  const checkboxRef = useRef(null);
  
  // Đồng bộ trạng thái checkbox với ngôn ngữ
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = language === 'vi';
    }
  }, [language]);

  // Animation ban đầu khi component mount
  useEffect(() => {
    gsap.set(toggleRef.current, { scale: 0.9, opacity: 0 });
    gsap.to(toggleRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
      delay: 0.2
    });
  }, []);

  // Xử lý animation khi toggle
  const handleToggle = () => {
    toggleLanguage();
    gsap.to(toggleRef.current, {
      scale: 1.1,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(toggleRef.current, {
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)"
        });
      }
    });
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer group" ref={toggleRef}>
      <input 
        ref={checkboxRef}
        className="sr-only peer" 
        type="checkbox" 
        checked={language === 'vi'}
        onChange={handleToggle}
      />
      <div
        className="w-20 h-9 rounded-full ring-0 peer duration-500 outline-none bg-gradient-to-r from-primary/90 to-primary border-2 border-secondary/20 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['🇺🇸'] before:absolute before:h-7 before:w-7 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-500 before:shadow-lg before:shadow-secondary/10 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-xl shadow-secondary/10 peer-checked:shadow-xl peer-checked:shadow-secondary/20 peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/90 after:content-['🇻🇳'] after:absolute after:bg-gradient-to-r after:from-red-600 after:to-red-700 after:rounded-full after:top-1 after:right-1 after:translate-y-full after:w-7 after:h-7 after:opacity-0 after:transition-all after:duration-500 after:shadow-lg after:shadow-red-500/20 peer-checked:after:opacity-100 peer-checked:after:rotate-0 peer-checked:after:translate-y-0 hover:border-secondary/40 focus:border-secondary/60 transition-all group-hover:shadow-2xl group-hover:shadow-secondary/20"
      >
        <span className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none">
          <span className="text-[10px] font-bold ml-10 text-secondary/90">EN</span>
          <span className="text-[10px] font-bold mr-10 text-secondary/90 opacity-0 peer-checked:opacity-100 transition-opacity duration-500">VI</span>
        </span>
      </div>
    </label>
  );
};

export default LanguageToggle;