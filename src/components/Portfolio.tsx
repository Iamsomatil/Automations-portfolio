import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Clock, TrendingUp, Zap, ExternalLink, X, ChevronLeft, ChevronRight, Users, FileText, Calendar } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

interface ProjectMetric {
  label: string;
  value: string;
  icon: JSX.Element;
}

interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

interface Project {
  icon: JSX.Element;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: ProjectMetric[];
  color: string;
  bgColor: string;
  tags: string[];
  images: ProjectImage[];
  demoUrl?: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      icon: <Zap className="text-indigo-500" size={20} />,
      title: "Smart Email Intake & Routing System",
      challenge: "Client was overwhelmed with a chaotic inbox containing sales leads, support requests, and meeting pings all mixed together in one Gmail thread.",
      solution: "Built a multi-path automation system using Zapier as the central workflow engine, integrated with ChatGPT for intelligent email classification. The system automatically categorizes incoming emails and routes them to the appropriate team members and systems.",
      result: "Dramatically improved email management with automated routing, ensuring no leads or support requests fall through the cracks while keeping the entire team in sync.",
      metrics: [
        { label: "Manual Handling", value: "-70%", icon: <Clock size={16} /> },
        { label: "Lead Follow-up", value: "100%", icon: <TrendingUp size={16} /> },
        { label: "Response Time", value: "4x faster", icon: <Users size={16} /> },
        { label: "Systems Integrated", value: "5+", icon: <FileText size={16} /> }
      ],
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      tags: ["Zapier", "ChatGPT", "Gmail", "HubSpot", "Asana", "Slack", "Automation", "AI"],
      images: [
        { 
          url: "/Smart-Email intake-and-routing-system.png", 
          alt: "Smart Email Intake & Routing System workflow" 
        }
      ],
      demoUrl: "#"
    },
    {
      icon: <TrendingUp className="text-teal-500" size={20} />,
      title: "Automated Lead Nurture Workflow",
      challenge: "Client needed to ensure no lead fell through the cracks and wanted to streamline their lead management process across multiple platforms.",
      solution: "Built an end-to-end lead nurturing automation that connects HubSpot with Gmail, Asana, Slack, and Google Sheets using Make.com. The system automatically sends welcome emails, creates follow-up tasks, notifies the sales team, and maintains a centralized lead log.",
      result: "Created a seamless lead management system that ensures every lead is properly nurtured and followed up with, while keeping the entire team aligned and informed.",
      metrics: [
        { label: "Time Saved", value: "Hours/Week", icon: <Clock size={16} /> },
        { label: "Follow-up Speed", value: "Instant", icon: <TrendingUp size={16} /> },
        { label: "Team Alignment", value: "100%", icon: <Users size={16} /> },
        { label: "Tools Integrated", value: "6+", icon: <FileText size={16} /> }
      ],
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      tags: ["HubSpot", "Make.com", "Gmail", "Asana", "Slack", "Google Sheets", "Automation", "No-Code"],
      images: [
        { 
          url: "/Hubspot-crm-integration.png", 
          alt: "Lead Nurture Workflow automation" 
        }
      ],
      demoUrl: "#"
    },
    {
      icon: <Zap className="text-green-500" size={20} />,
      title: "Multi-App Zapier Integration",
      challenge: "Client needed to streamline their data collection and communication processes across multiple platforms.",
      solution: "Built advanced Zapier automation connecting Google Forms, Sheets, Gmail, Mailchimp, Slack. Developed multi-step Zapier workflow with Zapier paths, filters, triggers, actions. Integrated Zapier webhooks, data mapping, field validation, automated responses. Created Zapier branching logic, formatting, delays, error handling.",
      result: "Reduced manual data entry by 80% and improved team response time by 75% through seamless multi-app integration.",
      metrics: [
        { label: "Time Saved", value: "8+ hours/week", icon: <Clock size={16} /> },
        { label: "Error Rate", value: "-90%", icon: <TrendingUp size={16} /> },
        { label: "Platforms Connected", value: "5+", icon: <Users size={16} /> },
        { label: "Automation Steps", value: "20+", icon: <FileText size={16} /> }
      ],
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      tags: ["Zapier", "Google Forms", "Google Sheets", "Gmail", "Mailchimp", "Slack", "Automation"],
      images: [
        { 
          url: "/zapier-multiapp.png", 
          alt: "Multi-app Zapier integration workflow" 
        }
      ],
      demoUrl: "#"
    },
    {
      icon: <Users className="text-blue-500" size={20} />,
      title: "GoHighLevel Seminar Automation",
      challenge: "Business needed to streamline in-person seminar tracking and follow-up processes.",
      solution: "Set up GoHighLevel automation to track seminar attendance, manage customer records, and automate follow-up communications. The system automatically tags attendees, cleans up old tags, sends targeted follow-up emails, and organizes contacts for future marketing.",
      result: "Created an organized system for seminar tracking and follow-up that saves time, reduces manual work, and ensures no follow-ups are missed.",
      metrics: [
        { label: "Time Saved", value: "4+ hours/seminar", icon: <Clock size={16} /> },
        { label: "Follow-up Rate", value: "100%", icon: <TrendingUp size={16} /> },
        { label: "Automation Steps", value: "5+", icon: <FileText size={16} /> },
        { label: "Contact Organization", value: "100% automated", icon: <Users size={16} /> }
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      tags: ["GoHighLevel", "Automation", "Email Campaign", "Email Automation", "Marketing Automation"],
      images: [
        { 
          url: "/GHL-Onboarding.png", 
          alt: "GoHighLevel seminar automation workflow" 
        }
      ],
      demoUrl: "#"
    },
    {
      icon: <FileText className="text-purple-500" size={20} />,
      title: "Notion Real Estate Project Management",
      challenge: "Real estate agency needed a centralized system to streamline operations, track transactions, and manage client relationships.",
      solution: "Built a comprehensive Notion system for real estate professionals that includes property management, transaction tracking, client relationship management, and marketing campaign organization.",
      result: "Created an efficient, organized workspace that helps real estate professionals handle property sales, rental management, and marketing campaigns with clarity and efficiency.",
      metrics: [
        { label: "Time Saved", value: "10+ hours/week", icon: <Clock size={16} /> },
        { label: "Listing Speed", value: "+50%", icon: <TrendingUp size={16} /> },
        { label: "Components", value: "4+", icon: <FileText size={16} /> },
        { label: "User Roles", value: "Multiple", icon: <Users size={16} /> }
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      tags: ["Real Estate Virtual Assistance", "Project Management", "Real Estate", "Notion", "Real Estate Project Management Software"],
      images: [
        { 
          url: "/Notion1.png", 
          alt: "Real estate property management" 
        },
        { 
          url: "/Notion2.png", 
          alt: "Transaction tracking dashboard" 
        },
        { 
          url: "/Notion3.png", 
          alt: "Client relationship management" 
        }
      ],
      demoUrl: "#"
    },
    {
      icon: <ExternalLink className="text-orange-500" size={20} />,
      title: "Social Media Automation",
      challenge: "Business needed to streamline social media posting and team collaboration processes.",
      solution: "Integrated Airtable with Buffer for automated posting, used Make.com's router and iterator for data aggregation and formatting, and implemented real-time Slack notifications for team updates.",
      result: "Streamlined social media management workflow, improved team collaboration, and ensured timely updates through automation.",
      metrics: [
        { label: "Time Saved", value: "8+ hours/week", icon: <Clock size={16} /> },
        { label: "Error Rate", value: "-90%", icon: <TrendingUp size={16} /> },
        { label: "Platforms Connected", value: "5+", icon: <Users size={16} /> },
        { label: "Automation Steps", value: "20+", icon: <FileText size={16} /> }
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      tags: ["Make.com", "Airtable", "Buffer", "Marketing Automation"],
      images: [
        { 
          url: "/Make-Airtable.png", 
          alt: "Social media automation workflow" 
        }
      ],
      demoUrl: "#"
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
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

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const goToNextImage = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex(prev => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);

  const goToPrevImage = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex(prev => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }, [selectedProject]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeGallery();
      } else if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, goToNextImage, goToPrevImage]);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mb-4 text-sm font-medium text-primary-500 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from real clients — see how I've helped businesses streamline their operations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative h-full"
              variants={item}
              whileHover="hover"
            >
              <div className={`absolute inset-0 ${project.bgColor} rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-300`}></div>
              <div className="relative h-full bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-dark-700 group-hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Gallery Thumbnails */}
                {project.images && project.images.length > 0 && (
                  <div className="mb-6 overflow-hidden rounded-xl bg-gray-50 dark:bg-dark-700 h-40 relative group">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openGallery(project);
                        }}
                        className="px-4 py-2 bg-white dark:bg-dark-900 text-sm font-medium rounded-lg shadow-sm flex items-center hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        View Gallery
                      </button>
                    </div>
                    <img 
                      src={project.images[0].url} 
                      alt={project.images[0].alt || 'Project screenshot'} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-xl ${project.bgColor} flex items-center justify-center mb-6`}>
                  {project.icon && (() => {
                    const Icon = project.icon.type;
                    return <Icon className={`${project.color} w-5 h-5`} />;
                  })()}
                </div>
                
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-5 mb-6">
                  <div className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-500 dark:text-red-400 mb-2">Challenge</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.challenge}</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-500 dark:text-blue-400 mb-2">Solution</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.solution}</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                    <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Results</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.result}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-dark-700">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center bg-gray-50 dark:bg-dark-700 px-3 py-2 rounded-lg text-sm"
                      >
                        <span className={`${project.color} mr-2`}>{metric.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{metric.label}:</span>
                        <span className="font-bold text-dark-900 dark:text-white ml-1">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  {project.demoUrl && (
                    <div className="mt-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        View Live Demo <ExternalLink className="ml-1" size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>
            
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
              {/* Main Image */}
              <div className="relative bg-black rounded-xl overflow-hidden flex-1 flex items-center justify-center">
                <motion.img 
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex]?.url}
                  alt={selectedProject.images[currentImageIndex]?.alt || 'Project screenshot'}
                  className="max-w-full max-h-[70vh] object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Navigation Arrows */}
                <button 
                  className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevImage();
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage();
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full z-10">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="mt-4 flex space-x-2 overflow-x-auto py-2 px-1">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden transition-opacity ${
                      currentImageIndex === index ? 'ring-2 ring-primary-500' : 'opacity-60 hover:opacity-100'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt || `Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
              
              {/* Caption */}
              {selectedProject.images[currentImageIndex]?.caption && (
                <div className="mt-2 text-center text-gray-300 text-sm">
                  {selectedProject.images[currentImageIndex]?.caption}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
