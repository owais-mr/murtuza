import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import AuthForm from './components/AuthForm';
import { Product } from './types';

type Page = 'home' | 'products' | 'categories' | 'about' | 'cart' | 'auth' | 'product-detail';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page as Page);
    if (page !== 'product-detail') {
      setSelectedProduct(null);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const handleShopNow = () => {
    setCurrentPage('products');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onProductClick={handleProductClick}
            onShopNow={handleShopNow}
          />
        );
      case 'products':
      case 'categories':
        return <ProductsPage onProductClick={handleProductClick} />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setCurrentPage('products')}
          />
        ) : (
          <div>Product not found</div>
        );
      case 'cart':
        return <Cart onBack={() => setCurrentPage('home')} />;
      case 'auth':
        return <AuthForm onBack={() => setCurrentPage('home')} />;
      case 'about':
        return (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">About EliteStore</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                EliteStore is your premier destination for high-quality products across electronics, fashion, 
                home goods, and accessories. We believe in curating only the finest items that combine 
                exceptional quality with outstanding value.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with a commitment to customer satisfaction, we've built our reputation on trust, 
                reliability, and an unwavering dedication to excellence. Every product in our collection 
                is carefully selected and thoroughly tested to meet our exacting standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Experience the difference that quality makes. Shop with confidence at EliteStore, 
                where premium products meet exceptional service.
              </p>
            </div>
          </div>
        );
      default:
        return <HomePage onProductClick={handleProductClick} onShopNow={handleShopNow} />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <Header currentPage={currentPage} onPageChange={handlePageChange} />
        <main className="pb-16">
          {renderCurrentPage()}
        </main>
      </div>
    </AppProvider>
  );
}

export default App;