import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Utensils, Palette, Heart, Mountain, Zap } from 'lucide-react';
import { GetStartedButton } from '@/components/ui/get-started-button';
import "react-medium-image-zoom/dist/styles.css";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

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
      image: "/buffet5.jpg",
      imageHD: "/buffet5.jpg",
      icon: <Utensils size={24} className="text-white" />
    },
    {
      title: "Decorações",
      description: "Espaço completo para experiências culinárias",
      image: "/deco4.jpg",
      imageHD: "/deco4.jpg",
      icon: <Palette size={24} className="text-white" />
    },
    {
      title: "Eventos",
      description: "Cerimônias inesquecíveis em ambiente único",
      image: "/evento5.jpg",
      imageHD: "/evento5.jpg",
      icon: <Heart size={24} className="text-white" />
    },
    {
      title: "Paisagem",
      description: "Relaxamento com vista para o lago",
      image: "/paisagem1.jpg",
      imageHD: "/paisagem1.jpg",
      icon: <Mountain size={24} className="text-white" />
    },
    {
      title: "Lazer",
      description: "Salões equipados com todo conforto",
      image: "/lazer1.jpg",
      imageHD: "/lazer1.jpg",
      icon: <Zap size={24} className="text-white" />
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
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

  const images = [
    {
      src: "/buffet1.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Gastronomia"
    },
    {
      src: "/buffet2.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Gastronomia"
    },
    {
      src: "/buffet3.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Gastronomia"
    },
    {
      src: "/buffet4.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Gastronomia"
    },
    {
      src: "/deco1.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Decorações"
    },
    {
      src: "/deco2.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Decorações"
    },
    {
      src: "/deco3.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Decorações"
    },
    {
      src: "/deco5.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Decorações"
    },
    {
      src: "/evento1.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Eventos"
    },
    {
      src: "/evento2.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Eventos"
    },
    {
      src: "/evento3.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Eventos"
    },
    {
      src: "/evento4.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Eventos"
    },
    {
      src: "/paisagem2.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Paisagem"
    },
    {
      src: "/paisagem3.jpg",
      alt: "Vista panorâmica da chácara",
      category: "EvenPaisagemtos"
    },
    {
      src: "/paisagem4.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Paisagem"
    },
    {
      src: "/paisagem5.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Paisagem"
    },
    {
      src: "/lazer2.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Lazer"
    },
    {
      src: "/lazer3.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Lazer"
    },
    {
      src: "/lazer4.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Lazer"
    },
    {
      src: "/lazer5.jpg",
      alt: "Vista panorâmica da chácara",
      category: "Lazer"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  // Bloquear scroll quando lightbox estiver aberto
  useEffect(() => {
    if (selectedImage !== null) {
      // Salvar posição atual do scroll
      const scrollY = window.scrollY;
      
      // Bloquear scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restaurar posição do scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restaurar posição exata onde estava
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup quando componente for desmontado
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [selectedImage]);

  // Listener para tecla Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage !== null) {
        setSelectedImage(null);
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  // Função para fechar lightbox ao clicar fora da imagem
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setSelectedImage(null);
    }
  };

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
          {/* Options Container */}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        // Encontrar a primeira imagem da categoria correspondente
                        const categoryImages = images.filter(img => img.category === option.title);
                        if (categoryImages.length > 0) {
                          const firstImageIndex = images.findIndex(img => img.src === categoryImages[0].src);
                          setSelectedImage(firstImageIndex);
                        }
                      }}
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
                <GetStartedButton text="Ver tudo" onClick={() => setSelectedImage(0)} />
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

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4 sm:p-4 pt-20 sm:pt-20 lightbox-overlay" onClick={handleBackdropClick}>
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 sm:-top-16 right-4 sm:right-0 text-white hover:text-stone-300 transition-colors duration-300 z-20 bg-black/70 backdrop-blur-sm rounded-full p-2 sm:p-3"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <img 
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg sm:rounded-2xl shadow-2xl lightbox-image z-10"
              style={{
                maxHeight: 'calc(100vh - 200px)',
                maxWidth: 'calc(100vw - 80px)'
              }}
            />
            
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors duration-300 sm:glass-card p-2 sm:p-3 rounded-full z-20"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors duration-300 sm:glass-card p-2 sm:p-3 rounded-full z-20"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <div className="absolute bottom-4 sm:bottom-4 left-1/2 -translate-x-1/2 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-full z-20">
              <span className="text-white text-xs sm:text-sm">
                {selectedImage + 1} / {images.length}
              </span>
            </div>

            {/* Indicadores de navegação por toque para mobile */}
            <div className="absolute bottom-20 sm:bottom-20 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === selectedImage 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

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

        /* Lightbox mobile optimizations */
        @media (max-width: 1024px) {
          .lightbox-image {
            width: auto !important;
            height: auto !important;
            max-width: calc(100vw - 80px) !important;
            max-height: calc(100vh - 200px) !important;
            object-fit: contain !important;
            object-position: center !important;
            margin: 0 auto !important;
            display: block !important;
            position: relative !important;
            z-index: 10 !important;
          }
        }

        /* Extra mobile optimizations for very small screens */
        @media (max-width: 480px) {
          .lightbox-image {
            max-width: calc(100vw - 60px) !important;
            max-height: calc(100vh - 180px) !important;
          }
        }

        /* Desktop optimizations */
        @media (min-width: 1025px) {
          .lightbox-image {
            width: auto !important;
            height: auto !important;
            max-width: calc(100vw - 120px) !important;
            max-height: calc(100vh - 160px) !important;
            object-fit: contain !important;
            object-position: center !important;
            margin: 0 auto !important;
            display: block !important;
            position: relative !important;
            z-index: 10 !important;
          }
        }

        /* Force lightbox isolation */
        .lightbox-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background-color: rgba(0, 0, 0, 0.95) !important;
          z-index: 99999 !important;
          backdrop-filter: blur(10px) !important;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;