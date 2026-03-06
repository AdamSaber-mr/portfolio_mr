import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, MapPin, GraduationCap, Github, Linkedin, Send, Check, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:mt.adamsaber@gmail.com?subject=Contact van ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Locatie',
      value: 'Zuid-Holland, Nederland',
    },
    {
      icon: GraduationCap,
      label: 'Opleiding',
      value: 'Grafisch Lyceum Rotterdam',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mt.adamsaber@gmail.com',
      link: 'mailto:mt.adamsaber@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50/50 dark:bg-purple-950/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50/50 dark:bg-blue-950/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase">Contact</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Neem{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Op
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Geïnteresseerd in samenwerken of heb je een stageplek beschikbaar? Ik hoor graag van je!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-800 dark:text-white">Contact Informatie</h3>

            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="p-2.5 sm:p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl flex-shrink-0 group-hover:shadow-md transition-shadow">
                    <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5 uppercase tracking-wider">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-800 dark:text-slate-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all inline-flex items-center gap-1"
                      >
                        {info.value}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-slate-800 dark:text-slate-200 font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity blur-[1px]" />
              <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-slate-800 dark:to-slate-800 p-5 sm:p-6 rounded-2xl border border-blue-100/50 dark:border-slate-700/50">
                <h4 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  Wat ik zoek in een stage:
                </h4>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  {[
                    'Full-Stack webdevelopment projecten (PHP/JavaScript/SQL)',
                    'Begeleiding en leren van ervaren developers',
                    'Samenwerken in een team (bijv. Scrum/overleg)',
                    'Ruimte om te groeien en praktisch mee te bouwen',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <div className="p-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-1.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/AdamSaber-mr', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/adam-saber-a47586365/', label: 'LinkedIn' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors border border-slate-100 dark:border-slate-700/50"
                  aria-label={social.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative group/form">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-10 group-hover/form:opacity-20 transition-opacity blur-[1px]" />
              <div className="relative bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-100/80 dark:border-slate-700/50 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: 'name', label: 'Naam', type: 'text', placeholder: 'Jouw naam' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'jouw.email@example.com' },
                  ].map((field) => (
                    <div key={field.id} className="relative">
                      <label
                        htmlFor={field.id}
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === field.id || formData[field.id as keyof typeof formData]
                            ? '-top-2.5 text-xs bg-white dark:bg-slate-800 px-1 text-blue-600 dark:text-blue-400 font-medium'
                            : 'top-3.5 sm:top-3 text-sm text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        required
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 sm:py-3 border-2 border-slate-200 dark:border-slate-600 bg-transparent text-slate-900 dark:text-slate-100 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all"
                      />
                    </div>
                  ))}

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'message' || formData.message
                          ? '-top-2.5 text-xs bg-white dark:bg-slate-800 px-1 text-blue-600 dark:text-blue-400 font-medium'
                          : 'top-3.5 sm:top-3 text-sm text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 sm:py-3 border-2 border-slate-200 dark:border-slate-600 bg-transparent text-slate-900 dark:text-slate-100 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Send className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Verstuur Bericht
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-slate-700/50 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Adam Saber · Gebouwd met{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              passie voor technologie
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}