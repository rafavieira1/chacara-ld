import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Contato', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-card backdrop-blur-xl bg-white/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center">
          {/* Logo - Left */}
          <div className="flex items-center">
            <a href="#hero" className="cursor-pointer">
              <img 
                src="/logo2.png" 
                alt="Logo Chácara LD" 
                className="w-32 h-16 object-cover hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>

          {/* Center Menu - Desktop */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-8 px-8 py-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-black transition-colors duration-300 font-light tracking-wide relative group"
                  style={{ '--hover-color': '#5C3A2B' } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#5C3A2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#5C3A2B' }}></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden lg:block">
            <button 
              className="px-6 py-2 rounded-full text-white font-medium tracking-wide transition-all duration-300 shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
                boxShadow: '0 4px 14px 0 rgba(92, 58, 43, 0.39)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4A2F22 0%, #6D4A3D 100%)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)'}
            >
              Entrar em contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              className="p-2 rounded-full glass-card"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-card rounded-2xl p-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-black transition-colors duration-300 font-light tracking-wide py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#5C3A2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="px-6 py-3 rounded-full text-white font-medium tracking-wide mt-4 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
                  boxShadow: '0 4px 14px 0 rgba(92, 58, 43, 0.39)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4A2F22 0%, #6D4A3D 100%)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)'}
              >
                Entrar em contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
