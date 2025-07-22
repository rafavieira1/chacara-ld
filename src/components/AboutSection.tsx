
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
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

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 pb-10">
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
            SOBRE NOS
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-16"></div>
        </div>

        {/* Content Grid - Matching Reference Layout */}
        <div className="space-y-16">
          {/* Top Row - Image and Text */}
          <div className={`flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}>
            {/* Top Left - Image */}
            <div className="relative flex-shrink-0">
              <img 
                src="/about1.jpg"
                alt="Vista da Chácara LD"
                className="w-[28rem] h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>

            {/* Top Right - Text Block */}
            <div className="space-y-6 flex-1">
              <p className="text-luxury leading-relaxed text-lg">
                <span className="font-semibold text-stone-800">Espaço premiado</span> que conquistou reconhecimento em 2021 por sua 
                excelência em eventos, focando sempre na experiência humana e no cuidado 
                com cada detalhe para criar momentos únicos e inesquecíveis.
              </p>
              <p className="text-luxury leading-relaxed text-lg">
                Nossa meta é impactar positivamente a vida de milhares de pessoas, 
                criando memórias que durarão para sempre em seus corações.
              </p>
              <p className="text-luxury leading-relaxed text-lg">
                A ChácaraLD nasceu do sonho de criar um espaço onde cada detalhe fosse pensado com carinho para acolher histórias inesquecíveis. 
                Rodeada por natureza e com uma estrutura completa, nossa chácara oferece o equilíbrio perfeito entre conforto, beleza e tranquilidade.
              </p>
              <p className="text-luxury leading-relaxed text-lg">
              Aqui, realizamos casamentos, aniversários, eventos corporativos e celebrações de todos os tipos com o compromisso de tornar cada momento único.
              </p>
            </div>
          </div>

          {/* Bottom Row - Text and Image */}
          <div className={`flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}>
            {/* Bottom Left - Text Block */}
            <div className="space-y-6 flex-1">
              <p className="text-luxury leading-relaxed text-lg">
                Quando não estamos organizando eventos, estamos constantemente 
                inovando e pensando em novas formas de tornar cada celebração ainda mais especial.
              </p>
              <p className="text-luxury leading-relaxed text-lg">
                Queremos deixar um legado de momentos únicos e inesquecíveis 
                que marquem a vida de cada pessoa que passa por aqui.
              </p>
              <p className="text-luxury leading-relaxed text-lg">
                Atualmente, estamos sempre aperfeiçoando nossos serviços para nos afastarmos 
                do comum e lembrarmos de onde viemos e para onde queremos ir.
              </p>
              <p className="text-luxury leading-relaxed text-lg">
              Localizada em meio ao verde e a poucos minutos da cidade, a ChácaraLD é um espaço planejado para eventos de alto padrão. 
              Contamos com salão coberto, área externa ampla, piscina, estacionamento privativo e ambiente decorado com bom gosto e sofisticação.
              </p>
            </div>

            {/* Bottom Right - Image */}
            <div className="relative flex-shrink-0">
              <img 
                src="/about2.jpg"
                alt="Eventos na Chácara LD"
                className="w-[28rem] h-96 object-cover rounded-lg shadow-2xl ml-auto"
              />
            </div>
          </div>

          {/* Bottom Full Width Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '900ms' }}>
            <img 
              src="/about1.jpg"
              alt="Vista panorâmica da Chácara LD"
              className="w-full h-64 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
