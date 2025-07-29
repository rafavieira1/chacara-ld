import { useEffect, useCallback } from 'react';

export const usePerformanceOptimization = () => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical fonts
    const fontLinks = [
      '/1769.otf',
      '/KenokyLight-3zezL.ttf'
    ];

    fontLinks.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = font.endsWith('.otf') ? 'font/otf' : 'font/ttf';
      link.href = font;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'preload';
    cssLink.as = 'style';
    cssLink.href = '/src/index.css';
    document.head.appendChild(cssLink);
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, []);

  // Optimize third-party resources
  const optimizeThirdPartyResources = useCallback(() => {
    // Defer non-critical third-party scripts
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      setTimeout(() => {
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('src') || '';
        newScript.async = true;
        document.body.appendChild(newScript);
      }, 2000); // Load after 2 seconds
    });
  }, []);

  useEffect(() => {
    // Run optimizations after initial load
    const timer = setTimeout(() => {
      preloadCriticalResources();
      optimizeImages();
      optimizeThirdPartyResources();
    }, 100);

    return () => clearTimeout(timer);
  }, [preloadCriticalResources, optimizeImages, optimizeThirdPartyResources]);

  return {
    preloadCriticalResources,
    optimizeImages,
    optimizeThirdPartyResources
  };
}; 