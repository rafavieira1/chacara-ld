# 🌿 ChácaraLD - Espaço Premium para Eventos

> Um site elegante e sofisticado para um espaço exclusivo de eventos em meio à natureza

![ChácaraLD Banner](https://img.shields.io/badge/ChácaraLD-Espaço%20Premium-8B6355?style=for-the-badge&logo=leaf&logoColor=white)

## 📋 Sobre o Projeto

A **ChácaraLD** é um espaço premium para eventos localizado em meio à natureza, oferecendo cenários únicos para casamentos, celebrações corporativas e momentos especiais. Este website foi desenvolvido para apresentar os serviços, ambientes e facilitar o contato com potenciais clientes.

### ✨ Características Principais

- **Design Elegante**: Interface moderna com tipografia cursiva sofisticada
- **Totalmente Responsivo**: Otimizado para todos os dispositivos com mobile-first approach
- **Performance Otimizada**: Carregamento rápido e animações fluidas
- **Experiência Imersiva**: Galeria interativa com lightbox e tour virtual
- **Sistema de Reservas**: Processo simplificado em etapas
- **Espaçamento Padronizado**: Design system consistente em todas as seções

## 🎨 Design System

### Tipografia
- **Títulos**: Great Vibes (fonte cursiva elegante)
- **Corpo**: Inter (tipografia moderna e limpa)
- **Fonte Personalizada**: Kanoky (elementos especiais)

### Paleta de Cores
- **Primária**: Gradiente marrom `#5C3A2B` → `#8B6355`
- **Neutros**: Tons de pedra (`stone-*`)
- **Acentos**: Elementos em branco com transparência

## 🚀 Funcionalidades

### 📱 Seções Principais
- **Hero Section**: Apresentação impactante com logo e vídeo de fundo
- **Sobre Nós**: História e diferenciais da chácara com layout responsivo
- **Serviços**: Abas interativas com casamentos, eventos corporativos e celebrações
- **Galeria**: Layout em sticky scroll com lightbox responsivo
- **Tour Virtual**: Player de vídeo integrado com controles otimizados
- **Depoimentos**: Experiências de clientes com navegação mobile
- **FAQ**: Perguntas frequentes com accordion (oculto no mobile)
- **Processo de Reserva**: Timeline interativa responsiva
- **Contato**: Informações e formulário com layout otimizado
- **CTA**: Seção de call-to-action com espaçamento padronizado

### 🔧 Componentes Técnicos
- **Lazy Loading**: Carregamento otimizado de imagens
- **Intersection Observer**: Animações baseadas no scroll
- **Responsive Design**: Mobile-first approach com breakpoints otimizados
- **Sticky Navigation**: Menu fixo responsivo
- **Image Preloading**: Cache inteligente de imagens
- **Lightbox Responsivo**: Visualizador de imagens otimizado para mobile
- **Timeline Interativa**: Efeitos de scroll em dispositivos móveis

## 🛠 Tecnologias Utilizadas

```json
{
  "frontend": ["React", "TypeScript", "Vite"],
  "styling": ["Tailwind CSS", "shadcn/ui"],
  "animations": ["CSS Transitions", "Transform animations", "Framer Motion"],
  "icons": ["Lucide React"],
  "fonts": ["Google Fonts", "Great Vibes", "Inter", "Kanoky"],
  "optimization": ["Image preloading", "Lazy loading", "Intersection Observer"]
}
```

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITÓRIO>

# Navegue até o diretório
cd chacara-ld

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Acesse no navegador
# http://localhost:5173
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes base (shadcn/ui)
│   ├── magicui/         # Componentes especiais
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── GallerySection.tsx
│   ├── VideoTourSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── CTASection.tsx
│   ├── BookingStepsSection.tsx
│   ├── LocationSection.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/               # Páginas da aplicação
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/               # Hooks customizados
│   ├── use-intersection-observer.ts
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                 # Utilitários
└── styles/             # Estilos globais

public/
├── images/             # Imagens estáticas
├── fonts/              # Fontes personalizadas
└── videos/             # Conteúdo multimídia
```

## ⚡ Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Image Optimization**: WebP e lazy loading com preload inteligente
- **CSS Optimization**: Tailwind CSS com purge otimizado
- **Bundle Size**: Otimizado com Vite
- **Font Loading**: Estratégia de carregamento otimizada
- **Mobile Performance**: Carregamento otimizado para dispositivos móveis

## 🎯 Melhorias Recentes

### ✅ Responsividade Aprimorada
- Espaçamento padronizado entre títulos e barras separadoras
- Layout otimizado para todas as seções
- Navegação mobile melhorada

### ✅ Experiência do Usuário
- Lightbox responsivo com controles touch-friendly
- Timeline interativa funcionando em mobile
- Botões de serviços otimizados para mobile

### ✅ Design System
- Padronização de espaçamentos em todas as seções
- Gradientes consistentes em títulos
- Layout harmonioso entre seções

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**ChácaraLD**
- Website: [chacarald.com.br](https://chacarald.com.br)
- Email: chacarald.contato@gmail.com
- Telefone: +55 45 99103-3179
- WhatsApp: +55 45 99103-3179
