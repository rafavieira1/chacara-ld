import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Calendar, Instagram, Facebook, MessageCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GetStartedButton } from '@/components/ui/get-started-button';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 45 99103-3179',
      href: 'tel:+5545991033179',
      description: 'Ligue para agendar'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+55 45 99103-3179',
      href: 'https://wa.me/5545991033179',
      description: 'Mensagem direta'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'Chacarald.contato@gmail.com',
      href: 'mailto:Chacarald.contato@gmail.com',
      description: 'Envie um e-mail'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Santa Terezinha de Itaipu-PR, 85875-000',
      href: '#location',
      description: 'Veja no mapa'
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/chacara.ld',
      color: 'hover:text-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      href: 'https://www.facebook.com/chacara.ld',
      color: 'hover:text-blue-600'
    },
    {
      icon: Home,
      name: 'Airbnb',
      href: 'https://www.airbnb.com.br/rooms/42228939?source_impression_id=p3_1602254220_UHVuos4fTf%252BaqIOw',
      color: 'hover:text-red-500'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      href: 'https://wa.me/5545991033179',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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
              Entre em Contato
            </h2>
          </div>
          <div className="w-full h-px bg-stone-300 mt-0 mb-8 sm:mb-12 md:mb-16 relative z-10"></div>
          <p className="text-luxury text-base sm:text-lg max-w-2xl mx-auto px-4">
            Agende sua visita ou tire suas dúvidas. Estamos aqui para tornar seu evento inesquecível.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-stretch transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Informações de Contato */}
          <div className="flex flex-col">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-4 sm:mb-6">
                Informações de Contato
              </h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6 flex-1">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.title}
                    className={`group p-4 sm:p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-stone-200/50 hover:bg-white/70 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-[100px] sm:h-[120px] flex items-center ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => window.open(item.href, '_blank')}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-200 transition-colors duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-stone-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold text-stone-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm mb-1">
                          {item.description}
                        </p>
                        <p className="text-luxury font-medium text-sm sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Redes Sociais e Agendamento */}
          <div className="flex flex-col">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-4 sm:mb-6">
                Redes Sociais
              </h3>
            </div>
            
            {/* Redes Sociais */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 sm:p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-stone-200/50 hover:bg-white/70 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 text-center h-[100px] sm:h-[120px] flex flex-col justify-center ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } ${social.color}`}
                    style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-stone-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-xs sm:text-sm font-semibold text-stone-700">
                      {social.name}
                    </p>
                  </a>
                );
              })}
            </div>

            {/* CTA de Agendamento */}
            <div className={`p-6 sm:p-8 rounded-2xl gradient-bg text-white text-center flex-1 flex flex-col justify-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '700ms' }}>
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-white/90" />
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                Agende sua Visita
              </h4>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                Venha conhecer nossa chácara pessoalmente e planeje seu evento perfeito.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="w-full">
                  <GetStartedButton 
                    text="Agendar"
                    onClick={() => window.open('https://wa.me/5545991033179', '_blank')}
                  />
                </div>
                <div className="w-full">
                  <GetStartedButton 
                    text="Ligue Já"
                    onClick={() => window.open('tel:+5545991033179', '_blank')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection; 