import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { Briefcase, GraduationCap, FileText } from 'lucide-react';

const experiences = [
    {
        type: 'internship',
        icon: Briefcase,
        title: 'NSIC Internship',
        subtitle: 'Data Analysis',
        description: [
            'Hands-on exposure to data analysis and industry-oriented technical concepts',
            'Applied programming and analytical skills to real-world scenarios',
        ],
        color: 'bg-primary',
    },
    {
        type: 'research',
        icon: FileText,
        title: 'Research Paper Publication',
        subtitle: 'AI for Disaster Response and Relief',
        description: [
            'AI-based flood impact prediction using satellite image analysis',
            'Improved disaster response planning through machine learning',
        ],
        color: 'bg-secondary',
    },
    {
        type: 'education',
        icon: GraduationCap,
        title: 'P.S.V College of Engineering and Technology',
        subtitle: 'B.Tech – AI and Data Science | CGPA: 8.3',
        description: [
            'Strong foundation in AI, machine learning, and core CS subjects',
            'Active participation in projects and technical initiatives',
        ],
        color: 'bg-accent',
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-6">
                <SectionReveal>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary font-mono text-sm">03.</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold">Experience</h2>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                </SectionReveal>

                <div className="mt-12 relative">
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <SectionReveal key={exp.title} delay={0.1 * index} direction={index % 2 === 0 ? 'left' : 'right'}>
                                <motion.div
                                    className="relative flex gap-6 md:gap-12"
                                    whileHover={{ x: 10 }}
                                >
                                    <motion.div
                                        className={`hidden md:flex w-16 h-16 rounded-full ${exp.color} items-center justify-center shrink-0 shadow-lg relative z-10`}
                                        whileHover={{ scale: 1.1 }}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                                    >
                                        <exp.icon className="w-7 h-7 text-background" />
                                    </motion.div>

                                    <motion.div
                                        className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`md:hidden w-12 h-12 rounded-full ${exp.color} flex items-center justify-center shrink-0`}>
                                                <exp.icon className="w-6 h-6 text-background" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-muted-foreground">{exp.subtitle}</p>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.description.map((point, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-3 text-muted-foreground"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                    {point}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </motion.div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;