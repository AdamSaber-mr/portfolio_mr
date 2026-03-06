import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { useActiveSection } from './hooks/useActiveSection';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Over Mij', id: 'about' },
    { label: 'Mijn Reis', id: 'journey' },
    { label: 'Projecten', id: 'projects' },
    { label: 'Ervaring', id: 'experience' },
    { label: 'Vaardigheden', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-slate-900/30 border-b border-white/20 dark:border-slate-700/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Adam Saber
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2.5 py-1.5 text-xs lg:text-sm transition-colors duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-blue-50 dark:bg-blue-950/50 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
              <div className="ml-2 h-6 w-px bg-slate-200 dark:bg-slate-700" />
              <motion.button
                onClick={toggleTheme}
                className="ml-2 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative overflow-hidden"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'light' ? (
                    <motion.div
                      key="moon"
                      initial={{ y: -20, opacity: 0, rotate: -90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: 20, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4 text-slate-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ y: -20, opacity: 0, rotate: -90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: 20, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 z-50 relative rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-start h-full px-5 pt-20 pb-6 space-y-1 relative overflow-y-auto"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.05 + index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-center py-3 text-lg font-semibold transition-colors rounded-xl ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
                      : 'text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.05 + navItems.length * 0.05 }}
                className="pt-4 w-full"
              >
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent mb-4" />
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-3 py-3 text-base font-semibold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="w-6 h-6" />
                      <span>Donkere Modus</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-6 h-6" />
                      <span>Lichte Modus</span>
                    </>
                  )}
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
