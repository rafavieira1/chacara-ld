
import { Calendar, MessageSquare, CreditCard, PartyPopper } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const BookingStepsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "01",
      icon: <Calendar className="w-10 h-10" />,
      title: "Agende uma Visita",
      description: "Conheça pessoalmente nossos espaços e tire todas as suas dúvidas com nossa equipe especializada.",
      action: "Agendar Visita"
    },
    {
      number: "02",
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Planejamento Personalizado",
      description: "Desenvolvemos um projeto único para seu evento, cuidando de cada detalhe segundo suas preferências.",
      action: "Solicitar Orçamento"
    },
    {
      number: "03",
      icon: <CreditCard className="w-10 h-10" />,
      title: "Reserva Confirmada",
      description: "Finalize a reserva com condições flexíveis de pagamento e garanta sua data especial.",
      action: "Confirmar Reserva"
    },
    {
      number: "04",
      icon: <PartyPopper className="w-10 h-10" />,
      title: "Dia do Evento",
      description: "Relaxe e aproveite! Nossa equipe cuida de tudo para que você viva momentos inesquecíveis.",
      action: "Celebrar"
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
    <section ref={sectionRef} id="booking-steps" className="py-24 px-6">
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
            COMO RESERVAR
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Transformar seu sonho em realidade é mais fácil do que você imagina. 
              Siga nosso processo personalizado em 4 etapas simples.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <div className="rounded-lg p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-light text-lg">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="text-amber-700 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-light text-stone-800 mb-4 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-luxury text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
                
                {/* Action Button */}
                <button className="neuro-button px-6 py-2 rounded-full text-stone-700 font-light text-sm tracking-wide hover:shadow-lg transition-all duration-300 group">
                  <span className="group-hover:tracking-wider transition-all duration-300">
                    {step.action}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-lg p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-stone-800 mb-4 tracking-wide">
              Pronto para começar?
            </h3>
            <p className="text-luxury mb-6 leading-relaxed">
              Nossa equipe está pronta para tornar seu evento inesquecível
            </p>
            <button className="neuro-button px-12 py-4 rounded-full text-stone-700 font-medium tracking-wide hover:shadow-xl transition-all duration-500 group">
              <span className="group-hover:tracking-wider transition-all duration-300">
                Começar Agora
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingStepsSection;
