import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import FeaturedProducts from '@/components/featured-products';
import ParallaxSection from '@/components/parallax-section';
import AboutSection from '@/components/about-section';
import NewsletterSection from '@/components/newsletter-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { initParallax, initScrollAnimations } from '@/lib/parallax';

export default function Home() {
  useEffect(() => {
    const cleanupParallax = initParallax();
    const cleanupScrollAnimations = initScrollAnimations();
    
    return () => {
      cleanupParallax();
      cleanupScrollAnimations();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <ParallaxSection />
      <AboutSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
