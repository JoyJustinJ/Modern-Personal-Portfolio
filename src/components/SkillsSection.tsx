import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionReveal from './SectionReveal';

const skills = {
    'Programming Languages': [
        { name: 'Python', level: 75 },
        { name: 'Java', level: 65 },
        { name: 'C/C++', level: 50 },
        { name: 'SQL', level: 70 },
    ],
    'AI & Machine Learning': [
        { name: 'Machine Learning', level: 80 },
        { name: 'Computer Vision', level: 70 },
        { name: 'Data Visualization', level: 75 },
        { name: 'Deep Learning', level: 60 },
    ],
    'Core CS Subjects': [
        { name: 'DSA', level: 75 },
        { name: 'DBMS', level: 80 },
        { name: 'Operating Systems', level: 70 },
        { name: 'Computer Networks', level: 65 },
    ],
    'Other Skills': [
        { name: 'Full Stack Development', level: 65 },
        { name: 'Ethical Hacking', level: 55 },
        { name: 'Business Strategy', level: 60 },
        { name: 'Problem Solving', level: 85 },
    ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <div ref={ref} className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{name}</span>
                <span className="text-xs text-muted-foreground">{level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{
                        duration: 1,
                        delay,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                />
            </div>
        </div>
    );
};

const SkillsSection = () => {
    return (
        <section id="skills" className="py-32 relative">
            <div className="container mx-auto px-6">
                <SectionReveal>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary font-mono text-sm">02.</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold">Skills & Expertise</h2>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                        <SectionReveal key={category} delay={0.1 * categoryIndex} direction="up">
                            <motion.div
                                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-xl font-display font-semibold mb-6 text-primary">{category}</h3>
                                <div className="space-y-5">
                                    {skillList.map((skill, index) => (
                                        <SkillBar
                                            key={skill.name}
                                            name={skill.name}
                                            level={skill.level}
                                            delay={0.2 + index * 0.1}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </SectionReveal>
                    ))}
                </div>

                <div className="mt-16">
                    <SectionReveal>
                        <h3 className="text-2xl font-display font-semibold mb-8">Certifications</h3>
                    </SectionReveal>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: 'Data Analyst Certification', issuer: 'NSIC' },
                            { title: 'Generative AI Professional', issuer: 'Oracle' },
                            { title: 'Full-Stack Web Development', issuer: 'LinkedIn Learning' },
                            { title: 'Data Visualization Certification', issuer: 'Forge' },
                        ].map((cert, index) => (
                            <SectionReveal key={cert.title} delay={0.1 * index} direction="left">
                                <motion.div
                                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="text-xl">🏆</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{cert.title}</h4>
                                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                    </div>
                                </motion.div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;