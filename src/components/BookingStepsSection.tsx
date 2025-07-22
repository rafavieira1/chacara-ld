import { Calendar, MessageSquare, CreditCard, PartyPopper } from 'lucide-react';
import { Timeline } from './ui/timeline';

const BookingStepsSection = () => {
  const data = [
    {
      title: "Agende uma Visita",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm text-stone-600 font-light tracking-wide">PASSO 01</div>
          </div>
          
          <p className="text-stone-700 leading-relaxed text-base mb-6">
            Conheça pessoalmente nossos espaços e tire todas as suas dúvidas com nossa equipe especializada. 
            Durante a visita, você poderá ver todos os ambientes, conhecer nossa estrutura completa e 
            entender como podemos personalizar o espaço para seu evento.
          </p>
          
          <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
            <h4 className="font-medium text-stone-800 mb-3">O que você verá na visita:</h4>
            <ul className="text-stone-600 space-y-2 text-sm">
              <li>• Todos os salões e áreas externas</li>
              <li>• Estrutura de cozinha e serviços</li>
              <li>• Opções de decoração e montagem</li>
              <li>• Capacidade e layout dos espaços</li>
            </ul>
          </div>
          
          <button className="px-8 py-3 rounded-full text-white font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
            Agendar Visita
          </button>
        </div>
      ),
    },
    {
      title: "Planejamento Personalizado", 
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm text-stone-600 font-light tracking-wide">PASSO 02</div>
          </div>
          
          <p className="text-stone-700 leading-relaxed text-base mb-6">
            Desenvolvemos um projeto único para seu evento, cuidando de cada detalhe segundo suas preferências.
            Nossa equipe especializada trabalha junto com você para criar uma experiência memorável e personalizada.
          </p>
          
          <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
            <h4 className="font-medium text-stone-800 mb-3">Nossos serviços incluem:</h4>
            <ul className="text-stone-600 space-y-2 text-sm">
              <li>• Consultoria em decoração e ambientação</li>
              <li>• Cardápio personalizado com chef</li>
              <li>• Cronograma detalhado do evento</li>
              <li>• Coordenação de fornecedores</li>
            </ul>
          </div>
          
          <button className="px-8 py-3 rounded-full text-white font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
            Solicitar Orçamento
          </button>
        </div>
      ),
    },
    {
      title: "Reserva Confirmada",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm text-stone-600 font-light tracking-wide">PASSO 03</div>
          </div>
          
          <p className="text-stone-700 leading-relaxed text-base mb-6">
            Finalize a reserva com condições flexíveis de pagamento e garanta sua data especial.
            Oferecemos diversas opções de pagamento para facilitar a realização do seu sonho.
          </p>
          
          <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
            <h4 className="font-medium text-stone-800 mb-3">Opções de pagamento:</h4>
            <ul className="text-stone-600 space-y-2 text-sm">
              <li>• Parcelamento em até 12x sem juros</li>
              <li>• Desconto para pagamento à vista</li>
              <li>• Entrada facilitada (30% do valor)</li>
              <li>• Contrato flexível e transparente</li>
            </ul>
          </div>
          
          <button className="px-8 py-3 rounded-full text-white font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
            Confirmar Reserva
          </button>
        </div>
      ),
    },
    {
      title: "Dia do Evento",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
              <PartyPopper className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm text-stone-600 font-light tracking-wide">PASSO 04</div>
          </div>
          
          <p className="text-stone-700 leading-relaxed text-base mb-6">
            Relaxe e aproveite! Nossa equipe cuida de tudo para que você viva momentos inesquecíveis.
            No dia do seu evento, você só precisa se preocupar em celebrar com seus convidados.
          </p>
          
          <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
            <h4 className="font-medium text-stone-800 mb-3">Nossa equipe garante:</h4>
            <ul className="text-stone-600 space-y-2 text-sm">
              <li>• Montagem completa antes da chegada</li>
              <li>• Coordenação durante todo o evento</li>
              <li>• Suporte técnico e logístico</li>
              <li>• Limpeza e desmontagem pós-evento</li>
            </ul>
          </div>
          
          <button className="px-8 py-3 rounded-full text-white font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
            Celebrar
          </button>
        </div>
      ),
    }
  ];

  return (
    <section id="booking-steps" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-6xl md:text-7xl lg:text-8xl font-kanoky font-light leading-none tracking-wider mb-8"
            style={{ 
              background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block'
            }}
          >
            PASSOS PARA AGENDAR
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-stone-700 leading-relaxed text-lg">
              Transformar seu sonho em realidade é mais fácil do que você imagina. 
              Siga nosso processo personalizado em 4 etapas simples.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Component with custom styling */}
      <div className="timeline-custom-styles">
        <Timeline data={data} />
      </div>

      {/* Final CTA */}
      <div className="container mx-auto max-w-7xl px-6 mt-16">
        <div className="text-center">
          <div className="bg-stone-50 rounded-lg p-8 shadow-2xl max-w-2xl mx-auto border border-stone-200">
            <h3 className="text-2xl font-light text-stone-800 mb-4 tracking-wide">
              Pronto para começar?
            </h3>
            <p className="text-stone-700 mb-6 leading-relaxed">
              Nossa equipe está pronta para tornar seu evento inesquecível
            </p>
            <button className="px-12 py-4 rounded-full text-white font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-500" style={{ background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)' }}>
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingStepsSection;
