import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { ArrowRight, Calendar, CheckCircle, Clock, Mail, MapPin, MessageSquare, Send, Zap } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { profile } from '../data/portfolio';
import { cardItem, fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const inputClasses =
  'min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-[border-color,box-shadow,background-color] duration-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/35 dark:border-white/10 dark:bg-white/[0.055] dark:text-white dark:placeholder-gray-500';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    opportunityType: 'Automation / Integrations Role',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [state, handleSubmit] = useForm('xblkjjly');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (state.succeeded) {
      setSubmitStatus({ success: true, message: "Message received! I'll respond within 24 hours." });
      setFormData({ name: '', email: '', company: '', opportunityType: 'Automation / Integrations Role', message: '' });
      const timeout = setTimeout(() => setSubmitStatus(null), 6000);
      return () => clearTimeout(timeout);
    }

    if (state.errors?.length) {
      setSubmitStatus({ success: false, message: 'Something went wrong. Please try emailing me directly.' });
      const timeout = setTimeout(() => setSubmitStatus(null), 6000);
      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [state.errors, state.succeeded]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await handleSubmit(event);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="text-primary-400" size={22} />,
      title: 'Email Me Directly',
      description: 'Best for recruiter outreach, hiring conversations, and end-to-end systems or automation-focused opportunities.',
      cta: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <MessageSquare className="text-primary-400" size={22} />,
      title: 'WhatsApp',
      description: 'Useful for quick follow-up and lightweight async communication during business hours.',
      cta: 'Start a Chat',
      href: profile.whatsapp,
    },
    {
      icon: <Calendar className="text-primary-400" size={22} />,
      title: 'Schedule a Call',
      description: 'If a live conversation is useful, you can book time directly on my calendar.',
      cta: 'Book on Calendly',
      href: profile.calendly,
    },
  ];

  return (
    <section id="contact" className="section relative bg-dark-950 overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-12">
          <SectionHeading
            align="center"
            eyebrow="Opportunities"
            title="Interested in Working Together?"
            titleClassName="text-white"
            description="I&apos;m open to automation, integrations, CRM systems, and end-to-end digital operations opportunities where website, backend logic, and workflow ownership all matter."
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-2 space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-white/10 bg-dark-900 p-5 transition-[transform,background-color,border-color] duration-300 ease-out hover:border-primary-500/30 hover:bg-dark-800"
                variants={cardItem}
                whileHover={shouldReduceMotion ? undefined : 'hover'}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center border border-primary-500/20">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{method.title}</h3>
                    <p className="text-xs text-gray-400 mb-2 leading-relaxed">{method.description}</p>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-primary-400 group-hover:text-primary-300 transition-colors">
                      <span>{method.cta}</span>
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            <motion.div
              className="rounded-xl border border-white/10 border-l-2 border-l-emerald-500 bg-dark-900 p-5"
              variants={cardItem}
            >
              <div className="flex items-start gap-3">
                <Zap className="text-yellow-400 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">Quick Response</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{profile.responseTime}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={12} />
                    Monday-Friday · 9am-5pm {profile.timezone}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin size={12} />
                    {profile.location} · Remote-first
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="rounded-xl border border-white/10 bg-dark-900 p-7">
              <h3 className="text-lg font-heading font-bold text-white mb-1">Start the Conversation</h3>
              <p className="text-sm text-gray-400 mb-6">Tell me about the role, team, workflow, or systems challenge and I&apos;ll get back to you shortly.</p>

              {submitStatus ? (
                <motion.div
                  role="status"
                  aria-live="polite"
                  className={`p-6 rounded-xl border text-center ${submitStatus.success ? 'bg-emerald-500/10 border-emerald-500/25' : 'bg-red-500/10 border-red-500/25'}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4 ${submitStatus.success ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}>
                    <CheckCircle className={submitStatus.success ? 'text-emerald-400' : 'text-red-400'} size={28} />
                  </div>
                  <p className={`font-medium text-sm ${submitStatus.success ? 'text-emerald-300' : 'text-red-300'}`}>{submitStatus.message}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="e.g. Alex Johnson" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="you@company.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-gray-300 mb-1.5">Company / Organization</label>
                      <input type="text" id="company" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} className={inputClasses} placeholder="Your company name" />
                    </div>
                    <div>
                      <label htmlFor="opportunityType" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Opportunity Type <span className="text-red-400">*</span>
                      </label>
                      <select id="opportunityType" name="opportunityType" value={formData.opportunityType} onChange={handleChange} className={inputClasses} required>
                        <option>Automation / Integrations Role</option>
                        <option>Contract Automation Work</option>
                        <option>Integrations / Automation Role</option>
                        <option>Collaboration</option>
                        <option>General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Describe the role, system, team, or opportunity you&apos;d like to discuss..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group/submit flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-primary-500 bg-primary-600 py-3.5 text-sm font-semibold text-white transition-[transform,background-color,opacity] duration-200 ease-out hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''}`}
                    whileHover={isSubmitting || shouldReduceMotion ? undefined : { y: -2 }}
                    whileTap={isSubmitting ? {} : { scale: 0.97 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} className="transition-transform duration-200 ease-out group-hover/submit:translate-x-0.5 group-hover/submit:-translate-y-0.5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
