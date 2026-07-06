import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProductShowcase3D from '@/components/ProductShowcase3D';
import CreativeLab from '@/components/CreativeLab';
import DesignPlayground3D from '@/components/DesignPlayground3D';
import DigitalWorkbench from '@/components/DigitalWorkbench';
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

      {/* 3D Product Exploded Showcase */}
      <ProductShowcase3D />

      {/* Creative Design Lab */}
      <CreativeLab />

      {/* 3D Design Systems Customizer Playground */}
      <DesignPlayground3D />

      {/* Digital Archival Workbench */}
      <DigitalWorkbench />

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
