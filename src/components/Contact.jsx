const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-5 blur-3xl -top-40 -left-40 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 text-center reveal">
          Get In <span className="text-secondary">Touch</span>
        </h2>
        
        <div className="max-w-xl mx-auto">
          <p className="text-text text-center mb-12 reveal">
            I'm currently looking for new opportunities. Feel free to reach out through any of these channels!
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

            {/* Facebook */}
            <div className="reveal bg-primaryLight border border-secondary border-opacity-30 rounded-lg p-6 hover:border-opacity-60 transition duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Facebook</h3>
                  <a href="https://www.facebook.com/truong.minh.uoc.710276" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition duration-300">
                    Trương Minh Được
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
              Let's connect and discuss opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );  
};

export default Contact;