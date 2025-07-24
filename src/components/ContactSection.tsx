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
    <section ref={sectionRef} id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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
              Entre em Contato
            </h2>
          </div>
          <div className="w-full h-px bg-stone-300 mt-0 mb-16 relative z-10"></div>
          <p className="text-luxury text-lg max-w-2xl mx-auto">
            Agende sua visita ou tire suas dúvidas. Estamos aqui para tornar seu evento inesquecível.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-stretch transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Informações de Contato */}
          <div className="flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold text-stone-800 mb-6">
                Informações de Contato
              </h3>
            </div>
            
            <div className="space-y-6 flex-1">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.title}
                    className={`group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-stone-200/50 hover:bg-white/70 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-[120px] flex items-center ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => window.open(item.href, '_blank')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-200 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-stone-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-stone-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-1">
                          {item.description}
                        </p>
                        <p className="text-luxury font-medium">
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
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold text-stone-800 mb-6">
                Redes Sociais
              </h3>
            </div>
            
            {/* Redes Sociais */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-stone-200/50 hover:bg-white/70 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 text-center h-[120px] flex flex-col justify-center ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } ${social.color}`}
                    style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                  >
                                       <Icon className="w-8 h-8 mx-auto mb-3 text-stone-600 group-hover:scale-110 transition-transform duration-300" />
                   <p className="text-sm font-semibold text-stone-700">
                     {social.name}
                   </p>
                  </a>
                );
              })}
            </div>

            {/* CTA de Agendamento */}
            <div className={`p-8 rounded-2xl gradient-bg text-white text-center flex-1 flex flex-col justify-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '700ms' }}>
              <Calendar className="w-12 h-12 mx-auto mb-4 text-white/90" />
                             <h4 className="text-xl font-semibold mb-3 text-white">
                 Agende sua Visita
               </h4>
               <p className="text-white/80 mb-6">
                 Venha conhecer nossa chácara pessoalmente e planeje seu evento perfeito.
               </p>
              <div className="space-y-3">
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