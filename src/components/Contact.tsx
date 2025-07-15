import { motion } from 'framer-motion';
import { Calendar, Mail, MessageSquare, ArrowRight, Clock, MapPin, CheckCircle, Zap, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from "@formspree/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'General Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [state, handleSubmit] = useForm("xblkjjly");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await handleSubmit(e);
      if (result) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent! I\'ll get back to you within 24 hours.'
        });
        setFormData({
          name: '',
          email: '',
          message: '',
          subject: 'General Inquiry'
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again later.'
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Calendar className="text-primary-400" size={24} />,
      title: "Book a Call",
      description: "Schedule a 30-minute discovery call to discuss your needs",
      cta: "Book Now",
      href: "https://calendly.com/somatil024/30min"
    },
    {
      icon: <Mail className="text-primary-400" size={24} />,
      title: "Email Me",
      description: "Send me a message and I'll get back to you within 24 hours",
      cta: "samsonoakinsanya@gmail.com",
      href: "mailto:samsonoakinsanya@gmail.com"
    },
    {
      icon: <MessageSquare className="text-primary-400" size={24} />,
      title: "WhatsApp Chat",
      description: "Chat with me in real-time during business hours",
      cta: "Message Now",
      href: "https://wa.me/2348168829686"
    }
  ];
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-fish-skin.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-primary-500/5"></div>
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mb-4 text-sm font-medium text-primary-400 bg-primary-50/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss how I can help automate your business? Let's talk!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href} target="_blank" rel="noopener noreferrer"
                className="group block bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-500/10 p-3 rounded-lg text-primary-400">
                    {method.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{method.description}</p>
                    <div className="mt-3 inline-flex items-center text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors">
                      {method.cta}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            <motion.div 
              className="bg-gradient-to-br from-primary-900/30 to-primary-500/10 border border-primary-500/20 rounded-xl p-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Quick Response</h3>
                  <p className="mt-1 text-sm text-gray-300">I typically respond within a few hours during business days.</p>
                  <div className="mt-3 flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1.5" />
                    <span>Monday - Friday: 9am - 5pm GMT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-white dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">Send Me a Message</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
              
              {submitStatus ? (
                <motion.div 
                  className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-green-800 dark:text-green-200 mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-700 dark:text-green-300">{submitStatus.message}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Discussion">Project Discussion</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      className={`w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                        isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                      }`}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="bg-gray-50 dark:bg-dark-700/50 px-8 py-6 border-t border-gray-200 dark:border-dark-600">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Based in Lagos, Nigeria</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;