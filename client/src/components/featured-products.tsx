import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '../data/products';

export default function FeaturedProducts() {
  return (
    <section id="collection" className="py-24 bg-brand-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-brand-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-brand-neutral max-w-2xl mx-auto">
            Each piece in our collection is thoughtfully designed and crafted with attention to detail, ensuring both style and comfort.
          </p>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white rounded-lg overflow-hidden hover-lift shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className="w-full h-80 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-inter font-medium text-brand-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-brand-neutral mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-medium text-brand-accent">
                      ${product.price}
                    </span>
                    <Button className="bg-brand-primary text-white px-4 py-2 rounded-sm hover:bg-opacity-90 transition-colors duration-300">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline"
            className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300"
          >
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
