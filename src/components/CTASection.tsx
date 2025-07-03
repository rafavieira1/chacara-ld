
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Ligue Agora",
      info: "(11) 9 9999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Envie um E-mail",
      info: "contato@chacarald.com.br",
      action: "mailto:contato@chacarald.com.br"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visite-nos",
      info: "Rodovia SP-XXX, Km XX",
      action: "#"
    }
  ];

  return (
    <section id="cta" className="py-32 px-6 bg-gradient-to-br from-stone-100 via-amber-50/50 to-stone-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-600/10 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-stone-600/10 to-transparent rounded-full blur-3xl animate-float animation-delay-1000"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-sm text-luxury tracking-[0.3em] uppercase">Pronto para Começar?</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-2"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-extralight text-stone-800 text-spaced mb-8">
            REALIZE SEU SONHO
          </h2>
          <p className="text-2xl text-luxury max-w-4xl mx-auto leading-relaxed mb-12">
            Transforme momentos especiais em memórias eternas. 
            A ChácaraLD está pronta para receber você e criar uma experiência única.
          </p>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-20 animate-fade-in animation-delay-200">
          <div className="glass-card rounded-3xl p-12 mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-stone-600/5 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shadow-2xl animate-glow-pulse">
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
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <a 
                href={method.action}
                className="block glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
              >
                <div className="text-amber-700 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {method.icon}
                </div>
                <h4 className="text-lg font-light text-stone-800 mb-2 tracking-wide">
                  {method.title}
                </h4>
                <p className="text-luxury text-sm group-hover:text-amber-700 transition-colors duration-300">
                  {method.info}
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in animation-delay-800">
          <button className="glass-card px-10 py-4 rounded-full text-stone-700 font-light tracking-wide border border-stone-300/50 hover:bg-white/20 transition-all duration-300 group">
            <span className="group-hover:tracking-wider transition-all duration-300">
              Solicitar Orçamento
            </span>
          </button>
          <button className="glass-card px-10 py-4 rounded-full text-stone-700 font-light tracking-wide border border-stone-300/50 hover:bg-white/20 transition-all duration-300 group">
            <span className="group-hover:tracking-wider transition-all duration-300">
              Download do Catálogo
            </span>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <div className="inline-flex items-center space-x-4 glass-card px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full border-2 border-white shadow-lg"></div>
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
