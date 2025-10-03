// Working App with React Router (Fixed Version)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Map from './components/Map';
import { ProductCard } from './components/ProductCardInline';
import { useProducts } from './hooks/useData';
import ScrollToTop from './components/ScrollToTop';

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
      padding: '3rem 2rem 2rem',
      marginTop: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#1e40af',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>AQ</span>
              </div>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827'
              }}>
                AirQuality
              </span>
            </div>
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: '1.5',
              margin: '0 0 1rem 0'
            }}>
              Professional air quality monitoring solutions for homes, offices, and industrial spaces.
            </p>
          </div>
          
          {/* Products */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              margin: '0 0 1rem 0'
            }}>
              Products
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {[
                'AirSense Home',
                'AirPro Office', 
                'AirMax Industrial',
                'AirGuard Portable',
                'All Products'
              ].map((item) => (
                <li key={item} style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products" style={{
                    color: '#6b7280',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s'
                  }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              margin: '0 0 1rem 0'
            }}>
              Support
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {[
                'Setup Guide',
                'Documentation',
                'API Reference',
                'Contact Support',
                'System Status'
              ].map((item) => (
                <li key={item} style={{ marginBottom: '0.5rem' }}>
                  <Link to="/guide" style={{
                    color: '#6b7280',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s'
                  }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              margin: '0 0 1rem 0'
            }}>
              Company
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {[
                'About Us',
                'Careers',
                'Privacy Policy',
                'Terms of Service',
                'Contact'
              ].map((item) => (
                <li key={item} style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{
                    color: '#6b7280',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s'
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              margin: '0 0 1rem 0'
            }}>
              Contact
            </h4>
            <div style={{
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: '1.5'
            }}>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                <strong>Phone:</strong><br />
                +1 (555) 123-4567
              </p>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                <strong>Email:</strong><br />
                support@airquality.com
              </p>
              <p style={{ margin: '0' }}>
                <strong>Hours:</strong><br />
                Mon-Fri 9AM-6PM PST
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div style={{
          borderTop: '1px solid #e5e7eb',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            color: '#6b7280',
            fontSize: '14px'
          }}>
            © 2024 AirQuality. All rights reserved.
          </div>
          
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            <a href="#" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s'
            }}>
              Privacy Policy
            </a>
            <a href="#" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s'
            }}>
              Terms of Service
            </a>
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center'
            }}>
              <a href="#" style={{
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'color 0.2s'
              }}>
                📧
              </a>
              <a href="#" style={{
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'color 0.2s'
              }}>
                📱
              </a>
              <a href="#" style={{
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'color 0.2s'
              }}>
                💼
              </a>
            </div>
          </div>
        </div>
      </div>
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
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('name');

  // Filter and sort products
  const filteredProducts = React.useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => {
        const category = product.name.toLowerCase();
        return category.includes(selectedCategory.toLowerCase());
      });
    }
    
    // Sort products
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price_usd - b.price_usd;
        case 'price-high':
          return b.price_usd - a.price_usd;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [products, selectedCategory, sortBy]);

  if (loading) {
    return (
      <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          padding: '4rem 2rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1rem',
              opacity: '0.8'
            }}>
              Air Quality Products
            </h1>
            <p style={{
              fontSize: '1.25rem',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Professional air quality monitoring solutions for every environment
            </p>
          </div>
        </div>
        
        {/* Loading State */}
        <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '400px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '4px solid #e5e7eb',
                borderTop: '4px solid #1e40af',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              <div style={{ color: '#6b7280', fontSize: '18px' }}>
                Loading products...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          padding: '4rem 2rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Air Quality Products
            </h1>
            <p style={{
              fontSize: '1.25rem',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Professional air quality monitoring solutions for every environment
            </p>
          </div>
        </div>
        
        {/* Error State */}
        <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '1rem'
            }}>⚠️</div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#dc2626',
              marginBottom: '0.5rem'
            }}>
              Unable to Load Products
            </h2>
            <p style={{ color: '#dc2626', fontSize: '1rem' }}>
              {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        padding: '4rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Air Quality Products
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Professional air quality monitoring solutions for every environment
          </p>
          
          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>{products.length}</div>
              <div style={{ opacity: '0.8', fontSize: '0.875rem' }}>Products</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>24/7</div>
              <div style={{ opacity: '0.8', fontSize: '0.875rem' }}>Monitoring</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>99.9%</div>
              <div style={{ opacity: '0.8', fontSize: '0.875rem' }}>Uptime</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters and Controls */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
              Category:
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Products</option>
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="industrial">Industrial</option>
              <option value="portable">Portable</option>
            </select>
          </div>
          
          {/* Sort Options */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
            </select>
          </div>
          
          {/* Results Count */}
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div style={{
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '1rem' }}>🔍</div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '0.5rem'
            }}>
              No Products Found
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Try adjusting your filters to see more products.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#1e40af',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.sku}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.6s ease ${index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Product Image */}
                <div style={{
                  height: '200px',
                  backgroundColor: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: '#e2e8f0',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    {/* Sensor Icon */}
                    <div style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#1e40af',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '20px' }}>📊</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: '#1e40af',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {product.name.includes('Home') ? 'Home' : 
                     product.name.includes('Office') ? 'Office' :
                     product.name.includes('Industrial') ? 'Industrial' : 'Portable'}
                  </div>
                </div>
                
                {/* Product Info */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '0.5rem'
                  }}>
                    {product.name}
                  </h3>
                  
                  <p style={{
                    color: '#6b7280',
                    fontSize: '14px',
                    marginBottom: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {product.short}
                  </p>
                  
                  {/* Features */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: '#f0f9ff',
                          color: '#1e40af',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Price and CTA */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#111827'
                      }}>
                        ${product.price_usd}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#6b7280'
                      }}>
                        One-time purchase
                      </div>
                    </div>
                    
                    <button style={{
                      backgroundColor: '#1e40af',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.75rem 1.5rem',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
      <ScrollToTop />
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
