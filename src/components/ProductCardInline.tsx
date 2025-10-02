// Product Card Component with inline styles as fallback
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s',
      marginBottom: '1rem'
    }}>
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#e5e7eb',
        borderRadius: '0.375rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6b7280',
        marginBottom: '1rem'
      }}>
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.375rem' }}
          />
        ) : (
          'Product Image'
        )}
      </div>
      
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        color: '#111827'
      }}>
        {product.name}
      </h3>
      
      <p style={{
        color: '#6b7280',
        fontSize: '0.875rem',
        marginBottom: '1rem'
      }}>
        {product.short}
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        {product.features.map((feature, index) => (
          <span 
            key={index}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}
          >
            {feature}
          </span>
        ))}
      </div>
      
      <div style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#2563eb'
      }}>
        ${product.price_usd}
      </div>
    </div>
  );
};



