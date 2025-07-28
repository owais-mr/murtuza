import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    rating: 4.8,
    reviews: 256,
    inStock: true,
    features: ['Active Noise Cancellation', '30-hour Battery', 'Quick Charge', 'Premium Build']
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 449,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'electronics',
    description: 'Stay connected and track your fitness with this advanced smartwatch featuring health monitoring and GPS.',
    rating: 4.6,
    reviews: 189,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery']
  },
  {
    id: '3',
    name: 'Minimalist Desk Lamp',
    price: 79,
    originalPrice: 99,
    image: 'https://images.pexels.com/photos/1201643/pexels-photo-1201643.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'home',
    description: 'Elegant LED desk lamp with adjustable brightness and color temperature for the perfect workspace lighting.',
    rating: 4.7,
    reviews: 94,
    inStock: true,
    features: ['LED Technology', 'Adjustable Brightness', 'USB Charging Port', 'Touch Control']
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    price: 35,
    image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'clothing',
    description: 'Soft, comfortable t-shirt made from 100% organic cotton. Perfect for everyday wear.',
    rating: 4.5,
    reviews: 67,
    inStock: true,
    features: ['100% Organic Cotton', 'Pre-shrunk', 'Breathable Fabric', 'Machine Washable']
  },
  {
    id: '5',
    name: 'Professional Camera',
    price: 1299,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'electronics',
    description: 'Capture stunning photos with this professional-grade camera featuring 4K video recording.',
    rating: 4.9,
    reviews: 423,
    inStock: true,
    features: ['4K Video Recording', '24MP Sensor', 'Weather Sealed', 'Dual Card Slots']
  },
  {
    id: '6',
    name: 'Leather Messenger Bag',
    price: 189,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories',
    description: 'Handcrafted leather messenger bag perfect for work or travel. Spacious and durable.',
    rating: 4.6,
    reviews: 128,
    inStock: true,
    features: ['Genuine Leather', 'Laptop Compartment', 'Adjustable Strap', 'Handcrafted']
  },
  {
    id: '7',
    name: 'Ergonomic Office Chair',
    price: 399,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'home',
    description: 'Comfortable ergonomic office chair with lumbar support and adjustable height.',
    rating: 4.4,
    reviews: 89,
    inStock: true,
    features: ['Lumbar Support', 'Adjustable Height', 'Breathable Mesh', '5-year Warranty']
  },
  {
    id: '8',
    name: 'Wireless Earbuds',
    price: 149,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'electronics',
    description: 'True wireless earbuds with superior sound quality and long-lasting battery.',
    rating: 4.3,
    reviews: 234,
    inStock: true,
    features: ['True Wireless', '8-hour Battery', 'IPX4 Rating', 'Quick Pair']
  }
];