
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:contato@chacarald.com.br", label: "E-mail" },
    { icon: <Phone className="w-5 h-5" />, href: "tel:+5511999999999", label: "Telefone" }
  ];

  const quickLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Galeria", href: "#gallery" },
    { label: "Contato", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-b from-stone-100 to-stone-200 py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span 
                  className="text-2xl font-kanoky font-light tracking-wider"
                  style={{ 
                    background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block'
                  }}
                >
                  CHÁCARA
                </span>
                <span className="text-xs text-stone-600/80 tracking-widest">L D</span>
              </div>
            </div>
            <p className="text-luxury leading-relaxed mb-6 max-w-md">
              Um espaço exclusivo em meio à natureza, onde momentos especiais se 
              transformam em memórias eternas. Criando experiências únicas desde 2023.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-stone-600 hover:text-amber-700 hover:shadow-xl transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light text-stone-800 mb-6 tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-luxury hover:text-amber-700 transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light text-stone-800 mb-6 tracking-wide">
              Contato
            </h4>
            <div className="space-y-3 text-sm text-luxury">
              <p>Rodovia SP-XXX, Km XX</p>
              <p>Cidade - SP, 12345-678</p>
              <p>(11) 9 9999-9999</p>
              <p>contato@chacarald.com.br</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-300 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-luxury text-sm tracking-wide">
            © {currentYear} ChácaraLD. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-luxury">
            <a href="#" className="hover:text-amber-700 transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-amber-700 transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
