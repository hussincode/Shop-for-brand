export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const targetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-inter font-bold text-brand-accent mb-4">Luxe Local</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Redefining contemporary fashion with timeless pieces that celebrate individual style and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">
                <i className="fab fa-pinterest text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-inter font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-brand-accent transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('collection')}
                  className="text-gray-300 hover:text-brand-accent transition-colors duration-300"
                >
                  Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-brand-accent transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-brand-accent transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-inter font-medium mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2024 Luxe Local. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-brand-accent text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-brand-accent text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
