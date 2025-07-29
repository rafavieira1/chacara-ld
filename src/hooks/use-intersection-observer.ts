import { useState, useEffect, useRef, useMemo } from 'react';

export const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold }
  ), [threshold]);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [observer]);

  return { isVisible, ref };
}; 