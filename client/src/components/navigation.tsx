import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', updateNavbar);
    return () => window.removeEventListener('scroll', updateNavbar);
  }, []);

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
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'glass-effect'
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-inter font-bold text-gradient">Luxe Local</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-brand-primary hover:text-brand-accent transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('collection')}
                className="text-brand-primary hover:text-brand-accent transition-colors duration-300 font-medium"
              >
                Collection
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-brand-primary hover:text-brand-accent transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-brand-primary hover:text-brand-accent transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-brand-primary hover:text-brand-accent transition-colors duration-300">
              <i className="fas fa-shopping-bag text-lg mr-1"></i>
              <span className="text-sm font-medium">Cart (0)</span>
            </Button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-brand-primary hover:text-brand-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-brand-primary hover:text-brand-accent transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('collection')}
              className="block w-full text-left px-3 py-2 text-brand-primary hover:text-brand-accent transition-colors duration-300"
            >
              Collection
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-brand-primary hover:text-brand-accent transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-brand-primary hover:text-brand-accent transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
