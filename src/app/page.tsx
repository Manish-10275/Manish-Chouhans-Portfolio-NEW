import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import FloatingDock from '@/components/FloatingDock';

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white select-none">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Showcase */}
      <ProjectsSection />

      {/* Achievements Wall */}
      <AchievementsSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Contact Form & 3D Globe */}
      <ContactSection />

      {/* Floating Bottom Nav Dock */}
      <FloatingDock />
    </main>
  );
}
