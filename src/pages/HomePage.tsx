// Home Page Component - Main Landing Page
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [expandedSensor, setExpandedSensor] = useState('AirSense Home');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedMetric, setSelectedMetric] = useState('PM2.5');
  const [thresholdValue, setThresholdValue] = useState(25);
  const [temperatureUnit, setTemperatureUnit] = useState('F');

  const getDefaultThreshold = (metric: string) => {
    switch(metric) {
      case 'PM2.5': return 25;
      case 'CO₂': return 800;
      case 'Temperature': return temperatureUnit === 'F' ? 72 : 22;
      case 'Humidity': return 55;
      case 'TVOC': return 300;
      case 'AQI': return 75;
      default: return 25;
    }
  };

  const handleMetricChange = (newMetric: string) => {
    setSelectedMetric(newMetric);
    setThresholdValue(getDefaultThreshold(newMetric));
  };
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(2rem, 6vw, 4rem)',
        minHeight: '80vh',
        position: 'relative'
      }}>
        {/* Responsive Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'clamp(2rem, 6vw, 4rem)',
          width: '100%',
          flexWrap: 'wrap'
        }}>
          {/* Left Side - Content */}
          <div style={{ 
            flex: '1 1 400px',
            textAlign: 'center',
            minWidth: '300px'
          }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            Indoor Air Quality Sensors
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#374151',
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
          }}>
            Ensure your indoor air quality is safe with AirQuality's all-in-one environmental sensors. Monitor PM2.5, CO₂, temperature, and humidity in real-time.
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem', 
            alignItems: 'center',
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <Link to="/products" style={{
              backgroundColor: '#111827',
              color: 'white',
              padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 24px)',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              fontWeight: '600',
              display: 'inline-block',
              transition: 'all 0.2s',
              width: '100%',
              textAlign: 'center'
            }}>
              Explore Devices
            </Link>
            
            <Link to="/guide" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              fontWeight: '500',
              padding: '12px 0',
              borderBottom: '1px solid transparent',
              transition: 'all 0.2s'
            }}>
              Learn More →
            </Link>
          </div>
        </div>
        
        {/* Right Side - Product Image */}
        <div style={{ 
          flex: '1 1 400px', 
          display: 'flex', 
          justifyContent: 'center',
          minWidth: '300px'
        }}>
          <div style={{
            width: 'clamp(250px, 50vw, 400px)',
            height: 'clamp(250px, 50vw, 400px)',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
            border: '1px solid #e5e7eb'
          }}>
            {/* Air Quality Sensor Device */}
            <div style={{
              width: '280px',
              height: '280px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '2px solid #e2e8f0',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Sensor Holes */}
              <div style={{
                width: '200px',
                height: '60px',
                backgroundColor: '#e2e8f0',
                borderRadius: '30px',
                marginBottom: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '180px',
                  height: '40px',
                  background: 'radial-gradient(circle, #cbd5e1 2px, transparent 2px)',
                  backgroundSize: '12px 12px'
                }} />
              </div>
              
              {/* Smaller sensor */}
              <div style={{
                width: '80px',
                height: '40px',
                backgroundColor: '#e2e8f0',
                borderRadius: '20px',
                marginBottom: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '20px',
                  background: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
                  backgroundSize: '8px 8px'
                }} />
              </div>
              
              {/* Brand Logo */}
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#1e40af',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>AQ</span>
              </div>
              
              {/* Device Label */}
              <span style={{
                fontSize: '12px',
                color: '#64748b',
                fontWeight: '500'
              }}>
                AirSense Pro
              </span>
            </div>
            
            {/* Shadow */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '20px',
              right: '20px',
              height: '20px',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '50%',
              filter: 'blur(10px)'
            }} />
          </div>
        </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)',
        margin: '0 auto',
        maxWidth: '1200px'
      }} />
      
      {/* Features Section */}
      <section style={{
        backgroundColor: 'white',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Why Choose AirQuality?
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: '#6b7280',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Professional-grade air quality monitoring with real-time data and intelligent alerts.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 4vw, 2rem)',
            marginTop: '3rem'
          }}>
            {/* Feature 1 */}
            <div style={{
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              textAlign: 'left'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#dbeafe',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#1e40af',
                  borderRadius: '2px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: 'white',
                    borderRadius: '1px'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: 'white',
                    borderRadius: '1px'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: 'white',
                    borderRadius: '1px'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: 'white',
                    borderRadius: '1px'
                  }} />
                </div>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '0.5rem'
              }}>
                Real-Time Monitoring
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Get instant updates on air quality metrics including PM2.5, CO₂, temperature, and humidity levels.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div style={{
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              textAlign: 'left'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#dcfce7',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#16a34a',
                  borderRadius: '50%',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'white',
                    borderRadius: '50%'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#ef4444',
                    borderRadius: '50%'
                  }} />
                </div>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '0.5rem'
              }}>
                Smart Alerts
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Receive notifications when air quality levels exceed safe thresholds, keeping you informed and protected.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div style={{
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              textAlign: 'left'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#fef3c7',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '4px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: 'white',
                    borderRadius: '1px'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: 'white',
                    borderRadius: '1px'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: 'white',
                    borderRadius: '1px'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: 'white',
                    borderRadius: '1px'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '4px',
                    right: '4px',
                    height: '2px',
                    backgroundColor: 'white',
                    borderRadius: '1px'
                  }} />
                </div>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '0.5rem'
              }}>
                Easy Setup
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Simple installation and configuration with our mobile app. Get started in minutes, not hours.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #d1d5db, #e5e7eb, #d1d5db, transparent)',
        margin: '0 auto',
        maxWidth: '1200px'
      }} />
      
      {/* Sensor Environment Selection Section */}
      <section style={{
        backgroundColor: '#f8fafc',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'clamp(2rem, 6vw, 4rem)',
          flexWrap: 'wrap'
        }}>
          {/* Left - Environment Image */}
          <div style={{ 
            flex: '1 1 500px', 
            display: 'flex', 
            justifyContent: 'center',
            minWidth: '300px'
          }}>
            <div style={{
              width: 'clamp(300px, 80vw, 600px)',
              height: 'clamp(225px, 60vw, 450px)',
              borderRadius: '16px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'transparent',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(0)'
            }}>
              {/* Dynamic Environment Image based on selected sensor */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden'
              }}>
                {/* Home Environment Image */}
                <img
                  src="/images/home-environment.png"
                  alt="Home Environment"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: expandedSensor === 'AirSense Home' ? 0.7 : 0,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'scale(1)'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Office Environment Image */}
                <img
                  src="/images/office-environment-2.png"
                  alt="Office Environment"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: expandedSensor === 'AirPro Office' ? 0.7 : 0,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'scale(1)'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Industrial Environment Image */}
                <img
                  src="/images/industrial-environment.png"
                  alt="Industrial Environment"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: expandedSensor === 'AirMax Industrial' ? 0.7 : 0,
                    transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'scale(1)'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Fallback placeholder */}
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#f8fafc',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#6b7280'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontSize: '24px' }}>🏠</span>
                </div>
                <p style={{ margin: '0', fontSize: '14px' }}>
                  {expandedSensor} Environment
                </p>
              </div>
            </div>
          </div>
          
          {/* Right - Sensor Selection */}
          <div style={{ 
            flex: '1 1 400px',
            minWidth: '300px',
            textAlign: 'left'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Built for Every Space
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Adaptable air quality sensors for homes, offices, schools, and industrial spaces—all connected to one simple platform.
            </p>
            
            {/* Sensor Models */}
            <div style={{
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              {/* AirSense Home - Expanded */}
              <div 
                style={{
                  padding: '1.5rem',
                  backgroundColor: expandedSensor === 'AirSense Home' ? 'white' : '#f9fafb',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: expandedSensor === 'AirSense Home' ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: expandedSensor === 'AirSense Home' ? '0 8px 25px -5px rgba(0, 0, 0, 0.1)' : 'none'
                }}
                onClick={() => setExpandedSensor('AirSense Home')}
                onMouseEnter={(e) => {
                  if (expandedSensor !== 'AirSense Home') {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.transform = 'scale(1.01)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedSensor !== 'AirSense Home') {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: expandedSensor === 'AirSense Home' ? '1rem' : '0'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: expandedSensor === 'AirSense Home' ? '#1e40af' : '#d1d5db',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '0',
                      height: '0',
                      borderLeft: '6px solid white',
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent'
                    }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: expandedSensor === 'AirSense Home' ? '600' : '500',
                    color: expandedSensor === 'AirSense Home' ? '#111827' : '#6b7280',
                    margin: '0'
                  }}>
                    AirSense Home
                  </h3>
                </div>
                {expandedSensor === 'AirSense Home' && (
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    Perfect for residential spaces, monitoring PM2.5, temperature, and humidity. Easy setup with Wi-Fi connectivity and mobile app integration for real-time alerts and historical data tracking.
                  </p>
                )}
              </div>
              
              {/* AirPro Office - Collapsed/Expanded */}
              <div 
                style={{
                  padding: '1.5rem',
                  backgroundColor: expandedSensor === 'AirPro Office' ? 'white' : '#f9fafb',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: expandedSensor === 'AirPro Office' ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: expandedSensor === 'AirPro Office' ? '0 8px 25px -5px rgba(0, 0, 0, 0.1)' : 'none'
                }}
                onClick={() => setExpandedSensor('AirPro Office')}
                onMouseEnter={(e) => {
                  if (expandedSensor !== 'AirPro Office') {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.transform = 'scale(1.01)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedSensor !== 'AirPro Office') {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: expandedSensor === 'AirPro Office' ? '1rem' : '0'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: expandedSensor === 'AirPro Office' ? '#1e40af' : '#d1d5db',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '0',
                      height: '0',
                      borderLeft: '6px solid white',
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent'
                    }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: expandedSensor === 'AirPro Office' ? '600' : '500',
                    color: expandedSensor === 'AirPro Office' ? '#111827' : '#6b7280',
                    margin: '0'
                  }}>
                    AirPro Office
                  </h3>
                </div>
                {expandedSensor === 'AirPro Office' && (
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    Advanced sensor for office environments, monitoring PM2.5, PM10, CO₂, temperature, and humidity. Features dashboard integration and professional-grade accuracy for workplace air quality management.
                  </p>
                )}
              </div>
              
              {/* AirMax Industrial - Collapsed/Expanded */}
              <div 
                style={{
                  padding: '1.5rem',
                  backgroundColor: expandedSensor === 'AirMax Industrial' ? 'white' : '#f9fafb',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: expandedSensor === 'AirMax Industrial' ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: expandedSensor === 'AirMax Industrial' ? '0 8px 25px -5px rgba(0, 0, 0, 0.1)' : 'none'
                }}
                onClick={() => setExpandedSensor('AirMax Industrial')}
                onMouseEnter={(e) => {
                  if (expandedSensor !== 'AirMax Industrial') {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.transform = 'scale(1.01)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedSensor !== 'AirMax Industrial') {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: expandedSensor === 'AirMax Industrial' ? '1rem' : '0'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: expandedSensor === 'AirMax Industrial' ? '#1e40af' : '#d1d5db',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '0',
                      height: '0',
                      borderLeft: '6px solid white',
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent'
                    }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: expandedSensor === 'AirMax Industrial' ? '600' : '500',
                    color: expandedSensor === 'AirMax Industrial' ? '#111827' : '#6b7280',
                    margin: '0'
                  }}>
                    AirMax Industrial
                  </h3>
                </div>
                {expandedSensor === 'AirMax Industrial' && (
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    Comprehensive industrial-grade sensor monitoring PM2.5, PM10, CO₂, NO₂, SO₂, temperature, and humidity. Features API integration and robust design for demanding industrial environments.
                  </p>
                )}
              </div>
            </div>
            
            {/* CTA Button */}
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <Link to="/products" style={{
                padding: '12px 24px',
                backgroundColor: 'transparent',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#111827',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Explore Devices
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #d1d5db, #e5e7eb, #d1d5db, transparent)',
        margin: '0 auto',
        maxWidth: '1200px'
      }} />
      
      {/* Real-Time Monitoring Section */}
      <section style={{
        backgroundColor: 'white',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'clamp(2rem, 6vw, 4rem)',
          flexWrap: 'wrap'
        }}>
          {/* Left - Content */}
          <div style={{ 
            flex: '1',
            minWidth: '300px',
            textAlign: 'left'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Real-Time Monitoring
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Monitor air quality metrics in real-time with comprehensive data visualization and historical tracking across all your locations.
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Key Metrics Tracked:
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem'
              }}>
                {['PM2.5', 'CO₂', 'Temperature', 'Humidity', 'TVOC', 'Air Quality Index'].map((metric) => (
                  <div key={metric} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#1e40af',
                      borderRadius: '50%'
                    }} />
                    <span style={{ color: '#374151', fontSize: '14px' }}>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right - UI Mockup */}
          <div style={{ 
            flex: '1',
            minWidth: '300px'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1rem',
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: '0'
                  }}>
                    Office Building - Floor 2
                  </h4>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: '0'
                  }}>
                    Dec 15, 2024, 2:30:00 PM
                  </p>
                </div>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%'
                }} />
              </div>
              
              {/* Sensor Data */}
              <div style={{ padding: '1rem' }}>
                {/* Key Metrics - Top Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  {[
                    { label: 'PM2.5', value: '12.3', unit: 'µg/m³', status: 'good', trend: '+2.1%' },
                    { label: 'CO₂', value: '450', unit: 'ppm', status: 'good', trend: '-1.2%' },
                    { label: 'Temperature', value: '22.3', unit: '°C', status: 'good', trend: '+0.3°' }
                  ].map((sensor) => (
                    <div key={sensor.label} style={{
                      padding: '0.75rem',
                      backgroundColor: sensor.status === 'good' ? '#f0fdf4' : '#fef3c7',
                      borderRadius: '8px',
                      border: `1px solid ${sensor.status === 'good' ? '#bbf7d0' : '#fde68a'}`,
                      position: 'relative',
                      transition: 'all 0.2s ease'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#6b7280',
                        marginBottom: '0.25rem',
                        fontWeight: '500'
                      }}>
                        {sensor.label}
                      </div>
                      <div style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#111827',
                        marginBottom: '0.25rem'
                      }}>
                        {sensor.value} {sensor.unit}
                      </div>
                      <div style={{
                        fontSize: '10px',
                        color: sensor.trend.startsWith('+') ? '#dc2626' : '#16a34a',
                        fontWeight: '600'
                      }}>
                        {sensor.trend}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Secondary Metrics - Bottom Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  {[
                    { label: 'Humidity', value: '45.2', unit: '%', status: 'good' },
                    { label: 'TVOC', value: '180', unit: 'ppb', status: 'moderate' },
                    { label: 'AQI', value: '35', unit: '', status: 'good' }
                  ].map((sensor) => (
                    <div key={sensor.label} style={{
                      padding: '0.75rem',
                      backgroundColor: sensor.status === 'good' ? '#f0fdf4' : '#fef3c7',
                      borderRadius: '8px',
                      border: `1px solid ${sensor.status === 'good' ? '#bbf7d0' : '#fde68a'}`,
                      transition: 'all 0.2s ease'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#6b7280',
                        marginBottom: '0.25rem',
                        fontWeight: '500'
                      }}>
                        {sensor.label}
                      </div>
                      <div style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#111827'
                      }}>
                        {sensor.value} {sensor.unit}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced PM2.5 Trend Chart */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  padding: '1rem',
                  height: '120px',
                  position: 'relative',
                  border: '1px solid #e5e7eb',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#111827'
                    }}>
                      PM2.5 Trend (Last 24h)
                    </div>
                    <div style={{
                      fontSize: '10px',
                      color: '#6b7280',
                      backgroundColor: '#e5e7eb',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px'
                    }}>
                      Live
                    </div>
                  </div>
                  
                  {/* Interactive Chart Area */}
                  <div style={{
                    position: 'relative',
                    height: '50px',
                    backgroundColor: '#ffffff',
                    borderRadius: '4px',
                    border: '1px solid #e5e7eb',
                    overflow: 'hidden'
                  }}>
                    {/* Chart Line */}
                    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                      <polyline
                        points="0,40 20,35 40,30 60,25 80,20 100,18 120,15 140,12 160,10 180,8 200,6"
                        fill="none"
                        stroke="#1e40af"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                      {/* Data Points */}
                      <circle cx="0" cy="40" r="2" fill="#1e40af" />
                      <circle cx="40" cy="30" r="2" fill="#1e40af" />
                      <circle cx="80" cy="20" r="2" fill="#1e40af" />
                      <circle cx="120" cy="15" r="2" fill="#1e40af" />
                      <circle cx="160" cy="10" r="2" fill="#1e40af" />
                      <circle cx="200" cy="6" r="2" fill="#1e40af" />
                    </svg>
                    
                    {/* Chart Grid Lines */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      backgroundImage: 'linear-gradient(to right, transparent 0%, #e5e7eb 0%, #e5e7eb 25%, transparent 25%), linear-gradient(to bottom, transparent 0%, #e5e7eb 0%, #e5e7eb 25%, transparent 25%)',
                      backgroundSize: '20px 20px',
                      opacity: '0.3'
                    }} />
                  </div>
                  
                  {/* Chart Legend */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '0.25rem',
                    fontSize: '9px',
                    color: '#6b7280',
                    paddingBottom: '0.5rem'
                  }}>
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>24:00</span>
                  </div>
                </div>

                {/* Status Indicators */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '2rem',
                  padding: '0.75rem',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '8px',
                  border: '1px solid #bbf7d0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%'
                    }} />
                    <span style={{ fontSize: '11px', color: '#111827', fontWeight: '500' }}>
                      All Systems Normal
                    </span>
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: '#6b7280',
                    backgroundColor: '#ffffff',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    border: '1px solid #e5e7eb'
                  }}>
                    Last Update: 2 min ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #d1d5db, #e5e7eb, #d1d5db, transparent)',
        margin: '0 auto',
        maxWidth: '1200px'
      }} />
      
      {/* Smart Alerts Section */}
      <section style={{
        backgroundColor: '#f8fafc',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(2rem, 6vw, 4rem)',
          flexWrap: 'wrap'
        }}>
            {/* Left - UI Mockup */}
            <div style={{ 
              flex: '1',
              minWidth: '300px'
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                overflow: 'hidden'
              }}>
              {/* Header */}
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1rem',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#111827',
                  margin: '0 0 0.25rem 0'
                }}>
                  Configure Alert Triggers
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  margin: '0'
                }}>
                  Office Building - Floor 2
                </p>
              </div>
              
              {/* Alert Configuration */}
              <div style={{ padding: '1rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>
                    {selectedMetric} Threshold
                  </label>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <select 
                      value={selectedMetric}
                      onChange={(e) => handleMetricChange(e.target.value)}
                      style={{
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'white'
                      }}
                    >
                      <option value="PM2.5">PM2.5</option>
                      <option value="CO₂">CO₂</option>
                      <option value="Temperature">Temperature</option>
                      <option value="Humidity">Humidity</option>
                      <option value="TVOC">TVOC</option>
                      <option value="AQI">AQI</option>
                    </select>
                    <input 
                      type="number"
                      value={thresholdValue}
                      onChange={(e) => setThresholdValue(Number(e.target.value))}
                      style={{
                        width: '60px',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }} 
                    />
                    {selectedMetric === 'Temperature' ? (
                      <select 
                        value={temperatureUnit}
                        onChange={(e) => {
                          setTemperatureUnit(e.target.value);
                          // Convert current value when switching units
                          if (e.target.value === 'C') {
                            setThresholdValue(Math.round((thresholdValue - 32) * 5/9));
                          } else {
                            setThresholdValue(Math.round(thresholdValue * 9/5 + 32));
                          }
                        }}
                        style={{
                          padding: '0.25rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '4px',
                          fontSize: '12px',
                          backgroundColor: 'white'
                        }}
                      >
                        <option value="F">°F</option>
                        <option value="C">°C</option>
                      </select>
                    ) : (
                      <span style={{ fontSize: '14px', color: '#6b7280' }}>
                        {selectedMetric === 'PM2.5' ? 'µg/m³' : 
                         selectedMetric === 'CO₂' ? 'ppm' :
                         selectedMetric === 'Humidity' ? '%' :
                         selectedMetric === 'TVOC' ? 'ppb' : ''}
                      </span>
                    )}
                  </div>
                  
                  {/* Dynamic Threshold Bar */}
                  <div style={{
                    height: '8px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '4px',
                    position: 'relative',
                    marginBottom: '1rem'
                  }}>
                    {(() => {
                      const getThresholds = (metric: string) => {
                        switch(metric) {
                          case 'PM2.5': return { good: 15, moderate: 35, unhealthy: 50 };
                          case 'CO₂': return { good: 400, moderate: 1000, unhealthy: 1500 };
                          case 'Temperature': 
                            return temperatureUnit === 'F' 
                              ? { good: 68, moderate: 75, unhealthy: 85 }
                              : { good: 20, moderate: 24, unhealthy: 29 };
                          case 'Humidity': return { good: 30, moderate: 60, unhealthy: 80 };
                          case 'TVOC': return { good: 200, moderate: 500, unhealthy: 1000 };
                          case 'AQI': return { good: 50, moderate: 100, unhealthy: 150 };
                          default: return { good: 15, moderate: 35, unhealthy: 50 };
                        }
                      };
                      
                      const thresholds = getThresholds(selectedMetric);
                      const goodPercent = (thresholds.good / thresholds.unhealthy) * 100;
                      const moderatePercent = ((thresholds.moderate - thresholds.good) / thresholds.unhealthy) * 100;
                      const unhealthyPercent = ((thresholds.unhealthy - thresholds.moderate) / thresholds.unhealthy) * 100;
                      
                      const currentPercent = Math.min((thresholdValue / thresholds.unhealthy) * 100, 100);
                      
                      return (
                        <>
                          <div style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: `${goodPercent}%`,
                            height: '100%',
                            backgroundColor: '#10b981',
                            borderRadius: '4px 0 0 4px'
                          }} />
                          <div style={{
                            position: 'absolute',
                            left: `${goodPercent}%`,
                            top: '0',
                            width: `${moderatePercent}%`,
                            height: '100%',
                            backgroundColor: '#f59e0b',
                            borderRadius: '0'
                          }} />
                          <div style={{
                            position: 'absolute',
                            left: `${goodPercent + moderatePercent}%`,
                            top: '0',
                            width: `${unhealthyPercent}%`,
                            height: '100%',
                            backgroundColor: '#ef4444',
                            borderRadius: '0 4px 4px 0'
                          }} />
                          <div style={{
                            position: 'absolute',
                            left: `${currentPercent}%`,
                            top: '-4px',
                            width: '2px',
                            height: '16px',
                            backgroundColor: '#111827',
                            borderRadius: '1px'
                          }} />
                        </>
                      );
                    })()}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    {(() => {
                      const getThresholds = (metric: string) => {
                        switch(metric) {
                          case 'PM2.5': return { good: 'Good (0-15)', moderate: 'Moderate (15-35)', unhealthy: 'Unhealthy (35+)' };
                          case 'CO₂': return { good: 'Good (0-400)', moderate: 'Moderate (400-1000)', unhealthy: 'Unhealthy (1000+)' };
                          case 'Temperature': 
                            return temperatureUnit === 'F'
                              ? { good: 'Good (60-68°F)', moderate: 'Moderate (68-75°F)', unhealthy: 'Unhealthy (75°F+)' }
                              : { good: 'Good (15-20°C)', moderate: 'Moderate (20-24°C)', unhealthy: 'Unhealthy (24°C+)' };
                          case 'Humidity': return { good: 'Good (30-50%)', moderate: 'Moderate (50-60%)', unhealthy: 'Unhealthy (60%+)' };
                          case 'TVOC': return { good: 'Good (0-200)', moderate: 'Moderate (200-500)', unhealthy: 'Unhealthy (500+)' };
                          case 'AQI': return { good: 'Good (0-50)', moderate: 'Moderate (50-100)', unhealthy: 'Unhealthy (100+)' };
                          default: return { good: 'Good (0-15)', moderate: 'Moderate (15-35)', unhealthy: 'Unhealthy (35+)' };
                        }
                      };
                      const labels = getThresholds(selectedMetric);
                      return (
                        <>
                          <span>{labels.good}</span>
                          <span>{labels.moderate}</span>
                          <span>{labels.unhealthy}</span>
                        </>
                      );
                    })()}
                  </div>
                </div>
                
                
                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  justifyContent: 'flex-end'
                }}>
                  <button style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    Cancel
                  </button>
                  <button style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#111827',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'white'
                  }}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div style={{ 
            flex: '1',
            minWidth: '300px',
            textAlign: 'left'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              Smart Alerts
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6',
              textAlign: 'left'
            }}>
              Configure intelligent alerts that notify you when air quality levels exceed safe thresholds. Set custom thresholds and notification preferences for each location.
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '1rem',
                textAlign: 'left'
              }}>
                Alert Features:
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.75rem',
                textAlign: 'left'
              }}>
                {[
                  'Custom threshold configuration for each metric',
                  'Immediate or delayed notification options',
                  'Email and SMS alert delivery',
                  'Historical alert tracking and reporting',
                  'Multi-user notification management'
                ].map((feature) => (
                  <div key={feature} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#1e40af',
                      borderRadius: '50%'
                    }} />
                    <span style={{ color: '#374151', fontSize: '14px' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #d1d5db, #e5e7eb, #d1d5db, transparent)',
        margin: '0 auto',
        maxWidth: '1200px'
      }} />
      
      {/* Easy Setup Section */}
      <section style={{
        backgroundColor: 'white',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'clamp(2rem, 6vw, 4rem)',
          flexWrap: 'wrap'
        }}>
          {/* Left - Content */}
          <div style={{ 
            flex: '1',
            minWidth: '300px',
            textAlign: 'left'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Easy Setup
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Get your air quality monitoring system up and running in minutes with our intuitive setup wizard and mobile app configuration.
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Setup Process:
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.75rem'
              }}>
                {[
                  'Download the AirQuality mobile app',
                  'Connect device to WiFi network',
                  'Configure location and device settings',
                  'Set up user accounts and permissions',
                  'Start monitoring in under 5 minutes'
                ].map((step, index) => (
                  <div key={step} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#1e40af',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: 'white',
                      fontWeight: '600'
                    }}>
                      {index + 1}
                    </div>
                    <span style={{ color: '#374151', fontSize: '14px' }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right - UI Mockup */}
          <div style={{ 
            flex: '1',
            minWidth: '300px'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1rem',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#111827',
                  margin: '0 0 0.25rem 0'
                }}>
                  Device Setup Wizard
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  margin: '0'
                }}>
                  Step 2 of 4: Network Configuration
                </p>
              </div>
              
              {/* Setup Content */}
              <div style={{ padding: '1rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>
                    WiFi Network
                  </label>
                  <select style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    marginBottom: '0.5rem'
                  }}>
                    <option>Office_WiFi_5G</option>
                    <option>Office_WiFi_2.4G</option>
                    <option>Guest_Network</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>
                    Password
                  </label>
                  <input style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }} type="password" defaultValue="••••••••" />
                </div>
                
                {/* Device Status */}
                <div style={{
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '6px',
                  padding: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%'
                    }} />
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#111827'
                    }}>
                      Device Connected
                    </span>
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    AirSense Pro - Serial: AS2024001
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    marginBottom: '0.5rem'
                  }}>
                    Setup Progress
                  </div>
                  <div style={{
                    height: '4px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '50%',
                      height: '100%',
                      backgroundColor: '#1e40af',
                      borderRadius: '2px'
                    }} />
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  justifyContent: 'space-between'
                }}>
                  <button style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    Back
                  </button>
                  <button style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: '#1e40af',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: 'white'
                  }}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #d1d5db, #e5e7eb, #d1d5db, transparent)',
        margin: '0 auto',
        maxWidth: '1200px'
      }} />
      
      {/* FAQ Section */}
      <section style={{
        backgroundColor: '#f8fafc',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* FAQ Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Everything you need to know about air quality monitoring and our sensors.
            </p>
          </div>
          
          {/* FAQ Items */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                question: "How accurate are the air quality measurements?",
                answer: "Our sensors provide laboratory-grade accuracy with ±5% precision for PM2.5 measurements and ±3% for CO₂ levels. All sensors are calibrated using certified reference standards and undergo rigorous testing before deployment."
              },
              {
                question: "What is the typical battery life for portable sensors?",
                answer: "The AirGuard Portable sensor offers up to 30 days of continuous monitoring on a single charge, with power-saving modes extending battery life to 60 days. Battery life varies based on measurement frequency and environmental conditions."
              },
              {
                question: "Can I integrate the sensors with existing building management systems?",
                answer: "Yes, all our sensors support API integration and can connect to most building management systems (BMS), HVAC controls, and IoT platforms. We provide comprehensive documentation and SDKs for seamless integration."
              },
              {
                question: "What maintenance is required for the sensors?",
                answer: "Our sensors are designed for minimal maintenance. The AirSense Home requires cleaning every 6 months, while industrial sensors may need calibration checks annually. All maintenance schedules are customizable through our dashboard."
              },
              {
                question: "How do I set up alerts and notifications?",
                answer: "You can configure custom alerts through our mobile app or web dashboard. Set thresholds for any measured parameter, choose notification methods (email, SMS, push notifications), and specify who receives alerts for each location."
              },
              {
                question: "What happens if a sensor goes offline?",
                answer: "If a sensor loses connectivity, you'll receive an immediate notification. The sensor continues collecting data locally and will sync all stored data once connectivity is restored. Data is never lost during outages."
              },
              {
                question: "Is my data secure and private?",
                answer: "Absolutely. All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We're SOC 2 Type II compliant and GDPR compliant, ensuring your air quality data remains private and secure."
              },
              {
                question: "Can I monitor multiple locations from one dashboard?",
                answer: "Yes, our platform supports unlimited locations and sensors. You can organize locations by building, floor, or department, and view real-time data, historical trends, and alerts across all your sites from a single dashboard."
              }
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '1rem',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: expandedFAQ === index ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                onMouseEnter={(e) => {
                  if (expandedFAQ !== index) {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedFAQ !== index) {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {/* Question */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: expandedFAQ === index ? '#f8fafc' : 'white',
                  transition: 'background-color 0.3s ease'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#111827',
                    margin: '0',
                    flex: '1',
                    paddingRight: '1rem'
                  }}>
                    {faq.question}
                  </h3>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: expandedFAQ === index ? '#1e40af' : '#d1d5db',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    flexShrink: '0'
                  }}>
                    <div style={{
                      width: '0',
                      height: '0',
                      borderLeft: expandedFAQ === index ? '6px solid white' : '6px solid #6b7280',
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent',
                      transform: expandedFAQ === index ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'all 0.3s ease'
                    }} />
                  </div>
                </div>
                
                {/* Answer */}
                {expandedFAQ === index && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    backgroundColor: '#f8fafc',
                    animation: 'fadeIn 0.3s ease-in-out'
                  }}>
                    <p style={{
                      color: '#6b7280',
                      lineHeight: '1.6',
                      margin: '0',
                      fontSize: '1rem'
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Contact CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '0.5rem'
            }}>
              Still have questions?
            </h3>
            <p style={{
              color: '#6b7280',
              marginBottom: '1.5rem'
            }}>
              Our support team is here to help you get the most out of your air quality monitoring system.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to="/guide" style={{
                padding: '12px 24px',
                backgroundColor: '#1e40af',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.2s',
                display: 'inline-block'
              }}>
                View Setup Guide
              </Link>
              <a href="mailto:support@airquality.com" style={{
                padding: '12px 24px',
                backgroundColor: 'transparent',
                color: '#1e40af',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                border: '1px solid #1e40af',
                transition: 'all 0.2s',
                display: 'inline-block'
              }}>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
