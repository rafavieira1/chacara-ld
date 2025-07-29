import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadImages, criticalImages } from './utils/imageOptimization.ts'

// Preload critical images
preloadImages(criticalImages).catch(console.error);

createRoot(document.getElementById("root")!).render(<App />);
