// Test component to check if Tailwind is working
import React from 'react';

const TestComponent: React.FC = () => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold">Tailwind Test</h1>
      <p className="text-sm">If you see this styled, Tailwind is working!</p>
    </div>
  );
};

export default TestComponent;



