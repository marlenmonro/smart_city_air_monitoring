// TypeScript interfaces for type safety
export interface Device {
  id: string;
  name: string;
  lat: number;
  lon: number;
  pm25: number;
  last_seen: string;
  status: 'online' | 'offline';
}

export interface Product {
  sku: string;
  name: string;
  short: string;
  price_usd: number;
  features: string[];
  image: string | null;
}

export interface AQICategory {
  category: string;
  color: string;
  label: string;
}