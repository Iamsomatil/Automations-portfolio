import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Quote, Star } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { testimonials } from '../data/portfolio';
import { cardItem, fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="section bg-gray-50 dark:bg-dark-950 relative overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-12">
          <SectionHeading
            align="center"
            eyebrow="References"
            title="Selected Client Feedback"
            description="A few representative comments from client work. The strongest proof on this site is in the case studies and systems detail above."
          />
        </div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-card transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-primary-500/20 hover:shadow-card-hover dark:border-white/10 dark:bg-white/[0.045]"
              variants={cardItem}
              whileHover={shouldReduceMotion ? undefined : 'hover'}
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
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary-400/30 bg-dark-900 text-sm font-bold text-primary-300">
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
        </motion.div>

        <motion.div
          className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-between gap-6 rounded-xl border border-primary-500 bg-primary-700 p-7 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-heading font-bold text-white">Open to new opportunities?</h3>
            <p className="text-primary-100 text-sm mt-1">If the systems work is relevant, I&apos;d be glad to talk through role fit or project needs.</p>
          </div>
          <motion.a
            href="#contact"
            className="group/cta inline-flex items-center gap-2 whitespace-nowrap px-6 py-3 bg-white text-primary-700 font-semibold text-sm rounded-xl hover:bg-primary-50 transition-[transform,background-color,box-shadow] duration-200 ease-out shadow-sm"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
            <ArrowRight size={15} className="transition-transform duration-200 ease-out group-hover/cta:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
