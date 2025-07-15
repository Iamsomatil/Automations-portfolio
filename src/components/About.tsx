import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, User, Target, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    { 
      icon: <CheckCircle className="text-green-400" size={20} />, 
      text: "Reliable",
      color: "from-green-500/10 to-green-500/5"
    },
    { 
      icon: <Target className="text-blue-400" size={20} />, 
      text: "Process-driven",
      color: "from-blue-500/10 to-blue-500/5"
    },
    { 
      icon: <Zap className="text-purple-400" size={20} />, 
      text: "Automation-obsessed",
      color: "from-purple-500/10 to-purple-500/5"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mb-4 text-sm font-medium text-primary-500 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Who I Am & <span className="text-gradient">How I Help</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div variants={item} className="flex items-center mb-6">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                <User className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white">Samson Akinsanya</h3>
            </motion.div>
            
            <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a tech-savvy Executive Virtual Assistant who brings structure, clarity, and speed to growing teams.
            </motion.p>
            
            <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With a background in high-level administrative support and a passion for systems, I specialize in simplifying complex workflows and optimizing day-to-day business operations. From calendar control to CRM automation, I help decision-makers focus on <span className="text-primary-600 dark:text-primary-400 font-medium">what matters most</span> — while I handle the rest.
            </motion.p>

            <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className={`flex items-center justify-center bg-gradient-to-br ${feature.color} p-4 rounded-xl shadow-sm border border-gray-100 dark:border-dark-700`}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="p-2 bg-white/80 dark:bg-dark-700/50 rounded-lg mr-3 shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                whileHover={{ y: -2, boxShadow: '0 4px 14px rgba(14, 165, 233, 0.39)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
                <ArrowRight className="ml-2" size={18} />
              </motion.a>
              <motion.a
                href="#portfolio"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-200 dark:border-dark-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 shadow-2xl overflow-hidden">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for new projects</span>
                  </div>
                  <div className="text-white/90 text-sm">
                    <p>🌍 Based in Lagos, Nigeria</p>
                    <p>⏰ Working across multiple time zones</p>
                    <p>🚀 Serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;