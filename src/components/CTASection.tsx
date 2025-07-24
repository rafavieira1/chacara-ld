
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { CTASection as CTAWithRectangle } from '@/components/ui/cta-with-rectangle';

// Dados extraídos para facilitar manutenção
const ctaData = {
  title: "Realize seu Sonho",
  subtitle: "Transforme momentos especiais em memórias eternas. A ChácaraLD está pronta para receber você e criar uma experiência única.",
  cta: {
    badge: {
      text: "Visita Gratuita"
    },
    title: "Agende Sua Visita Gratuita",
    description: "Conheça pessoalmente todos os nossos espaços e descubra como podemos tornar seu evento inesquecível. Nossa equipe está pronta para recebê-lo.",
    action: {
      text: "Agendar Visita",
      href: "#location",
      variant: "default" as const
    }
  }
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

// Componente para o CTA principal
const MainCTA = ({ cta, isVisible }: { cta: typeof ctaData.cta; isVisible: boolean }) => (
  <div className={`transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
  style={{ transitionDelay: '300ms' }}>
    <CTAWithRectangle
      badge={cta.badge}
      title={cta.title}
      description={cta.description}
      action={cta.action}
      withGlow={true}
      className="mb-20"
    />
  </div>
);

const CTASection = () => {
  const { isVisible, ref } = useIntersectionObserver();
  
  return (
    <section ref={ref} id="cta" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader 
          title={ctaData.title}
          subtitle={ctaData.subtitle}
          isVisible={isVisible}
        />

        <MainCTA 
          cta={ctaData.cta}
          isVisible={isVisible}
        />
      </div>
    </section>
  );
};

export default CTASection;
