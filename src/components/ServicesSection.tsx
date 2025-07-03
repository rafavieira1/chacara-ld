
import { Users, Calendar, Utensils, Camera, Music, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Casamentos",
      description: "Cerimônias e recepções em um ambiente mágico e romântico",
      features: ["Cerimônia ao ar livre", "Decoração personalizada", "Buffet premium", "Coordenação completa"]
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Eventos Corporativos",
      description: "Espaço ideal para confraternizações e eventos empresariais",
      features: ["Equipamentos audiovisuais", "Catering executivo", "Ambientes flexíveis", "Suporte técnico"]
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Festas & Celebrações",
      description: "Aniversários, formaturas e celebrações especiais",
      features: ["Decoração temática", "Entretenimento", "Cardápio variado", "Espaço kids"]
    }
  ];

  const amenities = [
    { icon: <Utensils className="w-6 h-6" />, label: "Gastronomia Premium" },
    { icon: <Camera className="w-6 h-6" />, label: "Cenários Fotográficos" },
    { icon: <Music className="w-6 h-6" />, label: "Sistema de Som" },
    { icon: <Users className="w-6 h-6" />, label: "Capacidade Flexível" }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-transparent to-stone-50/50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-sm text-luxury tracking-[0.3em] uppercase">Nossos Serviços</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-800 text-spaced mb-6">
            EXPERIÊNCIAS
          </h2>
          <p className="text-xl text-luxury max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas para tornar seu evento único e inesquecível, 
            com atendimento personalizado e atenção aos mínimos detalhes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="text-amber-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-light text-stone-800 mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-luxury mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-luxury">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="glass-card rounded-3xl p-8 animate-fade-in">
          <h3 className="text-2xl font-light text-stone-800 text-center mb-8 tracking-wide">
            Comodidades Incluídas
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-luxury group hover:text-amber-700 transition-colors duration-300"
              >
                <div className="text-amber-700 group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <span className="font-light tracking-wide">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <button className="neuro-button px-10 py-4 rounded-full text-stone-700 font-medium tracking-wide hover:shadow-xl transition-all duration-500 group">
            <span className="group-hover:tracking-wider transition-all duration-300">
              Solicitar Orçamento
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
