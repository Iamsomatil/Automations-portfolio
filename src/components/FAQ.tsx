import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { faqs } from '../data/portfolio';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions from recruiters, hiring managers, and companies interested in working with me."
          />
          <div className="section-divider mx-auto mt-5" />
        </div>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-primary-500/30 bg-primary-500/5 dark:bg-primary-500/8 shadow-sm'
                    : 'border-gray-200 dark:border-dark-700/60 bg-white dark:bg-dark-800/50 hover:border-primary-500/20'
                }`}
                initial={false}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm leading-snug transition-colors ${
                    isOpen ? 'text-primary-400' : 'text-dark-900 dark:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-primary-500/20 text-primary-400' : 'bg-gray-100 dark:bg-dark-700 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    <ChevronDown size={15} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-5">
                        <div className="w-full h-px bg-primary-500/15 mb-4" />
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            Don&apos;t see your question? I&apos;m happy to chat.
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary text-sm"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Ask Me Directly
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
