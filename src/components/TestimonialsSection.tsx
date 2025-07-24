import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { TestimonialsColumn } from './ui/testimonials-columns-1';

// Dados extraídos para facilitar manutenção
const testimonialsData = {
  title: "Depoimentos",
  subtitle: "Veja como a Chácara LD fez parte de momentos especiais e o que nossos clientes dizem sobre viver essa experiência conosco.",
  testimonials: [
    {
      name: "Sara & Pedro",
      role: "Casamento",
      text: "Nosso casamento na Chácara LD foi simplesmente mágico. A vista ao pôr do sol, a natureza ao redor e o cuidado com cada detalhe tornaram esse dia inesquecível.",
      image: "/saraepedro.jpg"
    },
    {
      name: "Gabriela",
      role: "Festa de 15 anos",
      text: "A estrutura da Chácara LD superou todas as minhas expectativas. Me senti uma princesa! A decoração integrada ao espaço deixou tudo perfeito para esse momento tão especial.",
      image: "gabriela.jpg"
    },
    {
      name: "Melki & Jussieli",
      role: "Casamento",
      text: "Escolhemos a Chácara LD pelo ambiente acolhedor e não nos arrependemos. O espaço é lindo, a equipe atenciosa e tudo saiu como sonhamos.",
      image: "melkieju.jpg"
    },
    {
      name: "Carla & Lino",
      role: "Casamento",
      text: "Cada cantinho da Chácara LD tem um charme especial. Nosso casamento teve a energia que queríamos: natureza, alegria e conforto para todos os convidados.",
      image: "/carlaelino.jpg"
    },
    {
      name: "Carol",
      role: "Festa de 15 anos",
      text: "Foi tudo perfeito! A piscina, os jardins, a área de convivência... Meus convidados amaram e a festa foi muito elogiada. Só tenho a agradecer à Chácara LD.",
      image: "carol.jpg"
    },
    {
      name: "Marcelo & Thays",
      role: "Casamento",
      text: "A Chácara LD foi a escolha ideal para nosso grande dia. Ambiente tranquilo, estrutura impecável e um atendimento que nos deixou totalmente seguros e confiantes.",
      image: "marceloethays.jpg"
    }
  ]
  
};

// Hook customizado para gerenciar testemunho ativo
const useActiveTestimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  return { activeTestimonial, setActiveTestimonial };
};

// Componente para o cabeçalho da seção
const SectionHeader = ({ title, subtitle, isVisible }: { title: string; subtitle: string; isVisible: boolean }) => (
  <div className={`text-center mb-16 transition-all duration-1000 relative z-10 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}>
    <div className="py-0">
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-great-vibes font-normal leading-loose tracking-wide relative z-20 gradient-text">
        {title}
      </h2>
    </div>
    <div className="w-full h-px bg-stone-300 mt-0 mb-8 relative z-10"></div>
    
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-luxury leading-relaxed text-lg">
        {subtitle}
      </p>
    </div>
  </div>
);

// Componente para as colunas de testemunhos (desktop)
const DesktopTestimonials = ({ testimonials, isVisible }: { 
  testimonials: typeof testimonialsData.testimonials; 
  isVisible: boolean 
}) => {
  // Dividir testemunhos em 3 colunas
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 5).concat(testimonials.slice(0, 1));

  return (
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
  );
};

// Componente para testemunho individual (mobile)
const MobileTestimonialCard = ({ testimonial }: { testimonial: typeof testimonialsData.testimonials[0] }) => (
  <div className="rounded-lg p-8 text-center relative overflow-hidden shadow-2xl">
    {/* Quote Icon */}
    <div className="absolute top-8 left-8 opacity-20 gradient-text">
      <Quote className="w-16 h-16" />
    </div>
    
    {/* Stars */}
    <div className="flex justify-center mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-6 h-6 fill-current gradient-text" />
      ))}
    </div>
    
    {/* Testimonial Text */}
    <blockquote className="text-lg md:text-xl font-light text-stone-800 leading-relaxed mb-8">
      "{testimonial.text}"
    </blockquote>
    
    {/* Author Info */}
    <div className="flex items-center justify-center space-x-4">
      <img 
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover shadow-lg"
      />
      <div className="text-left">
        <div className="text-lg font-light text-stone-800 tracking-wide">
          {testimonial.name}
        </div>
        <div className="text-luxury text-sm">
          {testimonial.role}
        </div>
      </div>
    </div>
  </div>
);

// Componente para navegação mobile
const MobileNavigation = ({ 
  testimonials, 
  activeTestimonial, 
  setActiveTestimonial 
}: { 
  testimonials: typeof testimonialsData.testimonials; 
  activeTestimonial: number; 
  setActiveTestimonial: (index: number) => void; 
}) => (
  <div className="flex justify-center space-x-3">
    {testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveTestimonial(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === activeTestimonial 
            ? 'shadow-lg gradient-bg' 
            : 'bg-stone-300 hover:bg-stone-400'
        }`}
      />
    ))}
  </div>
);

// Componente para testemunhos mobile
const MobileTestimonials = ({ testimonials }: { testimonials: typeof testimonialsData.testimonials }) => {
  const { activeTestimonial, setActiveTestimonial } = useActiveTestimonial();

  return (
    <div className="md:hidden">
      <div className="mb-16">
        <MobileTestimonialCard testimonial={testimonials[activeTestimonial]} />
      </div>
      <MobileNavigation 
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
    </div>
  );
};

const TestimonialsSection = () => {
  const { isVisible, ref } = useIntersectionObserver();

  return (
    <section ref={ref} id="testimonials" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader 
          title={testimonialsData.title}
          subtitle={testimonialsData.subtitle}
          isVisible={isVisible}
        />

        <DesktopTestimonials 
          testimonials={testimonialsData.testimonials}
          isVisible={isVisible}
        />

        <MobileTestimonials 
          testimonials={testimonialsData.testimonials}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
