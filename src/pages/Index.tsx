import { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="relative min-h-screen">
            <CustomCursor />
            <AnimatedBackground />
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;