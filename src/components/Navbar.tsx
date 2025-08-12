import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GetStartedButton } from '@/components/ui/get-started-button';

// Dados extraídos para facilitar manutenção
const navbarData = {
  logo: {
    src: "/logo2.png",
    alt: "Logo Chácara LD",
    href: "#hero"
  },
  menuItems: [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Tour Virtual', href: '#tour' },
    { label: 'Serviços', href: '#services' },
    { label: 'Localização', href: '#location' },
    { label: 'Contato', href: '#contact' }
  ],
  ctaButton: {
    text: "Contato"
  }
};

// Hook customizado para scroll
const useScrollEffect = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};

// Hook customizado para menu mobile
const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);
  
  return { isMobileMenuOpen, toggleMenu, closeMenu };
};

// Componente para o logo
const NavbarLogo = ({ src, alt, href }: { src: string; alt: string; href: string }) => (
  <div className="flex items-center">
    <a href={href} className="cursor-pointer">
      <img 
        src={src} 
        alt={alt} 
        className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 object-cover hover:opacity-80 transition-opacity duration-300"
      />
    </a>
  </div>
);

// Componente para item do menu
const MenuItem = ({ 
  item, 
  onClick, 
  isMobile = false 
}: { 
  item: typeof navbarData.menuItems[0]; 
  onClick?: () => void; 
  isMobile?: boolean;
}) => (
  <a
    href={item.href}
    className={`text-black transition-colors duration-300 font-light tracking-wide relative group ${
      isMobile ? 'py-2' : ''
    }`}
    onClick={onClick}
    onMouseEnter={(e) => e.currentTarget.style.color = '#5C3A2B'}
    onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
  >
    {item.label}
    {!isMobile && (
      <span 
        className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" 
        style={{ backgroundColor: '#5C3A2B' }}
      />
    )}
  </a>
);

// Componente para o menu desktop
const DesktopMenu = ({ menuItems }: { menuItems: typeof navbarData.menuItems }) => (
  <div className="hidden lg:flex flex-1 justify-center">
    <div className="flex items-center space-x-8 px-8 py-3">
      {menuItems.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </div>
  </div>
);

// Componente para o menu mobile
const MobileMenu = ({ 
  menuItems, 
  isOpen, 
  onClose 
}: { 
  menuItems: typeof navbarData.menuItems; 
  isOpen: boolean; 
  onClose: () => void; 
}) => (
  isOpen && (
    <div className="lg:hidden mt-4 glass-card rounded-2xl p-4 sm:p-6 animate-fade-in">
      <div className="flex flex-col space-y-3 sm:space-y-4">
        {menuItems.map((item) => (
          <MenuItem 
            key={item.label} 
            item={item} 
            onClick={onClose}
            isMobile
          />
        ))}
      </div>
    </div>
  )
);

// Componente para o botão do menu mobile
const MobileMenuButton = ({ 
  isOpen, 
  onToggle 
}: { 
  isOpen: boolean; 
  onToggle: () => void; 
}) => (
  <div className="lg:hidden ml-auto">
    <button
      className="p-2 sm:p-3 rounded-full glass-card hover:bg-white/20 transition-colors duration-300"
      onClick={onToggle}
    >
      {isOpen ? <X size={20} className="sm:w-6 sm:h-6 text-white" /> : <Menu size={20} className="sm:w-6 sm:h-6 text-white" />}
    </button>
  </div>
);

const Navbar = () => {
  const isScrolled = useScrollEffect();
  const { isMobileMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'glass-card backdrop-blur-xl bg-white/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center">
          <NavbarLogo 
            src={navbarData.logo.src} 
            alt={navbarData.logo.alt} 
            href={navbarData.logo.href} 
          />

          <DesktopMenu menuItems={navbarData.menuItems} />

          <div className="hidden lg:block">
            <GetStartedButton text={navbarData.ctaButton.text} />
          </div>

          <MobileMenuButton 
            isOpen={isMobileMenuOpen} 
            onToggle={toggleMenu} 
          />
        </div>

        <MobileMenu 
          menuItems={navbarData.menuItems}
          isOpen={isMobileMenuOpen}
          onClose={closeMenu}
        />
      </nav>
    </header>
  );
};

export default Navbar;
