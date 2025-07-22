import { Users, Calendar, Utensils, Camera, Music, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const services = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Casamentos",
      description: "Cerimônias e recepções em um ambiente mágico e romântico",
      features: ["Cerimônia ao ar livre", "Decoração personalizada", "Buffet premium", "Coordenação completa"]
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Eventos Corporativos",
      description: "Espaço ideal para confraternizações e eventos empresariais",
      features: ["Equipamentos audiovisuais", "Catering executivo", "Ambientes flexíveis", "Suporte técnico"]
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Festas & Celebrações",
      description: "Aniversários, formaturas e celebrações especiais",
      features: ["Decoração temática", "Entretenimento", "Cardápio variado", "Espaço kids"]
    }
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

  return (
    <section ref={sectionRef} id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-6xl md:text-7xl lg:text-8xl font-kanoky font-light leading-none tracking-wider"
            style={{ 
              background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block'
            }}
          >
            SERVIÇOS
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Oferecemos soluções completas para tornar seu evento único e inesquecível, 
              com atendimento personalizado e atenção aos mínimos detalhes.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="rounded-lg p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div 
                  className="mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: '#5C3A2B' }}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-light text-stone-800 mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-luxury mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-luxury">
                      <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: '#5C3A2B' }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className={`rounded-lg p-8 shadow-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '900ms' }}>
          <h3 className="text-2xl font-light text-stone-800 text-center mb-8 tracking-wide">
            Comodidades Incluídas
          </h3>
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
    </section>
  );
};

export default ServicesSection;
