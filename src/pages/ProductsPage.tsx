import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { Product } from '../types';

interface ProductsPageProps {
  onProductClick: (product: Product) => void;
}

export default function ProductsPage({ onProductClick }: ProductsPageProps) {
  const { state, dispatch } = useApp();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (state.selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === state.selectedCategory);
    }

    // Filter by search query
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [state.selectedCategory, state.searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Products</h1>
        <p className="text-gray-600">
          Discover our complete collection of {filteredProducts.length} premium products
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          <ProductFilters
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(!isFilterOpen)}
          />
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts} onProductClick={onProductClick} />
        </div>
      </div>
    </div>
  );
}