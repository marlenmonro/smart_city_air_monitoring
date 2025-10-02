# AirQuality SPA - Modern React + TypeScript

A modern, scalable air quality monitoring Single Page Application built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern React Architecture** - Component-based with hooks
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Leaflet** - Interactive maps
- **Custom Hooks** - Reusable data fetching logic
- **Error Handling** - Comprehensive error states
- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Automatic dark/light theme

## 🏗️ Architecture

```
src/
├── components/          # Reusable UI components
│   ├── Map.tsx         # Interactive map with Leaflet
│   ├── ProductCard.tsx # Product display component
│   └── AQILegend.tsx   # Air Quality Index legend
├── pages/              # Page components
│   ├── MapPage.tsx     # Map page
│   ├── ProductsPage.tsx # Products page
│   └── GuidePage.tsx   # Setup guide page
├── hooks/              # Custom React hooks
│   └── useData.ts      # Data fetching hooks
├── services/           # Business logic
│   ├── aqi.ts          # AQI calculations
│   └── dataService.ts  # API service with caching
├── types/              # TypeScript type definitions
│   └── index.ts        # All interfaces and types
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles + Tailwind
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Key Improvements Over Vanilla JS

### 1. **Type Safety**
```typescript
interface Device {
  id: string;
  name: string;
  lat: number;
  lon: number;
  pm25: number;
  last_seen: string;
  status: 'online' | 'offline';
}
```

### 2. **Component Architecture**
```tsx
// Reusable, testable components
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3>{product.name}</h3>
      <p>{product.short}</p>
      <div className="text-2xl font-bold">${product.price_usd}</div>
    </div>
  );
};
```

### 3. **Custom Hooks for Data**
```tsx
// Reusable data fetching logic
export const useDevices = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // ... implementation
};
```

### 4. **Modern State Management**
- React hooks for local state
- Custom hooks for shared logic
- Error boundaries for error handling
- Loading states for better UX

### 5. **Better Developer Experience**
- Hot module replacement
- TypeScript IntelliSense
- ESLint for code quality
- Prettier for code formatting
- Source maps for debugging

## 🎨 Styling Approach

- **Tailwind CSS** - Utility-first CSS framework
- **CSS Variables** - For theming
- **Dark Mode** - Automatic system preference detection
- **Responsive Design** - Mobile-first approach
- **Component-scoped Styles** - Better maintainability

## 🚀 Future Enhancements

### Easy to Add:
- **State Management** - Redux Toolkit, Zustand
- **Testing** - Jest, React Testing Library, Playwright
- **API Integration** - Real backend with GraphQL/REST
- **Real-time Updates** - WebSocket connections
- **PWA Features** - Offline support, push notifications
- **Internationalization** - Multi-language support
- **Analytics** - User behavior tracking
- **Performance** - Code splitting, lazy loading

### Backend Integration:
```typescript
// Easy to extend with real API
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const fetchDevices = async (): Promise<Device[]> => {
  const response = await fetch(`${API_BASE}/api/devices`);
  return response.json();
};
```

## 📊 Performance Benefits

- **Code Splitting** - Automatic with React Router
- **Tree Shaking** - Unused code elimination
- **Hot Reloading** - Instant development feedback
- **Optimized Builds** - Vite's fast bundling
- **Type Checking** - Catch errors at compile time

## 🔒 Production Ready Features

- **Error Boundaries** - Graceful error handling
- **Loading States** - Better user experience
- **Accessibility** - ARIA labels and keyboard navigation
- **SEO Ready** - Meta tags and structured data
- **Security** - XSS protection, CSP headers

This modern architecture provides a solid foundation for scaling your air quality monitoring application!
