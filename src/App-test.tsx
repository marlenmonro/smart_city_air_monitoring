// Simple test component to debug
import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ color: 'blue' }}>React App is Working!</h1>
      <p>If you can see this, React is working correctly.</p>
      <div style={{ 
        width: '100px', 
        height: '100px', 
        backgroundColor: 'red',
        margin: '20px 0'
      }}>
        Red Box Test
      </div>
    </div>
  );
};

export default App;
