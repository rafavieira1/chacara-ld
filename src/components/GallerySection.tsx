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

  return (
    <section ref={sectionRef} id="gallery" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className={`text-center mb-16 transition-all duration-1000 relative z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="py-0">
            <h2 
              className="text-6xl md:text-7xl lg:text-8xl font-great-vibes font-normal leading-loose tracking-wide relative z-50"
              style={{ 
                background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingTop: '0',
                paddingBottom: '0',
                lineHeight: '1.6',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              Galeria
            </h2>
          </div>
          <div className="w-full h-px bg-stone-300 mt-0 mb-8 relative z-50"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-50">
            <p className="text-luxury leading-relaxed text-lg">
            Conheça os espaços da Chácara: piscina, campo, área gourmet e jardins com vista para o lago. 
            Um ambiente perfeito para celebrar, relaxar e aproveitar com quem você ama.
            </p>
          </div>
        </div>

        {/* Interactive Gallery Selector */}
        <div className={`transition-all duration-1000 mb-16 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '300ms' }}>
          {/* Options Container */}
          <div className="options flex w-full max-w-[1100px] min-w-[300px] h-[500px] mx-auto items-stretch overflow-hidden relative rounded-2xl shadow-2xl">
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
                  minWidth: '60px',
                  minHeight: '100px',
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
                    height: activeIndex === index ? '120px' : '60px',
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
                <div className="label absolute left-0 right-0 bottom-4 flex items-center justify-start h-12 pointer-events-none px-4 gap-3 w-full" style={{ zIndex: 36 }}>
                  <div 
                    className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full backdrop-blur-[10px] shadow-lg border-2 flex-shrink-0 flex-grow-0 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'rgba(92, 58, 43, 0.90)',
                      borderColor: '#262626'
                    }}
                  >
                    {option.icon}
                  </div>
                  <div className="info text-white whitespace-pre relative">
                    <div 
                      className="main font-semibold text-lg transition-all duration-700 ease-in-out"
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                      }}
                    >
                      {option.title}
                    </div>
                    <div 
                      className="sub text-base text-stone-200 transition-all duration-700 ease-in-out font-light"
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
                    className="absolute top-4 right-4 z-40 pointer-events-auto"
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
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 transition-all duration-300 hover:scale-105"
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
        <div className={`mt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '600ms' }}>
          <div className="relative">
            {/* Decorative line */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent max-w-xs"></div>
              <div className="mx-6">
                <div className="w-2 h-2 rounded-full bg-stone-400"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent max-w-xs"></div>
            </div>

            {/* Call to action text */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4" style={{ color: '#5C3A2B' }}>
                Quer conhecer mais detalhes?
              </h3>
              <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
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
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-20">
              <svg className="w-16 h-16" fill="currentColor" style={{ color: '#5C3A2B' }} viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 pt-20">
          <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white hover:text-stone-300 transition-colors duration-300 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2"
            >
              <X size={24} />
            </button>
            
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <img 
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors duration-300 glass-card p-2 rounded-full z-10"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors duration-300 glass-card p-2 rounded-full z-10"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full z-10">
              <span className="text-white text-sm">
                {selectedImage + 1} / {images.length}
              </span>
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
      `}</style>
    </section>
  );
};

export default GallerySection;
