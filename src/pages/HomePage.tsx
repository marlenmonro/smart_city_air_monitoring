// Home Page Component - Main Landing Page
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
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
        paddingTop: 'clamp(3rem, 8vw, 6rem)',
        paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
        paddingLeft: 'clamp(1rem, 4vw, 2rem)',
        paddingRight: 'clamp(1rem, 4vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(2rem, 6vw, 4rem)',
        minHeight: 'auto',
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
            {t('hero.title')}
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#374151',
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
          }}>
            {t('hero.description')}
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
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
              color: 'white',
              padding: 'clamp(12px, 2.5vw, 16px) clamp(24px, 4vw, 32px)',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              fontWeight: '600',
              display: 'inline-block',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.25)',
              transform: 'translateY(0)',
              position: 'relative',
              overflow: 'hidden'
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
              {t('hero.cta')}
            </Link>
            
            <Link to="/guide" style={{
              color: '#1e40af',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              fontWeight: '600',
              padding: 'clamp(12px, 2.5vw, 16px) clamp(24px, 4vw, 32px)',
              border: '2px solid #1e40af',
              borderRadius: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.1)',
              transform: 'translateY(0)',
              display: 'inline-block',
              width: '100%',
              textAlign: 'center',
              backgroundColor: 'transparent'
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
              {t('hero.learnMore')}
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
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '20px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 20px 20px -10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
            border: '1px solid rgba(226, 232, 240, 0.5)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateY(-2deg) rotateX(2deg) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 32px 64px -12px rgba(0, 0, 0, 0.2), 0 25px 25px -10px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 20px 20px -10px rgba(0, 0, 0, 0.1)';
          }}>
            {/* Air Quality Sensor Device */}
            <div style={{
              width: '280px',
              height: '280px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              borderRadius: '16px',
              border: '2px solid rgba(226, 232, 240, 0.8)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
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
            {t('features.title')}
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: '#6b7280',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            {t('features.subtitle')}
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
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid rgba(226, 232, 240, 0.5)',
              textAlign: 'left',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(0)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
                {t('realTimeMonitoring.title')}
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                {t('features.feature1.description')}
              </p>
            </div>
            
            {/* Feature 2 */}
            <div style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid rgba(226, 232, 240, 0.5)',
              textAlign: 'left',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(0)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(34, 197, 94, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
                {t('smartAlerts.title')}
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                {t('features.feature2.description')}
              </p>
            </div>
            
            {/* Feature 3 */}
            <div style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid rgba(226, 232, 240, 0.5)',
              textAlign: 'left',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(0)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(245, 158, 11, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
                {t('easySetup.title')}
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                {t('features.feature3.description')}
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
              borderRadius: '20px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 20px 20px -10px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(226, 232, 240, 0.5)',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'transparent',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 32px 64px -12px rgba(0, 0, 0, 0.2), 0 25px 25px -10px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 20px 20px -10px rgba(0, 0, 0, 0.1)';
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
              {t('sensorEnvironment.title')}
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {t('sensorEnvironment.description')}
            </p>
            
            
            {/* Sensor Models */}
            <div style={{
              border: '1px solid rgba(226, 232, 240, 0.5)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backgroundColor: 'white'
            }}>
              {/* AirSense Home - Expanded */}
              <div 
                style={{
                  padding: '1.5rem',
                  background: expandedSensor === 'AirSense Home' 
                    ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' 
                    : 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                  borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: expandedSensor === 'AirSense Home' ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: expandedSensor === 'AirSense Home' 
                    ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                    : 'none'
                }}
                onClick={() => setExpandedSensor('AirSense Home')}
                onMouseEnter={(e) => {
                  if (expandedSensor !== 'AirSense Home') {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)';
                    e.currentTarget.style.transform = 'scale(1.01)';
                    e.currentTarget.style.boxShadow = '0 4px 12px -2px rgba(0, 0, 0, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedSensor !== 'AirSense Home') {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)';
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
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
                    width: '24px',
                    height: '24px',
                    background: expandedSensor === 'AirSense Home' 
                      ? 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)' 
                      : 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: expandedSensor === 'AirSense Home' 
                      ? '0 2px 4px -1px rgba(30, 64, 175, 0.3)' 
                      : '0 1px 2px -1px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
                    {t('sensorEnvironment.home')}
                  </h3>
                </div>
                {expandedSensor === 'AirSense Home' && (
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {t('sensorEnvironment.homeDescription')}
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
                    {t('sensorEnvironment.office')}
                  </h3>
                </div>
                {expandedSensor === 'AirPro Office' && (
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {t('sensorEnvironment.officeDescription')}
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
                    {t('sensorEnvironment.industrial')}
                  </h3>
                </div>
                {expandedSensor === 'AirMax Industrial' && (
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {t('sensorEnvironment.industrialDescription')}
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
                padding: '0.875rem 1.75rem',
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.25)',
                transform: 'translateY(0)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                {t('hero.cta')}
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
              {t('realTimeMonitoring.title')}
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {t('realTimeMonitoring.description')}
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                {t('realTimeMonitoring.keyFeatures')}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem'
              }}>
                {[t('realTimeMonitoring.pm25'), t('realTimeMonitoring.co2'), t('realTimeMonitoring.temperature'), t('realTimeMonitoring.humidity'), t('realTimeMonitoring.tvoc'), t('realTimeMonitoring.aqi')].map((metric) => (
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
                    {t('realTimeMonitoring.location')}
                  </h4>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: '0'
                  }}>
                    {t('realTimeMonitoring.timestamp')}
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
                      {t('realTimeMonitoring.pm25Trend')}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#ef4444',
                        borderRadius: '50%'
                      }} />
                      <span style={{
                        fontSize: '10px',
                        color: '#6b7280',
                        backgroundColor: '#e5e7eb',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px'
                      }}>
                        {t('realTimeMonitoring.liveIndicator')}
                      </span>
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
                      {t('realTimeMonitoring.allSystemsNormal')}
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
                    {t('realTimeMonitoring.lastUpdate')}
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
                  {t('smartAlerts.configureTriggers')}
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  margin: '0'
                }}>
                  {t('realTimeMonitoring.location')}
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
                    {selectedMetric} {t('smartAlerts.threshold')}
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
                        <option value="F">{t('smartAlerts.fahrenheit')}</option>
                        <option value="C">{t('smartAlerts.celsius')}</option>
                      </select>
                    ) : (
                      <span style={{ fontSize: '14px', color: '#6b7280' }}>
                        {selectedMetric === 'PM2.5' ? t('smartAlerts.units.pm25') : 
                         selectedMetric === 'CO₂' ? t('smartAlerts.units.co2') :
                         selectedMetric === 'Humidity' ? t('smartAlerts.units.humidity') :
                         selectedMetric === 'TVOC' ? t('smartAlerts.units.tvoc') : ''}
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
                          case 'PM2.5': return { 
                            good: t('smartAlerts.thresholdLabels.pm25.good'), 
                            moderate: t('smartAlerts.thresholdLabels.pm25.moderate'), 
                            unhealthy: t('smartAlerts.thresholdLabels.pm25.unhealthy') 
                          };
                          case 'CO₂': return { 
                            good: t('smartAlerts.thresholdLabels.co2.good'), 
                            moderate: t('smartAlerts.thresholdLabels.co2.moderate'), 
                            unhealthy: t('smartAlerts.thresholdLabels.co2.unhealthy') 
                          };
                          case 'Temperature': 
                            return temperatureUnit === 'F'
                              ? { 
                                  good: t('smartAlerts.thresholdLabels.temperature.goodF'), 
                                  moderate: t('smartAlerts.thresholdLabels.temperature.moderateF'), 
                                  unhealthy: t('smartAlerts.thresholdLabels.temperature.unhealthyF') 
                                }
                              : { 
                                  good: t('smartAlerts.thresholdLabels.temperature.goodC'), 
                                  moderate: t('smartAlerts.thresholdLabels.temperature.moderateC'), 
                                  unhealthy: t('smartAlerts.thresholdLabels.temperature.unhealthyC') 
                                };
                          case 'Humidity': return { 
                            good: t('smartAlerts.thresholdLabels.humidity.good'), 
                            moderate: t('smartAlerts.thresholdLabels.humidity.moderate'), 
                            unhealthy: t('smartAlerts.thresholdLabels.humidity.unhealthy') 
                          };
                          case 'TVOC': return { 
                            good: t('smartAlerts.thresholdLabels.tvoc.good'), 
                            moderate: t('smartAlerts.thresholdLabels.tvoc.moderate'), 
                            unhealthy: t('smartAlerts.thresholdLabels.tvoc.unhealthy') 
                          };
                          case 'AQI': return { 
                            good: t('smartAlerts.thresholdLabels.aqi.good'), 
                            moderate: t('smartAlerts.thresholdLabels.aqi.moderate'), 
                            unhealthy: t('smartAlerts.thresholdLabels.aqi.unhealthy') 
                          };
                          default: return { 
                            good: t('smartAlerts.thresholdLabels.pm25.good'), 
                            moderate: t('smartAlerts.thresholdLabels.pm25.moderate'), 
                            unhealthy: t('smartAlerts.thresholdLabels.pm25.unhealthy') 
                          };
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
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                    border: '1px solid rgba(209, 213, 219, 0.5)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#6b7280',
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
                    {t('smartAlerts.cancel')}
                  </button>
                  <button style={{
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'white',
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
                    {t('smartAlerts.save')}
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
              {t('smartAlerts.title')}
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6',
              textAlign: 'left'
            }}>
              {t('smartAlerts.description')}
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '1rem',
                textAlign: 'left'
              }}>
                {t('smartAlerts.alertFeatures')}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.75rem',
                textAlign: 'left'
              }}>
                {(t('smartAlerts.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                  <div key={index} style={{
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
              {t('easySetup.title')}
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {t('easySetup.description')}
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                {t('easySetup.setupProcess')}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.75rem'
              }}>
                {(t('easySetup.steps', { returnObjects: true }) as string[]).map((step: string, index: number) => (
                  <div key={index} style={{
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
                  {t('easySetup.deviceSetupWizard')}
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  margin: '0'
                }}>
                  {t('easySetup.stepIndicator')}
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
                    {t('easySetup.wifiNetwork')}
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
                    {t('easySetup.password')}
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
                      {t('easySetup.deviceConnected')}
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
                    {t('easySetup.setupProgress')}
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
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                    border: '1px solid rgba(209, 213, 219, 0.5)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#6b7280',
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
                    {t('easySetup.back')}
                  </button>
                  <button style={{
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'white',
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
                    {t('easySetup.continue')}
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
              {t('faq.title')}
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {t('faq.subtitle')}
            </p>
          </div>
          
          {/* FAQ Items */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                question: t('faq.question1'),
                answer: t('faq.answer1')
              },
              {
                question: t('faq.question2'),
                answer: t('faq.answer2')
              },
              {
                question: t('faq.question3'),
                answer: t('faq.answer3')
              },
              {
                question: t('faq.question4'),
                answer: t('faq.answer4')
              },
              {
                question: t('faq.question5'),
                answer: t('faq.answer5')
              },
              {
                question: t('faq.question6'),
                answer: t('faq.answer6')
              },
              {
                question: t('faq.question7'),
                answer: t('faq.answer7')
              },
              {
                question: t('faq.question8'),
                answer: t('faq.answer8')
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
              {t('support.title')}
            </h3>
            <p style={{
              color: '#6b7280',
              marginBottom: '1.5rem'
            }}>
              {t('support.description')}
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to="/guide" style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-block',
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
                {t('support.viewSetupGuide')}
              </Link>
              <a href="mailto:support@airquality.com" style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                color: '#1e40af',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                border: '2px solid #1e40af',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-block',
                boxShadow: '0 4px 14px 0 rgba(30, 64, 175, 0.1)',
                transform: 'translateY(0)'
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
                {t('support.contactSupport')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
