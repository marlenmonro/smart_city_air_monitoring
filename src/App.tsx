// Main App Component with React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import MapPage from './pages/MapPage';
import ProductsPage from './pages/ProductsPage';
import { GuidePage } from './pages/GuidePage';

// Navigation Component
const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Brand */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer group"
            style={{ textDecoration: 'none' }}
          >
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:bg-primary-dark transition-colors">
              <span className="text-white font-bold text-sm">AQ</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
              AirQuality
            </span>
          </Link>
          
          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Map
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors ${
                isActive('/products') 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Products
            </Link>
            <Link
              to="/guide"
              className={`text-sm font-medium transition-colors ${
                isActive('/guide') 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Setup Guide
            </Link>
          </div>

          {/* Right side - Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Log in
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors">
              Get Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} AirQuality Company
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<MapPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="*" element={
              <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Page Not Found
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The page you're looking for doesn't exist.
                </p>
                <div className="space-x-4">
                  <Link to="/" className="text-primary dark:text-primary-light hover:underline">
                    Go to Map
                  </Link>
                  <Link to="/products" className="text-primary dark:text-primary-light hover:underline">
                    Go to Products
                  </Link>
                  <Link to="/guide" className="text-primary dark:text-primary-light hover:underline">
                    Go to Guide
                  </Link>
                </div>
              </div>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};
