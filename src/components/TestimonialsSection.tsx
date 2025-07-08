import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Marina & Carlos",
      event: "Casamento",
      date: "Setembro 2023",
      text: "A ChácaraLD foi o cenário perfeito para nosso casamento dos sonhos. Cada detalhe foi cuidado com carinho pela equipe, e nossos convidados não pararam de elogiar a beleza do local.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Empresa TechCorp",
      event: "Evento Corporativo",
      date: "Outubro 2023",
      text: "Realizamos nossa confraternização anual na ChácaraLD e foi um sucesso absoluto. A estrutura é impecável e o atendimento superou todas as expectativas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Paula",
      event: "Aniversário de 50 anos",
      date: "Novembro 2023",
      text: "Minha festa de 50 anos na ChácaraLD foi inesquecível! O ambiente acolhedor e a natureza exuberante criaram uma atmosfera mágica que meus amigos ainda comentam.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c169bb6b?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <div className="text-center mb-16">
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
            DEPOIMENTOS
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Descubra o que nossos clientes falam sobre suas experiências únicas na ChácaraLD 
              e como tornamos seus momentos especiais ainda mais memoráveis.
            </p>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <div className="rounded-lg p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-amber-600/20">
              <Quote className="w-16 h-16" />
            </div>
            
            {/* Stars */}
            <div className="flex justify-center mb-8">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed mb-8 max-w-4xl mx-auto">
              "{testimonials[activeTestimonial].text}"
            </blockquote>
            
            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <div className="text-left">
                <div className="text-xl font-light text-stone-800 tracking-wide">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-luxury text-sm">
                  {testimonials[activeTestimonial].event} • {testimonials[activeTestimonial].date}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'bg-amber-600 shadow-lg' 
                  : 'bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`rounded-lg p-6 cursor-pointer transition-all duration-500 hover:shadow-2xl shadow-xl ${
                index === activeTestimonial ? 'ring-2 ring-amber-600/50' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-light text-stone-800">{testimonial.name}</div>
                  <div className="text-xs text-luxury">{testimonial.event}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-sm text-luxury leading-relaxed line-clamp-3">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
