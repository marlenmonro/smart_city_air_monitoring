// AQI Service with TypeScript
import { AQICategory } from '../types';

export const pm25ToCategory = (pm25: number): AQICategory => {
  if (pm25 <= 12) {
    return {
      category: 'good',
      color: '#10b981',
      label: 'Good'
    };
  } else if (pm25 <= 35.4) {
    return {
      category: 'moderate',
      color: '#f59e0b',
      label: 'Moderate'
    };
  } else if (pm25 <= 55.4) {
    return {
      category: 'usg',
      color: '#f97316',
      label: 'Unhealthy for Sensitive Groups'
    };
  } else if (pm25 <= 150.4) {
    return {
      category: 'unhealthy',
      color: '#ef4444',
      label: 'Unhealthy'
    };
  } else if (pm25 <= 250.4) {
    return {
      category: 'very-unhealthy',
      color: '#8b5cf6',
      label: 'Very Unhealthy'
    };
  } else {
    return {
      category: 'hazardous',
      color: '#7c2d12',
      label: 'Hazardous'
    };
  }
};

export const getAQICategories = (): Array<AQICategory & { pm25: string }> => {
  return [
    { pm25: '0-12', ...pm25ToCategory(6), label: 'Good' },
    { pm25: '12.1-35.4', ...pm25ToCategory(24), label: 'Moderate' },
    { pm25: '35.5-55.4', ...pm25ToCategory(45), label: 'USG' },
    { pm25: '55.5-150.4', ...pm25ToCategory(100), label: 'Unhealthy' },
    { pm25: '150.5-250.4', ...pm25ToCategory(200), label: 'Very Unhealthy' },
    { pm25: '250.5+', ...pm25ToCategory(300), label: 'Hazardous' }
  ];
};