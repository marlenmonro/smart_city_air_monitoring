// Products Page Component
import React from 'react';
import { ProductCardInline as ProductCard } from '../components/ProductCardInline';
import { useProducts } from '../hooks/useData';
import TestComponent from '../components/TestComponent';

const ProductsPage: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Air Quality Products
        </h1>
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-600 dark:text-gray-300">Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Air Quality Products
        </h1>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200">
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Air Quality Products
      </h1>
      
      {/* Tailwind Test */}
      <TestComponent />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;