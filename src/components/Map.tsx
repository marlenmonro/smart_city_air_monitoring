// Map Component with React Leaflet and Custom Hooks
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useDevices } from '../hooks/useData';
import { pm25ToCategory, getAQICategories } from '../services/aqi';

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// AQI Legend Component
const AQILegend: React.FC = () => {
  const categories = getAQICategories();

  return (
    <div className="aqi-legend">
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

// Map Component
const Map: React.FC = () => {
  const { devices, loading, error } = useDevices();

  const createCustomIcon = (color: string) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        width: 20px; 
        height: 20px; 
        background-color: ${color}; 
        border: 2px solid white; 
        border-radius: 50%; 
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="text-gray-600 dark:text-gray-300">Loading map...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <p className="text-red-800 dark:text-red-200">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <MapContainer
        center={[43.238949, 76.889709]}
        zoom={11}
        className="map-container"
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {devices.map((device) => {
          const aqi = pm25ToCategory(device.pm25);
          const lastSeen = new Date(device.last_seen).toLocaleString();
          
          return (
            <Marker
              key={device.id}
              position={[device.lat, device.lon]}
              icon={createCustomIcon(aqi.color)}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h3 className="font-semibold mb-2 text-gray-900">
                    {device.name}
                  </h3>
                  <p className="mb-1 text-sm">
                    <strong>PM2.5:</strong> {device.pm25} µg/m³
                  </p>
                  <p className="mb-1 text-sm">
                    <strong>Status:</strong>{' '}
                    <span style={{ color: aqi.color }} className="font-semibold">
                      {aqi.label}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Last seen: {lastSeen}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      
      <AQILegend />
    </div>
  );
};

export default Map;