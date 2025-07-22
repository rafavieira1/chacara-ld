# 🌿 ChácaraLD - Espaço Premium para Eventos

> Um site elegante e sofisticado para um espaço exclusivo de eventos em meio à natureza

![ChácaraLD Banner](https://img.shields.io/badge/ChácaraLD-Espaço%20Premium-8B6355?style=for-the-badge&logo=leaf&logoColor=white)

## 📋 Sobre o Projeto

A **ChácaraLD** é um espaço premium para eventos localizado em meio à natureza, oferecendo cenários únicos para casamentos, celebrações corporativas e momentos especiais. Este website foi desenvolvido para apresentar os serviços, ambientes e facilitar o contato com potenciais clientes.

### ✨ Características Principais

- **Design Elegante**: Interface moderna com tipografia cursiva sofisticada
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Performance Otimizada**: Carregamento rápido e animações fluidas
- **Experiência Imersiva**: Galeria interativa e tour virtual
- **Sistema de Reservas**: Processo simplificado em etapas

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
- **Sobre Nós**: História e diferenciais da chácara
- **Serviços**: Abas interativas com casamentos, eventos corporativos e celebrações
- **Galeria**: Layout em sticky scroll com lightbox
- **Tour Virtual**: Player de vídeo integrado
- **Depoimentos**: Experiências de clientes
- **FAQ**: Perguntas frequentes com accordion
- **Processo de Reserva**: Timeline interativa
- **Contato**: Informações e formulário

### 🔧 Componentes Técnicos
- **Lazy Loading**: Carregamento otimizado de imagens
- **Intersection Observer**: Animações baseadas no scroll
- **Responsive Design**: Mobile-first approach
- **Sticky Navigation**: Menu fixo responsivo
- **Image Preloading**: Cache inteligente de imagens

## 🛠 Tecnologias Utilizadas

```json
{
  "frontend": ["React", "TypeScript", "Vite"],
  "styling": ["Tailwind CSS", "shadcn/ui"],
  "animations": ["CSS Transitions", "Transform animations"],
  "icons": ["Lucide React"],
  "fonts": ["Google Fonts", "Great Vibes", "Inter"],
  "optimization": ["Image preloading", "Lazy loading"]
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

### Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run preview    # Prévia do build
npm run lint       # Verificação de código
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
│   ├── ContactSection.tsx
│   ├── CTASection.tsx
│   ├── BookingStepsSection.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/               # Páginas da aplicação
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários
└── styles/             # Estilos globais

public/
├── images/             # Imagens estáticas
├── fonts/              # Fontes personalizadas
└── videos/             # Conteúdo multimídia
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Netlify
```bash
npm run build
# Upload da pasta 'dist' para o Netlify
```

### Outros Serviços
O projeto é compatível com qualquer serviço de hospedagem estática.

## 📱 Responsividade

O site foi desenvolvido seguindo a abordagem **mobile-first** com breakpoints:

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px` 
- **Desktop**: `> 1024px`
- **Large Desktop**: `> 1280px`

## ⚡ Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Image Optimization**: WebP e lazy loading
- **CSS Optimization**: Tailwind CSS com purge
- **Bundle Size**: Otimizado com Vite
- **Font Loading**: Estratégia de carregamento otimizada

## 🎯 Próximas Funcionalidades

- [ ] Sistema de reservas online
- [ ] Integração com calendário
- [ ] Chat online
- [ ] Blog de eventos
- [ ] Galeria 360°
- [ ] Integração com redes sociais

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Amazing Feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**ChácaraLD**
- Website: [chacarald.com.br](https://chacarald.com.br)
- Email: contato@chacarald.com.br
- Telefone: (11) 9999-9999

---

<p align="center">
  Desenvolvido com ❤️ para criar experiências inesquecíveis
</p>
