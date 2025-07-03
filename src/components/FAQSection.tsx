
import { Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
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
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-sm text-luxury tracking-[0.3em] uppercase">Perguntas Frequentes</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-800 text-spaced mb-6">
            TIRE SUAS DÚVIDAS
          </h2>
          <p className="text-xl text-luxury max-w-3xl mx-auto leading-relaxed">
            Encontre respostas para as principais dúvidas sobre nossos serviços, 
            políticas e como tornar seu evento único na ChácaraLD.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <span className="text-lg font-light text-stone-800 tracking-wide pr-4 group-hover:text-amber-700 transition-colors duration-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-luxury leading-relaxed pt-2 border-t border-stone-200/50">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-luxury mb-6">Não encontrou a resposta que procurava?</p>
          <button className="neuro-button px-10 py-4 rounded-full text-stone-700 font-medium tracking-wide hover:shadow-xl transition-all duration-500 group">
            <span className="group-hover:tracking-wider transition-all duration-300">
              Fale Conosco
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
