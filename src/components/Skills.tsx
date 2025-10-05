import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Globe,
  Database,
  Wrench,
} from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-gradient-primary",
    skills: [
      { name: "Python", level: 80 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 75 },
    ],
  },
  {
    category: "Web Development",
    icon: Globe,
    color: "text-secondary",
    bgColor: "bg-gradient-accent",
    skills: [
      { name: "React.js", level: 92 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Bootstrap", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    category: "Database & Cloud",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-gradient-primary",
    skills: [
      { name: "SQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "Firebase", level: 90 },
    ],
  },
  {
    category: "Tools & Design",
    icon: Wrench,
    color: "text-primary",
    bgColor: "bg-gradient-accent",
    skills: [
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Storybook", level: 78 },
      { name: "Figma", level: 80 },
      { name: "Canva", level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ 
            opacity: 0, 
            y: -50,
            scale: 0.9
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            scale: 1
          }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technologies I work with to build modern web applications
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
                rotateX: -15
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                rotateX: 0
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                y: -8,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                {/* Static water ripple background effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 50%)"
                  }}
                />
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ 
                        opacity: 0, 
                        x: -50,
                        scale: 0.8
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        scale: 1
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.2 + skillIndex * 0.1,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "spring",
                        stiffness: 120,
                        damping: 12
                      }}
                      whileHover={{
                        x: 5,
                        transition: { 
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-muted rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ 
                            width: 0
                          }}
                          whileInView={{ 
                            width: `${skill.level}%`
                          }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.2 + skillIndex * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{
                            background: `linear-gradient(90deg, 
                              hsl(var(--gradient-start)) 0%, 
                              hsl(var(--gradient-mid)) 50%, 
                              hsl(var(--gradient-end)) 100%)`
                          }}
                        >
                          {/* Static shimmer effect */}
                          <div
                            className="absolute inset-0 opacity-30"
                            style={{
                              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                              width: "30%",
                              left: "35%"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial={{ 
            opacity: 0, 
            y: 50,
            scale: 0.95
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            scale: 1
          }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.6,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <Card className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Additional Expertise
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Responsive Design",
                "RESTful APIs",
                "Version Control",
                "Agile Methodology",
                "UI/UX Design",
                "Problem Solving",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ 
                    opacity: 0, 
                    x: -30,
                    scale: 0.8
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    scale: 1
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                  whileHover={{
                    x: 8,
                    scale: 1.05,
                    transition: { 
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-gradient-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.8 + index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    whileHover={{
                      scale: 1.5,
                      boxShadow: "0 0 20px hsl(var(--primary))",
                      transition: { duration: 0.2 }
                    }}
                  />
                  <span className="text-muted-foreground">{skill}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
