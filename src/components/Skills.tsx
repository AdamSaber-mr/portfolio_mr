import { motion } from 'motion/react';
import { Code2, Server, Users, Wrench } from 'lucide-react';
import { useInView } from './hooks/useInView';

type Skill = {
  name: string;
  level: 'Basis' | 'Goed' | 'Sterk';
  progress: number;
};

type SkillGroup = {
  title: string;
  icon: typeof Code2;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Back-end',
    icon: Server,
    skills: [
      { name: 'PHP', level: 'Sterk', progress: 78 },
      { name: 'SQL / MariaDB / MySQL', level: 'Goed', progress: 72 },
      { name: 'API-koppelingen', level: 'Basis', progress: 52 },
    ],
  },
  {
    title: 'Front-end',
    icon: Code2,
    skills: [
      { name: 'HTML / CSS', level: 'Sterk', progress: 84 },
      { name: 'JavaScript', level: 'Goed', progress: 78 },
      { name: 'React / TypeScript', level: 'Goed', progress: 68 },
    ],
  },
  {
    title: 'Samenwerking',
    icon: Users,
    skills: [
      { name: 'Communicatie', level: 'Sterk', progress: 86 },
      { name: 'Samenwerken', level: 'Sterk', progress: 84 },
      { name: 'Klantcontact', level: 'Goed', progress: 77 },
    ],
  },
  {
    title: 'Nu aan het verdiepen',
    icon: Wrench,
    skills: [
      { name: 'Next.js', level: 'Basis', progress: 48 },
      { name: 'Testing', level: 'Basis', progress: 42 },
      { name: 'Git workflows', level: 'Goed', progress: 66 },
    ],
  },
];

const levelClassMap: Record<Skill['level'], string> = {
  Basis: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200',
  Goed: 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Sterk: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
};

export function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-slate-300 dark:bg-slate-700" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm tracking-wider uppercase">Vaardigheden</span>
            <div className="h-px w-10 bg-slate-300 dark:bg-slate-700" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Mijn vaardigheden
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Praktische mix van front-end, back-end en samenwerking, opgebouwd in school- en echte projecten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
              className="rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800 p-4 sm:p-5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                  <group.icon className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>

              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium">{skill.name}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${levelClassMap[skill.level]}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.progress}%` } : {}}
                        transition={{ duration: 0.7, delay: 0.15 + groupIndex * 0.08 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-8 sm:mt-10"
        >
          <div className="rounded-xl border border-blue-100 dark:border-slate-700 bg-blue-50/70 dark:bg-slate-800 px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base text-slate-700 dark:text-slate-300">
            <span className="font-semibold">Huidige focus:</span> Full-Stack webdevelopment met PHP, JavaScript en SQL, met nadruk op praktische projecten.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
