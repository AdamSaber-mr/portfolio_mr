import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Palette, Server, Layers, Rocket } from 'lucide-react';

export function Journey() {
  const [ref, isInView] = useInView();

  const journeySteps = [
    {
      year: 'Jaar 1',
      title: 'Front-End Development',
      icon: Palette,
      description: 'HTML, CSS, JavaScript, PHP - UI/UX design en implementatie',
      learning: 'Ontdekte dat ik meer uitdaging nodig had',
      color: 'from-blue-400 to-cyan-400',
      shadow: 'shadow-blue-400/20',
    },
    {
      year: 'Jaar 2',
      title: 'Backend Development',
      icon: Server,
      description: 'PHP, JavaScript, MariaDB (SQL) - Server-side logica en databases',
      learning: 'Vond de diepere technische uitdagingen waar ik naar zocht',
      color: 'from-purple-400 to-blue-400',
      shadow: 'shadow-purple-400/20',
    },
    {
      year: 'Nu',
      title: 'Full-Stack Web Apps',
      icon: Layers,
      description: 'PHP, JavaScript, MariaDB/SQL – complete webapps bouwen van UI tot database',
      learning: 'Focus op praktijk en echte applicaties',
      color: 'from-purple-600 to-pink-500',
      shadow: 'shadow-purple-500/20',
    },
  ];

  return (
    <section id="journey" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">Mijn Reis</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Mijn{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ontwikkelingsreis
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Van simpele websites naar complete full-stack webapplicaties - een reis van constante groei en uitdaging
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line with glow */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-500" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-500 blur-sm"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Icon in center on the line with glow */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`p-3 sm:p-4 bg-gradient-to-br ${step.color} rounded-full shadow-lg ${step.shadow}`}
                    animate={isInView ? { scale: [0, 1.1, 1] } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  >
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  {/* Glow ring */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-md -z-10`}
                    animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                </div>

                {/* Card */}
                <div className="pt-20 sm:pt-0 flex flex-col md:flex-row gap-8 items-center">
                  <div className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:order-2'}`}>
                    <motion.div
                      className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 dark:border-slate-700/80 group"
                      whileHover={{ y: -4 }}
                    >
                      <div className="inline-block mb-3">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                          {step.year}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-800 dark:text-white">{step.title}</h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">{step.description}</p>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed flex items-center gap-1.5 justify-start">
                        <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-[10px]">💡</span>
                        {step.learning}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block flex-shrink-0 w-16"></div>
                  
                  {/* Empty flex item for alternating layout */}
                  <div className={`flex-1 hidden md:block ${index % 2 === 0 ? '' : 'order-1'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center relative"
        >
          {/* Connection line to final card */}
          <div className="absolute left-1/2 bottom-full h-12 sm:h-16 w-0.5 bg-gradient-to-b from-pink-500 to-transparent transform -translate-x-1/2" />
          
          <motion.div
            className="inline-block relative group"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            {/* Animated glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-5 sm:p-6 rounded-2xl text-white shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rocket className="w-5 h-5" />
                <h4 className="text-lg sm:text-xl font-bold">Volgende Stap: Full-Stack stage & praktijkervaring</h4>
              </div>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Leren in een echte werkomgeving, samenwerken in een team en bouwen aan echte projecten
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}