// Product Card Component
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 hover:-translate-y-1">
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400 mb-4">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          'Product Image'
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {product.name}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {product.short}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {product.features.map((feature, index) => (
          <span 
            key={index}
            className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium"
          >
            {feature}
          </span>
        ))}
      </div>
      
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        ${product.price_usd}
      </div>
    </div>
  );
};