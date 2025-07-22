import { Users, Calendar, Utensils, Camera, Music, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs } from '@/components/ui/tabs';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        imageSrc: "/about1.jpg",
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
        imageSrc: "/about2.jpg",
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
        imageSrc: "/background.jpg",
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

  return (
    <section ref={sectionRef} id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className={`text-center mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-6xl md:text-7xl lg:text-8xl font-kanoky font-light leading-normal tracking-wider py-4"
            style={{ 
              background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              lineHeight: '1.2'
            }}
          >
            SERVIÇOS
          </h2>
          <div className="w-full h-px bg-stone-300 mt-4 mb-2"></div>
        </div>

        {/* Services Feature Tabs */}
        <div className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}>
          {/* Header Section */}
          <div className="flex flex-col items-center gap-4 text-center py-8">
            <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
              Transforme momentos especiais em memórias eternas
            </h1>
            <p className="text-muted-foreground">
              Descubra nossos serviços especializados para cada tipo de evento
            </p>
          </div>

          {/* Custom Tabs Integration */}
          <div className="w-full">
            <Tabs
              tabs={servicesData.map(service => ({
                title: (
                  <div className="flex items-center gap-2">
                    {service.icon}
                    {service.label}
                  </div>
                ),
                value: service.value,
                content: (
                  <div className="mx-auto max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16 min-h-[600px]">
                    <div className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-20 w-full">
                      <div className="flex flex-col gap-5 order-1 lg:order-1">
                        <Badge variant="outline" className="w-fit bg-background">
                          {service.content.badge}
                        </Badge>
                        <h3 className="text-3xl font-semibold lg:text-5xl">
                          {service.content.title}
                        </h3>
                        <p className="text-muted-foreground lg:text-lg">
                          {service.content.description}
                        </p>
                        <button className="mt-2.5 w-fit bg-gradient-to-r from-[#5C3A2B] to-[#8B6355] text-white hover:from-[#4A2F22] hover:to-[#6B4A3F] px-6 py-3 rounded-lg font-medium transition-all duration-300">
                          {service.content.buttonText}
                        </button>
                      </div>
                      <div className="w-full order-2 lg:order-2">
                        <img
                          src={service.content.imageSrc}
                          alt={service.content.imageAlt}
                          className="rounded-xl w-full h-auto object-cover shadow-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )
              }))}
              containerClassName="flex flex-wrap justify-center gap-4 mb-8"
              activeTabClassName="bg-gradient-to-r from-[#5C3A2B] to-[#8B6355] border-0"
              tabClassName="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 border border-stone-200 hover:border-stone-300 hover:bg-stone-50"
              contentClassName="w-full"
            />
          </div>
        </div>

        {/* Amenities */}
        <div className={`mt-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '400ms' }}>
          <div className="mx-auto max-w-screen-xl rounded-lg p-8 shadow-2xl bg-white/80 backdrop-blur-sm border border-stone-200">
            <div className="flex flex-col items-center gap-4 mb-8">
              <Badge 
                variant="outline" 
                className="bg-gradient-to-r from-[#5C3A2B] to-[#8B6355] text-white border-0"
              >
                Comodidades
              </Badge>
              <h3 className="text-2xl font-light text-stone-800 text-center tracking-wide">
                Incluído em Todos os Eventos
              </h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-luxury group transition-colors duration-300"
              >
                <div 
                  className="group-hover:scale-110 transition-transform duration-300"
                  style={{ color: '#5C3A2B' }}
                >
                  {amenity.icon}
                </div>
                <span className="font-light tracking-wide">{amenity.label}</span>
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
