import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface CartProps {
  onBack: () => void;
}

export default function Cart({ onBack }: CartProps) {
  const { state, dispatch } = useApp();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const subtotal = state.cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (state.cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Continue Shopping</span>
        </button>

        <div className="text-center py-16">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Continue Shopping</span>
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {state.cart.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                  <p className="text-gray-600 text-sm capitalize">{item.product.category}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="font-bold text-gray-800">${item.product.price}</span>
                    {item.product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${item.product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.product.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6 h-fit">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">
                {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-semibold">${tax.toFixed(2)}</span>
            </div>
            
            <div className="border-t pt-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {shipping > 0 && (
            <p className="text-sm text-gray-600 mb-4">
              Add ${(100 - subtotal).toFixed(2)} more for free shipping!
            </p>
          )}

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
            Proceed to Checkout
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            Secure checkout powered by SSL encryption
          </p>
        </div>
      </div>
    </div>
  );
}