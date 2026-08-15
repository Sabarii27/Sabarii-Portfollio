import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, School, Award } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const educationData = [
  {
    icon: GraduationCap,
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Manakula Vinayakar Institute Of Technology",
    period: "2022 - 2026 ",
    cgpa: "8.3 CGPA",
    color: "text-primary",
  },
  {
    icon: School,
    degree: "Higher Secondary (XII)",
    institution: "Lakshmi Chordia Memorial Matric Hr Sec School, Cuddalore",
    period: "2021 - 2022",
    cgpa: "85.0%",
    color: "text-secondary",
  },
  {
    icon: Award,
    degree: "Secondary School (X)",
    institution: "Lakshmi Chordia Memorial Matric Hr Sec School, Cuddalore",
    period: "2019 - 2020",
    cgpa: "90.0%",
    color: "text-accent",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate Full Stack Developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Profile Photo - Full Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-full min-h-[400px] max-h-[450px] rounded-xl overflow-hidden border-4 border-primary shadow-xl"
            >
              <img
                src={profileImg}
                alt="Sabarinathan M - Full Stack Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity" />
            </motion.div>
          </motion.div>

          {/* About Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Who I Am</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I’m a Computer Science and Engineering graduate and Full Stack Developer with hands-on experience building and deploying modern web applications. I enjoy turning ideas into reliable, user-focused solutions using technologies such as React.js, Node.js, Express.js, MongoDB, PostgreSQL, and Firebase.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I’ve built and deployed projects ranging from a role-based Visitor Pass Management System with JWT authentication and RBAC to a Secure Real-Time Messaging Application using MQTT and RSA-2048 encryption. These projects have strengthened my understanding of application architecture, authentication, databases, APIs, security, and real-world deployment.
                  I also gained professional experience as a Full Stack Development Intern, where I worked with React.js, Bootstrap 5, Firebase Authentication, Firestore, Git, CI/CD, and Agile/Scrum practices
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I’m passionate about writing clean, maintainable code, solving real-world problems, and continuously improving my technical skills. As a recent B.Tech Computer Science and Engineering graduate from Manakula Vinayagar Institute of Technology, I’m looking for opportunities where I can contribute as a Full Stack Developer, learn from experienced teams, and build scalable applications that create real value.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Education</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-primary`}>
                      <edu.icon className={`h-6 w-6 ${edu.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col gap-2 text-sm">
                        <span className="text-primary font-medium">{edu.period}</span>
                        <span className="text-accent font-medium">{edu.cgpa}</span>
                      </div>
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
