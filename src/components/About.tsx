import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Wrench, Target, TrendingUp } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView();

  const highlights = [
    {
      icon: Wrench,
      title: 'Probleemoplosser',
      description: 'Ik werk graag gestructureerd en los problemen stap voor stap op tot het klopt.',
      accentColor: 'var(--color-blue-500)',
      iconBgColor: 'var(--color-blue-600)',
    },
    {
      icon: Target,
      title: 'Samenwerken & Communicatie',
      description: 'Ik communiceer duidelijk, werk prettig in teamverband en denk mee over wat er gebouwd moet worden.',
      accentColor: 'var(--color-blue-600)',
      iconBgColor: 'var(--color-blue-600)',
    },
    {
      icon: TrendingUp,
      title: 'Full-Stack Mindset',
      description: 'Ik combineer front-end met back-end en databases om complete webapps te bouwen.',
      accentColor: 'var(--color-blue-700)',
      iconBgColor: 'var(--color-blue-700)',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 dark:bg-blue-950/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-200 dark:bg-blue-900/50" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">Over Mij</span>
            <div className="h-px w-12 bg-blue-200 dark:bg-blue-900/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Leer mij{' '}
            <span className="text-blue-600 dark:text-blue-400">kennen</span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-14 sm:mb-16 max-w-2xl mx-auto">
            17 jaar | Zuid-Holland, Nederland | Software Development @ Grafisch Lyceum Rotterdam
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          {/* Mijn Verhaal - left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex"
          >
            <div className="relative group flex-1">
              <div className="absolute -inset-[1px] bg-blue-200/70 dark:bg-blue-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-blue-50/80 dark:bg-slate-800 p-7 sm:p-9 rounded-2xl backdrop-blur-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-purple-600 rounded-full" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Mijn Verhaal</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Mijn naam is Adam Saber, 17 jaar, en ik studeer Software Development in mijn tweede leerjaar aan het Grafisch Lyceum Rotterdam. In het begin heb ik veel gewerkt aan front-end (HTML/CSS/JavaScript) en daarna ben ik mij steeds meer gaan richten op de back-end kant van webapps, zoals <span className="font-semibold text-blue-600 dark:text-blue-400">PHP en databases (MariaDB/SQL)</span>.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Ik vind het leuk om ideeën om te zetten naar werkende applicaties en daarbij logisch na te denken over structuur, data en flow. Naast het bouwen vind ik samenwerken en helder communiceren belangrijk: goed begrijpen wat er nodig is en het daarna strak uitwerken.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Op dit moment richt ik mij op Full-Stack Web Development en ben ik gemotiveerd om dit verder te ontwikkelen in een meewerkstage, waar ik kan leren in een echte werkomgeving en kan bijdragen aan echte projecten.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards - right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 justify-between"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="relative group bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700/80 overflow-hidden flex-1"
              >
                {/* Left accent border */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: item.accentColor }}
                />
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="p-2.5 sm:p-3 rounded-xl flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: item.iconBgColor }}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
