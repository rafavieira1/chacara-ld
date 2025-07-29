
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
  <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 relative z-10 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
        {title}
      </h2>
    </div>
    <div className="w-full h-px bg-stone-300 mt-0 mb-8 sm:mb-12 md:mb-16 relative z-10"></div>
    
    <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
      <p className="text-luxury leading-relaxed text-base sm:text-lg">
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
      className="mb-12 sm:mb-16 md:mb-20"
    />
  </div>
);

const CTASection = () => {
  const { isVisible, ref } = useIntersectionObserver();
  
  return (
    <section ref={ref} id="cta" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 pt-20 sm:pt-16 md:pt-20 lg:pt-24">
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
