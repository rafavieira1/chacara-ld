const HeroSection = () => {

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url('/background.jpg')`,
        }}
      ></div>

      

       {/* Centered Content */}
       <div className="absolute inset-0 z-10">
         {/* Logo positioned above center */}
         <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full mt-12">
           <img 
             src="/logo2.png" 
             alt="Logo Chácara LD" 
             className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
           />
         </div>
         
         {/* Text - Exactly centered */}
         <div className="absolute inset-0 flex items-center justify-center">
           <h1 
             className="text-6xl md:text-8xl lg:text-9xl drop-shadow-2xl font-1769 text-center pt-4"
             style={{ 
               background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               backgroundClip: 'text',
               display: 'inline-block',
               lineHeight: '1.2'
             }}
           >
             Chácara LD
           </h1>
         </div>

         {/* Bottom Text */}
         <div className="absolute bottom-4 left-0 right-0 flex justify-center">
           <p className="text-lg md:text-xl lg:text-2xl font-1769 tracking-widest uppercase text-center text-white drop-shadow-lg">
             Espaço para eventos
           </p>
         </div>
       </div>
    </section>
  );
};

export default HeroSection;
