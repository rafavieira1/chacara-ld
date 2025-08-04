// Dados extraídos para facilitar manutenção
const heroData = {
  title: "Chácara LD",
  subtitle: "Espaço para eventos",
  backgroundImage: "/background.webp",
  logo: {
    src: "/logo2.png",
    alt: "Logo Chácara LD"
  }
};

// Componente para o logo
const HeroLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full mt-8 sm:mt-10 md:mt-12">
    <img 
      src={src} 
      alt={alt} 
      className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl"
    />
  </div>
);

// Componente para o título principal
const HeroTitle = ({ title }: { title: string }) => (
  <div className="absolute inset-0 flex items-center justify-center px-4">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl drop-shadow-2xl font-1769 text-center pt-4 gradient-text leading-tight">
      {title}
    </h1>
  </div>
);

// Componente para o subtítulo
const HeroSubtitle = ({ subtitle }: { subtitle: string }) => (
  <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center px-4">
    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-1769 tracking-widest uppercase text-center text-white drop-shadow-lg">
      {subtitle}
    </p>
  </div>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" style={{ paddingTop: 'var(--safe-area-inset-top)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url('${heroData.backgroundImage}')`,
          top: 'calc(-1 * var(--safe-area-inset-top))',
          height: 'calc(100% + var(--safe-area-inset-top))',
        }}
      ></div>

      {/* Centered Content */}
      <div className="absolute inset-0 z-10">
        <HeroLogo src={heroData.logo.src} alt={heroData.logo.alt} />
        <HeroTitle title={heroData.title} />
        <HeroSubtitle subtitle={heroData.subtitle} />
      </div>
    </section>
  );
};

export default HeroSection;
