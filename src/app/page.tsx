import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#20231F] selection:bg-[#EBF1EC] selection:text-[#20231F]">
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
        {/* Section B: Hero */}
        <HeroSection />

        {/* Section C: Selected Work (Most Important Section) */}
        <ProjectsSection />

        {/* Section 4: Professional Experience */}
        <ExperienceSection />

        {/* Section 5: About Me */}
        <AboutSection />

        {/* Section 6: Skills & Technologies */}
        <SkillsSection />

        {/* Section 7: Achievements & Credentials */}
        <AchievementsSection />

        {/* Section 9: Contact */}
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
