'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, FileText, Phone, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-10 border-b border-[#E2E4DC]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-[#EBF1EC] border border-[#D7E2D9] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#58745C] animate-pulse" />
          <span className="text-xs font-mono font-medium text-[#354837]">
            AI Automation Associate &amp; Technical Product Leader
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-[#20231F] leading-[1.08] max-w-4xl mb-7">
          Project Manager &amp; Technical Product Leader
        </h1>

        {/* Professional Summary */}
        <p className="text-lg md:text-xl text-[#6B7168] leading-relaxed max-w-3xl font-normal mb-10">
          Results-driven Project Manager, AI Automation Associate, and Technical Builder combining rigorous management principles from Harvard University with advanced technical foundations from IIT Madras. Proven track record of leading cross-functional teams, directing end-to-end project lifecycles, and deploying scalable AI-driven automation workflows and enterprise web applications.
        </p>

        {/* Calls to Action */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-[#20231F] hover:bg-[#353A33] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F]"
          >
            <span>Explore projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#experience"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg text-sm font-medium text-[#20231F] bg-white border border-[#E2E4DC] hover:bg-[#F0F1EA] hover:border-[#D1D4CA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58745C]"
          >
            <span>View experience</span>
            <ArrowUpRight className="w-4 h-4 text-[#6B7168]" />
          </a>

          <a
            href="/resume.pdf"
            download="Manish_Chouhan_CV.pdf"
            className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-lg text-sm font-medium text-[#58745C] hover:text-[#47604B] bg-[#EBF1EC] hover:bg-[#E0EBE2] border border-[#D7E2D9] transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Download Final CV (PDF)</span>
          </a>
        </div>

        {/* Contact Strip & Verified Positioning Tags */}
        <div className="pt-8 border-t border-[#E2E4DC] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Direct contact items */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#6B7168]">
            <a
              href="mailto:manishchouhan123@gmail.com"
              className="inline-flex items-center space-x-2 hover:text-[#20231F] transition-colors"
              aria-label="Email Manish Chouhan"
            >
              <Mail className="w-4 h-4 text-[#58745C]" />
              <span>manishchouhan123@gmail.com</span>
            </a>

            <a
              href="tel:+918905694021"
              className="inline-flex items-center space-x-2 hover:text-[#20231F] transition-colors"
              aria-label="Call Manish Chouhan"
            >
              <Phone className="w-4 h-4 text-[#58745C]" />
              <span>+91 89056 94021</span>
            </a>

            <span className="inline-flex items-center space-x-1.5 text-xs text-[#6B7168]">
              <MapPin className="w-3.5 h-3.5 text-[#8D938A]" />
              <span>Sojat Road, Pali, Rajasthan</span>
            </span>

            <a
              href="https://www.linkedin.com/in/manish-chouhan-2301a7230/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 hover:text-[#20231F] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#58745C]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Manish-10275"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 hover:text-[#20231F] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-[#58745C]" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick Context Tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#6B7168]">
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E4DC]">
              AI Automation @ Pixellab.Media
            </span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E4DC]">
              Project Director @ Devoq Labs
            </span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E4DC]">
              PM @ JJGillespie.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
