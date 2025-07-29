import React, { useState, useEffect, useRef } from 'react';

interface MobileOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  lazy?: boolean;
}

export const MobileOptimizedImage: React.FC<MobileOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  lazy = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Calculate aspect ratio if width and height are provided
    if (width && height) {
      setAspectRatio(`${width} / ${height}`);
    }
  }, [width, height]);

  const handleLoad = () => {
    setIsLoaded(true);
    
    // Calculate aspect ratio from loaded image if not provided
    if (!aspectRatio && imgRef.current) {
      const img = imgRef.current;
      const rect = img.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setAspectRatio(`${rect.width} / ${rect.height}`);
      }
    }
  };

  const handleError = () => {
    // Fallback for failed images
    if (imgRef.current) {
      imgRef.current.style.display = 'none';
    }
  };

  return (
    <div 
      className={`mobile-optimized ${className}`}
      style={{
        aspectRatio: aspectRatio || 'auto',
        contain: 'layout style paint',
        willChange: 'auto'
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',
          contain: 'layout style paint'
        }}
        className="mobile-optimized"
      />
      {!isLoaded && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="animate-pulse bg-gray-200 rounded" style={{ width: '60%', height: '60%' }} />
        </div>
      )}
    </div>
  );
}; 