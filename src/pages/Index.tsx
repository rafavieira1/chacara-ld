
import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';

// Lazy loading dos componentes
const HeroSection = lazy(() => import('../components/HeroSection'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const GallerySection = lazy(() => import('../components/GallerySection'));
const VideoTourSection = lazy(() => import('../components/VideoTourSection'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const LocationSection = lazy(() => import('../components/LocationSection'));
const BookingStepsSection = lazy(() => import('../components/BookingStepsSection'));
const FAQSection = lazy(() => import('../components/FAQSection'));
const CTASection = lazy(() => import('../components/CTASection'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const Footer = lazy(() => import('../components/Footer'));

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-stone-50 via-stone-100/30 to-stone-100 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-stone-600"></div>
          </div>
        }>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <VideoTourSection />
          <ServicesSection />
          <TestimonialsSection />
          <LocationSection />
          <BookingStepsSection />
          <FAQSection />
          <CTASection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
