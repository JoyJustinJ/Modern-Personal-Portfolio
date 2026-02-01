import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import BlockReveal from './BlockReveal';
import { ExternalLink, Github, Hand, Camera, Leaf, Layout } from 'lucide-react';

const projects = [
    {
        title: 'Gesture Control System',
        description: 'Real-time gesture recognition system using computer vision techniques. Enables touchless system interaction by mapping gestures to predefined commands.',
        tech: ['Python', 'Computer Vision', 'Machine Learning', 'OpenCV'],
        icon: Hand,
        gradient: 'from-primary to-secondary',
    },
    {
        title: 'Animal Image Classifier',
        description: 'Machine learning-based animal image classification system with advanced feature extraction and model training capabilities.',
        tech: ['Python', 'Machine Learning', 'TensorFlow', 'Image Processing'],
        icon: Camera,
        gradient: 'from-secondary to-accent',
    },
    {
        title: 'Coconut Tree Disease Prediction',
        description: 'AI-powered disease detection system using image-based ML models for early identification and agricultural decision support.',
        tech: ['Python', 'Machine Learning', 'CNN', 'Agriculture AI'],
        icon: Leaf,
        gradient: 'from-accent to-primary',
    },
    {
        title: 'Modern Personal Portfolio',
        description: 'A responsive and interactive portfolio website featuring smooth animations, dark mode, and a custom design system.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        icon: Layout,
        gradient: 'from-primary to-accent',
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6">
                <SectionReveal>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary font-mono text-sm">04.</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h2>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                </SectionReveal>

                <div className="grid lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <BlockReveal key={project.title} delay={0.1 * index}>
                            <motion.div
                                className="group relative h-full"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                                />

                                <div className="relative h-full p-6 rounded-2xl bg-card border border-border group-hover:border-transparent transition-colors flex flex-col">
                                    <motion.div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6`}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <project.icon className="w-7 h-7 text-background" />
                                    </motion.div>

                                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <motion.a
                                            href="#"
                                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-hover"
                                            whileHover={{ x: 5 }}
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </motion.a>
                                        <motion.a
                                            href="#"
                                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-hover"
                                            whileHover={{ x: 5 }}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Demo
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </BlockReveal>
                    ))}
                </div>

                <SectionReveal delay={0.4}>
                    <motion.div
                        className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                <span className="text-3xl">📝</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-display font-semibold mb-2">Research Paper</h3>
                                <h4 className="text-lg text-primary mb-2">
                                    AI for Disaster Response and Relief – Predicting Flood Impact Using Satellite Imagery
                                </h4>
                                <p className="text-muted-foreground">
                                    Published research on AI-based flood impact prediction using satellite image analysis,
                                    contributing to improved disaster response planning through machine learning.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default ProjectsSection;