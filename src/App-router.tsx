// App Component with React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import MapPage from './pages/MapPage';
import ProductsPage from './pages/ProductsPage';

// Navigation Component
const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="AirQuality" className="h-8 w-8" />
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              AirQuality
            </span>
          </div>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Map
            </Link>
            <Link
              to="/products"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/products') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Products
            </Link>
            <Link
              to="/guide"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/guide') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Setup Guide
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} AirQuality Company
        </div>
      </div>
    </footer>
  );
};

const GuidePage: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
      Setup Guide
    </h1>
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Setup instructions will be loaded here
      </p>
      <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-4">
        <p className="text-purple-800 dark:text-purple-200 text-sm">
          ✅ React Router is working! URL: {window.location.pathname}
        </p>
      </div>
    </div>
  </div>
);

// 404 Page
const NotFoundPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-8 text-center">
    <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
      Page Not Found
    </h1>
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      The page you're looking for doesn't exist.
    </p>
    <div className="space-x-4">
      <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
        Go to Map
      </Link>
      <Link to="/products" className="text-blue-600 dark:text-blue-400 hover:underline">
        Go to Products
      </Link>
      <Link to="/guide" className="text-blue-600 dark:text-blue-400 hover:underline">
        Go to Guide
      </Link>
    </div>
  </div>
);

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<MapPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
