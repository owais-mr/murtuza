import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft, Check } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const { dispatch } = useApp();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Products</span>
      </button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? 'border-blue-600 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-600 font-medium capitalize">
                {product.category}
              </span>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Heart className="h-5 w-5 text-gray-400" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Share2 className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'fill-current' : ''
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">{product.rating}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{product.reviews} reviews</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-4xl font-bold text-gray-800">
              ${product.price}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-2xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${product.originalPrice - product.price}
                </span>
              </>
            )}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {product.features && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all ${
                isAddedToCart
                  ? 'bg-green-600 text-white'
                  : product.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isAddedToCart ? (
                <>
                  <Check className="h-5 w-5" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </>
              )}
            </button>
            
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Buy Now
            </button>
          </div>

          <div className="border-t pt-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-500">Free Shipping</div>
                <div className="font-semibold">Orders over $100</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Returns</div>
                <div className="font-semibold">30-day policy</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Warranty</div>
                <div className="font-semibold">2-year coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}