import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { SECTION_SPACING_PX } from './constants/spacing';

// Page imports
import { Home } from './pages/home/Home';
import { Projects } from './pages/projects/Projects';
import { Blog } from './pages/blog/Blog';
import { Academia } from './pages/academia/Academia';
import { CV } from './pages/cv/CV';
import { YouTube } from './pages/youtube/YouTube';
import { Contact } from './pages/contact/Contact';

// Section wrapper component with animations and spacing
function Section({ sectionId, children, isFirst = false }: { sectionId: string; children: React.ReactNode; isFirst?: boolean }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });
  
  return (
    <div 
      id={sectionId} 
      ref={ref}
      className={`section-snap section-alternate fade-in-section ${
        isVisible ? 'is-visible' : ''
      }`}
      style={!isFirst ? { marginBottom: `${SECTION_SPACING_PX}px` } : {}}
    >
      {children}
    </div>
  );
}

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Initialize theme - dark mode by default
    if (lightMode) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [lightMode]);

  useEffect(() => {
    // Show/hide scroll to top button and track active section
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Detect active section based on scroll position
      const sections = ['home', 'cv', 'blog', 'academia', 'youtube', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <Navigation
        lightMode={lightMode}
        toggleLightMode={toggleLightMode}
        activeSection={activeSection}
      />

      {/* Command Palette */}
      <CommandPalette
        lightMode={lightMode}
        toggleLightMode={toggleLightMode}
      />

      {/* Main Content - All sections stacked */}
      <main>
        <Section sectionId="home" isFirst={true}>
          <Home />
        </Section>
        <div style={{ marginBottom: `${SECTION_SPACING_PX}px` }} />
        <Section sectionId="cv">
          <CV />
        </Section>
        <Section sectionId="blog">
          <Blog />
        </Section>
        <Section sectionId="academia">
          <Academia />
        </Section>
        <Section sectionId="youtube">
          <YouTube />
        </Section>
        <Section sectionId="projects">
          <Projects />
        </Section>
        <Section sectionId="contact">
          <Contact />
        </Section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-40">
          <Button
            size="icon"
            onClick={scrollToTop}
            className="h-12 w-12 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;
