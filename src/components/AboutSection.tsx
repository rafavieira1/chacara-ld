
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Dados extraídos para facilitar manutenção
const aboutContent = {
  title: "Sobre Nós",
  paragraphs: [
    "A Chácara LD é um espaço completo para eventos, localizada em Santa Terezinha de Itaipu – PR, a poucos minutos das Cataratas do Iguaçu.",
    "Com uma estrutura acolhedora e cercada pela natureza, oferecemos um ambiente ideal para celebrações em família, casamentos, confraternizações e momentos de lazer.",
    "Piscina, salão de jogos, campo de futebol, cozinha equipada e área gourmet fazem parte da experiência.",
    "Quando não estamos organizando eventos, estamos constantemente inovando e pensando em novas formas de tornar cada celebração ainda mais especial.",
    "Queremos deixar um legado de momentos únicos e inesquecíveis que marquem a vida de cada pessoa que passa por aqui.",
    "Além do espaço físico, agora levamos o sabor e o estilo da Chácara LD até você, com serviços personalizados como buffets completos, mesas de frios, bar temático e muito mais.",
    "Aqui, cada detalhe é pensado com cuidado para que seu evento seja inesquecível, com conforto, privacidade, contato com a natureza e atendimento de excelência."
  ],
  images: [
    { src: "/paisagem1.jpg", alt: "Vista da Chácara LD" },
    { src: "/about2.jpg", alt: "Eventos na Chácara LD" },
    { src: "/aboutwall.jpg", alt: "Vista panorâmica da Chácara LD" }
  ]
};



// Componente para o título com gradiente
const GradientTitle = ({ children, isVisible }: { children: string; isVisible: boolean }) => (
  <div className={`text-center mb-16 transition-all duration-1000 relative z-10 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}>
    <div className="py-0">
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-great-vibes font-normal leading-loose tracking-wide relative z-20 gradient-text">
        {children}
      </h2>
    </div>
    <div className="w-full h-px bg-stone-300 mt-0 mb-16 relative z-10"></div>
  </div>
);

// Componente para parágrafos
const Paragraph = ({ children }: { children: string }) => (
  <p className="text-luxury leading-relaxed text-lg text-justify">
    {children}
  </p>
);

// Componente para imagem
const AboutImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className="relative flex-shrink-0">
    <img 
      src={src}
      alt={alt}
      className={`object-cover rounded-lg shadow-2xl ${className}`}
    />
  </div>
);

const AboutSection = () => {
  const { isVisible, ref } = useIntersectionObserver();

  return (
    <section ref={ref} id="about" className="py-24 px-6 pb-10">
      <div className="container mx-auto max-w-7xl">
        <GradientTitle isVisible={isVisible}>
          {aboutContent.title}
        </GradientTitle>

        <div className="space-y-16">
          {/* Primeira linha - Imagem e Texto */}
          <div className={`flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}>
            <AboutImage 
              src={aboutContent.images[0].src} 
              alt={aboutContent.images[0].alt}
              className="w-[26rem] h-80"
            />
            <div className="space-y-6 flex-1">
              {aboutContent.paragraphs.slice(0, 4).map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
              ))}
            </div>
          </div>

          {/* Segunda linha - Texto e Imagem */}
          <div className={`flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}>
            <div className="space-y-6 flex-1">
              {aboutContent.paragraphs.slice(4).map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
              ))}
            </div>
            <AboutImage 
              src={aboutContent.images[1].src} 
              alt={aboutContent.images[1].alt}
              className="w-[26rem] h-80 ml-auto"
            />
          </div>

          {/* Imagem de largura total */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '900ms' }}>
            <AboutImage 
              src={aboutContent.images[2].src} 
              alt={aboutContent.images[2].alt}
              className="w-full h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
