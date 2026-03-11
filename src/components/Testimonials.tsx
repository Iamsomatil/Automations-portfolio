import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const groupedTestimonials: typeof testimonials[] = [];
  for (let index = 0; index < testimonials.length; index += 3) {
    groupedTestimonials.push(testimonials.slice(index, index + 3));
  }

  const totalSlides = groupedTestimonials.length;

  useEffect(() => {
    if (!isAutoPlaying) return undefined;

    intervalRef.current = setInterval(() => {
      setActiveIndex((index) => (index + 1) % totalSlides);
    }, 7000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, totalSlides]);

  const navigateTo = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-15" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            align="center"
            eyebrow="Social Proof"
            title="What People Say About My Work"
            description="Feedback from founders, operators, and leaders I&apos;ve worked with to build and automate their systems."
          />
          <div className="section-divider mx-auto mt-5" />
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              style={{ width: `${groupedTestimonials.length * 100}%` }}
            >
              {groupedTestimonials.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col md:flex-row gap-5 px-1"
                  style={{ width: `${100 / groupedTestimonials.length}%` }}
                >
                  {group.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      className="flex-1 bg-white dark:bg-dark-800/70 rounded-2xl p-6 border border-gray-100 dark:border-dark-700/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
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
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[(testimonial.id - 1) % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-dark-900 dark:text-white">{testimonial.author}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {testimonial.role} · {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={() => navigateTo((activeIndex - 1 + totalSlides) % totalSlides)}
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:border-primary-500/40 hover:text-primary-400 transition-all flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {groupedTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => navigateTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary-500 w-6 h-2.5' : 'bg-gray-300 dark:bg-dark-700 w-2.5 h-2.5 hover:bg-primary-300'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => navigateTo((activeIndex + 1) % totalSlides)}
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:border-primary-500/40 hover:text-primary-400 transition-all flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
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
            <p className="text-primary-100 text-sm mt-1">Let&apos;s explore how I can contribute to your team or project.</p>
          </div>
          <motion.a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 bg-white text-primary-700 font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors shadow-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Work With Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
