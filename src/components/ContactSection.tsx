
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        guests: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      details: ["Rodovia SP-XXX, Km XX", "Cidade - SP", "12345-678"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      details: ["(11) 9 9999-9999", "(11) 3333-3333"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      details: ["contato@chacarald.com.br", "eventos@chacarald.com.br"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      details: ["Segunda à Sexta: 8h às 18h", "Sábados: 8h às 16h", "Visitas sob agendamento"]
    }
  ];

  return (
    <section id="contact" className="py-24 px-6">
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
            CONTATO
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Estamos prontos para transformar seu sonho em realidade. Entre em contato 
              e agende uma visita para conhecer nossos espaços.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-light text-stone-800 mb-6 tracking-wide">
                Solicite um Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-luxury mb-2 tracking-wide">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card border-0 focus:ring-2 focus:ring-stone-400/20 transition-all duration-300 text-stone-800"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-luxury mb-2 tracking-wide">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card border-0 focus:ring-2 focus:ring-stone-400/20 transition-all duration-300 text-stone-800"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-luxury mb-2 tracking-wide">Telefone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card border-0 focus:ring-2 focus:ring-stone-400/20 transition-all duration-300 text-stone-800"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-luxury mb-2 tracking-wide">Tipo de Evento</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card border-0 focus:ring-2 focus:ring-stone-400/20 transition-all duration-300 text-stone-800"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="casamento">Casamento</option>
                      <option value="aniversario">Aniversário</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="formatura">Formatura</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-luxury mb-2 tracking-wide">Data do Evento</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card border-0 focus:ring-2 focus:ring-stone-400/20 transition-all duration-300 text-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-luxury mb-2 tracking-wide">Número de Convidados</label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card border-0 focus:ring-2 focus:ring-stone-400/20 transition-all duration-300 text-stone-800"
                      placeholder="Ex: 150"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-luxury mb-2 tracking-wide">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl glass-card border-0 focus:ring-2 focus:ring-stone-400/20 transition-all duration-300 text-stone-800 resize-none"
                    placeholder="Conte-nos mais sobre seu evento..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neuro-button py-4 rounded-xl text-stone-700 font-medium tracking-wide hover:shadow-xl transition-all duration-500 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-stone-700 mr-2"></div>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center group-hover:tracking-wider transition-all duration-300">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in animation-delay-200">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-amber-700 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-stone-800 mb-2 tracking-wide">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-luxury text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="glass-card rounded-2xl p-6 mt-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-luxury">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-700" />
                  <p className="font-light tracking-wide">Mapa Interativo</p>
                  <p className="text-sm mt-1">Localização privilegiada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
