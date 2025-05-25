import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectDetailPage from './ProjectDetailPage';

// Component cho trang chủ (có thể chứa các sections khác)
const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header/Navbar */}
      <header className="bg-primaryLight border-b border-secondary border-opacity-20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Your<span className="text-secondary">Name</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-text hover:text-secondary transition duration-300">About</a>
              <a href="#portfolio" className="text-text hover:text-secondary transition duration-300">Portfolio</a>
              <a href="#contact" className="text-text hover:text-secondary transition duration-300">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-5 blur-3xl -top-40 -left-40 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hello, I'm <span className="text-secondary">Your Name</span>
            </h1>
            <p className="text-xl text-text mb-8 max-w-2xl mx-auto">
              Full Stack Developer passionate about creating amazing digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#portfolio" 
                className="bg-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition duration-300"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-secondary text-secondary px-8 py-3 rounded-full font-medium hover:bg-secondary hover:text-white transition duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-primaryLight">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://via.placeholder.com/400x500/1a1a2e/ffffff?text=Your+Photo" 
                  alt="Your Name" 
                  className="rounded-lg w-full"
                />
              </div>
              <div>
                <p className="text-text mb-6 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating efficient, scalable solutions that solve real-world problems.
                </p>
                <p className="text-text mb-6 leading-relaxed">
                  With experience in both frontend and backend development, I enjoy working on 
                  projects that challenge me to learn new technologies and improve my skills.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'Django', 'PostgreSQL'].map((skill) => (
                    <span key={skill} className="bg-secondary bg-opacity-20 text-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Contact Section - bạn có thể thay thế bằng Contact component đã tạo */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-5 blur-3xl -top-40 -left-40 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          
          <div className="max-w-xl mx-auto">
            <p className="text-text text-center mb-12">
              I'm currently looking for new opportunities. Feel free to reach out through any of these channels!
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-primaryLight border border-secondary border-opacity-30 rounded-lg p-6 hover:border-opacity-60 transition duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <a href="mailto:your.email@example.com" className="text-secondary hover:text-white transition duration-300">
                      your.email@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Facebook */}
              <div className="bg-primaryLight border border-secondary border-opacity-30 rounded-lg p-6 hover:border-opacity-60 transition duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Facebook</h3>
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition duration-300">
                      facebook.com/yourprofile
                    </a>
                  </div>
                </div>
              </div>

              {/* Zalo */}
              <div className="bg-primaryLight border border-secondary border-opacity-30 rounded-lg p-6 hover:border-opacity-60 transition duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.894c-1.789 1.789-4.729 1.789-6.518 0l-2.682-2.682c-.39-.39-.39-1.024 0-1.414s1.024-.39 1.414 0l2.682 2.682c1.009 1.009 2.683 1.009 3.692 0s1.009-2.683 0-3.692L13.8 9.106c-.39-.39-.39-1.024 0-1.414s1.024-.39 1.414 0l2.682 2.682c1.789 1.789 1.789 4.729 0 6.518z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Zalo</h3>
                    <a href="https://zalo.me/0123456789" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition duration-300">
                      0123 456 789
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-text">
                Let's connect and discuss opportunities!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primaryLight py-8 border-t border-secondary border-opacity-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text">
            © 2025 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Main App component với routing
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;