import { motion } from 'framer-motion';
import { Quote, Star, ChevronRight, ChevronLeft, Circle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  company: string;
  avatar: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Samson completely transformed how I run my backend systems. From lead automations to calendar control — I don't know how I ever worked without him.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechFlow Solutions",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      quote: "Efficient, proactive, and super easy to work with. He saved me hours each week just by fixing my workflows. The automations he built are incredibly reliable.",
      author: "Michael Chen",
      role: "Founder",
      company: "Digital Marketing Agency",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      quote: "Samson took our messy manual onboarding and turned it into a seamless, automated machine. Our team's productivity has skyrocketed since we started working with him.",
      author: "Emily Rodriguez",
      role: "Operations Manager",
      company: "ConsultCorp",
      rating: 5,
      avatar: "ER"
    },
    {
      id: 4,
      quote: "The automation solutions Samson implemented saved us countless hours of manual work. His attention to detail and problem-solving skills are exceptional.",
      author: "David Kim",
      role: "CTO",
      company: "StartUp X",
      rating: 5,
      avatar: "DK"
    },
    {
      id: 5,
      quote: "Working with Samson was a game-changer for our business. He understood our needs quickly and delivered solutions that exceeded our expectations.",
      author: "Lisa Wong",
      role: "Operations Director",
      company: "Global Tech",
      rating: 5,
      avatar: "LW"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
      }, 8000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
    if (isAutoPlaying) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
      }, 8000);
    }
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1));
    if (isAutoPlaying) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
      }, 8000);
    }
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    if (isAutoPlaying) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
      }, 8000);
    }
  };

  // Group testimonials into chunks of 3 for carousel
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3));
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mb-4 text-sm font-medium text-primary-500 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
            Client Love
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            What Clients <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it — hear from the businesses I've helped transform.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-dark-800 shadow-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-900"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-dark-800 shadow-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-900"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonials Carousel */}
          <div 
            className="relative h-[600px] md:h-[400px] overflow-hidden"
            ref={containerRef}
          >
            <motion.div 
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${groupedTestimonials.length * 100}%`
              }}
              animate={{
                x: `-${activeIndex * 100}%`,
                transition: { type: 'spring', stiffness: 300, damping: 30 }
              }}
            >
              {groupedTestimonials.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0 flex flex-col md:flex-row gap-8 px-2">
                  {group.map((testimonial, index) => (
                    <motion.div 
                      key={testimonial.id}
                      className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-dark-700 flex-1 flex flex-col h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg`}>
                          {testimonial.avatar}
                        </div>
                        <div className="text-yellow-400 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={`${i < testimonial.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-700'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-1">
                        <Quote className="text-gray-200 dark:text-dark-700 mb-4" size={32} />
                        <p className="italic">"{testimonial.quote}"</p>
                      </blockquote>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700">
                        <div className="font-bold text-dark-900 dark:text-white">{testimonial.author}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role} • {testimonial.company}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {groupedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  index === activeIndex 
                    ? 'bg-primary-500 w-6 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dark-700 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">Ready to transform your business?</h3>
              <p className="text-gray-600 dark:text-gray-300">Join 50+ businesses that trust me with their automation needs</p>
            </div>
            <motion.a
              href="#contact"
              className="whitespace-nowrap px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;