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
  <div className={`text-center mb-4 transition-all duration-1000 relative z-10 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}>
    <div className="py-0">
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-great-vibes font-normal leading-loose tracking-wide relative z-20 gradient-text">
        {title}
      </h2>
    </div>
    <div className="w-full h-px bg-stone-300 mt-0 mb-2 relative z-10"></div>
    
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-stone-700 leading-relaxed text-lg">
        {subtitle}
      </p>
    </div>
  </div>
);

// Componente para o ícone do passo
const StepIcon = ({ Icon }: { Icon: any }) => (
  <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg gradient-bg">
    <Icon className="w-6 h-6 text-white" />
  </div>
);

// Componente para a lista de informações
const InfoList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
    <h4 className="font-medium text-stone-800 mb-3">{title}</h4>
    <ul className="text-stone-600 space-y-2 text-sm">
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
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <StepIcon Icon={Icon} />
        <div className="text-sm text-stone-600 font-light tracking-wide">
          PASSO {step.id.toString().padStart(2, '0')}
        </div>
      </div>
      
      <p className="text-stone-700 leading-relaxed text-base mb-6">
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
    <section ref={ref} id="booking-steps" className="py-2 px-6">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader 
          title={bookingStepsData.title}
          subtitle={bookingStepsData.subtitle}
          isVisible={isVisible}
        />
      </div>

      {/* Timeline Component with custom styling */}
      <div className={`timeline-custom-styles transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: '300ms' }}>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default BookingStepsSection;
