
import { Calendar, MessageSquare, CreditCard, PartyPopper } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const BookingStepsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "01",
      icon: <Calendar className="w-8 h-8" />,
      title: "Agende uma Visita",
      description: "Conheça pessoalmente nossos espaços e tire todas as suas dúvidas com nossa equipe especializada.",
      action: "Agendar Visita"
    },
    {
      number: "02",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Planejamento Personalizado",
      description: "Desenvolvemos um projeto único para seu evento, cuidando de cada detalhe segundo suas preferências.",
      action: "Solicitar Orçamento"
    },
    {
      number: "03",
      icon: <CreditCard className="w-8 h-8" />,
      title: "Reserva Confirmada",
      description: "Finalize a reserva com condições flexíveis de pagamento e garanta sua data especial.",
      action: "Confirmar Reserva"
    },
    {
      number: "04",
      icon: <PartyPopper className="w-8 h-8" />,
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
    <section ref={sectionRef} id="booking-steps" className="py-24 px-6 bg-gradient-to-b from-transparent to-stone-50/50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm text-luxury tracking-[0.3em] uppercase">Como Reservar</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-800 text-spaced mb-6">
            PROCESSO SIMPLES
          </h2>
          <p className="text-xl text-luxury max-w-3xl mx-auto leading-relaxed">
            Transformar seu sonho em realidade é mais fácil do que você imagina. 
            Siga nosso processo personalizado em 4 etapas simples.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line - Mobile */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600/30 via-amber-600/60 to-amber-600/30"></div>
          
          {/* Horizontal Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600/30 via-amber-600/60 to-amber-600/30"></div>
          
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute -left-4 lg:left-1/2 lg:-translate-x-1/2 lg:top-20 w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10">
                  <span className="text-white font-light text-sm">{step.number}</span>
                </div>
                
                {/* Step Card */}
                <div className="ml-12 lg:ml-0 lg:mt-32 glass-card rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105 relative">
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
                
                {/* Progress Indicator - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 z-20">
                    <div className="w-0 h-0 border-l-8 border-l-amber-600/60 border-y-4 border-y-transparent animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`mt-16 max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-stone-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-full rounded-full animate-[progress_3s_ease-in-out_infinite] shadow-lg"></div>
          </div>
          <p className="text-center text-luxury text-sm mt-4">Processo 100% personalizado para você</p>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="neuro-button px-12 py-4 rounded-full text-stone-700 font-medium tracking-wide hover:shadow-xl transition-all duration-500 group">
            <span className="group-hover:tracking-wider transition-all duration-300">
              Começar Agora
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingStepsSection;
