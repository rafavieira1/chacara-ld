
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Dados extraídos para facilitar manutenção
const aboutContent = {
  title: "Sobre Nós",
  subtitle: "Um espaço completo para eventos em Santa Terezinha de Itaipu – PR. Celebre momentos especiais cercado pela natureza.",

  features: [
    "Piscina aquecida",
    "Salão de jogos",
    "Campo de futebol",
    "Área gourmet equipada",
    "Cozinha profissional",
    "Decoração personalizada"
  ],

  images: [
    { src: "/about2novo2.webp", alt: "Vista da Chácara LD" },
    { src: "/about2.webp", alt: "Eventos na Chácara LD" },
    { src: "/about2novo3.webp", alt: "Vista panorâmica da Chácara LD" }
  ],

  historyText: "A Chácara LD nasceu do sonho de criar um espaço onde momentos especiais pudessem ser celebrados em harmonia com a natureza. Localizada em Santa Terezinha de Itaipu, próximo às Cataratas do Iguaçu, foi planejada para oferecer conforto, privacidade e experiências memoráveis em cada celebração. Nossa missão é proporcionar um ambiente acolhedor e versátil, ideal para casamentos, festas de aniversário, eventos corporativos e encontros familiares. Com uma equipe dedicada e apaixonada pelo que faz.",
  
  offeringsText: "Hoje oferecemos um espaço completo com piscina aquecida, salão de jogos, campo de futebol, área gourmet e cozinha profissional. Realizamos casamentos, festas e eventos corporativos, além de levar nossos serviços até você com buffets personalizados e decoração exclusiva."
};

// Componente para o título com gradiente
const GradientTitle = ({ children, subtitle, isVisible }: { children: string; subtitle: string; isVisible: boolean }) => (
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
        {children}
      </h2>
    </div>
    <div className="w-full h-px bg-stone-300 mt-0 mb-4 sm:mb-6 md:mb-8 relative z-10"></div>
    
    {/* Description Text */}
    <div className="text-center max-w-3xl mx-auto relative z-10 px-4">
      <p className="text-luxury leading-relaxed text-base sm:text-lg">
        {subtitle}
      </p>
    </div>
  </div>
);

const AboutSection = () => {
  const { isVisible, ref } = useIntersectionObserver();

  return (
    <section ref={ref} id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-white via-stone-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <GradientTitle isVisible={isVisible} subtitle={aboutContent.subtitle}>
          {aboutContent.title}
        </GradientTitle>

        {/* Image Grid + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-20 items-start">
          {/* Images Column - Desktop */}
          <div className={`hidden lg:block space-y-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ transitionDelay: '400ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src={aboutContent.images[0].src}
                alt={aboutContent.images[0].alt}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src={aboutContent.images[1].src}
                  alt={aboutContent.images[1].alt}
                  className="w-full h-40 sm:h-48 lg:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src={aboutContent.images[2].src}
                  alt={aboutContent.images[2].alt}
                  className="w-full h-40 sm:h-48 lg:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Primeira imagem */}
            <div className={`relative rounded-2xl overflow-hidden shadow-xl group transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}>
              <img 
                src={aboutContent.images[0].src}
                alt={aboutContent.images[0].alt}
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Primeiro bloco de texto */}
            <div className={`space-y-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <h3 className="text-3xl sm:text-4xl font-semibold text-foreground">
                Nossa história
              </h3>
              <p className="text-luxury leading-relaxed text-base sm:text-lg">
                {aboutContent.historyText}
              </p>
            </div>

            {/* Segunda imagem */}
            <div className={`relative rounded-xl overflow-hidden shadow-lg group transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}>
              <img 
                src={aboutContent.images[1].src}
                alt={aboutContent.images[1].alt}
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Segundo bloco de texto */}
            <div className={`space-y-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}>
              <h3 className="text-3xl sm:text-4xl font-semibold text-foreground">
                Nossa Chácara
              </h3>
              <p className="text-luxury leading-relaxed text-base sm:text-lg">
                {aboutContent.offeringsText}
              </p>
            </div>

            {/* Terceira imagem */}
            <div className={`relative rounded-xl overflow-hidden shadow-lg group transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '700ms' }}>
              <img 
                src={aboutContent.images[2].src}
                alt={aboutContent.images[2].alt}
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Features Column - Desktop */}
          <div className={`hidden lg:flex flex-col justify-start space-y-4 transition-all duration-1000 lg:pt-0 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ transitionDelay: '500ms' }}>
            <h3 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-foreground">
              Nossa história
            </h3>
            
            {/* Textos descritivos */}
            <div className="space-y-4">
              <p className="text-luxury leading-relaxed text-base sm:text-lg">
                {aboutContent.historyText}
              </p>
              
              {/* Título do segundo bloco */}
              <h3 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-foreground pt-12 sm:pt-14 lg:pt-10 ">
                Nossa Chácara
              </h3>
              
              {/* Texto sobre o que a chácara oferece */}
              <p className="text-luxury leading-relaxed text-base sm:text-lg">
                {aboutContent.offeringsText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
