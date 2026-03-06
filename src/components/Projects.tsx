import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github, UtensilsCrossed, Globe, Car, ShoppingBag, ChefHat } from 'lucide-react';

export function Projects() {
  const [ref, isInView] = useInView();

  const projects = [
    {
      title: 'RapidCars – Car Rental Website',
      type: 'Klantproject',
      category: 'Full-Stack',
      icon: Car,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Moderne autoverhuur website voor een echte klant, gericht op het verhuren van sportieve auto\'s. Van klantgesprek tot ontwerp en oplevering volledig zelfstandig uitgevoerd.',
      tags: ['React', 'TypeScript', 'Vite', 'UI/UX Design', 'Klantproject'],
      highlights: [
        'Volledig zelfstandig klantproject: van requirements tot oplevering',
        'Auto catalogus met detailpagina\'s, specificaties en afbeeldingen',
        'Conversiegerichte call-to-actions en contactformulier',
        'Responsive design en logo-ontwerp voor het merk',
      ],
      status: 'Voltooid',
      statusColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      liveUrl: 'https://adamsaber-mr.github.io/rapid_cars/',
      githubUrl: 'https://github.com/AdamSaber-mr/rapid_cars',
    },
    {
      title: 'Yume Ramen Delivery App',
      type: 'Schoolproject',
      category: 'Full-Stack',
      icon: UtensilsCrossed,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Full-stack food delivery webapp waarmee gebruikers ramen gerechten kunnen browsen, bestellen en afrekenen. Gebouwd met een mobile-first aanpak en een Japans-geïnspireerd design.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Python', 'Full-Stack'],
      highlights: [
        'Gebruikersregistratie, login en sessie-gebaseerd winkelwagentje',
        'Dynamisch menu uit database met categorieën en kortingsprijzen',
        'Python data-analyse: top 3 populairste gerechten automatisch op homepage',
        'Checkout-flow met relationele database (users, orders, producten)',
      ],
      status: 'Voltooid',
      statusColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      liveUrl: 'https://102896.stu.sd-lab.nl/schooljaar2/1_beroeps/Ramen_DeliveryApp/public/1_index.php',
      githubUrl: 'https://github.com/AdamSaber-mr/Ramen_DeliveryApp',
    },
    {
      title: 'Luxora – Luxury Marketplace',
      type: 'Teamproject – Front-End Developer',
      category: 'Front-End',
      icon: ShoppingBag,
      gradient: 'from-amber-500 to-orange-500',
      description: 'Marketplace voor exclusieve luxeproducten zoals villa\'s, horloges en jachten. Binnen dit teamproject was ik verantwoordelijk voor de volledige front-end ontwikkeling.',
      tags: ['React', 'TypeScript', 'Next.js', 'Front-End', 'Responsive UI'],
      highlights: [
        'Verantwoordelijk voor de volledige front-end met React, TypeScript en Next.js',
        'Categoriepagina\'s en product-showcasepagina\'s met details en afbeeldingen',
        'Responsive en overzichtelijke UI gebouwd voor luxe uitstraling',
        'Admin interface en buyer-seller communicatieflow geïmplementeerd',
      ],
      status: 'Voltooid',
      statusColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      liveUrl: 'https://luxora.pages.dev/',
      githubUrl: 'https://github.com/itsamestachu/luxora',
    },
    {
      title: 'CookUp – Recipe Platform',
      type: 'Schoolproject',
      category: 'Back-End',
      icon: ChefHat,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Online platform dat jongeren inspireert om vaker zelf te koken. Gebruikers kunnen recepten ontdekken, delen en beheren via categorieën en een zoekfunctie.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'CRUD', 'Authenticatie'],
      highlights: [
        'Volledige CRUD-functionaliteit voor recepten met PHP en MySQL',
        'Gebruikersregistratie en login-systeem met authenticatie',
        'Database-structuur ontworpen met phpMyAdmin',
        'Adminbeheer voor content en gebruikersbeheer',
      ],
      status: 'Voltooid',
      statusColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      liveUrl: 'https://102896.stu.sd-lab.nl/schooljaar2/1_beroeps/stop_de_ontkoking/mamp_bp/index.php',
      githubUrl: 'https://github.com/AdamSaber-mr/Recipe_Website',
    },
    {
      title: 'Portfolio Website',
      type: 'Persoonlijk Project',
      category: 'Full-Stack',
      icon: Globe,
      gradient: 'from-blue-600 to-purple-500',
      description: 'Mijn persoonlijke portfolio website gebouwd met React, TypeScript en Vite. Bevat projecten, vaardigheden, ervaring en een contactsectie met dark/light mode.',
      tags: ['React', 'TypeScript', 'Vite', 'Responsive Design'],
      highlights: [
        'Gebouwd met React, TypeScript en Vite voor snelle performance',
        'Dark/light mode, animaties en responsive design',
        'Typing effect, animated skill bars en interactieve UI',
        'Ontworpen om stage-ready en professioneel over te komen',
      ],
      status: 'Voltooid',
      statusColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      liveUrl: 'https://adamsaber-mr.github.io/portofolio_mr/',
      githubUrl: 'https://github.com/AdamSaber-mr/portofolio_mr',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Voltooid':
        return '✓';
      case 'In ontwikkeling':
        return '⚡';
      case 'Gepland':
        return '📋';
      default:
        return '•';
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/10 dark:to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">Portfolio</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Mijn{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projecten
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Een selectie van echte school-, klant- en persoonlijke projecten die mijn groei als full-stack developer laten zien
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative group h-full ${index === projects.length - 1 && projects.length % 2 !== 0 ? 'md:col-span-2 md:max-w-[calc(50%-0.75rem)]  md:mx-auto' : ''}`}
            >
              {/* Gradient border on hover */}
              <div className={`absolute -inset-[1px] bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-[1px]`} />
              
              <div className="relative bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-300 border border-slate-100/80 dark:border-slate-700/50 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 sm:p-3 bg-gradient-to-br ${project.gradient} rounded-xl group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 flex-shrink-0`}>
                      <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white leading-tight">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{project.type}</p>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-sm`}>
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4 space-y-2 flex-1">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`} />
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-100 dark:border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${project.statusColor} flex items-center gap-1`}>
                    <span>{getStatusIcon(project.status)}</span>
                    {project.status}
                  </span>
                  <div className="flex gap-1">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors"
                      aria-label="View on GitHub"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors"
                      aria-label="View live project"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 px-6 py-4 rounded-2xl border border-blue-100/80 dark:border-slate-700/50 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
            <div>
              <p className="text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Altijd bezig met nieuwe projecten</span>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Deze lijst groeit terwijl ik nieuwe skills leer en aan meer praktische webprojecten werk
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}