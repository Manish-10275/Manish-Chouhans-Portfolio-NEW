import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#F7F7F2] text-[#20231F] selection:bg-[#EBF1EC] selection:text-[#20231F]">
      {/* Accessible skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#20231F] focus:text-white focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Main Navigation Header */}
      <Header />

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* 1. Hero and professional introduction */}
        <HeroSection />

        {/* 2. Selected projects */}
        <ProjectsSection />

        {/* 3. Professional experience */}
        <ExperienceSection />

        {/* 4. Technical competencies */}
        <SkillsSection />

        {/* 5. Education and certifications */}
        <AchievementsSection />

        {/* 6. About */}
        <AboutSection />

        {/* 7. Contact */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
