
import { MapPin, Clock, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import VideoPlayer from './ui/player-video';

const VideoTourSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const highlights = [
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Localização Privilegiada",
      description: "15 minutos do centro da cidade"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Disponível 24h",
      description: "Flexibilidade total para seu evento"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Até 300 Convidados",
      description: "Capacidade adaptável às suas necessidades"
    }
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
    <section ref={sectionRef} id="tour" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className={`text-center mb-16 transition-all duration-1000 relative z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="py-8">
            <h2 
              className="text-6xl md:text-7xl lg:text-8xl font-great-vibes font-normal leading-loose tracking-wide relative z-50"
              style={{ 
                background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingTop: '2rem',
                paddingBottom: '1rem',
                lineHeight: '1.6',
                minHeight: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              Tour Virtual
            </h2>
          </div>
          <div className="w-full h-px bg-stone-300 mt-2 mb-8 relative z-50"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-50">
            <p className="text-luxury leading-relaxed text-lg">
              Faça um tour virtual pelos nossos ambientes e descubra todos os detalhes 
              que tornam a ChácaraLD o local perfeito para seu evento especial.
            </p>
          </div>
        </div>

        {/* Video Player */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <VideoPlayer src="/video.mp4" />
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="rounded-lg p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div 
                  className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center"
                  style={{ color: '#5C3A2B' }}
                >
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-light text-stone-800 mb-3 tracking-wide">
                  {highlight.title}
                </h4>
                <p className="text-luxury text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTourSection;
