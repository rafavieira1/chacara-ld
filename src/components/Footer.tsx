'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
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
      { title: 'Localização', href: '#contact' },
      { title: 'Orçamento', href: '#contact' },
      { title: 'Telefone', href: 'tel:+5511999999999' },
      { title: 'Email', href: 'mailto:contato@chacarald.com.br' },
    ],
  },
  {
    label: 'Redes Sociais',
    links: [
      { title: 'Facebook', href: '#', icon: Facebook },
      { title: 'Instagram', href: '#', icon: Instagram },
      { title: 'Email', href: 'mailto:contato@chacarald.com.br', icon: Mail },
      { title: 'Telefone', href: 'tel:+5511999999999', icon: Phone },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center justify-center rounded-t-3xl px-6 py-12 lg:py-16 bg-gradient-to-b from-stone-100 to-stone-200">
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" style={{ backgroundColor: '#5C3A2B' }} />

      <div className="container mx-auto max-w-7xl grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center justify-center">
              <img 
                src="/logo2.png" 
                alt="Chácara LD" 
                className="w-16 h-16 object-contain"
              />
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
                CHÁCARA LD
              </span>
              <span className="text-xs text-stone-600/80 tracking-widest">EVENTOS ÚNICOS</span>
            </div>
          </div>
          <p className="text-luxury leading-relaxed text-sm max-w-md">
            Um espaço exclusivo em meio à natureza, onde momentos especiais se 
            transformam em memórias eternas. Criando experiências únicas desde 2023.
          </p>
          <p className="text-luxury text-xs mt-8">
            © {new Date().getFullYear()} ChácaraLD. Todos os direitos reservados.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-sm font-light text-stone-800 tracking-wide mb-4">{section.label}</h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="text-luxury hover:text-stone-800 inline-flex items-center transition-all duration-300 tracking-wide"
                      >
                        {link.icon && <link.icon className="me-2 w-4 h-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
};

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
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
}

export default Footer;
