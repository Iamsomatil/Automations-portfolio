import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { testimonials } from '../data/portfolio';

const avatarColors = [
  'from-primary-500 to-primary-600',
  'from-purple-500 to-purple-600',
  'from-emerald-500 to-emerald-600',
  'from-orange-500 to-orange-600',
  'from-rose-500 to-rose-600',
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-15" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            align="center"
            eyebrow="References"
            title="Selected Client Feedback"
            description="A few representative comments from client work. The strongest proof on this site is in the case studies and systems detail above."
          />
          <div className="section-divider mx-auto mt-5" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              className="bg-white dark:bg-dark-800/70 rounded-2xl p-6 border border-gray-100 dark:border-dark-700/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, ratingIndex) => (
                  <Star
                    key={ratingIndex}
                    size={14}
                    className={ratingIndex < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-dark-600'}
                  />
                ))}
              </div>

              <Quote className="text-primary-500/25 mb-2" size={28} />
              <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic flex-grow">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-dark-700 flex items-center gap-3">
                {testimonial.logoUrl ? (
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white p-1.5 dark:border-dark-700 dark:bg-dark-900">
                    <img
                      src={testimonial.logoUrl}
                      alt={`${testimonial.company} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[(testimonial.id - 1) % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {testimonial.avatar}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-sm text-dark-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-14 max-w-2xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-7 shadow-glow-blue flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-heading font-bold text-white">Open to new opportunities?</h3>
            <p className="text-primary-100 text-sm mt-1">If the systems work is relevant, I&apos;d be glad to talk through role fit or project needs.</p>
          </div>
          <motion.a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 bg-white text-primary-700 font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors shadow-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
