// Map Page Component
import React from 'react';
import Map from '../components/Map';

const MapPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Air Quality Map
      </h1>
      <Map />
    </div>
  );
};

export default MapPage;