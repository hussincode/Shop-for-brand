import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { contactInfo } from '../data/products';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-brand-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-brand-neutral max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <i className="fas fa-map-marker-alt text-brand-accent text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-inter font-medium text-brand-primary mb-2">Visit Our Studio</h3>
                <p className="text-brand-neutral">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <i className="fas fa-phone text-brand-accent text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-inter font-medium text-brand-primary mb-2">Call Us</h3>
                <p className="text-brand-neutral">{contactInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <i className="fas fa-envelope text-brand-accent text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-inter font-medium text-brand-primary mb-2">Email Us</h3>
                <p className="text-brand-neutral">{contactInfo.email}</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-8">
              <h3 className="text-lg font-inter font-medium text-brand-primary mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-brand-neutral hover:text-brand-accent transition-colors duration-300">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-brand-neutral hover:text-brand-accent transition-colors duration-300">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" className="text-brand-neutral hover:text-brand-accent transition-colors duration-300">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-brand-neutral hover:text-brand-accent transition-colors duration-300">
                  <i className="fab fa-pinterest text-2xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-brand-light-gray p-8 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-brand-primary mb-2">
                    First Name
                  </Label>
                  <Input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-brand-primary mb-2">
                    Last Name
                  </Label>
                  <Input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-brand-primary mb-2">
                  Email
                </Label>
                <Input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-brand-primary mb-2">
                  Subject
                </Label>
                <Input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-brand-primary mb-2">
                  Message
                </Label>
                <Textarea 
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors duration-300"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-primary text-white py-4 rounded-sm font-medium text-lg hover:bg-opacity-90 transition-colors duration-300"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
