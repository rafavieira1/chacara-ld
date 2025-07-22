
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Ligue Agora",
      info: "(11) 9 9999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Envie um E-mail",
      info: "contato@chacarald.com.br",
      action: "mailto:contato@chacarald.com.br"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visite-nos",
      info: "Rodovia SP-XXX, Km XX",
      action: "#"
    }
  ];

  return (
    <section id="cta" className="py-24 px-6">
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
            REALIZE SEU SONHO
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Transforme momentos especiais em memórias eternas. 
              A ChácaraLD está pronta para receber você e criar uma experiência única.
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-20">
          <div className="rounded-lg p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 relative group max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-light text-stone-800 mb-4 tracking-wide">
              Agende Sua Visita Gratuita
            </h3>
            <p className="text-luxury mb-8 max-w-2xl mx-auto leading-relaxed">
              Conheça pessoalmente todos os nossos espaços e descubra como podemos 
              tornar seu evento inesquecível. Nossa equipe está pronta para recebê-lo.
            </p>
            <button className="neuro-button px-12 py-4 rounded-full text-stone-700 font-medium tracking-wide hover:shadow-2xl transition-all duration-500 group text-lg">
              <span className="group-hover:tracking-wider transition-all duration-300">
                Agendar Visita Gratuita
              </span>
            </button>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="group"
            >
              <a 
                href={method.action}
                className="block rounded-lg p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center" style={{ color: '#5C3A2B' }}>
                  {method.icon}
                </div>
                <h4 className="text-lg font-light text-stone-800 mb-2 tracking-wide">
                  {method.title}
                </h4>
                <p className="text-luxury text-sm transition-colors duration-300">
                  {method.info}
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button className="neuro-button px-10 py-4 rounded-full text-stone-700 font-light tracking-wide hover:shadow-lg transition-all duration-300 group">
            <span className="group-hover:tracking-wider transition-all duration-300">
              Solicitar Orçamento
            </span>
          </button>
          <button className="neuro-button px-10 py-4 rounded-full text-stone-700 font-light tracking-wide hover:shadow-lg transition-all duration-300 group">
            <span className="group-hover:tracking-wider transition-all duration-300">
              Download do Catálogo
            </span>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 rounded-lg p-6 shadow-2xl">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-lg" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}></div>
              ))}
            </div>
            <div className="text-sm text-luxury">
              <span className="font-medium text-stone-800">200+</span> eventos realizados com sucesso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
