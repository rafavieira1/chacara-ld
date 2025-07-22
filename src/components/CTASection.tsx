
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { CTASection as CTAWithRectangle } from '@/components/ui/cta-with-rectangle';

const CTASection = () => {
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
  
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Ligue Agora",
      info: "(11) 9 9999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Envie um E-mail",
      info: "contato@chacarald.com.br",
      action: "mailto:contato@chacarald.com.br"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visite-nos",
      info: "Rodovia SP-XXX, Km XX",
      action: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="cta" className="py-24 px-6">
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
            REALIZE SEU SONHO
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Transforme momentos especiais em memórias eternas. 
              A ChácaraLD está pronta para receber você e criar uma experiência única.
            </p>
          </div>
        </div>

        {/* Main CTA using cta-with-rectangle component */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '300ms' }}>
          <CTAWithRectangle
            badge={{
              text: "Visita Gratuita"
            }}
            title="Agende Sua Visita Gratuita"
            description="Conheça pessoalmente todos os nossos espaços e descubra como podemos tornar seu evento inesquecível. Nossa equipe está pronta para recebê-lo."
            action={{
              text: "Agendar Visita Gratuita",
              href: "#contact",
              variant: "default"
            }}
            withGlow={true}
            className="mb-20"
          />
        </div>

        {/* Contact Methods */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '600ms' }}>
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="group"
            >
              <a 
                href={method.action}
                className="block rounded-lg p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center" style={{ color: '#5C3A2B' }}>
                  {method.icon}
                </div>
                <h4 className="text-lg font-light text-stone-800 mb-2 tracking-wide">
                  {method.title}
                </h4>
                <p className="text-luxury text-sm transition-colors duration-300">
                  {method.info}
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button className="neuro-button px-10 py-4 rounded-full text-stone-700 font-light tracking-wide hover:shadow-lg transition-all duration-300 group">
            <span className="group-hover:tracking-wider transition-all duration-300">
              Solicitar Orçamento
            </span>
          </button>
          <button className="neuro-button px-10 py-4 rounded-full text-stone-700 font-light tracking-wide hover:shadow-lg transition-all duration-300 group">
            <span className="group-hover:tracking-wider transition-all duration-300">
              Download do Catálogo
            </span>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 rounded-lg p-6 shadow-2xl">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-lg" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}></div>
              ))}
            </div>
            <div className="text-sm text-luxury">
              <span className="font-medium text-stone-800">200+</span> eventos realizados com sucesso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
