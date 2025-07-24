import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { GetStartedButton } from '@/components/ui/get-started-button';

const LocationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const locationInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      info: "Santa Terezinha de Itaipu-PR, 85875-000",
      detail: "A poucos minutos das Cataratas do Iguaçu"
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Como Chegar",
      info: "Fácil acesso por rodovia",
      detail: "Sinalização completa até a propriedade"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Distâncias",
      info: "15 min das Cataratas",
      detail: "30 min do aeroporto de Foz do Iguaçu"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Informações",
      info: "+55 45 99103-3179",
      detail: "Disponível para orientações de trajeto"
    }
  ];

  return (
    <section ref={sectionRef} id="location" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className={`text-center mb-16 transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="py-0">
            <h2 
              className="text-6xl md:text-7xl lg:text-8xl font-great-vibes font-normal leading-loose tracking-wide relative z-20"
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
              Localização
            </h2>
          </div>
          <div className="w-full h-px bg-stone-300 mt-0 mb-8 relative z-10"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Situada em uma localização privilegiada em Santa Terezinha de Itaipu - PR, 
              a Chácara LD oferece fácil acesso e proximidade com os principais pontos turísticos da região.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Location Info */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}>
            <div className="bg-muted/70 rounded-2xl p-8">
              <h3 className="text-2xl font-light text-stone-800 mb-8 text-center tracking-wide">
                Informações de Localização
              </h3>
              
              <div className="grid gap-6">
                {locationInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div 
                      className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: '#5C3A2B' }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-stone-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-luxury font-medium">
                        {item.info}
                      </p>
                      <p className="text-sm text-stone-600 mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}>
            <div className="bg-muted/70 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-light text-stone-800 mb-6 text-center tracking-wide">
                Localização no Mapa
              </h3>
              
              {/* Map Placeholder - Replace with actual Google Maps embed */}
              <div className="relative w-full h-80 bg-stone-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.123456789!2d-54.588611!3d-25.527778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMxJzQwLjAiUyA1NMKwMzUnMTkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="mt-4 text-center">
                <GetStartedButton 
                  text="Abrir no Maps"
                  onClick={() => window.open('https://maps.google.com/?q=Santa+Terezinha+de+Itaipu+PR', '_blank')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className={`bg-muted/70 rounded-2xl p-8 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '900ms' }}>
          <h3 className="text-xl font-light text-stone-800 mb-4 tracking-wide">
            Pontos de Referência
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-luxury">
            <div className="space-y-2">
              <div className="font-medium">Cataratas do Iguaçu</div>
              <div className="text-sm text-stone-600">15 minutos de carro</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium">Centro de Foz do Iguaçu</div>
              <div className="text-sm text-stone-600">25 minutos de carro</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium">Aeroporto Internacional</div>
              <div className="text-sm text-stone-600">30 minutos de carro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 