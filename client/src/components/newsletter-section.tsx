import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-brand-light-gray">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="animate-slide-up"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-light text-brand-primary mb-6">
            Stay In Style
          </h2>
          <p className="text-lg text-brand-neutral mb-8 max-w-2xl mx-auto">
            Be the first to know about our latest collections, exclusive offers, and style inspiration delivered straight to your inbox.
          </p>
          
          {/* Newsletter Form */}
          <form className="max-w-md mx-auto flex gap-4" onSubmit={handleSubmit}>
            <Input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors duration-300"
              required
            />
            <Button 
              type="submit" 
              className="bg-brand-primary text-white px-6 py-3 rounded-sm font-medium hover:bg-opacity-90 transition-colors duration-300"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-brand-neutral mt-4">
            No spam, just style. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
