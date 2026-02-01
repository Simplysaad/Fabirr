import React from 'react';

const ScarfHomepage= () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">SilkAura</div>
          <ul className="flex space-x-8 text-gray-600">
            <li><a href="#" className="hover:text-indigo-600 transition">Shop</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Collections</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">About</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
          </ul>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Cart (0)
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Timeless Scarves
            <br />
            <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              For Every Moment
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our curated collection of silk, cashmere, and linen scarves. 
            Crafted with care, designed for elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-indigo-700 transition shadow-lg">
              Shop Collection
            </button>
            <button className="border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://placehold.co/1920x1080/EEF2FF/6B7280?text=Hero+Scarf" 
            alt="Elegant scarf draped on model"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore styles for every season and occasion
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                <img 
                  src="https://placehold.co/600x400/F3F4F6/374151?text=Silk+Collection" 
                  alt="Silk scarves"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-medium mb-1">Silk Elegance</h3>
                  <p className="opacity-90">Luxurious & lightweight</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                <img 
                  src="https://placehold.co/600x400/E5E7EB/1F2937?text=Cashmere" 
                  alt="Cashmere scarves"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-medium mb-1">Cashmere Comfort</h3>
                  <p className="opacity-90">Warmth meets style</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                <img 
                  src="https://placehold.co/600x400/F9FAFB/111827?text=Linen+Collection" 
                  alt="Linen scarves"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-medium mb-1">Linen Breeze</h3>
                  <p className="opacity-90">Perfect for summer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to elevate your style?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands who’ve discovered their perfect scarf. 
            Free shipping on orders over $75.
          </p>
          <button className="bg-white text-indigo-600 px-12 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-50 transition shadow-2xl">
            Shop Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="text-2xl font-bold mb-4">SilkAura</div>
              <p className="text-gray-400">Timeless elegance in every thread.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Silk</a></li>
                <li><a href="#" className="hover:text-white transition">Cashmere</a></li>
                <li><a href="#" className="hover:text-white transition">Linen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            © 2026 SilkAura. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScarfHomepage;
