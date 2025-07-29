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

  // Optimize images with fetchpriority
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
    
    // Add fetchpriority to LCP images
    const lcpImages = document.querySelectorAll('img[src*="logo"], img[src*="hero"], img[src*="background"]');
    lcpImages.forEach(img => {
      if (!img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
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

  // Mobile-specific optimizations
  const optimizeForMobile = useCallback(() => {
    // Check if mobile
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Reduce animations on mobile
      const style = document.createElement('style');
      style.textContent = `
        @media (max-width: 768px) {
          * {
            animation-duration: 0.1s !important;
            transition-duration: 0.1s !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      // Optimize touch events
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
      document.addEventListener('touchend', () => {}, { passive: true });
    }
  }, []);

  // Prevent layout shifts
  const preventLayoutShifts = useCallback(() => {
    // Add aspect ratio to images to prevent layout shifts
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        (img as HTMLElement).style.aspectRatio = `${rect.width} / ${rect.height}`;
      }
    });
    
    // Use ResizeObserver to handle dynamic content
    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          // Prevent layout shifts by maintaining aspect ratio
          const element = entry.target as HTMLElement;
          if (element.tagName === 'IMG') {
            const rect = element.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
              element.style.aspectRatio = `${rect.width} / ${rect.height}`;
            }
          }
        });
      });
      
      images.forEach(img => resizeObserver.observe(img));
    }
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    // Use passive event listeners for better scroll performance
    const scrollElements = document.querySelectorAll('.scroll-container, .scroll-area');
    scrollElements.forEach(element => {
      element.addEventListener('scroll', () => {}, { passive: true });
      element.addEventListener('wheel', () => {}, { passive: true });
    });
  }, []);

  useEffect(() => {
    // Run optimizations after initial load
    const timer = setTimeout(() => {
      preloadCriticalResources();
      optimizeImages();
      optimizeThirdPartyResources();
      optimizeForMobile();
      preventLayoutShifts();
      optimizeScrollPerformance();
    }, 100);

    return () => clearTimeout(timer);
  }, [preloadCriticalResources, optimizeImages, optimizeThirdPartyResources, optimizeForMobile, preventLayoutShifts, optimizeScrollPerformance]);

  return {
    preloadCriticalResources,
    optimizeImages,
    optimizeThirdPartyResources,
    optimizeForMobile,
    preventLayoutShifts,
    optimizeScrollPerformance
  };
}; 