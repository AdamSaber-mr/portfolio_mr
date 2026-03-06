import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Github, GraduationCap, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useInView } from './hooks/useInView';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

const contactEmail = 'mt.adamsaber@gmail.com';

export function Contact() {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const openMailClient = () => {
    const subject = encodeURIComponent(`Contact van ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nVan: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('sending');
    setSubmitMessage('Bericht wordt verstuurd...');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nieuw portfolio contactbericht van ${formData.name}`,
          _captcha: 'false',
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.success === 'false')) {
        throw new Error('Submit failed');
      }

      setSubmitState('success');
      setSubmitMessage('Je bericht is verzonden. Bedankt, ik neem snel contact op.');
      setFormData({ name: '', email: '', message: '' });
      setFocusedField(null);
    } catch {
      openMailClient();
      setSubmitState('error');
      setSubmitMessage('Automatisch verzenden lukte niet. Je mail-app is geopend als fallback.');
    }
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
      value: contactEmail,
      link: `mailto:${contactEmail}`,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
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
            <span className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm tracking-wider uppercase">Contact</span>
            <div className="h-px w-10 bg-slate-300 dark:bg-slate-700" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Neem contact op
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Interesse in samenwerken of een stageplek? Stuur gerust een bericht.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-5 text-slate-900 dark:text-white">Contactinformatie</h3>

            <div className="space-y-4 mb-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                    <info.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-800 dark:text-slate-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 break-all"
                      >
                        {info.value}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <p className="text-slate-800 dark:text-slate-200 font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Wat ik zoek in een stage</h4>
              <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                {[
                  'Full-Stack webdevelopment projecten (PHP/JavaScript/SQL)',
                  'Begeleiding en leren van ervaren developers',
                  'Samenwerken in een team (bijv. Scrum/overleg)',
                  'Ruimte om te groeien en praktisch mee te bouwen',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex gap-2.5">
              {[
                { icon: Github, href: 'https://github.com/AdamSaber-mr', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/adam-saber-a47586365/', label: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 sm:p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'name', label: 'Naam', type: 'text' },
                { id: 'email', label: 'Email', type: 'email' },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <label
                    htmlFor={field.id}
                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                      focusedField === field.id || formData[field.id as keyof typeof formData]
                        ? '-top-2 text-xs bg-white dark:bg-slate-800 px-1 text-blue-600 dark:text-blue-400 font-medium'
                        : 'top-3 text-sm text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    onFocus={() => setFocusedField(field.id)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-3 py-3 border border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-slate-100 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? '-top-2 text-xs bg-white dark:bg-slate-800 px-1 text-blue-600 dark:text-blue-400 font-medium'
                      : 'top-3 text-sm text-slate-400 dark:text-slate-500'
                  }`}
                >
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-3 py-3 border border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-slate-100 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitState === 'sending'}
                className="w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-opacity disabled:opacity-70 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {submitState === 'sending' ? 'Versturen...' : 'Verstuur bericht'}
              </button>

              {submitState !== 'idle' && (
                <p
                  className={`text-sm rounded-lg px-3 py-2 ${
                    submitState === 'success'
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                      : submitState === 'error'
                        ? 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                  }`}
                >
                  {submitMessage}
                </p>
              )}

              <button
                type="button"
                onClick={openMailClient}
                className="w-full text-sm text-blue-600 dark:text-blue-300 hover:underline"
              >
                Of stuur direct een mail via {contactEmail}
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Adam Saber
          </p>
        </motion.div>
      </div>
    </section>
  );
}
