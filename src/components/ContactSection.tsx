import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:jkjustin1805@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`;
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'jkjustin1805@gmail.com',
            href: 'mailto:jkjustin1805@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 9345578962',
            href: 'tel:+919345578962',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Krishnagiri, Tamil Nadu',
            href: '#',
        },
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/joy-justin',
            color: 'hover:text-[#0077B5]',
        },
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/joyjustinj',
            color: 'hover:text-foreground',
        },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:jkjustin1805@gmail.com',
            color: 'hover:text-primary',
        },
    ];

    return (
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6">
                <SectionReveal>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary font-mono text-sm">05.</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold">Get In Touch</h2>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                </SectionReveal>

                <div className="grid lg:grid-cols-2 gap-16 mt-12">
                    <div className="space-y-8">
                        <SectionReveal delay={0.1}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I'm currently looking for new opportunities and my inbox is always open.
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </SectionReveal>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <SectionReveal key={info.label} delay={0.2 + index * 0.1} direction="left">
                                    <motion.a
                                        href={info.href}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group cursor-hover"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <info.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">{info.label}</p>
                                            <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                                        </div>
                                    </motion.a>
                                </SectionReveal>
                            ))}
                        </div>

                        <SectionReveal delay={0.5}>
                            <div className="flex gap-4 pt-6">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground ${link.color} transition-colors cursor-hover`}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                    >
                                        <link.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.7}>
                            <motion.a
                                href="/resume_Final.pdf"
                                download="resume_Final.pdf"
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all cursor-hover"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </motion.a>
                        </SectionReveal>
                    </div>

                    <SectionReveal delay={0.3} direction="right">
                        <motion.form
                            onSubmit={handleSubmit}
                            className="p-8 rounded-2xl bg-card border border-border space-y-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <motion.input
                                    type="text"
                                    id="name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="John Doe"
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="john@example.com"
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <motion.textarea
                                    id="message"
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                    placeholder="Hi Joy, I'd like to discuss..."
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all cursor-hover"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </motion.button>
                        </motion.form>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;