import { useState, useEffect, useRef, memo } from 'react';
import { ChevronLeft, ChevronRight, Utensils, Palette, Heart, Mountain, Zap } from 'lucide-react';
import { GetStartedButton } from '@/components/ui/get-started-button';
import React from 'react';

const GallerySection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isSwipingRef = useRef<boolean>(false);
  const SWIPE_THRESHOLD = 50; // px
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [fadePhase, setFadePhase] = useState<0 | 1>(1);
  const fadeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Interactive Selector Options
  const options = [
    {
      title: "Gastronomia",
      description: "Vista panorâmica com natureza exuberante",
      image: "/buffet5.webp",
      imageHD: "/buffet5.webp",
      icon: <Utensils size={24} className="text-white" />
    },
    {
      title: "Decorações",
      description: "Espaço completo para experiências culinárias",
      image: "/deco4novo.webp",
      imageHD: "/deco4novo.webp",
      icon: <Palette size={24} className="text-white" />
    },
    {
      title: "Eventos",
      description: "Cerimônias inesquecíveis em ambiente único",
      image: "/evento5.webp",
      imageHD: "/evento5.webp",
      icon: <Heart size={24} className="text-white" />
    },
    {
      title: "Paisagem",
      description: "Relaxamento com vista para o lago",
      image: "/paisagemnovo.webp",
      imageHD: "/paisagemnovo.webp",
      icon: <Mountain size={24} className="text-white" />
    },
    {
      title: "Lazer",
      description: "Salões equipados com todo conforto",
      image: "/lazer1.webp",
      imageHD: "/lazer1.webp",
      icon: <Zap size={24} className="text-white" />
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const setActiveWithFade = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(newIndex);
    setFadePhase(0);
    if (fadeTimeoutRef.current !== null) {
      window.clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;
    }
    requestAnimationFrame(() => setFadePhase(1));
    fadeTimeoutRef.current = window.setTimeout(() => {
      setPrevIndex(null);
    }, 300);
  };

  const nextOption = () => {
    setActiveWithFade((activeIndex + 1) % options.length);
  };

  const prevOption = () => {
    setActiveWithFade(activeIndex === 0 ? options.length - 1 : activeIndex - 1);
  };

  // Swipe handlers (mobile)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    // Não iniciar swipe quando clicando em botões/links internos
    if (target.closest('button, a')) return;
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    isSwipingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    // Detecta intenção de swipe horizontal
    if (!isSwipingRef.current && Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY)) {
      isSwipingRef.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    if (isSwipingRef.current && Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        nextOption(); // swipe left -> próximo
      } else {
        prevOption(); // swipe right -> anterior
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
    isSwipingRef.current = false;
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible]);

  // Cleanup fade timeout on unmount
  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 relative z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="py-0">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-great-vibes font-normal leading-tight sm:leading-loose tracking-wide relative z-50"
              style={{ 
                background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingTop: '0',
                paddingBottom: '0',
                lineHeight: '1.6',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              Galeria
            </h2>
          </div>
          <div className="w-full h-px bg-stone-300 mt-0 mb-4 sm:mb-6 md:mb-8 relative z-50"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 relative z-50 px-4">
            <p className="text-luxury leading-relaxed text-base sm:text-lg">
              <span className="block lg:hidden">
                Conheça o ambiente perfeito para celebrar, relaxar e aproveitar com quem você ama.
              </span>
              <span className="hidden lg:block">
                Conheça os espaços da Chácara: piscina, campo, área gourmet e jardins com vista para o lago. 
                Um ambiente perfeito para celebrar, relaxar e aproveitar com quem você ama.
              </span>
            </p>
          </div>
        </div>

        {/* Interactive Gallery Selector */}
        <div className={`transition-all duration-1000 mb-8 sm:mb-12 md:mb-16 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '300ms' }}>
          
          {/* Mobile Version - Single Image Carousel */}
          <div className="block lg:hidden">
              <div className="relative w-full max-w-[400px] h-[400px] mx-auto rounded-2xl shadow-2xl overflow-hidden">
              {/* Current Option */}
              <div
                className="relative w-full h-full flex flex-col justify-end overflow-hidden select-none"
                style={{
                  backgroundImage: `url('${options[activeIndex].image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '16px',
                  border: '4px solid #FFFFFF',
                  boxShadow: '0 20px 60px rgba(92, 58, 43, 0.50)',
                  touchAction: 'pan-y',
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Shadow overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)',
                    zIndex: 35
                  }}
                ></div>

                {/* Imagem de fundo */}
                <div className="absolute inset-0 z-20">
                  {prevIndex !== null && (
                    <img
                      src={options[prevIndex].imageHD}
                      alt={options[prevIndex].title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${fadePhase === 1 ? 'opacity-0' : 'opacity-100'}`}
                    />
                  )}
                  <img
                    src={options[activeIndex].imageHD}
                    alt={options[activeIndex].title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${prevIndex !== null ? (fadePhase === 1 ? 'opacity-100' : 'opacity-0') : 'opacity-100'}`}
                  />
                </div>
                
                {/* Label with icon and info */}
                <div className="label absolute left-0 right-0 bottom-3 sm:bottom-4 flex items-end justify-start h-16 sm:h-20 pointer-events-none px-3 sm:px-4 gap-2 sm:gap-3 w-full" style={{ zIndex: 36 }}>
                  <div 
                    className="icon min-w-[36px] max-w-[36px] h-[36px] sm:min-w-[44px] sm:max-w-[44px] sm:h-[44px] flex items-center justify-center rounded-full backdrop-blur-[10px] shadow-lg border-2 flex-shrink-0 flex-grow-0"
                    style={{ 
                      backgroundColor: 'rgba(92, 58, 43, 0.90)',
                      borderColor: '#262626'
                    }}
                  >
                    {React.cloneElement(options[activeIndex].icon, { 
                      size: isMobile ? 18 : 24,
                      className: "text-white" 
                    })}
                  </div>
                  <div className="info text-white relative flex-1 min-w-0 pb-1">
                    <div className="main font-semibold text-sm sm:text-base md:text-lg leading-tight truncate">
                      {options[activeIndex].title}
                    </div>
                    <div className="sub text-xs sm:text-sm md:text-base text-stone-200 font-light leading-tight mt-0.5 sm:mt-1 line-clamp-2">
                      {options[activeIndex].description}
                    </div>
                  </div>
                </div>

                {/* Botão Ver mais */}
                <div className="absolute top-4 right-4 z-40 pointer-events-auto">
                  <button
                    onClick={() => window.open('https://www.instagram.com/chacara.ld', '_blank')}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 transition-all duration-300 hover:scale-105"
                  >
                    Ver mais
                  </button>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevOption}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextOption}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
                  {options.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveWithFade(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Version - Original Interactive Selector */}
          <div className="hidden lg:block">
            <div className="options flex w-full max-w-[1100px] min-w-[280px] sm:min-w-[300px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto items-stretch overflow-hidden relative rounded-2xl shadow-2xl">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`
                    option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
                    ${activeIndex === index ? 'active' : ''}
                  `}
                  style={{
                    backgroundImage: `url('${option.image}')`,
                    backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
                    backgroundPosition: 'center',
                    backfaceVisibility: 'hidden',
                    opacity: animatedOptions.includes(index) ? 1 : 0,
                    transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
                    minWidth: '40px',
                    minHeight: '80px',
                    margin: 0,
                    borderRadius: index === 0 ? '16px 0 0 16px' : index === options.length - 1 ? '0 16px 16px 0' : '0',
                    borderWidth: activeIndex === index ? '4px' : '2px',
                    borderStyle: 'solid',
                    borderColor: activeIndex === index ? '#FFFFFF' : '#262626',
                    cursor: 'pointer',
                    backgroundColor: '#5C3A2B',
                    boxShadow: activeIndex === index 
                      ? '0 20px 60px rgba(92, 58, 43, 0.50)' 
                      : '0 10px 30px rgba(0,0,0,0.20)',
                    flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
                    zIndex: activeIndex === index ? 10 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    overflow: 'hidden',
                    willChange: 'flex-grow, box-shadow, background-size, background-position',
                    filter: activeIndex === index ? 'none' : 'blur(2px)',
                    transition: 'all 700ms ease-in-out, filter 700ms ease-in-out'
                  }}
                  onClick={activeIndex === index ? undefined : () => handleOptionClick(index)}
                >
                  {/* Shadow overlay - sempre visível para animação */}
                  <div 
                    className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
                    style={{
                      bottom: '0',
                      height: activeIndex === index ? '80px' : '40px',
                      opacity: activeIndex === index ? 1 : 0.8,
                      background: activeIndex === index 
                        ? 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' 
                        : 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
                      zIndex: 35
                    }}
                  ></div>

                  {/* Imagem de fundo */}
                  <div className="absolute inset-0 z-20">
                    <img
                      src={option.imageHD}
                      alt={option.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Label with icon and info */}
                  <div className="label absolute left-0 right-0 bottom-2 sm:bottom-4 flex items-center justify-start h-8 sm:h-10 md:h-12 pointer-events-none px-2 sm:px-4 gap-2 sm:gap-3 w-full" style={{ zIndex: 36 }}>
                    <div 
                      className="icon min-w-[32px] max-w-[32px] h-[32px] sm:min-w-[40px] sm:max-w-[40px] sm:h-[40px] md:min-w-[44px] md:max-w-[44px] md:h-[44px] flex items-center justify-center rounded-full backdrop-blur-[10px] shadow-lg border-2 flex-shrink-0 flex-grow-0 transition-all duration-300"
                      style={{ 
                        backgroundColor: 'rgba(92, 58, 43, 0.90)',
                        borderColor: '#262626'
                      }}
                    >
                      {option.icon}
                    </div>
                    <div className="info text-white whitespace-pre relative">
                      <div 
                        className="main font-semibold text-sm sm:text-base md:text-lg transition-all duration-700 ease-in-out"
                        style={{
                          opacity: activeIndex === index ? 1 : 0,
                          transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                        }}
                      >
                        {option.title}
                      </div>
                      <div 
                        className="sub text-xs sm:text-sm md:text-base text-stone-200 transition-all duration-700 ease-in-out font-light"
                        style={{
                          opacity: activeIndex === index ? 1 : 0,
                          transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                        }}
                      >
                        {option.description}
                      </div>
                    </div>
                  </div>

                  {/* Botão Ver mais - só no card ativo */}
                  {activeIndex === index && (
                    <div 
                      className="absolute top-2 sm:top-4 right-2 sm:right-4 z-40 pointer-events-auto"
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                        transition: 'all 700ms ease-in-out'
                      }}
                    >
                      <button
                        onClick={() => window.open('https://www.instagram.com/chacara.ld', '_blank')}
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/30 transition-all duration-300 hover:scale-105"
                      >
                        Ver mais
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ver tudo button section */}
        <div className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '600ms' }}>
          <div className="relative">
            {/* Decorative line */}
            <div className="flex items-center justify-center mb-8 sm:mb-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent max-w-xs"></div>
              <div className="mx-4 sm:mx-6">
                <div className="w-2 h-2 rounded-full bg-stone-400"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent max-w-xs"></div>
            </div>

            {/* Call to action text */}
            <div className="text-center mb-6 sm:mb-8 px-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-3 sm:mb-4" style={{ color: '#5C3A2B' }}>
                Quer conhecer mais detalhes?
              </h3>
              <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                Explore nossa galeria completa e descubra todos os espaços únicos que fazem da Chácara LD o local perfeito para seu evento especial.
              </p>
            </div>

            {/* Enhanced button */}
            <div className="text-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 rounded-lg blur-xl opacity-30 transform scale-110"></div>
                <GetStartedButton text="Ver tudo" onClick={() => window.open('https://www.instagram.com/chacara.ld', '_blank')} />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 opacity-20">
              <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" style={{ color: '#5C3A2B' }} viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations for interactive selector */}
      <style>{`
        @keyframes slideAndFade {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
});

export default GallerySection;