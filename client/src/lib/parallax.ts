export const initParallax = () => {
  const updateParallax = () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    parallaxElements.forEach((element) => {
      const speed = 0.5;
      const yPos = -(scrolled * speed);
      (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  };
  
  window.addEventListener('scroll', updateParallax);
  
  return () => {
    window.removeEventListener('scroll', updateParallax);
  };
};

export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.opacity = '1';
        (entry.target as HTMLElement).style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements with animation classes
  document.querySelectorAll('.animate-slide-up, .animate-fade-in').forEach((el) => {
    (el as HTMLElement).style.opacity = '0';
    (el as HTMLElement).style.transform = 'translateY(30px)';
    (el as HTMLElement).style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });
  
  return () => {
    observer.disconnect();
  };
};
