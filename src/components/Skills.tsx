import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Lightbulb, Users, Server } from 'lucide-react';

export function Skills() {
  const [ref, isInView] = useInView();

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      color: 'bg-blue-600',
      barColor: 'bg-blue-600',
      hoverGlow: 'bg-blue-200/80 dark:bg-blue-900/30',
      skills: [
        { name: 'PHP', level: 75 },
        { name: 'SQL / MySQL / MariaDB', level: 70 },
        { name: 'Python (Data-analyse)', level: 45, learning: true },
      ],
    },
    {
      title: 'Front-End Development',
      icon: Code2,
      color: 'bg-purple-600',
      barColor: 'bg-purple-600',
      hoverGlow: 'bg-purple-200/80 dark:bg-purple-900/30',
      skills: [
        { name: 'HTML / CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React / TypeScript', level: 65 },
        { name: 'UI / UX Design', level: 70 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'bg-blue-500',
      barColor: 'bg-blue-500',
      hoverGlow: 'bg-blue-100 dark:bg-blue-900/20',
      skills: [
        { name: 'Communicatie', level: 85 },
        { name: 'Samenwerken', level: 85 },
        { name: 'Klantcontact', level: 80 },
        { name: 'Probleem Oplossen', level: 90 },
      ],
    },
    {
      title: 'In ontwikkeling',
      icon: Lightbulb,
      color: 'bg-purple-500',
      barColor: 'bg-purple-500',
      hoverGlow: 'bg-purple-100 dark:bg-purple-900/20',
      skills: [
        { name: 'Next.js', level: 40, learning: true },
        { name: 'API Development', level: 45, learning: true },
        { name: 'Git / GitHub', level: 65, learning: true },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/50 dark:bg-purple-950/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-200 dark:bg-blue-900/50" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">Vaardigheden</span>
            <div className="h-px w-12 bg-blue-200 dark:bg-blue-900/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Mijn{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Vaardigheden
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Een combinatie van technische expertise en soft skills opgebouwd door studie en werk
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group h-full"
            >
              <div className={`absolute -inset-[1px] ${category.hoverGlow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-slate-50 dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100/80 dark:border-slate-700/50 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className={`p-2.5 sm:p-3 ${category.color} rounded-xl flex-shrink-0 shadow-sm`}>
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-4 flex-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2 gap-2">
                        <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2 flex-wrap">
                          {skill.name}
                          {skill.learning && (
                            <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full whitespace-nowrap">
                              Leren
                            </span>
                          )}
                        </span>
                        <motion.span
                          className="text-slate-500 dark:text-slate-400 text-sm flex-shrink-0 tabular-nums"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2.5 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: categoryIndex * 0.1 + skillIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full ${category.barColor} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-slate-800 px-6 py-4 rounded-2xl border border-blue-100/80 dark:border-slate-700/50 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Huidige focus:</span> Full-Stack Web Development (PHP/JS/SQL) en bouwen aan praktische webapp projecten.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
