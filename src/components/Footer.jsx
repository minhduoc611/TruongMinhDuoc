const Footer = () => {
  return (
    <footer className="py-8 bg-primaryLight">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4 animate-fadeIn">
            <a 
              href="https://github.com/minhduoc611" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text hover:text-secondary transition duration-300 transform hover:scale-110"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/minh-%C4%91%C6%B0%E1%BB%A3c-tr%C6%B0%C6%A1ng-849376233/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text hover:text-secondary transition duration-300 transform hover:scale-110"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="minhduoc611.work@gmail.com"
              className="text-text hover:text-secondary transition duration-300 transform hover:scale-110"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
          <p className="text-text text-sm animate-fadeIn delay-200">
            © {new Date().getFullYear()} - Designed & Built by Minh Duoc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;