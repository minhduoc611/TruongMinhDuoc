import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio'; // Portfolio đã fix
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './pages/ProjectDetailPage';
import CourseraProjectDetail from './pages/CourseraProjectDetail';

function App() {
  console.log('App component rendered with routing');
  
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white relative">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Portfolio />
                <Skills />
                <Contact />
                <Footer />
              </>
            } 
          />
          
          {/* Project Detail Page */}
          <Route 
            path="/project/hrms" 
            element={<ProjectDetailPage />} 
          />
          <Route 
            path="/project/coursera" 
            element={<CourseraProjectDetail />} 
          />
          {/* 404 Page */}
          <Route 
            path="*" 
            element={
              <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1a1a2e', color: 'white' }}>
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
                  <a
                     href="/"
                     className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;