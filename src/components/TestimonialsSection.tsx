import { Star, Quote } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { TestimonialsColumn } from './ui/testimonials-columns-1';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  const testimonials = [
    {
      name: "Marina & Carlos",
      role: "Casamento",
      text: "A ChácaraLD foi o cenário perfeito para nosso casamento dos sonhos. Cada detalhe foi cuidado com carinho pela equipe, e nossos convidados não pararam de elogiar a beleza do local.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Empresa TechCorp",
      role: "Evento Corporativo",
      text: "Realizamos nossa confraternização anual na ChácaraLD e foi um sucesso absoluto. A estrutura é impecável e o atendimento superou todas as expectativas.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Paula",
      role: "Aniversário de 50 anos",
      text: "Minha festa de 50 anos na ChácaraLD foi inesquecível! O ambiente acolhedor e a natureza exuberante criaram uma atmosfera mágica que meus amigos ainda comentam.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c169bb6b?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Roberto Silva",
      role: "Formatura",
      text: "Nossa formatura na ChácaraLD foi simplesmente perfeita! O espaço é lindo e a equipe foi muito atenciosa com todos os detalhes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Família Santos",
      role: "Reunião de Família",
      text: "Reunimos toda a família na ChácaraLD para comemorar os 80 anos da vovó. Foi um dia especial que ficará na memória de todos.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Dividir testemunhos em 3 colunas
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 5).concat(testimonials.slice(0, 1)); // Adicionar mais para preencher

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 px-6">
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
            DEPOIMENTOS
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Descubra o que nossos clientes falam sobre suas experiências únicas na ChácaraLD 
              e como tornamos seus momentos especiais ainda mais memoráveis.
            </p>
          </div>
        </div>

        {/* Testimonials Columns */}
        <div className={`flex justify-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '300ms' }}>
          <div className="flex gap-6 max-w-6xl w-full [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] h-[600px] overflow-hidden">
            <TestimonialsColumn 
              testimonials={firstColumn}
              className="hidden md:block"
              duration={15}
            />
            <TestimonialsColumn 
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn 
              testimonials={thirdColumn}
              className="hidden md:block"
              duration={17}
            />
          </div>
        </div>

        {/* Mobile Testimonials */}
        <div className="md:hidden">
          <div className="mb-16">
            <div className="rounded-lg p-8 text-center relative overflow-hidden shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-20" style={{ color: '#5C3A2B' }}>
                <Quote className="w-16 h-16" />
              </div>
              
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#5C3A2B' }} />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl font-light text-stone-800 leading-relaxed mb-8">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <div className="text-lg font-light text-stone-800 tracking-wide">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-luxury text-sm">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'shadow-lg' 
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
                style={index === activeTestimonial ? { backgroundColor: '#5C3A2B' } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
