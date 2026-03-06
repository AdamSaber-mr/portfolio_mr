import { motion } from 'motion/react';
import { Layers, Palette, Rocket, Server } from 'lucide-react';
import { useInView } from './hooks/useInView';

type JourneyStep = {
  year: string;
  title: string;
  icon: typeof Palette;
  description: string;
  learning: string;
};

const journeySteps: JourneyStep[] = [
  {
    year: 'Jaar 1',
    title: 'Front-end basis',
    icon: Palette,
    description: 'HTML, CSS, JavaScript en de eerste PHP-projecten met focus op UI en structuur.',
    learning: 'Ik ontdekte dat ik naast design vooral techniek en logica interessant vind.',
  },
  {
    year: 'Jaar 2',
    title: 'Back-end verdieping',
    icon: Server,
    description: 'Meer gewerkt met PHP en MariaDB/SQL: data modelleren, formulieren verwerken en logica bouwen.',
    learning: 'Ik kreeg plezier in het bouwen van complete flows in plaats van alleen losse pagina\'s.',
  },
  {
    year: 'Nu',
    title: 'Full-stack projecten',
    icon: Layers,
    description: 'Combinatie van front-end en back-end voor praktische webapps van interface tot database.',
    learning: 'Mijn focus ligt op stabiele code, duidelijke structuur en bruikbare oplossingen.',
  },
];

export function Journey() {
  const [ref, isInView] = useInView();

  return (
    <section id="journey" className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-slate-300 dark:bg-slate-700" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm tracking-wider uppercase">Mijn Reis</span>
            <div className="h-px w-10 bg-slate-300 dark:bg-slate-700" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Ontwikkeling als developer
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Van front-end basis naar full-stack bouwen, stap voor stap met echte praktijkervaring.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-3 bottom-3 w-px bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-5 sm:space-y-6">
            {journeySteps.map((step, index) => (
              <motion.article
                key={step.year}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-300">
                  <step.icon className="w-4 h-4" />
                </div>

                <div className="rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                      {step.year}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Wat ik leerde:</span> {step.learning}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-8 sm:mt-10"
        >
          <div className="rounded-xl border border-blue-100 dark:border-slate-700 bg-blue-50/70 dark:bg-slate-800 px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 flex items-start gap-3">
            <Rocket className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-300 flex-shrink-0" />
            <p>
              <span className="font-semibold">Volgende stap:</span> een full-stack stage waarin ik kan meewerken aan echte projecten en mijn codekwaliteit verder kan verhogen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
