import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-bg" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-inter font-light text-white mb-6 leading-tight">
            Redefine Your
            <span className="block font-medium text-brand-accent">Style Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our carefully curated collection of premium clothing that blends contemporary design with timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-brand-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 hover-lift"
              onClick={() => scrollToSection('collection')}
            >
              Explore Collection
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300"
              onClick={() => scrollToSection('about')}
            >
              Our Story
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
      </div>
    </section>
  );
}
