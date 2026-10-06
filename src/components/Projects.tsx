import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
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

const projects = [

  /* =========================
     JAVA FULL STACK PROJECTS
     ========================= */

  {
    title: "CartNova — E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with Java and Spring Boot. The platform provides product management, product search, shopping cart, order placement, order history, and role-based access for Admin and User. The React frontend communicates with REST APIs secured using Spring Security and JWT.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Spring Security",
      "JWT",
      "React.js",
      "Maven",
      "JUnit",
      "Docker",
    ],
    image: ecommerceImg,

    // Replace these with your actual hosted URLs
    liveUrl: "YOUR_CARTNOVA_LIVE_URL",
    githubUrl: "YOUR_CARTNOVA_GITHUB_URL",

    featured: true,
    category: "Java Full Stack",
  },

  {
    title: "SeatSync — Concurrent Ticket Booking System",
    description:
      "A full-stack ticket booking system developed with Java and Spring Boot. The application supports event and show selection, seat availability, seat booking, booking history, and cancellation. Transaction management and database locking are used to handle concurrent booking requests and prevent double booking.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Apache Kafka",
      "React.js",
      "JUnit",
      "Docker",
    ],
    image: weatherImg,

    // Replace these with your actual hosted URLs
    liveUrl: "YOUR_SEATSYNC_LIVE_URL",
    githubUrl: "YOUR_SEATSYNC_GITHUB_URL",

    featured: true,
    category: "Java Full Stack",
  },

  /* =========================
     MERN PROJECTS
     ========================= */

  {
    title: "Visitor Pass Management System",
    description:
      "A full-stack visitor management system designed to streamline visitor registration, scheduling, and access management. Features JWT authentication, role-based access control for Admin, Receptionist, and Employee, visit validation, activity tracking, and role-specific dashboards.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "Vercel",
      "Render",
    ],
    image: visitorImg,
    liveUrl:
      "https://visitor-pass-system-yiew.vercel.app/",
    githubUrl:
      "https://github.com/Sabarii27/Visitor-Pass-System",
    featured: true,
    category: "MERN",
  },

  {
    title: "Responsive E-Commerce Website for Organic Groceries",
    description:
      "A responsive e-commerce platform for organic groceries featuring authentication, product catalog, filtering, shopping cart, wishlist functionality, and order management.",
    tech: [
      "React.js",
      "Bootstrap",
      "Firebase",
      "Vite",
    ],
    image: ecommerceImg,
    liveUrl:
      "https://future-fs-02-iota.vercel.app/",
    githubUrl:
      "https://github.com/Sabarii27/FUTURE_FS_02",
    featured: true,
    category: "MERN / React",
  },

  /* =========================
     OTHER PROJECTS
     ========================= */

  {
    title: "Hypertension & Chronic Kidney Disease Prediction Using Deep Learning",
    description:
      "A deep learning-based healthcare project that analyzes retinal images to identify patterns associated with hypertension and chronic kidney disease. The system processes retinal images and provides automated disease-risk predictions.",
    tech: [
      "Python",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Retinal Image Processing",
    ],
    image: ckdImg,
    liveUrl:
      "https://github.com/Sabarii27/CKD_Hypertension-prediction",
    githubUrl:
      "https://github.com/Sabarii27/CKD_Hypertension-prediction",
    featured: true,
    category: "Machine Learning",
  },

  {
    title: "Secure Communication Application",
    description:
      "A secure communication application implementing RSA-based encryption for protected message transmission. The project demonstrates secure communication concepts, encryption, and desktop application development.",
    tech: [
      "Python",
      "Tkinter",
      "RSA Encryption",
      "MQTT",
    ],
    image: secureChatImg,
    liveUrl:
      "https://github.com/Sabarii27/Secure-Communication-Transmission",
    githubUrl:
      "https://github.com/Sabarii27/Secure-Communication-Transmission",
    featured: true,
    category: "Python / Security",
  },

  {
    title: "ReBrand the Starbucks Website",
    description:
      "A responsive redesign of the Starbucks website focusing on modern UI/UX, responsive layouts, interactive sections, and improved user experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Bootstrap",
    ],
    image: diningImg,
    liveUrl:
      "https://future-fs-03-flax.vercel.app/",
    githubUrl:
      "https://github.com/Sabarii27/FUTURE_FS_03",
    featured: false,
    category: "Frontend",
  },

  {
    title: "Interactive Resume Builder",
    description:
      "A web application for creating professional resumes with multiple templates, real-time preview, customization options, and PDF export functionality.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "PDF-lib",
      "Vite",
    ],
    image: hospitalImg,
    liveUrl:
      "https://interactive-resume-builder-ruby.vercel.app/",
    githubUrl:
      "https://github.com/Sabarii27/Interactive-Resume-Builder",
    featured: false,
    category: "React",
  },

  {
    title: "Advanced To-Do List",
    description:
      "A feature-rich task management application with priority levels, due dates, categories, progress tracking, search, filters, dark mode, and local storage persistence.",
    tech: [
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: gaitImg,
    liveUrl:
      "https://advanced-to-do-list-sage.vercel.app/",
    githubUrl:
      "https://github.com/Sabarii27/Advanced-To-Do-List",
    featured: false,
    category: "React",
  },

  {
    title: "Bakery Website",
    description:
      "A responsive bakery website showcasing products, services, customer reviews, contact information, location details, and online ordering features.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
    ],
    image: realtimeChatImg,
    liveUrl:
      "https://sabarii27.github.io/cake-bakery/",
    githubUrl:
      "https://github.com/Sabarii27/cake-bakery",
    featured: false,
    category: "Web Development",
  },

  {
    title: "Fashion Retail Website",
    description:
      "A modern fashion e-commerce website with product catalogs, size guides, wishlist functionality, product details, and customer-oriented shopping features.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel",
    ],
    image: taskManagerImg,
    liveUrl:
      "https://e-commerce-website-for-fashion-reta.vercel.app/",
    githubUrl:
      "https://github.com/Sabarii27/E-Commerce-Website-for-Fashion-Retailll",
    featured: false,
    category: "Web Development",
  },

  {
    title: "Portfolio — Intern Project",
    description:
      "A responsive portfolio website developed during internship to showcase projects, skills, experience, and professional information.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel",
    ],
    image: analyticsImg,
    liveUrl:
      "https://future-fs-01-mu.vercel.app/",
    githubUrl:
      "https://github.com/Sabarii27/FUTURE_FS_01",
    featured: false,
    category: "Frontend",
  },

  {
    title: "ClickNseat — Ticket Booking UI/UX Design",
    description:
      "A UI/UX design for a ticket booking application featuring event browsing, interactive seat selection, booking management, and streamlined checkout flows.",
    tech: [
      "Figma",
      "UI/UX Design",
      "Prototyping",
      "User Research",
      "Wireframing",
    ],
    image: weatherImg,
    liveUrl:
      "https://www.figma.com/proto/MbX7LllLei0k8Di4NapHnw/clickNseat",
    githubUrl:
      "https://www.figma.com/design/MbX7LllLei0k8Di4NapHnw/clickNseat",
    featured: false,
    category: "UI/UX",
  },
];

