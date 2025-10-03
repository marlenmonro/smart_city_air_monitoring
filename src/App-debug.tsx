// Simple test App to debug
import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: 'blue', fontSize: '2rem' }}>
        React App is Working!
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        If you can see this, React is rendering correctly.
      </p>
      
      <div style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>Test Box</h2>
        <p>This should be a red box with white text.</p>
      </div>
      
      <div style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '20px',
        borderRadius: '8px'
      }}>
        <h2>Success!</h2>
        <p>React + TypeScript is working correctly.</p>
      </div>
    </div>
  );
};

export default App;




