import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GetStartedButton } from '@/components/ui/get-started-button';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=90",
      alt: "Vista panorâmica da chácara",
      category: "Paisagem"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=90",
      alt: "Área de eventos ao ar livre",
      category: "Eventos"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=90",
      alt: "Cerimônia de casamento",
      category: "Casamentos"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=90",
      alt: "Salão principal",
      category: "Estrutura"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=90",
      alt: "Área gourmet",
      category: "Gastronomia"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=90",
      alt: "Jardins e áreas verdes",
      category: "Natureza"
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=90",
      alt: "Vista externa da chácara",
      category: "Paisagem"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1200&q=90",
      alt: "Área de cerimônias",
      category: "Eventos"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1200&q=90",
      alt: "Recepção de casamento",
      category: "Casamentos"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=90",
      alt: "Área interna do salão",
      category: "Estrutura"
    },
    {
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=90",
      alt: "Mesa de jantar gourmet",
      category: "Gastronomia"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=90",
      alt: "Paisagem natural",
      category: "Natureza"
    },
    {
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=90",
      alt: "Área externa com mesas",
      category: "Eventos"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6">
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
            GALERIA
          </h2>
          <div className="w-full h-px bg-stone-300 mt-8 mb-8"></div>
          
          {/* Description Text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-luxury leading-relaxed text-lg">
              Descubra os ambientes únicos da ChácaraLD e inspire-se para criar 
              o seu evento dos sonhos em meio à natureza. Cada espaço foi cuidadosamente 
              planejado para proporcionar momentos inesquecíveis.
            </p>
          </div>
        </div>

        {/* Sticky Scroll Gallery */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          {/* Left Column */}
          <div className="grid gap-4 col-span-12 md:col-span-4">
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(0)}>
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="transition-all duration-500 w-full h-96 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[0].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(1)}>
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="transition-all duration-500 w-full h-80 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[1].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(8)}>
              <img
                src={images[8].src}
                alt={images[8].alt}
                className="transition-all duration-500 w-full h-72 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[8].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(9)}>
              <img
                src={images[9].src}
                alt={images[9].alt}
                className="transition-all duration-500 w-full h-88 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[9].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(10)}>
              <img
                src={images[10].src}
                alt={images[10].alt}
                className="transition-all duration-500 w-full h-64 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[10].category}</span>
                </div>
              </div>
            </figure>
          </div>

          {/* Center Column - Sticky */}
          <div className="sticky top-0 h-screen w-full col-span-12 md:col-span-4 gap-4 grid grid-rows-3">
            <figure className="w-full h-full group cursor-pointer relative" onClick={() => setSelectedImage(2)}>
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="transition-all duration-500 h-full w-full align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[2].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full h-full group cursor-pointer relative" onClick={() => setSelectedImage(3)}>
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="transition-all duration-500 h-full w-full align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[3].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full h-full group cursor-pointer relative" onClick={() => setSelectedImage(4)}>
              <img
                src={images[4].src}
                alt={images[4].alt}
                className="transition-all duration-500 h-full w-full align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[4].category}</span>
                </div>
              </div>
            </figure>
          </div>

          {/* Right Column */}
          <div className="grid gap-4 col-span-12 md:col-span-4">
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(5)}>
              <img
                src={images[5].src}
                alt={images[5].alt}
                className="transition-all duration-500 w-full h-72 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[5].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(6)}>
              <img
                src={images[6].src}
                alt={images[6].alt}
                className="transition-all duration-500 w-full h-80 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[6].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(11)}>
              <img
                src={images[11].src}
                alt={images[11].alt}
                className="transition-all duration-500 w-full h-64 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[11].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(12)}>
              <img
                src={images[12].src}
                alt={images[12].alt}
                className="transition-all duration-500 w-full h-88 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[12].category}</span>
                </div>
              </div>
            </figure>
            <figure className="w-full group cursor-pointer" onClick={() => setSelectedImage(7)}>
              <img
                src={images[7].src}
                alt={images[7].alt}
                className="transition-all duration-500 w-full h-96 align-bottom object-cover rounded-lg shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[7].category}</span>
                </div>
              </div>
            </figure>
          </div>
        </div>

        {/* Ver mais button */}
        <div className="text-center">
          <GetStartedButton onClick={() => setSelectedImage(0)} />
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-stone-300 transition-colors duration-300"
            >
              <X size={32} />
            </button>
            
            <img 
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors duration-300 glass-card p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors duration-300 glass-card p-2 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {selectedImage + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
