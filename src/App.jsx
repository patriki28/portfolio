import ContactMe from './components/sections/ContactMe';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import { AnimateSection } from './components/ui/animate-section';
import { BottomNav } from './components/ui/bottom-nav';
import { Footer } from './components/ui/footer';

export default function App() {
  return (
    <div className="container mx-auto max-w-5xl p-4">
      <AnimateSection>
        <Hero />
      </AnimateSection>
      <AnimateSection>
        <Projects />
      </AnimateSection>
      <AnimateSection>
        <ContactMe />
      </AnimateSection>
      <AnimateSection>
        <Footer />
      </AnimateSection>
      <BottomNav />
    </div>
  );
}
