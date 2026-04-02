import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Briefcase, GraduationCap, ShoppingBag, ArrowRight } from 'lucide-react';

export function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-200 dark:bg-blue-900/50" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">Ervaring</span>
            <div className="h-px w-12 bg-blue-200 dark:bg-blue-900/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Mijn{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Ervaring
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Praktijkervaring opgedaan door studie en werk
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] bg-blue-200/80 dark:bg-blue-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white dark:bg-slate-800 p-5 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100/80 dark:border-slate-700/50">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="p-3 sm:p-4 bg-blue-600 rounded-xl shadow-sm shadow-blue-500/20">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Software Development</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Grafisch Lyceum Rotterdam</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0 bg-slate-50 dark:bg-slate-700/50 px-3 py-1 rounded-full">2023 - Heden (Jaar 2)</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Volledige MBO opleiding in Software Development, met focus op zowel front-end als backend
                    ontwikkeling. Bezig met het opbouwen van een breed fundament in programmeren en
                    softwareontwikkeling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs sm:text-sm font-medium border border-blue-100/80 dark:border-blue-900/50">
                      Jaar 1: Front-End (HTML, CSS, JS, PHP)
                    </span>
                    <span className="px-3 py-1.5 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs sm:text-sm font-medium border border-purple-100/80 dark:border-purple-900/50">
                      Jaar 2: Backend & Databases
                    </span>
                    <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs sm:text-sm font-medium border border-blue-100/80 dark:border-blue-900/50">
                      Huidige focus: Full-Stack Web Development (PHP/JS/SQL)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -3 }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] bg-purple-200/80 dark:bg-purple-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white dark:bg-slate-800 p-5 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100/80 dark:border-slate-700/50">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="p-3 sm:p-4 bg-purple-600 rounded-xl shadow-sm shadow-purple-500/20">
                    <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Verkoopmedewerker</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">Van Haren (Schoenenwinkel)</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0 bg-slate-50 dark:bg-slate-700/50 px-3 py-1 rounded-full">1 jaar</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Werkzaam als verkoopmedewerker waarbij ik waardevolle ervaring heb opgedaan in klantcontact,
                    teamwork en commerciële vaardigheden. Deze ervaring heeft me veel geleerd over communicatie
                    en samenwerken in een professionele omgeving.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { title: 'Communicatie', desc: 'Effectief communiceren met klanten en collega\'s' },
                      { title: 'Verkoopstrategieën', desc: 'Klantbehoeften identificeren en adviseren' },
                      { title: 'Samenwerken', desc: 'Effectief teamwork in drukke omgeving' },
                      { title: 'Klantcontact', desc: 'Professionele en vriendelijke service' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base text-slate-800 dark:text-white">{item.title}</p>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Looking for internship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-purple-300/40 dark:bg-purple-900/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative bg-purple-600 p-6 sm:p-8 rounded-2xl shadow-xl text-white overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center relative">
                <div className="flex-shrink-0">
                  <motion.div
                    className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/10"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Op zoek naar een Full-Stack Stage</h3>
                  <p className="text-sm sm:text-base text-blue-100 mb-5 leading-relaxed">
                    Ik zoek een meewerkstage waar ik mij verder kan ontwikkelen in{' '}
                    <span className="font-semibold text-white">Full-Stack Web Development (PHP, JavaScript en SQL)</span> en kan bijdragen aan echte projecten binnen een team.
                  </p>
                  <motion.button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-medium shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all group/btn"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Neem contact op
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
