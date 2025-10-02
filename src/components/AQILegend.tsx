// AQI Legend Component
import React from 'react';
import { AQILegendProps } from '../types';
import { getAQICategories } from '../services/aqi';

export const AQILegend: React.FC<AQILegendProps> = ({ className = '' }) => {
  const categories = getAQICategories();

  return (
    <div className={`aqi-legend ${className}`}>
      <h3 className="text-sm font-semibold mb-2">Air Quality Index</h3>
      {categories.map((cat, index) => (
        <div key={index} className="aqi-item">
          <div 
            className="aqi-color" 
            style={{ backgroundColor: cat.color }}
          />
          <span>{cat.pm25} µg/m³ - {cat.label}</span>
        </div>
      ))}
    </div>
  );
};
