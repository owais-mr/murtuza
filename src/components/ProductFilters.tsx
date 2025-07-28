import React from 'react';
import { Filter, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ProductFiltersProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ProductFilters({ isOpen, onToggle }: ProductFiltersProps) {
  const { state, dispatch } = useApp();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'home', name: 'Home & Garden' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
    { id: '50-100', name: '$50 - $100', min: 50, max: 100 },
    { id: '100-500', name: '$100 - $500', min: 100, max: 500 },
    { id: 'over-500', name: 'Over $500', min: 500, max: Infinity },
  ];

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-6">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 text-gray-700 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Sidebar */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block fixed md:relative inset-0 md:inset-auto z-50 md:z-auto`}
      >
        {/* Mobile Overlay */}
        <div
          className="md:hidden fixed inset-0 bg-black/50"
          onClick={onToggle}
        ></div>

        {/* Filter Panel */}
        <div className="bg-white md:bg-transparent h-full md:h-auto w-80 md:w-full max-w-xs md:max-w-none fixed md:relative right-0 md:right-auto top-0 p-6 md:p-0 shadow-xl md:shadow-none overflow-y-auto">
          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Filters</h3>
            <button
              onClick={onToggle}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => dispatch({ type: 'SET_CATEGORY', payload: category.id })}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      state.selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="priceRange"
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-600">{range.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Rating</h4>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex items-center space-x-1">
                      <span className="text-gray-600">{rating}+</span>
                      <div className="flex text-yellow-400 ml-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < rating ? '★' : '☆'}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Availability</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-600">In Stock</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-600">On Sale</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}