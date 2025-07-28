import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { Product } from '../types';

interface HomePageProps {
  onProductClick: (product: Product) => void;
  onShopNow: () => void;
}

export default function HomePage({ onProductClick, onShopNow }: HomePageProps) {
  const { state, dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  }, [dispatch]);

  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      <Hero onShopNow={onShopNow} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, carefully curated for quality and style.
          </p>
        </div>
        
        <ProductGrid products={featuredProducts} onProductClick={onProductClick} />
        
        <div className="text-center mt-12">
          <button
            onClick={onShopNow}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}