import { Calendar, MessageSquare, CreditCard, PartyPopper } from 'lucide-react';
import { Timeline } from './ui/timeline';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { GetStartedButton } from '@/components/ui/get-started-button';

// Dados extraídos para facilitar manutenção
const bookingStepsData = {
  title: "Passos para Agendar",
  subtitle: "Transforme seu sonho em realidade em apenas 4 etapas.",
  steps: [
    {
      id: 1,
      title: "Agende uma Visita",
      icon: Calendar,
      description: "Conheça nossos espaços pessoalmente e tire suas dúvidas com nossa equipe especializada.",
      infoTitle: "O que você verá na visita:",
      infoItems: [
        "Todos os salões e áreas externas",
        "Estrutura de cozinha e serviços",
        "Opções de decoração e montagem",
        "Capacidade e layout dos espaços"
      ],
      buttonText: "Agendar Visita"
    },
    {
      id: 2,
      title: "Planejamento Personalizado",
      icon: MessageSquare,
      description: "Criamos um projeto único para seu evento, cuidando de cada detalhe.",
      infoTitle: "Nossos serviços incluem:",
      infoItems: [
        "Consultoria em decoração e ambientação",
        "Cardápio personalizado com chef",
        "Cronograma detalhado do evento",
        "Coordenação de fornecedores"
      ],
      buttonText: "Solicitar Orçamento"
    },
    {
      id: 3,
      title: "Reserva Confirmada",
      icon: CreditCard,
      description: "Finalize a reserva com condições flexíveis e garanta sua data especial.",
      infoTitle: "Opções de pagamento:",
      infoItems: [
        "Parcelamento em até 12x sem juros",
        "Desconto para pagamento à vista",
        "Entrada facilitada (30% do valor)",
        "Contrato flexível e transparente"
      ],
      buttonText: "Confirmar Reserva"
    },
    {
      id: 4,
      title: "Dia do Evento",
      icon: PartyPopper,
      description: "Relaxe e aproveite! Nossa equipe cuida de tudo para você celebrar.",
      infoTitle: "Nossa equipe garante:",
      infoItems: [
        "Montagem completa antes da chegada",
        "Coordenação durante todo o evento",
        "Suporte técnico e logístico",
        "Limpeza e desmontagem pós-evento"
      ],
      buttonText: "Entrar em Contato"
    }
  ]
};

// Componente para o cabeçalho da seção
const SectionHeader = ({ title, subtitle, isVisible }: { title: string; subtitle: string; isVisible: boolean }) => (
  <div className={`text-center mb-4 sm:mb-8 md:mb-12 transition-all duration-1000 relative z-10 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}>
    <div className="py-0">
      <h2 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-great-vibes font-normal leading-tight sm:leading-loose tracking-wide relative z-20"
        style={{ 
          background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          paddingTop: '0',
          paddingBottom: '0',
          lineHeight: '1.6',
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        {title}
      </h2>
    </div>
    <div className="w-full h-px bg-stone-300 mt-0 mb-2 sm:mb-4 md:mb-6 relative z-10"></div>
    
    <div className="text-center max-w-3xl mx-auto px-4">
      <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
        {subtitle}
      </p>
    </div>
  </div>
);

// Componente para o ícone do passo
const StepIcon = ({ Icon }: { Icon: any }) => (
  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg gradient-bg">
    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
  </div>
);

// Componente para a lista de informações
const InfoList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-stone-50 p-4 sm:p-6 rounded-lg border border-stone-200">
    <h4 className="font-medium text-stone-800 mb-2 sm:mb-3 text-sm sm:text-base">{title}</h4>
    <ul className="text-stone-600 space-y-1 sm:space-y-2 text-xs sm:text-sm">
      {items.map((item, index) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </div>
);

// Componente para o conteúdo de cada passo
const StepContent = ({ step }: { step: typeof bookingStepsData.steps[0] }) => {
  const Icon = step.icon;
  
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <StepIcon Icon={Icon} />
        <div className="text-xs sm:text-sm text-stone-600 font-light tracking-wide">
          PASSO {step.id.toString().padStart(2, '0')}
        </div>
      </div>
      
      <p className="text-stone-700 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
        {step.description}
      </p>
      
      <InfoList title={step.infoTitle} items={step.infoItems} />
      
      {/* Mostrar botão apenas no último passo (Celebrar) */}
      {step.id === 4 && <GetStartedButton text={step.buttonText} />}
    </div>
  );
};

const BookingStepsSection = () => {
  const { isVisible, ref } = useIntersectionObserver();

  // Transformar dados para o formato esperado pelo Timeline
  const timelineData = bookingStepsData.steps.map(step => ({
    title: step.title,
    content: <StepContent step={step} />
  }));

  return (
    <section ref={ref} id="booking-steps" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader 
          title={bookingStepsData.title}
          subtitle={bookingStepsData.subtitle}
          isVisible={isVisible}
        />
      </div>

      {/* Timeline Component with custom styling */}
      <div className={`timeline-custom-styles transition-all duration-1000 overflow-hidden relative z-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: '300ms' }}>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default BookingStepsSection;
