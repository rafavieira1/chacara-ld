
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className="text-center mb-16">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Left - Image */}
          <div className="relative">
            <img 
              src="/about1.jpg"
              alt="Vista da Chácara LD"
              className="w-full h-80 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Top Right - Text Block */}
                     <div className="space-y-6">
             <p className="text-luxury leading-relaxed text-lg">
               <span className="font-semibold text-stone-800">Espaço premiado</span> que conquistou reconhecimento em 2021 por sua 
               excelência em eventos, focando sempre na experiência humana e no cuidado 
               com cada detalhe para criar momentos únicos e inesquecíveis.
             </p>
             <p className="text-luxury leading-relaxed text-lg">
               Nossa meta é impactar positivamente a vida de milhares de pessoas, 
               criando memórias que durarão para sempre em seus corações.
             </p>
           </div>

          {/* Bottom Left - Text Block */}
                     <div className="space-y-6">
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
           </div>

          {/* Bottom Right - Image */}
          <div className="relative">
            <img 
              src="/about2.jpg"
              alt="Eventos na Chácara LD"
              className="w-full h-80 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
