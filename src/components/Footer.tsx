import { motion, useReducedMotion } from 'framer-motion';
import { Clock, Github, Linkedin, Mail, MapPin, Twitter, Zap } from 'lucide-react';
import { expertiseAreas, navItems, profile } from '../data/portfolio';
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const socialLinks = [
    { name: 'Email', icon: Mail, href: `mailto:${profile.email}` },
    { name: 'LinkedIn', icon: Linkedin, href: profile.linkedin },
    { name: 'Twitter', icon: Twitter, href: profile.twitter },
    { name: 'GitHub', icon: Github, href: profile.github },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-950 overflow-hidden border-t border-white/5">
      <div className="container relative py-14">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div
            className="sm:col-span-2 lg:col-span-1 space-y-5"
            variants={fadeUp}
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary-400 bg-primary-600">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-white">{profile.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Automation engineer and full-stack systems builder focused on websites, CRM, integrations, and internal tools that reduce operational complexity.
            </p>
            <div className="space-y-2.5 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-primary-400 flex-shrink-0" />
                {profile.location} · Remote-first
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-primary-400 flex-shrink-0" />
                Monday-Friday · 9am-5pm {profile.timezone}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 font-medium text-xs">{profile.availability}</span>
              </div>
            </div>

            <div className="flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card flex h-11 w-11 items-center justify-center rounded-xl text-gray-400 transition-all duration-200 hover:border-primary-500/25 hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                    whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Expertise</h3>
            <ul className="space-y-3">
              {expertiseAreas.map((area) => (
                <li key={area.title}>
                  <a href="/#services" className="group flex min-h-11 items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 group-hover:bg-primary-400 transition-colors" />
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`/#${item.id}`} className="group flex min-h-11 items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 group-hover:bg-primary-400 transition-colors" />
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/blog" className="group flex min-h-11 items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600 transition-colors group-hover:bg-primary-400" />
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="space-y-5"
            variants={fadeUp}
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href={`mailto:${profile.email}`} className="flex min-h-11 items-center break-all transition-colors hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
                {profile.email}
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center transition-colors hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
                WhatsApp: {profile.phone}
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center transition-colors hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
                View Resume
              </a>
            </div>
            <motion.a
              href={profile.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-primary-500 bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] duration-200 ease-out hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={14} />
              Schedule a Call
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-600 text-center sm:text-left">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href={profile.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center px-2 text-xs text-gray-600 transition-colors hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
              Calendly
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center px-2 text-xs text-gray-600 transition-colors hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
