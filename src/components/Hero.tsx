import React from 'react';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export default function Hero({ onShopNow }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-blue-100 text-sm font-medium">Trusted by 50,000+ customers</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Products
              <span className="block text-blue-200">Exceptional Value</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover our curated collection of premium electronics, fashion, and home goods. 
              Every product is carefully selected for quality and style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onShopNow}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Headphones"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Featured Product</h3>
                <p className="text-blue-100 mb-4">Premium Wireless Headphones</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-lg text-blue-200 line-through">$399</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 p-3 rounded-lg">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-blue-100 text-sm">On orders over $100</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 p-3 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-blue-100 text-sm">100% secure checkout</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 p-3 rounded-lg">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-blue-100 text-sm">Expert customer service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}