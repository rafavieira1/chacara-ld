'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Instagram, Facebook, Mail, Phone, Home } from 'lucide-react';

// Tipos
interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

// Dados extraídos para facilitar manutenção
const footerData = {
  logo: {
    src: "/logo2.png",
    alt: "Chácara LD"
  },
  brand: {
    name: "CHÁCARA LD",
    tagline: "EVENTOS ÚNICOS",
    description: "Um espaço exclusivo em meio à natureza, onde momentos especiais se transformam em memórias eternas. Criando experiências únicas desde 2023."
  },
  sections: [
    {
      label: 'Navegação',
      links: [
        { title: 'Início', href: '#hero' },
        { title: 'Sobre', href: '#about' },
        { title: 'Serviços', href: '#services' },
        { title: 'Galeria', href: '#gallery' },
      ],
    },
    {
      label: 'Serviços',
      links: [
        { title: 'Casamentos', href: '#services' },
        { title: 'Eventos Corporativos', href: '#services' },
        { title: 'Aniversários', href: '#services' },
        { title: 'Formaturas', href: '#services' },
      ],
    },
    {
      label: 'Contato',
      links: [
        { title: 'Localização', href: '#location' },
        { title: 'Orçamento', href: '#location' },
        { title: 'Telefone', href: 'tel:+5545991033179' },
        { title: 'Email', href: 'mailto:Chacarald.contato@gmail.com' },
      ],
    },
    {
      label: 'Redes Sociais',
      links: [
        { title: 'Facebook', href: 'https://www.facebook.com/chacara.ld', icon: Facebook },
        { title: 'Instagram', href: 'https://www.instagram.com/chacara.ld', icon: Instagram },
        { title: 'Airbnb', href: 'https://www.airbnb.com.br/rooms/42228939?source_impression_id=p3_1602254220_UHVuos4fTf%252BaqIOw', icon: Home },
        { title: 'Email', href: 'mailto:Chacarald.contato@gmail.com', icon: Mail },
        { title: 'Telefone', href: 'tel:+5545991033179', icon: Phone },
      ],
    },
  ]
};

// Componente para o container animado
type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

const AnimatedContainer = ({ className, delay = 0.1, children }: ViewAnimationProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Componente para o logo e marca
const FooterBrand = ({ logo, brand }: { 
  logo: typeof footerData.logo; 
  brand: typeof footerData.brand; 
}) => (
  <AnimatedContainer className="flex items-start">
    <div className="flex items-center space-x-2">
      <div className="flex items-center justify-center">
        <img 
          src={logo.src} 
          alt={logo.alt} 
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-base sm:text-lg font-kanoky font-light tracking-wider gradient-text">
          {brand.name}
        </span>
      </div>
    </div>
  </AnimatedContainer>
);

// Componente para link individual
const FooterLink = ({ link }: { link: FooterLink }) => (
  <li>
    <a
      href={link.href}
      className="text-luxury hover:text-stone-800 inline-flex items-center transition-all duration-300 tracking-wide text-xs sm:text-sm"
    >
      {link.icon && <link.icon className="me-2 w-3 h-3 sm:w-4 sm:h-4" />}
      {link.title}
    </a>
  </li>
);

// Componente para seção de links
const FooterSection = ({ section, index }: { section: FooterSection; index: number }) => (
  <AnimatedContainer delay={0.1 + index * 0.1}>
    <div className="mb-4 md:mb-0">
      <h3 className="text-xs sm:text-sm font-light text-stone-800 tracking-wide mb-3 sm:mb-4">{section.label}</h3>
      <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
        {section.links.map((link) => (
          <FooterLink key={link.title} link={link} />
        ))}
      </ul>
    </div>
  </AnimatedContainer>
);

// Componente para a linha decorativa
const DecorativeLine = () => (
  <div 
    className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" 
    style={{ backgroundColor: '#5C3A2B' }} 
  />
);

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center justify-center rounded-t-3xl px-4 sm:px-6 py-4 sm:py-6 lg:py-8 bg-gradient-to-b from-stone-100 to-stone-200">
      <DecorativeLine />

      <div className="container mx-auto max-w-7xl w-full">
        {/* Logo e título centralizados para mobile */}
        <div className="flex justify-center -mb-4 sm:mb-0 sm:hidden">
          <FooterBrand logo={footerData.logo} brand={footerData.brand} />
        </div>

        {/* Layout desktop - logo à esquerda */}
        <div className="hidden sm:grid w-full gap-4 sm:gap-6 xl:grid-cols-5 xl:gap-6">
          <FooterBrand logo={footerData.logo} brand={footerData.brand} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 xl:col-span-4">
            {footerData.sections.map((section, index) => (
              <FooterSection key={section.label} section={section} index={index} />
            ))}
          </div>
        </div>

        {/* Layout mobile - duas colunas */}
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {footerData.sections.map((section, index) => (
            <FooterSection key={section.label} section={section} index={index} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
