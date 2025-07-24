
import { MapPin, Clock, Users } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import VideoPlayer from './ui/player-video';

// Dados extraídos para facilitar manutenção
const videoTourData = {
  title: "Tour Virtual",
  subtitle: "Explore cada detalhe da Chácara LD sem sair de casa. Conheça a estrutura, a área externa, o salão e todos os espaços que fazem do nosso lugar um cenário ideal para seu evento.",
  videoSrc: "/video.mp4",
  highlights: [
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "15 minutos do centro da cidade"
    },
    {
      icon: Clock,
      title: "Disponível 24h",
      description: "Flexibilidade total para seu evento"
    },
    {
      icon: Users,
      title: "Até 300 Convidados",
      description: "Capacidade adaptável às suas necessidades"
    }
  ]
};

const VideoTourSection = () => {
  const { isVisible, ref } = useIntersectionObserver();

  return (
    <section ref={ref} id="tour" className="py-24 px-6">
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
              {videoTourData.title}
            </h2>
          </div>
          <div className="w-full h-px bg-stone-300 mt-2 mb-8 relative z-50"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-50">
            <p className="text-luxury leading-relaxed text-lg">
              {videoTourData.subtitle}
            </p>
          </div>
        </div>

        {/* Video Player */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <VideoPlayer src={videoTourData.videoSrc} />
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {videoTourData.highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
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
                    <Icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-light text-stone-800 mb-3 tracking-wide">
                    {highlight.title}
                  </h4>
                  <p className="text-luxury text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoTourSection;
