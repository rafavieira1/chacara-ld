
import { FaqSection } from './ui/faq';
import { useState, useEffect, useRef } from 'react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const faqs = [
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
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-6xl md:text-7xl lg:text-8xl font-kanoky font-light leading-none tracking-wider"
            style={{ 
              background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block'
            }}
          >
            FAQ
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Encontre respostas para as principais dúvidas sobre nossos serviços, 
              políticas e como tornar seu evento único na ChácaraLD.
            </p>
          </div>
        </div>

        {/* FAQ Component */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '300ms' }}>
        <FaqSection
          title=""
          items={faqs}
          contactInfo={{
            title: "Não encontrou a resposta que procurava?",
            description: "Nossa equipe está pronta para esclarecer todas as suas dúvidas",
            buttonText: "Fale Conosco",
            onContact: () => {
              // Scroll para seção de contato
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="py-0 bg-transparent"
        />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
