// Dados extraídos para facilitar manutenção
const heroData = {
  title: "Chácara LD",
  subtitle: "Espaço para eventos",
  backgroundImage: "/background.jpg",
  logo: {
    src: "/logo2.png",
    alt: "Logo Chácara LD"
  }
};

// Componente para o logo
const HeroLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full mt-12">
    <img 
      src={src} 
      alt={alt} 
      className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
    />
  </div>
);

// Componente para o título principal
const HeroTitle = ({ title }: { title: string }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-6xl md:text-8xl lg:text-9xl drop-shadow-2xl font-1769 text-center pt-4 gradient-text">
      {title}
    </h1>
  </div>
);

// Componente para o subtítulo
const HeroSubtitle = ({ subtitle }: { subtitle: string }) => (
  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
    <p className="text-lg md:text-xl lg:text-2xl font-1769 tracking-widest uppercase text-center text-white drop-shadow-lg">
      {subtitle}
    </p>
  </div>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url('${heroData.backgroundImage}')`,
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
