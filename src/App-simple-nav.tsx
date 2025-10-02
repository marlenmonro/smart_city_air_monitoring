// Simple App with Navigation (no complex components)
import React, { useState } from 'react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('map');

  const renderPage = () => {
    switch (currentPage) {
      case 'map':
        return (
          <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Air Quality Map
            </h1>
            <div style={{ 
              backgroundColor: '#f3f4f6', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>
                Interactive map with air quality data will be loaded here
              </p>
              <div style={{
                backgroundColor: '#dbeafe',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem'
              }}>
                <p style={{ color: '#1e40af', fontSize: '0.9rem' }}>
                  ✅ Navigation is working! Current page: {currentPage}
                </p>
              </div>
            </div>
          </div>
        );
      case 'products':
        return (
          <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Air Quality Products
            </h1>
            <div style={{ 
              backgroundColor: '#f3f4f6', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>
                Product catalog will be loaded here
              </p>
              <div style={{
                backgroundColor: '#dcfce7',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem'
              }}>
                <p style={{ color: '#166534', fontSize: '0.9rem' }}>
                  ✅ Navigation is working! Current page: {currentPage}
                </p>
              </div>
            </div>
          </div>
        );
      case 'guide':
        return (
          <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Setup Guide
            </h1>
            <div style={{ 
              backgroundColor: '#f3f4f6', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>
                Setup instructions will be loaded here
              </p>
              <div style={{
                backgroundColor: '#f3e8ff',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem'
              }}>
                <p style={{ color: '#7c3aed', fontSize: '0.9rem' }}>
                  ✅ Navigation is working! Current page: {currentPage}
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/logo.svg" alt="AirQuality" style={{ height: '32px', width: '32px' }} />
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2563eb' }}>
            AirQuality
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <button
            onClick={() => setCurrentPage('map')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              border: 'none',
              backgroundColor: currentPage === 'map' ? '#dbeafe' : 'transparent',
              color: currentPage === 'map' ? '#1e40af' : '#374151',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Map
          </button>
          <button
            onClick={() => setCurrentPage('products')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              border: 'none',
              backgroundColor: currentPage === 'products' ? '#dbeafe' : 'transparent',
              color: currentPage === 'products' ? '#1e40af' : '#374151',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Products
          </button>
          <button
            onClick={() => setCurrentPage('guide')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              border: 'none',
              backgroundColor: currentPage === 'guide' ? '#dbeafe' : 'transparent',
              color: currentPage === 'guide' ? '#1e40af' : '#374151',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Setup Guide
          </button>
        </div>
      </nav>
      
      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      
      {/* Footer */}
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
    </div>
  );
};

export default App;



