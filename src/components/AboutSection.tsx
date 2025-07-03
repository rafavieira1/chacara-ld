
import { Leaf, Heart, Star, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Em meio à natureza",
      description: "Ambiente cercado por vegetação nativa e paisagens deslumbrantes"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Momentos únicos",
      description: "Cada evento é cuidadosamente planejado para ser inesquecível"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Estrutura completa",
      description: "Tudo que você precisa para o seu evento perfeito"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelência garantida",
      description: "Padrão premium de qualidade e atendimento personalizado"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-sm text-luxury tracking-[0.3em] uppercase">Sobre nós</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-800 text-spaced mb-6">
            NOSSA HISTÓRIA
          </h2>
          <p className="text-xl text-luxury max-w-3xl mx-auto leading-relaxed">
            A ChácaraLD nasceu do sonho de criar um espaço onde a natureza e a elegância se encontram, 
            proporcionando o cenário perfeito para os momentos mais importantes da sua vida.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-light text-stone-800 mb-6 tracking-wide">
              Um refúgio de elegância e tranquilidade
            </h3>
            <div className="space-y-6 text-luxury leading-relaxed">
              <p>
                Localizada em uma área privilegiada, nossa chácara oferece o equilíbrio perfeito 
                entre sofisticação e contato com a natureza. Cada detalhe foi pensado para 
                proporcionar uma experiência única e memorável.
              </p>
              <p>
                Com mais de uma década de experiência em eventos especiais, desenvolvemos 
                uma expertise incomparável em transformar sonhos em realidade, sempre 
                mantendo o mais alto padrão de qualidade e atendimento.
              </p>
              <p>
                Nossa missão é criar momentos inesquecíveis, cuidando de cada detalhe 
                para que você possa desfrutar plenamente do seu dia especial.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in animation-delay-200">
            <div className="relative group">
              <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
                  alt="Vista da chácara"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 glass-card rounded-full flex items-center justify-center animate-glow-pulse">
                <span className="text-2xl">🌿</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-amber-700 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h4 className="text-xl font-light text-stone-800 mb-3 tracking-wide">
                {feature.title}
              </h4>
              <p className="text-luxury text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
