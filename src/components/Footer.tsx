import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github, Clock, MapPin, Send, Zap, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with:', email);
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription status after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const services = [
    { name: 'Executive Support', href: '#services' },
    { name: 'Project Coordination', href: '#services' },
    { name: 'Workflow Automation', href: '#services' },
    { name: 'CRM Management', href: '#services' },
    { name: 'Process Optimization', href: '#services' }
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'My Tech Stack', href: '#tech-stack' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Email', icon: Mail, href: 'mailto:samsonoakinsanya@gmail.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/samsonakinsanya/' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/Somatill' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Iamsomatil' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-dark-900 to-dark-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-fish-skin.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-transparent"></div>
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-primary-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand and description */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-200">
                Samson A.
              </span>
            </div>
            <p className="text-gray-400">
              Helping businesses scale smarter through strategic automation and efficient workflow solutions.
            </p>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">SUBSCRIBE TO NEWSLETTER</h4>
              {isSubscribed ? (
                <motion.div 
                  className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Thank you for subscribing! 🎉
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-white/5 border border-gray-800 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center"
                  >
                    <Send className="w-4 h-4 mr-1.5" />
                    Join
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  className="group"
                  onHoverStart={() => setIsHovered(index)}
                  onHoverEnd={() => setIsHovered(null)}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                >
                  <a 
                    href={service.href}
                    className="flex items-center text-gray-400 hover:text-primary-400 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3"
                      animate={isHovered === index ? { scale: 1.5 } : { scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                    {service.name}
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  className="group"
                  onHoverStart={() => setIsHovered(index + 10)}
                  onHoverEnd={() => setIsHovered(null)}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                >
                  <a 
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-primary-400 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3"
                      animate={isHovered === index + 10 ? { scale: 1.5 } : { scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-400">Lagos, Nigeria</p>
                    <p className="text-xs text-gray-500">Serving clients worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="ml-3">
                    <a href="mailto:samsonoakinsanya@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                      samsonoakinsanya@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-400">Monday - Friday</p>
                    <p className="text-xs text-gray-500">9:00 AM - 5:00 PM GMT</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">FOLLOW ME</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary-500/10 border border-white/5 hover:border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} Samson Akinsanya. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;