// src/components/LanguageToggle.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = ({ 
  variant = 'compact',
  className = ''
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const isVietnamese = currentLang === 'vi';

  const toggleLanguage = () => {
    const newLang = currentLang === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  if (variant === 'mini') {
    // Mini version for mobile header
    return (
      <button
        onClick={toggleLanguage}
        className={`relative inline-flex items-center h-8 w-16 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 ease-in-out hover:shadow-blue-500/20 hover:shadow-lg group ${className}`}
        aria-label="Toggle language"
      >
        {/* Moving indicator */}
        <span
          className={`absolute top-0.5 w-7 h-7 bg-gradient-to-r ${
            isVietnamese 
              ? 'from-emerald-500 to-teal-500 translate-x-0.5' 
              : 'from-blue-500 to-cyan-500 translate-x-8'
          } rounded-full shadow-lg transition-all duration-300 ease-out`}
        />
        
        {/* VI label */}
        <span
          className={`relative z-10 w-8 flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
            isVietnamese ? 'text-white' : 'text-gray-400'
          }`}
        >
          VI
        </span>
        
        {/* EN label */}
        <span
          className={`relative z-10 w-8 flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
            !isVietnamese ? 'text-white' : 'text-gray-400'
          }`}
        >
          EN
        </span>
      </button>
    );
  }

  if (variant === 'compact') {
    // Compact version for desktop navbar
    return (
      <button
        onClick={toggleLanguage}
        className={`relative inline-flex items-center h-10 w-20 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 ease-in-out hover:shadow-blue-500/20 hover:shadow-lg hover:scale-105 group ${className}`}
        aria-label="Toggle language"
      >
        {/* Moving indicator */}
        <span
          className={`absolute top-0.5 w-9 h-8 bg-gradient-to-r ${
            isVietnamese 
              ? 'from-emerald-500 to-teal-500 translate-x-0.5' 
              : 'from-blue-500 to-cyan-500 translate-x-10'
          } rounded-full shadow-lg transition-all duration-300 ease-out group-hover:scale-110`}
        />
        
        {/* VI label */}
        <span
          className={`relative z-10 w-10 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
            isVietnamese ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
          }`}
        >
          VI
        </span>
        
        {/* EN label */}
        <span
          className={`relative z-10 w-10 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
            !isVietnamese ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
          }`}
        >
          EN
        </span>
      </button>
    );
  }

  // Full version for mobile menu
  return (
    <button
      onClick={toggleLanguage}
      className={`relative inline-flex items-center h-14 w-36 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 ease-in-out hover:shadow-blue-500/20 hover:shadow-2xl hover:scale-105 group ${className}`}
      aria-label="Toggle language"
    >
      {/* Moving indicator */}
      <span
        className={`absolute top-1 w-16 h-12 bg-gradient-to-r ${
          isVietnamese 
            ? 'from-emerald-500 to-teal-500 translate-x-1' 
            : 'from-blue-500 to-cyan-500 translate-x-18'
        } rounded-full shadow-xl transition-all duration-400 ease-out group-hover:scale-105`}
      />
      
      {/* VI label with flag */}
      <span
        className={`relative z-10 w-18 flex items-center justify-center text-base font-semibold transition-all duration-300 ${
          isVietnamese ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
        }`}
      >
        <span className="mr-1">🇻🇳</span>
        VI
      </span>
      
      {/* EN label with flag */}
      <span
        className={`relative z-10 w-18 flex items-center justify-center text-base font-semibold transition-all duration-300 ${
          !isVietnamese ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
        }`}
      >
        <span className="mr-1">🇺🇸</span>
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;