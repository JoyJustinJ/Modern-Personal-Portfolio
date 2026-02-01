import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(link => link.href.replace('#', ''));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : ''
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#home');
                        }}
                        className="text-2xl font-display font-bold cursor-hover"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="gradient-text-animated">JOY</span>
                    </motion.a>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-hover ${activeSection === link.href.replace('#', '')
                                    ? 'text-primary'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                {link.label}
                                {activeSection === link.href.replace('#', '') && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-primary rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <motion.a
                            href="https://github.com/joyjustinj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm transition-colors hover:bg-card cursor-hover"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Github className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/joy-justin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm transition-colors hover:bg-card cursor-hover"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Linkedin className="h-5 w-5" />
                        </motion.a>
                        <ThemeToggle />
                        <motion.a
                            href="/resume_Final.pdf"
                            download="resume_Final.pdf"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all hover:shadow-lg hover:shadow-primary/25 cursor-hover"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="h-4 w-4" />
                            Resume
                        </motion.a>
                    </div>

                    <div className="flex md:hidden items-center gap-3">
                        <ThemeToggle />
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm"
                            whileTap={{ scale: 0.9 }}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </motion.button>
                    </div>
                </div>

                <motion.div
                    initial={false}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-6 space-y-4">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 0.05 * index }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <div className="flex items-center gap-3 pt-4 border-t border-border">
                            <a
                                href="https://github.com/joyjustinj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/joy-justin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="/resume_Final.pdf"
                                download="resume_Final.pdf"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm"
                            >
                                <Download className="h-4 w-4" />
                                Resume
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;