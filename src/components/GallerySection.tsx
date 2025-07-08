import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      alt: "Vista panorâmica da chácara",
      category: "Paisagem"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      alt: "Área de eventos ao ar livre",
      category: "Eventos"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      alt: "Cerimônia de casamento",
      category: "Casamentos"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      alt: "Salão principal",
      category: "Estrutura"
    },
    {
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      alt: "Área gourmet",
      category: "Gastronomia"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      alt: "Jardins e áreas verdes",
      category: "Natureza"
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

        {/* Gallery Grid - Custom Layout */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          {/* Large image - Top Left */}
          <div 
            className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer"
            onClick={() => setSelectedImage(0)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-80 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[0].category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Medium image - Top Center */}
          <div 
            className="col-span-12 md:col-span-6 lg:col-span-5 group cursor-pointer"
            onClick={() => setSelectedImage(1)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-80 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[1].category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small image - Top Right */}
          <div 
            className="col-span-12 md:col-span-6 lg:col-span-3 group cursor-pointer"
            onClick={() => setSelectedImage(2)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-80 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[2].category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Medium image - Bottom Left */}
          <div 
            className="col-span-12 md:col-span-6 lg:col-span-3 group cursor-pointer"
            onClick={() => setSelectedImage(3)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-52 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[3].category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small image - Bottom Center */}
          <div 
            className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer"
            onClick={() => setSelectedImage(4)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-52 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[4].category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Medium image - Bottom Right */}
          <div 
            className="col-span-12 md:col-span-6 lg:col-span-5 group cursor-pointer"
            onClick={() => setSelectedImage(5)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={images[5].src}
                alt={images[5].alt}
                className="w-full h-52 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-light tracking-wide">{images[5].category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-300"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-300 glass-card p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-300 glass-card p-2 rounded-full"
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
