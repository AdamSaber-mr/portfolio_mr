import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ThemeProvider } from './components/ThemeContext';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 relative">
        <Navigation />
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}