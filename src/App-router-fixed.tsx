// Working App with React Router (Fixed Version)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Map from './components/Map';
import { useProducts } from './hooks/useData';
import ScrollToTop from './components/ScrollToTop';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';
import { useTranslation } from 'react-i18next';

// Navigation Component
const Navigation: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

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
          {t('navigation.brand')}
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
          {t('navigation.home')}
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
          {t('navigation.map')}
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
          {t('navigation.products')}
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
          {t('navigation.setupGuide')}
        </Link>
      </div>

      {/* Right - Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <LanguageSwitcher />
        <button style={{
          fontSize: '14px',
          fontWeight: '500',
          color: '#6b7280',
          background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
          border: '1px solid rgba(209, 213, 219, 0.5)',
          borderRadius: '8px',
          padding: '10px 18px',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(0)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 4px 8px -2px rgba(0, 0, 0, 0.15)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)';
          e.currentTarget.style.color = '#374151';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, 0.1)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)';
          e.currentTarget.style.color = '#6b7280';
        }}>
          {t('navigation.login')}
        </button>
        <button style={{
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 18px',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.25)',
          transform: 'translateY(0)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 25px 0 rgba(30, 64, 175, 0.35)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(30, 64, 175, 0.25)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
        }}>
          {t('navigation.getDemo')}
        </button>
      </div>
    </nav>
  );
};

// Footer Component
const Footer: React.FC = () => {
  const { t } = useTranslation();

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
              {t('footer.companyDescription')}
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
              {t('footer.products')}
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {[
                t('footer.airSenseHome'),
                t('footer.airProOffice'), 
                t('footer.airMaxIndustrial'),
                t('footer.airGuardPortable'),
                t('footer.allProducts')
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
              {t('footer.support')}
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {[
                t('footer.setupGuide'),
                t('footer.documentation'),
                t('footer.apiReference'),
                t('footer.supportContact'),
                t('footer.systemStatus')
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
              {t('footer.company')}
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {[
                t('footer.aboutUs'),
                t('footer.careers'),
                t('footer.privacyPolicy'),
                t('footer.termsOfService'),
                t('footer.contact')
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
              {t('footer.contact')}
            </h4>
            <div style={{
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: '1.5'
            }}>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                <strong>{t('footer.phoneLabel')}</strong><br />
                {t('footer.phoneNumber')}
              </p>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                <strong>{t('footer.emailLabel')}</strong><br />
                {t('footer.emailAddress')}
              </p>
              <p style={{ margin: '0' }}>
                <strong>{t('footer.hoursLabel')}</strong><br />
                {t('footer.hoursText')}
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
            {t('footer.copyright')}
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
              {t('footer.privacyPolicyFooter')}
            </a>
            <a href="#" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s'
            }}>
              {t('footer.termsOfServiceFooter')}
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
const MapPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        {t('pages.map.title')}
      </h1>
      <Map />
    </div>
  );
};

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
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
              {t('pages.products.title')}
            </h1>
            <p style={{
              fontSize: '1.25rem',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {t('pages.products.subtitle')}
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
                {t('pages.products.loading')}
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
              {t('pages.products.error.title')}
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
            {t('pages.products.title')}
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            {t('pages.products.subtitle')}
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
              <div style={{ opacity: '0.8', fontSize: '0.875rem' }}>{t('pages.products.stats.products')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>24/7</div>
              <div style={{ opacity: '0.8', fontSize: '0.875rem' }}>{t('pages.products.stats.monitoring')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>99.9%</div>
              <div style={{ opacity: '0.8', fontSize: '0.875rem' }}>{t('pages.products.stats.uptime')}</div>
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
              {t('pages.products.filters.category')}
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
              <option value="all">{t('pages.products.filters.allProducts')}</option>
              <option value="home">{t('pages.products.filters.home')}</option>
              <option value="office">{t('pages.products.filters.office')}</option>
              <option value="industrial">{t('pages.products.filters.industrial')}</option>
              <option value="portable">{t('pages.products.filters.portable')}</option>
            </select>
          </div>
          
          {/* Sort Options */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
              {t('pages.products.filters.sortBy')}
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
              <option value="name">{t('pages.products.filters.nameAZ')}</option>
              <option value="price-low">{t('pages.products.filters.priceLowHigh')}</option>
              <option value="price-high">{t('pages.products.filters.priceHighLow')}</option>
            </select>
          </div>
          
          {/* Results Count */}
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            {filteredProducts.length} {t('pages.products.results')}
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
              {t('pages.products.empty.title')}
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              {t('pages.products.empty.description')}
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
              {t('pages.products.empty.clearFilters')}
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
                        {t('pages.products.oneTimePurchase')}
                      </div>
                    </div>
                    
                    <button style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '0.875rem 1.75rem',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.25)',
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px 0 rgba(30, 64, 175, 0.35)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(30, 64, 175, 0.25)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
                    }}>
                      {t('pages.products.learnMore')}
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
  const { t } = useTranslation();
  const steps = (t('pages.guide.steps', { returnObjects: true }) as Array<{
    number: number;
    title: string;
    description: string;
    details: string[];
  }>) || [];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        {t('pages.guide.title')}
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
          {t('pages.guide.quickStart.title')}
        </h2>
        <p style={{ color: '#0c4a6e', marginBottom: '0' }}>
          {t('pages.guide.quickStart.description')}
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
              {step.details.map((detail: string, index: number) => (
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
          {t('pages.guide.proTips.title')}
        </h3>
        <ul style={{ color: '#92400e', marginLeft: '1.5rem' }}>
          {(t('pages.guide.proTips.tips', { returnObjects: true }) as string[]).map((tip: string, index: number) => (
            <li key={index} style={{ marginBottom: '0.25rem' }}>
              {tip}
            </li>
          ))}
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
          {t('pages.guide.needHelp.title')}
        </h3>
        <p style={{ color: '#166534', marginBottom: '0' }}>
          {t('pages.guide.needHelp.description')}
        </p>
      </div>
    </div>
  );
};

// 404 Page
const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        {t('pages.notFound.title')}
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem' }}>
        {t('pages.notFound.description')}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '10px',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: '600',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.25)',
          transform: 'translateY(0)',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 25px 0 rgba(30, 64, 175, 0.35)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(30, 64, 175, 0.25)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
        }}>
          {t('pages.notFound.links.goToHome')}
        </Link>
        <Link to="/map" style={{
          background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
          color: '#1e40af',
          textDecoration: 'none',
          borderRadius: '10px',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: '600',
          border: '2px solid #1e40af',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.1)',
          transform: 'translateY(0)',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 25px 0 rgba(30, 64, 175, 0.2)';
          e.currentTarget.style.backgroundColor = '#1e40af';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(30, 64, 175, 0.1)';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#1e40af';
        }}>
          {t('pages.notFound.links.goToMap')}
        </Link>
        <Link to="/products" style={{
          background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
          color: '#1e40af',
          textDecoration: 'none',
          borderRadius: '10px',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: '600',
          border: '2px solid #1e40af',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.1)',
          transform: 'translateY(0)',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 25px 0 rgba(30, 64, 175, 0.2)';
          e.currentTarget.style.backgroundColor = '#1e40af';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(30, 64, 175, 0.1)';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#1e40af';
        }}>
          {t('pages.notFound.links.goToProducts')}
        </Link>
        <Link to="/guide" style={{
          background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
          color: '#1e40af',
          textDecoration: 'none',
          borderRadius: '10px',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: '600',
          border: '2px solid #1e40af',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.1)',
          transform: 'translateY(0)',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 25px 0 rgba(30, 64, 175, 0.2)';
          e.currentTarget.style.backgroundColor = '#1e40af';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(30, 64, 175, 0.1)';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#1e40af';
        }}>
          {t('pages.notFound.links.goToGuide')}
        </Link>
      </div>
    </div>
  );
};

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
