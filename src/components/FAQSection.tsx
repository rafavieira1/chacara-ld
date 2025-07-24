
import { FaqSection } from './ui/faq';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Dados extraídos para facilitar manutenção
const faqData = {
  title: "Perguntas Frequentes",
  subtitle: "Encontre respostas para as principais dúvidas sobre nossos serviços, políticas e como tornar seu evento único na ChácaraLD.",
  faqs: [
    {
      question: "Qual é a capacidade máxima do espaço?",
      answer: "Nossa chácara comporta confortavelmente até 300 convidados em eventos ao ar livre e 200 convidados em eventos no salão coberto. Podemos adaptar a configuração conforme suas necessidades específicas."
    },
    {
      question: "Vocês oferecem serviços de decoração?",
      answer: "Sim! Temos uma equipe especializada em decoração que trabalha com diversos estilos, desde cerimônias românticas até eventos corporativos elegantes. Também permitimos decoradores externos de sua preferência."
    },
    {
      question: "É possível realizar cerimônias religiosas no local?",
      answer: "Absolutamente! Nosso espaço é ideal para cerimônias ao ar livre de todas as religiões. Temos uma área específica para cerimônias com vista privilegiada e acústica natural perfeita."
    },
    {
      question: "Qual é a política de cancelamento?",
      answer: "Oferecemos condições flexíveis de cancelamento. Até 90 dias antes do evento, reembolsamos 90% do valor pago. Entre 30-90 dias, 70% do valor. Para cancelamentos com menos de 30 dias, analisamos cada caso individualmente."
    },
    {
      question: "Vocês têm estacionamento no local?",
      answer: "Sim, temos estacionamento gratuito para até 150 veículos, com área coberta para 50 carros. Também oferecemos serviço de valet opcional para maior comodidade dos seus convidados."
    },
    {
      question: "É possível fazer uma visita antes de contratar?",
      answer: "Claro! Recomendamos fortemente que você conheça nosso espaço pessoalmente. Agende uma visita através do nosso site ou telefone. As visitas são gratuitas e podem ser realizadas de terça a domingo."
    },
    {
      question: "Vocês trabalham com fornecedores externos?",
      answer: "Sim, temos parceria com diversos fornecedores qualificados (buffet, som, fotografia, etc.) mas você também pode trazer seus fornecedores de confiança, desde que sigam nossas diretrizes de segurança."
    },
    {
      question: "Qual é o horário de funcionamento para eventos?",
      answer: "Nossos eventos podem ocorrer das 8h às 2h do dia seguinte. Para eventos que se estendem além desse horário, aplicamos uma taxa adicional. Também oferecemos flexibilidade para montagem no dia anterior."
    }
  ],
  contactInfo: {
    title: "Não encontrou a resposta que procurava?",
    description: "Nossa equipe está pronta para esclarecer todas as suas dúvidas",
    buttonText: "Fale Conosco",
    onContact: () => {
      // Scroll para seção de localização
      document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// Componente para o cabeçalho da seção
const SectionHeader = ({ title, subtitle, isVisible }: { title: string; subtitle: string; isVisible: boolean }) => (
  <div className={`text-center mb-16 transition-all duration-1000 relative z-10 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}>
    <div className="py-8">
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-great-vibes font-normal leading-loose tracking-wide relative z-20 gradient-text">
        {title}
      </h2>
    </div>
    <div className="w-full h-px bg-stone-300 mt-2 mb-8 relative z-10"></div>
    
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-luxury leading-relaxed text-lg">
        {subtitle}
      </p>
    </div>
  </div>
);

// Componente para a seção FAQ
const FAQContent = ({ faqs, contactInfo, isVisible }: { 
  faqs: typeof faqData.faqs; 
  contactInfo: typeof faqData.contactInfo; 
  isVisible: boolean 
}) => (
  <div className={`transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
  style={{ transitionDelay: '300ms' }}>
    <FaqSection
      title=""
      items={faqs}
      contactInfo={contactInfo}
      className="py-0 bg-transparent"
    />
  </div>
);

const FAQSection = () => {
  const { isVisible, ref } = useIntersectionObserver();

  return (
    <section ref={ref} id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader 
          title={faqData.title}
          subtitle={faqData.subtitle}
          isVisible={isVisible}
        />

        <FAQContent 
          faqs={faqData.faqs}
          contactInfo={faqData.contactInfo}
          isVisible={isVisible}
        />
      </div>
    </section>
  );
};

export default FAQSection;
