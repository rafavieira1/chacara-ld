
import { Play, MapPin, Clock, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const VideoTourSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const highlights = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização Privilegiada",
      description: "15 minutos do centro da cidade"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponível 24h",
      description: "Flexibilidade total para seu evento"
    },
    {
      icon: <Users className="w-6 h-6" />,
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
    <section ref={sectionRef} id="tour" className="py-24 px-6 bg-gradient-to-b from-stone-50/50 to-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm text-luxury tracking-[0.3em] uppercase">Tour Virtual</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-800 text-spaced mb-6">
            CONHEÇA NOSSO ESPAÇO
          </h2>
          <p className="text-xl text-luxury max-w-3xl mx-auto leading-relaxed">
            Faça um tour virtual pelos nossos ambientes e descubra todos os detalhes 
            que tornam a ChácaraLD o local perfeito para seu evento especial.
          </p>
        </div>

        {/* Video Player */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group">
            <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video bg-gradient-to-br from-stone-200 to-stone-300">
                {/* Placeholder for video */}
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Vista aérea da chácara"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="glass-card w-20 h-20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-500 animate-glow-pulse"
                    >
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </button>
                  </div>
                )}
                
                {/* Video Duration Badge */}
                <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-light">3:24</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="glass-card w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-amber-700 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                {highlight.icon}
              </div>
              <h4 className="text-xl font-light text-stone-800 mb-3 tracking-wide">
                {highlight.title}
              </h4>
              <p className="text-luxury text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTourSection;
