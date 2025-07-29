// Image optimization utilities
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (sources: string[]): Promise<void> => {
  const promises = sources.map(src => preloadImage(src));
  await Promise.all(promises);
};

// Lazy loading utility
export const lazyLoadImage = (element: HTMLImageElement, src: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.src = src;
        element.classList.remove('lazy');
        observer.unobserve(element);
      }
    });
  });
  
  observer.observe(element);
};

// Critical images to preload
export const criticalImages = [
  '/background.webp',
  '/logo2.png',
  '/about2.webp',
  '/buffet1.webp'
];

// Non-critical images for lazy loading
export const lazyImages = [
  '/buffet2.webp',
  '/buffet3.webp',
  '/buffet4.webp',
  '/buffet5.webp',
  '/evento1.webp',
  '/evento2.webp',
  '/evento3.webp',
  '/evento4.webp',
  '/evento5.webp',
  '/lazer1.webp',
  '/lazer2.webp',
  '/lazer3.webp',
  '/lazer4.webp',
  '/lazer5.webp',
  '/paisagem1.webp',
  '/paisagem2.webp',
  '/paisagem3.webp',
  '/paisagem4.webp',
  '/paisagem5.webp'
]; 