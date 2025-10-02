// Data Service with TypeScript and error handling
import { Device, Product } from '../types';

class DataService {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  private async fetchData<T>(url: string): Promise<T> {
    // Check cache first
    const cached = this.cache.get(url);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Cache the result
      this.cache.set(url, { data, timestamp: Date.now() });
      
      return data;
    } catch (error) {
      console.error(`Failed to fetch ${url}:`, error);
      throw new Error(`Failed to load data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async fetchDevices(): Promise<Device[]> {
    return this.fetchData<Device[]>('/devices.json');
  }

  async fetchProducts(): Promise<Product[]> {
    return this.fetchData<Product[]>('/products.json');
  }

  clearCache(): void {
    this.cache.clear();
  }
}

// Export singleton instance
export const dataService = new DataService();