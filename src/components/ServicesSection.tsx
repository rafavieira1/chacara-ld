import { Users, Calendar, Utensils, Camera, Music, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs } from '@/components/ui/tabs';
import { GetStartedButton } from '@/components/ui/get-started-button';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  const [imageCache, setImageCache] = useState<Record<string, HTMLImageElement>>({});
  const sectionRef = useRef<HTMLElement>(null);
  
  const servicesData = [
    {
      value: "casamentos",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "Casamentos",
      content: {
        badge: "Eventos Românticos",
        title: "Cerimônias dos seus sonhos em um cenário mágico",
        description: "Celebre o amor em um ambiente único, rodeado pela natureza e com toda estrutura para tornar seu casamento inesquecível. Oferecemos cerimônias ao ar livre, decoração personalizada e coordenação completa.",
        buttonText: "Ver Pacotes",
        imageSrc: "/evento3.jpg",
        imageAlt: "Casamento na Chácara LD",
      },
    },
    {
      value: "corporativos",
      icon: <Calendar className="h-auto w-4 shrink-0" />,
      label: "Eventos Corporativos",
      content: {
        badge: "Ambiente Profissional",
        title: "Espaço ideal para confraternizações empresariais",
        description: "Proporcione momentos especiais para sua equipe em um ambiente sofisticado e acolhedor. Contamos com equipamentos audiovisuais, catering executivo e ambientes flexíveis para atender suas necessidades.",
        buttonText: "Solicitar Orçamento",
        imageSrc: "/corporativo.jpg",
        imageAlt: "Eventos corporativos na Chácara LD",
      },
    },
    {
      value: "celebracoes",
      icon: <Sparkles className="h-auto w-4 shrink-0" />,
      label: "Festas & Celebrações",
      content: {
        badge: "Momentos Especiais",
        title: "Aniversários e celebrações memoráveis",
        description: "Transforme datas especiais em memórias eternas. Oferecemos decoração temática, entretenimento, cardápio variado e espaço kids para celebrações de todos os tipos e idades.",
        buttonText: "Planejar Festa",
        imageSrc: "/festa.jpg",
        imageAlt: "Celebrações na Chácara LD",
      },
    },
  ];

  const amenities = [
    { icon: <Utensils className="w-6 h-6" />, label: "Gastronomia Premium" },
    { icon: <Camera className="w-6 h-6" />, label: "Cenários Fotográficos" },
    { icon: <Music className="w-6 h-6" />, label: "Sistema de Som" },
    { icon: <Users className="w-6 h-6" />, label: "Capacidade Flexível" }
  ];

  // Pré-carregar e cachear todas as imagens
  useEffect(() => {
    const preloadImages = () => {
      servicesData.forEach((service) => {
        // Verificar se já existe no cache
        if (imageCache[service.value]) {
          setImagesLoaded(prev => ({
            ...prev,
            [service.value]: true
          }));
          return;
        }

        const img = new Image();
        
        // Configurações para otimização
        img.decoding = 'async';
        img.loading = 'eager';
        
        img.onload = () => {
          // Aguardar um frame para garantir que a imagem esteja totalmente processada
          requestAnimationFrame(() => {
            setImageCache(prev => ({
              ...prev,
              [service.value]: img
            }));
            setImagesLoaded(prev => ({
              ...prev,
              [service.value]: true
            }));
          });
        };
        
        img.onerror = () => {
          console.warn(`Erro ao carregar imagem: ${service.content.imageSrc}`);
          setImagesLoaded(prev => ({
            ...prev,
            [service.value]: true
          }));
        };
        
        img.src = service.content.imageSrc;
      });
    };

    // Usar setTimeout para não bloquear o render inicial
    setTimeout(preloadImages, 100);
  }, []);

  // Adicionar preload links no head
  useEffect(() => {
    servicesData.forEach((service) => {
      if (!document.querySelector(`link[href="${service.content.imageSrc}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = service.content.imageSrc;
        document.head.appendChild(link);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const ImageWithPlaceholder = ({ service }: { service: typeof servicesData[0] }) => {
    const isLoaded = imagesLoaded[service.value];
    
    return (
      <div className="w-full relative overflow-hidden rounded-xl">
        {/* Placeholder com altura fixa */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 flex items-center justify-center transition-opacity duration-300 ${
            isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ minHeight: '400px' }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-stone-400 border-t-transparent rounded-full animate-spin"></div>
            <div className="text-stone-500 text-sm">Carregando imagem...</div>
          </div>
        </div>
        
        {/* Imagem real */}
        <img
          src={service.content.imageSrc}
          alt={service.content.imageAlt}
          className={`w-full h-auto object-cover shadow-lg transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ 
            minHeight: '400px',
            maxHeight: '500px',
            objectPosition: 'center center'
          }}
          decoding="async"
          onLoad={() => {
            // Garantir que o estado seja atualizado mesmo se o onload do preload não funcionou
            if (!imagesLoaded[service.value]) {
              setImagesLoaded(prev => ({
                ...prev,
                [service.value]: true
              }));
            }
          }}
        />
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className={`text-center mb-4 sm:mb-6 md:mb-8 transition-all duration-700 ease-out relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="py-0">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-great-vibes font-normal leading-tight sm:leading-loose tracking-wide relative z-20"
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
              Serviços
            </h2>
          </div>
          <div className="w-full h-px bg-stone-300 mt-0 mb-2 relative z-10"></div>
        </div>

        {/* Services Feature Tabs */}
        <div className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}>
          {/* Header Section */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 text-center py-6 sm:py-8 px-4">
            <h1 className="max-w-2xl text-2xl sm:text-3xl md:text-4xl font-semibold">
              Transforme momentos especiais em memórias eternas
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Descubra nossos serviços especializados para cada tipo de evento
            </p>
          </div>

          {/* Custom Tabs Integration */}
          <div className="w-full">
            <Tabs
              tabs={servicesData.map(service => ({
                title: (
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                    <span className="hidden sm:inline">{service.icon}</span>
                    <span className="hidden sm:inline">{service.label}</span>
                    <span className="sm:hidden">{service.label.split(' ')[0]}</span>
                  </div>
                ),
                value: service.value,
                content: (
                  <div className="mx-auto max-w-screen-xl rounded-2xl bg-muted/70 p-4 sm:p-6 lg:p-16 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                    <div className="grid place-items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-20 w-full">
                      <div className="flex flex-col gap-4 sm:gap-5 order-2 lg:order-1">
                        <Badge variant="outline" className="w-fit bg-background text-xs sm:text-sm">
                          {service.content.badge}
                        </Badge>
                        <h3 className="text-2xl sm:text-3xl font-semibold lg:text-5xl">
                          {service.content.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                          {service.content.description}
                        </p>
                        <GetStartedButton 
                          text={service.content.buttonText}
                        />
                      </div>
                      <div className="w-full order-1 lg:order-2">
                        <ImageWithPlaceholder service={service} />
                      </div>
                    </div>
                  </div>
                )
              }))}
              containerClassName="flex flex-nowrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4"
              activeTabClassName="bg-gradient-to-r from-[#5C3A2B] to-[#8B6355] border-0"
              tabClassName="flex items-center gap-1 sm:gap-2 rounded-xl px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 border border-stone-200 hover:border-stone-300 hover:bg-stone-50 whitespace-nowrap"
              contentClassName="w-full"
            />
          </div>
        </div>

        {/* Amenities */}
        <div className={`mt-8 sm:mt-10 lg:mt-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '400ms' }}>
          <div className="mx-auto max-w-screen-xl rounded-2xl bg-muted/70 p-4 sm:p-6 lg:p-16">
            <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Badge 
                variant="outline" 
                className="bg-gradient-to-r from-[#5C3A2B] to-[#8B6355] text-white border-0 text-xs sm:text-sm"
              >
                Comodidades
              </Badge>
              <h3 className="text-xl sm:text-2xl font-light text-stone-800 text-center tracking-wide">
                Incluído em Todos os Eventos
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 sm:space-x-3 text-luxury group transition-colors duration-300"
              >
                <div 
                  className="group-hover:scale-110 transition-transform duration-300"
                  style={{ color: '#5C3A2B' }}
                >
                  {amenity.icon}
                </div>
                <span className="font-light tracking-wide text-xs sm:text-sm">{amenity.label}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
