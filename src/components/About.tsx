import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, School, Award } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const educationData = [
  {
    icon: GraduationCap,
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Manakula Vinyakar Institute Technology",
    period: "2022 - 2026 (Pursuing)",
    cgpa: "8.2 CGPA",
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
                  I am a dedicated Full Stack Developer with a strong foundation in both 
                  frontend and backend technologies. Currently pursuing my B.Tech in Computer 
                  Science and Engineering, I specialize in building responsive, scalable web 
                  applications using the MERN stack.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in creating seamless user experiences and implementing 
                  robust server-side solutions. I have hands-on experience with React.js, 
                  Node.js, Express.js, MongoDB, and Firebase, along with a solid understanding 
                  of web security, database management, and cloud technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through multiple internships and projects, I've developed a keen eye for 
                  detail and a commitment to writing clean, maintainable code. I'm always 
                  eager to learn new technologies and take on challenging projects that push 
                  my boundaries.
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
