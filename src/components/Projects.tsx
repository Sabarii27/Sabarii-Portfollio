import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ecommerceImg from "@/assets/projects/ecommerce.jpg";
import secureChatImg from "@/assets/projects/secure-chat.jpg";
import diningImg from "@/assets/projects/dining-reservation.jpg";
import hospitalImg from "@/assets/projects/hospital-management.jpg";
import gaitImg from "@/assets/projects/gait-recognition.jpg";
import realtimeChatImg from "@/assets/projects/realtime-chat.jpg";
import taskManagerImg from "@/assets/projects/task-manager.jpg";
import analyticsImg from "@/assets/projects/analytics.jpg";
import weatherImg from "@/assets/projects/weather-app.jpg";
import ckdImg from "@/assets/projects/CKD_HYP.jpg";
import visitorImg from "@/assets/projects/visitor-pass.jpg";
import expenseImg from "@/assets/projects/expense-tracker.jpg";

const projects = [
  {
    title: "Hypertension & Chronic Kidney Disease Prediction Using Deep Learning",
    description:
        "A deep learning-based healthcare project that analyzes retinal images to identify early signs associated with hypertension and chronic kidney disease. The system aims to support early prediction by extracting relevant patterns from retinal images and providing disease-risk predictions through an automated image-based approach.",
    tech: ["Python", "Deep Learning", "Retinal Image Processing", "Medical Image Analysis", ],
    image: ckdImg,
    liveUrl: "https://github.com/Sabarii27/CKD_Hypertension-prediction",
    githubUrl: "https://github.com/Sabarii27/CKD_Hypertension-prediction",
    featured: true,
  },
  {
    title: "Visitor Pass Management System",
    description:
      "A full-stack visitor management system designed to streamline visitor registration, scheduling, and access management. Features JWT-based authentication, role-based access control for Admin, Receptionist, and Employee, visit validation, activity tracking, and role-specific dashboards. Built with React.js, Node.js, Express.js, MongoDB, and deployed using Vercel and Render.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", ],
    image: visitorImg,
    liveUrl: " https://visitor-pass-system-yiew.vercel.app/",
    githubUrl: "https://github.com/Sabarii27/Visitor-Pass-System",
    featured: true,
  },
  {
    title: "Responsive E-Commerce Website for Organic Groceries",
    description:
      "A fully responsive e-commerce platform for organic groceries featuring user authentication, shopping cart functionality, and secure payment processing. Includes product catalog with filtering, wishlist management, and order tracking system.",
    tech: ["React.js", "Bootstrap", "Firebase", "vite" ],
    image: ecommerceImg,
    liveUrl: "https://future-fs-02-iota.vercel.app/",
    githubUrl: "https://github.com/Sabarii27/FUTURE_FS_02",
    featured: true,
  },
  {
    title: "Secure Communication Application",
    description:
      "End-to-end encrypted messaging application implementing RSA encryption for secure communication. Features real-time messaging, file sharing, group chats, and message status indicators with military-grade security protocols.",
    tech: ["Python", "Tkinter", "RSA Encryption", ],
    image: secureChatImg,
    liveUrl: "https://github.com/Sabarii27/Secure-Communication-Transmission",
    githubUrl: "https://github.com/Sabarii27/Secure-Communication-Transmission",
    featured: true,
  },
  {
    title: "ReBrand the Starbucks Website",
    description:
      "Complete redesign of Starbucks website with modern UI/UX principles. Features responsive design, interactive menu, store locator, rewards program integration, and enhanced user experience with smooth animations.",
    tech: ["NextJs", "Typescript", "Firebase", "Bootstrap"],
    image: diningImg,
    liveUrl: "https://future-fs-03-flax.vercel.app/",
    githubUrl: "https://github.com/Sabarii27/FUTURE_FS_03",
    featured: false,
  },
  {
    title: "Interactive Resume Builder",
    description:
      "Dynamic web application for creating professional resumes with multiple templates, real-time preview, and PDF export functionality. Includes drag-and-drop interface, custom styling options, and cloud storage integration.",
    tech: ["React.js", "TailwindCSS", "PDF-lib", "Vite"],
    image: hospitalImg,
    liveUrl: "https://interactive-resume-builder-ruby.vercel.app/",
    githubUrl: "https://github.com/Sabarii27/Interactive-Resume-Builder",
    featured: false,
  },
  {
    title: "Advanced To-Do List",
    description:
      "Feature-rich task management application with priority levels, due dates, categories, and progress tracking. Includes drag-and-drop functionality, search filters, dark mode, and local storage persistence.",
    tech: ["React.js", "Bootstrap", "Tailwind CSS", "Framer Motion", ],
    image: gaitImg,
    liveUrl: "https://advanced-to-do-list-sage.vercel.app/",
    githubUrl: "https://github.com/Sabarii27/Advanced-To-Do-List",
    featured: true,
  },
  {
    title: "Bakery Website",
    description:
      "Elegant bakery website showcasing products, services, and online ordering system. Features product gallery, customer reviews, contact forms, location maps, and integrated payment system for online orders.",
    tech: ["HTML5", "CSS3", "JavaScript", "MySQL"],
    image: realtimeChatImg,
    liveUrl: "https://sabarii27.github.io/cake-bakery/",
    githubUrl: "https://github.com/Sabarii27/cake-bakery",
    featured: false,
  },
  {
    title: "Fashion Retail Website",
    description:
      "Modern e-commerce platform for fashion retail with product catalogs, size guides, wishlist functionality, and secure checkout. Includes inventory management, order tracking, and customer review system.",
    tech: ["HTML", "CSS", "Javascript", "Vercel"],
    image: taskManagerImg,
    liveUrl: "https://e-commerce-website-for-fashion-reta.vercel.app/",
    githubUrl: "https://github.com/Sabarii27/E-Commerce-Website-for-Fashion-Retailll",
    featured: false,
  },
  {
    title: "Portfolio - Intern Project",
    description:
      "Professional portfolio website developed during internship showcasing projects, skills, and experience. Features responsive design, smooth animations, contact forms, and optimized performance for all devices.",
    tech: ["HTML", "CSS", "Javascript", "Vercel"],
    image: analyticsImg,
    liveUrl: "https://future-fs-01-mu.vercel.app/",
    githubUrl: "https://github.com/Sabarii27/FUTURE_FS_01",
    featured: false,
  },
  {
    title: "ClickNseat - Ticket Booking UI/UX Design",
    description:
      "Complete UI/UX design for a ticket booking application with intuitive seat selection, event browsing, booking management, and secure payment integration. Features interactive seat maps, event filtering, and streamlined checkout process.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Wireframing"],
    image: weatherImg,
    liveUrl: "https://www.figma.com/proto/MbX7LllLei0k8Di4NapHnw/clickNseat?node-id=1-2&t=9LH9yqEiNuxyXXD7-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    githubUrl: "https://www.figma.com/design/MbX7LllLei0k8Di4NapHnw/clickNseat?node-id=1-86&t=9LH9yqEiNuxyXXD7-0",
    featured: false,
  },
  // {
  //   title: "Expense Tracker & Budget Planner",
  //   description:
  //     "Personal finance management tool with expense categorization, budget planning, spending insights, and financial goal tracking with interactive charts and reports.",
  //   tech: ["React", "Node.js", "MongoDB", "Recharts"],
  //   image: expenseImg,
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },
];

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = useIsMobile();
  
  // On mobile, show only first 5 projects unless "Show More" is clicked
  const projectsToShow = isMobile && !showAllProjects ? projects.slice(0, 5) : projects;
  const hasMoreProjects = isMobile && projects.length > 5;

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects demonstrating various technical skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.6,
                ease: "easeOut"
              }}
              layout
            >
              <Card
                className={`glass-card overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  project.featured ? "border-2 border-primary/30" : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-primary text-white">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More Projects Button - Mobile Only */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base font-medium hover:bg-primary/10 transition-all duration-300"
            >
              {showAllProjects ? (
                <>
                  <ChevronUp className="h-5 w-5 mr-2" />
                  Show Less Projects
                </>
              ) : (
                <>
                  <ChevronDown className="h-5 w-5 mr-2" />
                  Show More Projects ({projects.length - 5} more)
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
