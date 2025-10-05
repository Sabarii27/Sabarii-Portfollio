import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
	// {
	// 	title: "Software Engineer",
	// 	company: "Tech Innovators",
	// 	location: "San Francisco, CA",
	// 	period: "January 2023 - Present",
	// 	type: "Ongoing",
	// 	description: [
	// 		"Developing scalable web applications using React and Node.js",
	// 		"Implementing CI/CD pipelines for efficient deployment",
	// 		"Collaborating with cross-functional teams to deliver high-quality software",
	// 		"Optimizing application performance and ensuring security compliance",
	// 	],
	// },
	{
		title: "Fullstack Development Intern",
		company: "Future Interns",
		location: "Virtual",
		period: "August 2025 - September 2025",
		type: "Completed",
		description: [
			"Developed responsive web applications using React.js and modern JavaScript",
			"Collaborated with cross-functional teams to implement new features",
			"Optimized application performance and improved user experience",
			"Gained hands-on experience with Git version control and agile workflows",
		],
	},
	{
		title: "Cyber Security Internship",
		company: "VEI Technologies",
		location: "Virtual",
		period: "March 2025 - April 2025",
		type: "Completed",
		description: [
			"Learned fundamentals of network security and vulnerability assessment",
			"Implemented security protocols and best practices for web applications",
			"Conducted security audits and penetration testing exercises",
			"Developed understanding of encryption techniques and secure communication",
		],
	},
	{
		title: "UI/UX Internship",
		company: "Cognifyz Technologies",
		location: "Virtual",
		period: "October - 2025",
		type: "Ongoing",
		description: [
			"Hands-on training in user-centered design and design thinking.",
			"Practical experience with Figma/Sketch for prototyping and wireframing.",
			"Implement designs on live products with senior designer mentorship.",
			"Learn user research, A/B testing, and accessibility (WCAG) standards.",
      
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
						<span className="gradient-text">Experience</span>
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						My professional journey and internship experiences in the tech industry
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
												<span
													className={`px-3 py-1 rounded-full text-sm font-medium w-fit mt-2 md:mt-0 ${
														exp.type === "Upcoming"
															? "bg-accent/10 text-accent border border-accent/20"
															: "bg-primary/10 text-primary border border-primary/20"
													}`}
												>
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