export const Projects = () => {

  const [showAllProjects, setShowAllProjects] =
    useState(false);

  const isMobile = useIsMobile();

  const projectsToShow =
    isMobile && !showAllProjects
      ? projects.slice(0, 5)
      : projects;

  const hasMoreProjects =
    isMobile && projects.length > 5;

  return (
    <section id="projects" className="py-20 relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="gradient-text">
              Projects
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects built across Java Full Stack,
            MERN, machine learning, cybersecurity, and frontend
            development
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projectsToShow.map((project, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.6,
                ease: "easeOut",
              }}
              layout
            >

              <Card
                className={`glass-card overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  project.featured
                    ? "border-2 border-primary/30"
                    : ""
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

                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-background/90 text-primary border border-primary/20 backdrop-blur-sm">
                    {project.category}
                  </span>

                </div>

                <div className="p-6 flex flex-col flex-grow">

                  <h3 className="text-xl font-bold mb-3">
                    {project.title}
                  </h3>

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
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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

        {/* Mobile Show More */}
        {hasMoreProjects && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-center mt-12"
          >

            <Button
              onClick={() =>
                setShowAllProjects(!showAllProjects)
              }
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
                  Show More Projects (
                  {projects.length - 5} more)
                </>
              )}

            </Button>

          </motion.div>

        )}

      </div>

    </section>
  );
};