import Hero from "./components/Hero";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Navbar from "./components/Navbar";
import AppBackground from "./components/AppBackground";
import ServicesSection from "./components/ServicesSection";


export default function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
        <AppBackground>
      <Navbar />
      <Hero />
      <TestimonialsCarousel/>
      </AppBackground>
      <ServicesSection />
    </main>
  );
}
