import React from 'react';
import { Zap, Database, FileText, CheckSquare, MessageSquare, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ToolCategory {
  title: string;
  icon: JSX.Element;
  tools: string[];
  color: string;
  bgColor: string;
}

const Tools = () => {
  const toolCategories: ToolCategory[] = [
    {
      title: "Automation",
      icon: <Zap className="text-yellow-500" size={20} />,
      tools: ["Zapier", "Make.com", "n8n", "Power Automate"],
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      title: "CRM & Sales",
      icon: <Database className="text-blue-500" size={20} />,
      tools: ["Go High Level", "HubSpot", "Salesforce", "Pipedrive"],
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Productivity",
      icon: <FileText className="text-green-500" size={20} />,
      tools: ["Notion", "Google Workspace", "Microsoft 365", "Airtable"],
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Project Management",
      icon: <CheckSquare className="text-purple-500" size={20} />,
      tools: ["Trello", "Asana", "ClickUp", "Monday.com"],
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "Communication",
      icon: <MessageSquare className="text-indigo-500" size={20} />,
      tools: ["Slack", "Zoom", "Google Meet", "Loom"],
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      title: "Marketing",
      icon: <MessageSquare className="text-pink-500" size={20} />,
      tools: ["Mailchimp", "ActiveCampaign", "ConvertKit", "Klaviyo"],
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
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
    <section id="tools" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mb-4 text-sm font-medium text-primary-500 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
            My Toolbox
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The tools and technologies I use to streamline operations and boost productivity for your business.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {toolCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="group relative h-full"
              variants={item}
              whileHover="hover"
            >
              <div className={`absolute inset-0 ${category.bgColor} rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-300`}></div>
              <div className="relative h-full bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dark-700 group-hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mb-4`}>
                  {React.cloneElement(category.icon, { className: `${category.color} w-6 h-6` })}
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">{category.title}</h3>
                <ul className="space-y-3 mb-6">
                  {category.tools.map((tool, i) => (
                    <li key={i} className="flex items-center">
                      <ChevronRight className={`${category.color} w-4 h-4 mr-2 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{tool}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700">
                  <span className="inline-flex items-center text-sm font-medium text-primary-500 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    Explore {category.title.toLowerCase()}
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Want to see how these tools can transform your business operations?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Talk Tech
            <ChevronRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;