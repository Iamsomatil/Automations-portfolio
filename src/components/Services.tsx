import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight, Zap, CheckCircle, Clock, BarChart3, Mail, CalendarDays, FileText, Briefcase } from 'lucide-react';

interface ServiceFeature {
  text: string;
  icon: JSX.Element;
}

interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
  features: ServiceFeature[];
  color: string;
  buttonColor: string;
}

const Services = () => {
  const services: ServiceItem[] = [
    {
      icon: <Calendar className="text-purple-500" size={32} />,
      title: "Executive Support",
      description: "Complete administrative support to keep your business running smoothly.",
      features: [
        { text: "Inbox & calendar management", icon: <Mail size={16} /> },
        { text: "Meeting scheduling & reminders", icon: <CalendarDays size={16} /> },
        { text: "Document formatting & email handling", icon: <FileText size={16} /> },
        { text: "Travel coordination & client follow-ups", icon: <Briefcase size={16} /> }
      ],
      color: "from-purple-500/10 to-purple-500/5",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "Project Coordination",
      description: "Streamlined project management to keep your team organized and on track.",
      features: [
        { text: "Trello & Asana setup", icon: <CheckCircle size={16} /> },
        { text: "Team task boards + due date tracking", icon: <Clock size={16} /> },
        { text: "Weekly reporting & progress follow-up", icon: <BarChart3 size={16} /> },
        { text: "Meeting notes & action item logs", icon: <FileText size={16} /> }
      ],
      color: "from-blue-500/10 to-blue-500/5",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Zap className="text-indigo-500" size={32} />,
      title: "Workflow Automation",
      description: "Smart automation solutions that eliminate manual work and boost efficiency.",
      features: [
        { text: "Zapier & Make.com automations", icon: <Zap size={16} /> },
        { text: "CRM lead pipelines (GHL, HubSpot, Salesforce)", icon: <Users size={16} /> },
        { text: "Email sequences & auto-responders", icon: <Mail size={16} /> },
        { text: "Calendar workflows & reporting dashboards", icon: <BarChart3 size={16} /> }
      ],
      color: "from-indigo-500/10 to-indigo-500/5",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700"
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
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      } 
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mb-4 text-sm font-medium text-primary-500 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
            My Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            How I <span className="text-gradient">Support You</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's what I can take off your plate — and automate while I'm at it.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="group relative h-full"
              variants={item}
              whileHover="hover"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-300`}></div>
              <div className="relative h-full bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-dark-700 group-hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-opacity-10 flex items-center justify-center mb-6" style={{ backgroundColor: service.buttonColor.replace('hover:bg-', 'bg-').split(' ')[0] + '1a' }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-500 mr-3 mt-0.5 flex-shrink-0">
                        {feature.icon}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <motion.button 
                  className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white ${service.buttonColor} transition-colors duration-200`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn more
                  <ArrowRight className="ml-2" size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Ready to streamline your workflow and reclaim your time?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Free Consultation
            <ArrowRight className="ml-2" size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;