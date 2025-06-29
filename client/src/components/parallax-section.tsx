export default function ParallaxSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-bg" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-brand-primary bg-opacity-80" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-inter font-light text-white mb-6">
          Crafted with
          <span className="block font-medium text-brand-accent">Passion</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Every piece tells a story of meticulous craftsmanship, sustainable practices, and timeless design philosophy.
        </p>
      </div>
    </section>
  );
}
