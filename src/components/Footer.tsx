import { motion } from 'framer-motion';
import { Clock, Github, Linkedin, Mail, MapPin, Twitter, Zap } from 'lucide-react';
import { expertiseAreas, navItems, profile } from '../data/portfolio';

const Footer = () => {
  const socialLinks = [
    { name: 'Email', icon: Mail, href: `mailto:${profile.email}` },
    { name: 'LinkedIn', icon: Linkedin, href: profile.linkedin },
    { name: 'Twitter', icon: Twitter, href: profile.twitter },
    { name: 'GitHub', icon: Github, href: profile.github },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-950 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 to-dark-950" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            className="sm:col-span-2 lg:col-span-1 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-white">{profile.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              I build high-converting websites, CRM systems, and automation infrastructures that help businesses eliminate manual work and scale operations.
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
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
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
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/25 transition-all duration-200"
                    whileHover={{ y: -2 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Expertise</h3>
            <ul className="space-y-3">
              {expertiseAreas.map((area) => (
                <li key={area.title}>
                  <a href="#services" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 group-hover:bg-primary-400 transition-colors" />
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 group-hover:bg-primary-400 transition-colors" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href={`mailto:${profile.email}`} className="block hover:text-primary-400 transition-colors break-all">
                {profile.email}
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="block hover:text-primary-400 transition-colors">
                WhatsApp: {profile.phone}
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-primary-400 transition-colors">
                View Resume
              </a>
            </div>
            <motion.a
              href={profile.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-glow-blue"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={14} />
              Book a Call
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs text-gray-600 text-center sm:text-left">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href={profile.calendly} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-primary-400 transition-colors">
              Schedule a Call
            </a>
            <a href={`mailto:${profile.email}`} className="text-xs text-gray-600 hover:text-primary-400 transition-colors">
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
