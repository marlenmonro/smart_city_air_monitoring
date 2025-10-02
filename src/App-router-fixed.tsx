// Working App with React Router (Fixed Version)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Map from './components/Map';
import { ProductCard } from './components/ProductCardInline';
import { useProducts } from './hooks/useData';

// Navigation Component
const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px'
    }}>
      {/* Left - Brand */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#1e40af',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>AQ</span>
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>
          AirQuality
        </span>
      </Link>
      
      {/* Center - Navigation */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <Link to="/" style={{
          fontSize: '14px',
          fontWeight: '500',
          color: isActive('/') ? '#111827' : '#6b7280',
          textDecoration: 'none',
          padding: '8px 0',
          borderBottom: isActive('/') ? '2px solid #1e40af' : '2px solid transparent',
          transition: 'all 0.2s'
        }}>
          Home
        </Link>
        <Link to="/map" style={{
          fontSize: '14px',
          fontWeight: '500',
          color: isActive('/map') ? '#111827' : '#6b7280',
          textDecoration: 'none',
          padding: '8px 0',
          borderBottom: isActive('/map') ? '2px solid #1e40af' : '2px solid transparent',
          transition: 'all 0.2s'
        }}>
          Map
        </Link>
        <Link to="/products" style={{
          fontSize: '14px',
          fontWeight: '500',
          color: isActive('/products') ? '#111827' : '#6b7280',
          textDecoration: 'none',
          padding: '8px 0',
          borderBottom: isActive('/products') ? '2px solid #1e40af' : '2px solid transparent',
          transition: 'all 0.2s'
        }}>
          Products
        </Link>
        <Link to="/guide" style={{
          fontSize: '14px',
          fontWeight: '500',
          color: isActive('/guide') ? '#111827' : '#6b7280',
          textDecoration: 'none',
          padding: '8px 0',
          borderBottom: isActive('/guide') ? '2px solid #1e40af' : '2px solid transparent',
          transition: 'all 0.2s'
        }}>
          Setup Guide
        </Link>
      </div>

      {/* Right - Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button style={{
          fontSize: '14px',
          fontWeight: '500',
          color: '#6b7280',
          backgroundColor: 'transparent',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          padding: '8px 16px',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}>
          Log in
        </button>
        <button style={{
          fontSize: '14px',
          fontWeight: '500',
          color: 'white',
          backgroundColor: '#111827',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}>
          Get Demo
        </button>
      </div>
    </nav>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      padding: '1rem 2rem',
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '0.875rem'
    }}>
      © {new Date().getFullYear()} AirQuality Company
    </footer>
  );
};

// Page Components
const MapPage: React.FC = () => (
  <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
      Air Quality Map
    </h1>
    <Map />
  </div>
);

const ProductsPage: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Air Quality Products
        </h1>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '200px',
          backgroundColor: '#f3f4f6',
          borderRadius: '0.5rem'
        }}>
          <div style={{ color: '#6b7280' }}>Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Air Quality Products
        </h1>
        <div style={{
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '0.5rem',
          padding: '1rem'
        }}>
          <p style={{ color: '#dc2626' }}>
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Air Quality Products
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
};

const GuidePage: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Device",
      description: "Select the right air quality monitor for your needs",
      details: [
        "AirSense Home: Perfect for apartments and small homes",
        "AirPro Office: Ideal for offices and medium spaces", 
        "AirMax Industrial: Best for factories and large facilities",
        "AirGuard Portable: Great for monitoring on the go"
      ]
    },
    {
      number: 2,
      title: "Installation",
      description: "Set up your device in the optimal location",
      details: [
        "Place device 1.5-2 meters above ground level",
        "Keep away from windows, doors, and air vents",
        "Ensure good air circulation around the device",
        "Avoid direct sunlight and heat sources"
      ]
    },
    {
      number: 3,
      title: "Connect to WiFi",
      description: "Connect your device to your home network",
      details: [
        "Download the AirQuality mobile app",
        "Follow the in-app setup wizard",
        "Enter your WiFi credentials",
        "Wait for connection confirmation"
      ]
    },
    {
      number: 4,
      title: "Calibration",
      description: "Calibrate your device for accurate readings",
      details: [
        "Run initial calibration for 24 hours",
        "Avoid moving device during calibration",
        "Check readings against local air quality data",
        "Fine-tune settings if needed"
      ]
    },
    {
      number: 5,
      title: "Monitor & Maintain",
      description: "Keep your device running optimally",
      details: [
        "Check readings daily via app or web dashboard",
        "Clean sensors monthly with soft brush",
        "Replace filters every 6 months",
        "Update firmware regularly"
      ]
    }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Air Quality Monitor Setup Guide
      </h1>
      
      <div style={{ 
        backgroundColor: '#f0f9ff', 
        border: '1px solid #0ea5e9',
        borderRadius: '0.5rem', 
        padding: '1.5rem', 
        marginBottom: '2rem' 
      }}>
        <h2 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          color: '#0369a1',
          marginBottom: '0.5rem' 
        }}>
          🎯 Quick Start
        </h2>
        <p style={{ color: '#0c4a6e', marginBottom: '0' }}>
          Follow these 5 simple steps to get your air quality monitor up and running in under 30 minutes.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {steps.map((step) => (
          <div key={step.number} style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            borderLeft: '4px solid #3b82f6'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '1rem'
              }}>
                {step.number}
              </div>
              <div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '0.25rem',
                  color: '#111827'
                }}>
                  {step.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  {step.description}
                </p>
              </div>
            </div>
            
            <ul style={{ 
              marginLeft: '3rem', 
              color: '#374151',
              lineHeight: '1.6'
            }}>
              {step.details.map((detail, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ 
        backgroundColor: '#fef3c7', 
        border: '1px solid #f59e0b',
        borderRadius: '0.5rem', 
        padding: '1.5rem', 
        marginTop: '2rem' 
      }}>
        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: '600', 
          color: '#92400e',
          marginBottom: '0.5rem' 
        }}>
          💡 Pro Tips
        </h3>
        <ul style={{ color: '#92400e', marginLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.25rem' }}>Place multiple devices in different rooms for comprehensive monitoring</li>
          <li style={{ marginBottom: '0.25rem' }}>Set up alerts for unhealthy air quality levels</li>
          <li style={{ marginBottom: '0.25rem' }}>Share data with family members through the app</li>
          <li>Export data for long-term trend analysis</li>
        </ul>
      </div>

      <div style={{ 
        backgroundColor: '#dcfce7', 
        border: '1px solid #16a34a',
        borderRadius: '0.5rem', 
        padding: '1.5rem', 
        marginTop: '1rem',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: '600', 
          color: '#166534',
          marginBottom: '0.5rem' 
        }}>
          🆘 Need Help?
        </h3>
        <p style={{ color: '#166534', marginBottom: '0' }}>
          Contact our support team at support@airquality.com or call +1 (555) 123-4567
        </p>
      </div>
    </div>
  );
};

// 404 Page
const NotFoundPage: React.FC = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
      Page Not Found
    </h1>
    <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem' }}>
      The page you're looking for doesn't exist.
    </p>
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      <Link to="/" style={{
        color: '#2563eb',
        textDecoration: 'underline',
        fontSize: '1rem'
      }}>
        Go to Home
      </Link>
      <Link to="/map" style={{
        color: '#2563eb',
        textDecoration: 'underline',
        fontSize: '1rem'
      }}>
        Go to Map
      </Link>
      <Link to="/products" style={{
        color: '#2563eb',
        textDecoration: 'underline',
        fontSize: '1rem'
      }}>
        Go to Products
      </Link>
      <Link to="/guide" style={{
        color: '#2563eb',
        textDecoration: 'underline',
        fontSize: '1rem'
      }}>
        Go to Guide
      </Link>
    </div>
  </div>
);

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
        <Navigation />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
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
