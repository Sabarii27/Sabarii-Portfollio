import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Server,
  Globe,
  Database,
  Wrench,
} from "lucide-react";

const skillsData = [
  {
    category: "Java & Backend Development",
    icon: Server,
    color: "text-primary",
    bgColor: "bg-gradient-primary",
    skills: [
      "Java",
      "Core Java",
      "Java 8",
      "OOP",
      "Collections",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "JDBC",
      "Spring Security",
      "JWT",
    ],
  },

  {
    category: "MERN & Frontend Development",
    icon: Globe,
    color: "text-secondary",
    bgColor: "bg-gradient-accent",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase",
    ],
  },

  {
    category: "Databases",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-gradient-primary",
    skills: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase Firestore",
      "Database Design",
      "CRUD Operations",
    ],
  },

  {
    category: "Tools & Development",
    icon: Wrench,
    color: "text-primary",
    bgColor: "bg-gradient-accent",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "JUnit",
      "Docker",
      "Postman",
      "Linux",
      "VS Code",
      "Eclipse",
      "Agile / Scrum",
    ],
  },
];

const additionalSkills = [
  "Data Structures & Algorithms",
  "RESTful API Development",
  "Object-Oriented Programming",
  "Authentication & Authorization",
  "JWT & Role-Based Access Control",
  "Problem Solving",
  "Version Control",
  "Agile Development",
  "Responsive Design",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="gradient-text">
              Skills
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build full-stack applications
            across Java and MERN development
          </p>

        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {skillsData.map((category, index) => (

            <motion.div
              key={category.category}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.8,
                rotateX: -15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -8,
                rotateY: 3,
                transition: { duration: 0.3 },
              }}
            >

              <Card className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden group">

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 50%)",
                  }}
                />

                <div className="flex items-center gap-3 mb-6">

                  <div
                    className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}
                  >
                    <category.icon
                      className={`h-6 w-6 ${category.color}`}
                    />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {category.category}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-2">

                  {category.skills.map((skill, skillIndex) => (

                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay:
                          index * 0.1 +
                          skillIndex * 0.03,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      className="px-3 py-2 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20 cursor-default"
                    >
                      {skill}
                    </motion.span>

                  ))}

                </div>

              </Card>

            </motion.div>

          ))}

        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="mt-12 max-w-6xl mx-auto"
        >

          <Card className="glass-card p-8">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Code2 className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold gradient-text">
                Additional Expertise
              </h3>

            </div>

            <div className="flex flex-wrap gap-3">

              {additionalSkills.map((skill, index) => (

                <motion.div
                  key={skill}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="px-4 py-2 rounded-lg bg-muted text-muted-foreground border border-border"
                >
                  {skill}
                </motion.div>

              ))}

            </div>

          </Card>

        </motion.div>

      </div>
    </section>
  );
};