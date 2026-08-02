import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { faqs } from '../data/portfolio';
import { cardItem, fadeUp, staggerContainer, transitions, viewportOnce } from '../lib/motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions from recruiters and hiring managers evaluating my fit for automation, integrations, and systems-focused roles."
          />
        </div>

        <motion.div
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-primary-500/30 bg-primary-500/5 dark:bg-primary-500/8 shadow-sm'
                    : 'border-gray-200 dark:border-dark-700/60 bg-white dark:bg-dark-800/50 hover:border-primary-500/20 hover:shadow-card'
                }`}
                variants={cardItem}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                layout="position"
              >
                <button
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className={`font-semibold text-sm leading-snug transition-colors ${
                    isOpen ? 'text-primary-400' : 'text-dark-900 dark:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={transitions.quick}
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
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={transitions.smooth}
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
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            Don&apos;t see your question? I&apos;m happy to chat.
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary text-sm"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
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
