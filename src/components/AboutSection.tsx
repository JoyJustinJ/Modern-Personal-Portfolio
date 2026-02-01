import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import BlockReveal from './BlockReveal';
import { Code, Brain, Database, Shield } from 'lucide-react';

const AboutSection = () => {
const highlights = [
{
icon: Brain,
title: 'Machine Learning',
description: 'Building intelligent systems with ML and computer vision',
},
{
icon: Code,
title: 'Full Stack Development',
description: 'Creating scalable web applications end-to-end',
},
{
icon: Database,
title: 'Data Science',
description: 'Extracting insights from complex datasets',
},
{
icon: Shield,
title: 'Ethical Hacking',
description: 'Understanding security from an offensive perspective',
},
];

return (
<section id="about" className="py-32 relative">
    <div className="container mx-auto px-6">
        <SectionReveal>
            <div className="flex items-center gap-4 mb-4">
                <span className="text-primary font-mono text-sm">01.</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold">About Me</h2>
                <div className="flex-1 h-px bg-border" />
            </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
            <div className="space-y-6">
                <SectionReveal delay={0.1}>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm an <span className="text-foreground font-medium">AI and Data Science undergraduate</span> at
                        P.S.V College of Engineering and Technology with a CGPA of 8.3. My passion lies in leveraging
                        artificial intelligence to solve real-world problems.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        With hands-on experience from my NSIC internship and research work on
                        <span className="text-foreground font-medium"> AI for Disaster Response</span>, I've developed
                        a strong foundation in programming, machine learning, and core computer science subjects.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.3}>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm proficient in Python, Java, and SQL, with intermediate knowledge in full-stack development.
                        My projects span from gesture control systems to agricultural AI solutions.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.4}>
                    <div className="flex flex-wrap gap-3 pt-4">
                        {['Python', 'Java', 'Machine Learning', 'Data Visualization', 'SQL', 'Full Stack'].map((skill,
                        index) => (
                        <span key={skill}
                            className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                            {skill}
                        </span>
                        ))}
                    </div>
                </SectionReveal>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                <BlockReveal key={item.title} delay={0.2 + index * 0.1}>
                    <motion.div
                        className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.02 }}>
                        <motion.div
                            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                            whileHover={{ rotate: 10 }}>
                            <item.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                </BlockReveal>
                ))}
            </div>
        </div>
    </div>
</section>
);
};

export default AboutSection;