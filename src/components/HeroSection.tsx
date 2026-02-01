import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Download } from 'lucide-react';
import profilePhoto from '@/assets/IMG_20260130_212828.jpg.jpeg';
import BlockReveal from './BlockReveal';

const HeroSection = () => {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
                            duration: 0.6
                        }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">AI & Data Science Engineer</span>
                        </motion.div>

                        <BlockReveal delay={0.2}>
                            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                                Hi, I'm{' '}
                                <span className="gradient-text-animated">Joy Justin</span>
                            </h1>
                        </BlockReveal>

                        <BlockReveal delay={0.4}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                                AI and Data Science undergraduate passionate about creating intelligent solutions.
                                Experienced in machine learning, computer vision, and full-stack development.
                            </p>
                        </BlockReveal>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
                            duration: 0.6,
                            delay: 0.6
                        }} className="flex flex-wrap gap-4">
                            <motion.a href="/resume_Final.pdf" download="resume_Final.pdf"
                                className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground
                        font-semibold overflow-hidden cursor-hover flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Resume
                                </span>
                                <motion.div className="absolute inset-0 bg-secondary" initial={{ x: '-100%' }} whileHover={{
                                    x: 0
                                }} transition={{ duration: 0.3 }} />
                            </motion.a>

                            <motion.a href="#contact" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                                className="px-8 py-4 rounded-full border border-border bg-card/50 font-semibold backdrop-blur-sm
                        hover:bg-card transition-colors cursor-hover"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>

                            <motion.a href="#projects" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                                className="px-8 py-4 rounded-full border border-border bg-card/50 font-semibold backdrop-blur-sm
                        hover:bg-card transition-colors cursor-hover"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.a>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
                            duration: 0.6,
                            delay: 0.8
                        }} className="flex gap-8 pt-8 border-t border-border/50">
                            {[
                                { value: '8.3', label: 'CGPA' },
                                { value: '3+', label: 'Projects' },
                                { value: '1+', label: 'Research Papers' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <motion.div className="text-3xl font-display font-bold text-primary" initial={{ scale: 0 }}
                                        animate={{ scale: 1 }} transition={{ delay: 1 + index * 0.1, type: 'spring' }}>
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center">
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{
                            duration: 0.8, delay: 0.3
                        }} className="relative">
                            <motion.div className="absolute -inset-8 rounded-full border border-primary/20" animate={{
                                rotate:
                                    360
                            }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
                            <motion.div className="absolute -inset-16 rounded-full border border-secondary/10" animate={{
                                rotate: -360
                            }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} />
                            <motion.div className="absolute -inset-24 rounded-full border border-accent/5" animate={{
                                rotate:
                                    360
                            }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />

                            <motion.div className="absolute -inset-8" animate={{ rotate: 360 }} transition={{
                                duration: 20,
                                repeat: Infinity, ease: 'linear'
                            }}>
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                            </motion.div>
                            <motion.div className="absolute -inset-16" animate={{ rotate: -360 }} transition={{
                                duration: 25,
                                repeat: Infinity, ease: 'linear'
                            }}>
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
                            </motion.div>

                            <motion.div
                                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden animate-morph"
                                whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-10" />
                                <img src={profilePhoto} alt="Joy Justin" className="w-full h-full object-cover object-center" />
                            </motion.div>

                            <motion.div
                                className="absolute -right-4 top-10 px-4 py-2 rounded-full bg-card border border-border shadow-xl"
                                animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                                <span className="text-sm font-medium">🎓 B.Tech AI&DS</span>
                            </motion.div>
                            <motion.div
                                className="absolute -left-4 bottom-20 px-4 py-2 rounded-full bg-card border border-border shadow-xl"
                                animate={{ y: [0, 10, 0] }} transition={{
                                    duration: 4, repeat: Infinity, ease: 'easeInOut',
                                    delay: 1
                                }}>
                                <span className="text-sm font-medium">🤖 ML Engineer</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <motion.button onClick={scrollToAbout}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-hover"
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
                    <span className="text-sm">Scroll to explore</span>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </motion.button>
            </div>
        </section>
    );
};

export default HeroSection;