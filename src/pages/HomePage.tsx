// Home Page Component - Main Landing Page
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        minHeight: '80vh'
      }}>
        {/* Left Side - Content */}
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            Indoor Air Quality Sensors
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#374151',
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            maxWidth: '500px'
          }}>
            Ensure your indoor air quality is safe with AirQuality's all-in-one environmental sensors. Monitor PM2.5, CO₂, temperature, and humidity in real-time.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/products" style={{
              backgroundColor: '#111827',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              display: 'inline-block',
              transition: 'all 0.2s'
            }}>
              Explore Devices
            </Link>
            
            <Link to="/guide" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '16px',
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
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '400px',
            height: '400px',
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
      
      {/* Features Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '4rem 2rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Why Choose AirQuality?
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Professional-grade air quality monitoring with real-time data and intelligent alerts.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
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
      </div>
      
      {/* Real-Time Monitoring Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '4rem 2rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem'
        }}>
          {/* Left - Content */}
          <div style={{ flex: 1 }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Real-Time Monitoring
            </h2>
            
            <p style={{
              fontSize: '1.125rem',
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
          <div style={{ flex: 1 }}>
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
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  {[
                    { label: 'PM2.5', value: '12.3', unit: 'µg/m³', status: 'good' },
                    { label: 'CO₂', value: '450', unit: 'ppm', status: 'good' },
                    { label: 'Temperature', value: '72.1', unit: '°F', status: 'good' },
                    { label: 'Humidity', value: '45.2', unit: '%', status: 'good' },
                    { label: 'TVOC', value: '180', unit: 'ppb', status: 'moderate' },
                    { label: 'AQI', value: '35', unit: '', status: 'good' }
                  ].map((sensor) => (
                    <div key={sensor.label} style={{
                      padding: '0.75rem',
                      backgroundColor: sensor.status === 'good' ? '#f0fdf4' : '#fef3c7',
                      borderRadius: '6px',
                      border: `1px solid ${sensor.status === 'good' ? '#bbf7d0' : '#fde68a'}`
                    }}>
                      <div style={{
                        fontSize: '12px',
                        color: '#6b7280',
                        marginBottom: '0.25rem'
                      }}>
                        {sensor.label}
                      </div>
                      <div style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#111827'
                      }}>
                        {sensor.value} {sensor.unit}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mini Chart */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '6px',
                  padding: '0.75rem',
                  height: '80px',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '0.5rem'
                  }}>
                    PM2.5 Trend (Last 24h)
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    right: '0.75rem',
                    height: '40px',
                    background: 'linear-gradient(45deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%)',
                    borderRadius: '2px',
                    opacity: '0.3'
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Smart Alerts Section */}
      <div style={{
        backgroundColor: '#f9fafb',
        padding: '4rem 2rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem'
        }}>
          {/* Left - UI Mockup */}
          <div style={{ flex: 1 }}>
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
                    PM2.5 Threshold
                  </label>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <input style={{
                      width: '60px',
                      padding: '0.5rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      fontSize: '14px'
                    }} defaultValue="25" />
                    <span style={{ fontSize: '14px', color: '#6b7280' }}>µg/m³</span>
                  </div>
                  
                  {/* Threshold Bar */}
                  <div style={{
                    height: '8px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '4px',
                    position: 'relative',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      width: '60%',
                      height: '100%',
                      backgroundColor: '#10b981',
                      borderRadius: '4px 0 0 4px'
                    }} />
                    <div style={{
                      position: 'absolute',
                      left: '60%',
                      top: '0',
                      width: '30%',
                      height: '100%',
                      backgroundColor: '#f59e0b',
                      borderRadius: '0'
                    }} />
                    <div style={{
                      position: 'absolute',
                      left: '90%',
                      top: '0',
                      width: '10%',
                      height: '100%',
                      backgroundColor: '#ef4444',
                      borderRadius: '0 4px 4px 0'
                    }} />
                    <div style={{
                      position: 'absolute',
                      left: '60%',
                      top: '-4px',
                      width: '2px',
                      height: '16px',
                      backgroundColor: '#111827',
                      borderRadius: '1px'
                    }} />
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    <span>Good (0-15)</span>
                    <span>Moderate (15-35)</span>
                    <span>Unhealthy (35+)</span>
                  </div>
                </div>
                
                {/* Alert Settings */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '6px',
                  padding: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#111827',
                    marginBottom: '0.5rem'
                  }}>
                    Alert Settings
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '0.5rem'
                  }}>
                    <select style={{
                      padding: '0.25rem 0.5rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>
                      <option>Enable</option>
                      <option>Disable</option>
                    </select>
                    <select style={{
                      padding: '0.25rem 0.5rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>
                      <option>Immediately</option>
                      <option>After 5 min</option>
                    </select>
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    Notify: admin@company.com, manager@company.com
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
          <div style={{ flex: 1 }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Smart Alerts
            </h2>
            
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Configure intelligent alerts that notify you when air quality levels exceed safe thresholds. Set custom thresholds and notification preferences for each location.
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Alert Features:
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.75rem'
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
      </div>
      
      {/* Easy Setup Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '4rem 2rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem'
        }}>
          {/* Left - Content */}
          <div style={{ flex: 1 }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Easy Setup
            </h2>
            
            <p style={{
              fontSize: '1.125rem',
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
          <div style={{ flex: 1 }}>
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
      </div>
    </div>
  );
};

export default HomePage;
