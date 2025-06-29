import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { stats } from '../data/products';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Fashion Designer at Work" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="animate-slide-up"
            >
              <h2 className="text-4xl md:text-5xl font-inter font-light text-brand-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-brand-neutral mb-6 leading-relaxed">
                Founded with a vision to create clothing that transcends trends, Luxe Local represents the perfect harmony between contemporary design and sustainable practices.
              </p>
              <p className="text-lg text-brand-neutral mb-8 leading-relaxed">
                We believe that true style is personal, authentic, and conscious. Our commitment to ethical production and timeless design ensures that every piece you choose becomes a cherished part of your wardrobe.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-inter font-bold text-brand-accent mb-2">
                    {stats.years}
                  </div>
                  <div className="text-sm text-brand-neutral font-medium">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-inter font-bold text-brand-accent mb-2">
                    {stats.customers}
                  </div>
                  <div className="text-sm text-brand-neutral font-medium">Happy Customers</div>
                </div>
              </div>
              
              <Button className="bg-brand-accent text-white px-8 py-4 rounded-sm font-medium text-lg hover:bg-opacity-90 transition-all duration-300 hover-lift">
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
