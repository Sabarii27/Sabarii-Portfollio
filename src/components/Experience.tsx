import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Java Full Stack Developer Trainee",
    company:
      "Capgemini Technology Services & TNS India Foundation",
    location: "India",
    period: "2025 - 2026",
    type: "Training Program",
    description: [
      "Completed structured hands-on training in Core Java, Java 8, OOP, and backend development fundamentals",
      "Practiced Spring Framework, Spring Boot, Hibernate ORM, REST APIs, and SQL database operations",
      "Worked with frontend technologies including Angular, TypeScript, JavaScript, HTML5, and CSS3",
      "Practiced Git and GitHub workflows and participated in team-based exercises following Agile development practices",
    ],
  },

  {
    title: "Full Stack Development Intern",
    company: "Future Interns",
    location: "Virtual",
    period: "August 2025 - September 2025",
    type: "Completed",
    description: [
      "Developed responsive web applications using React.js and modern JavaScript",
      "Implemented frontend features and integrated application components",
      "Worked with Git version control and followed agile development workflows",
      "Improved practical understanding of full-stack web application development",
    ],
  },

  {
    title: "Cyber Security Intern",
    company: "VEI Technologies",
    location: "Virtual",
    period: "March 2025 - April 2025",
    type: "Completed",
    description: [
      "Learned fundamentals of network security and vulnerability assessment",
      "Practiced security concepts and secure communication techniques",
      "Worked with encryption and application security fundamentals",
      "Developed practical understanding of cybersecurity principles",
    ],
  },

  {
    title: "UI/UX Intern",
    company: "Cognifyz Technologies",
    location: "Virtual",
    period: "October 2025",
    type: "Completed",
    description: [
      "Gained practical exposure to user-centered design and design thinking",
      "Worked with wireframing and prototyping concepts",
      "Learned fundamentals of responsive and accessible interface design",
      "Improved understanding of user experience principles",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work{" "}
            <span className="gradient-text">
              Experience
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            My training, internship experience, and practical exposure
            to software development
          </p>

        </motion.div>

        <div className="max-w-4xl mx-auto">

          <div className="space-y-6">

            {experiences.map((exp, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                <Card className="glass-card p-6 hover:shadow-xl transition-all duration-300">

                  <div className="flex flex-col md:flex-row md:items-start gap-4">

                    <div className="p-3 rounded-lg bg-gradient-primary shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">

                        <div>

                          <h3 className="text-xl font-bold mb-1">
                            {exp.title}
                          </h3>

                          <p className="text-lg text-primary font-medium">
                            {exp.company}
                          </p>

                        </div>

                        <span className="px-3 py-1 rounded-full text-sm font-medium w-fit mt-2 md:mt-0 bg-primary/10 text-primary border border-primary/20">
                          {exp.type}
                        </span>

                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">

                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>

                      </div>

                      <ul className="space-y-2">

                        {exp.description.map((point, i) => (

                          <li
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground"
                          >

                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-primary mt-2 shrink-0" />

                            <span className="text-sm leading-relaxed">
                              {point}
                            </span>

                          </li>

                        ))}

                      </ul>

                    </div>
                  </div>

                </Card>

              </motion.div>

            ))}

          </div>

        </div>
      </div>
    </section>
  );
};