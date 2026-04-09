import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { ArrowRight, Calendar, CheckCircle, Clock, Mail, MapPin, MessageSquare, Send, Zap } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { profile } from '../data/portfolio';

const inputClasses =
  'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-700/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm';

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
    <section id="contact" className="relative py-24 bg-dark-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-[#080d1a] to-dark-950" />
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-purple-600/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            align="center"
            eyebrow="Opportunities"
            title="Interested in Working Together?"
            titleClassName="text-white"
            description="I&apos;m open to automation, integrations, CRM systems, and end-to-end digital operations opportunities where website, backend logic, and workflow ownership all matter."
          />
          <div className="section-divider mx-auto mt-5" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block glass-card p-5 hover:bg-white/8 hover:border-primary-500/20 transition-all duration-300 hover:-translate-y-0.5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
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
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            <motion.div
              className="glass-card p-5 border-l-2 border-l-emerald-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
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
          </div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card p-7 bg-white/3">
              <h3 className="text-lg font-heading font-bold text-white mb-1">Start the Conversation</h3>
              <p className="text-sm text-gray-400 mb-6">Tell me about the role, team, workflow, or systems challenge and I&apos;ll get back to you shortly.</p>

              {submitStatus ? (
                <motion.div
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
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="e.g. Alex Johnson" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="you@company.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-gray-300 mb-1.5">Company / Organization</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClasses} placeholder="Your company name" />
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
                    className={`w-full flex items-center justify-center gap-2 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'shadow-glow-blue'}`}
                    whileHover={isSubmitting ? {} : { y: -2, boxShadow: '0 0 25px rgba(14,165,233,0.45)' }}
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
                        <Send size={15} />
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
