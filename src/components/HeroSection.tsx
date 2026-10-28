'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, FileText } from 'lucide-react';

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
            Available for AI automation, engineering &amp; product roles
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-[#20231F] leading-[1.08] max-w-4xl mb-7">
          I build AI powered products and systems that solve real problems.
        </h1>

        {/* Supporting Narrative */}
        <p className="text-lg md:text-xl text-[#6B7168] leading-relaxed max-w-2xl font-normal mb-10">
          I&apos;m Manish Chouhan, an AI automation and product professional, developer, and founder of Devoq Labs. I work across AI engineering, software development, automation, and project delivery, turning ideas into useful products.
        </p>

        {/* Calls to Action */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#work"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-[#20231F] hover:bg-[#353A33] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F]"
          >
            <span>Explore my work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg text-sm font-medium text-[#20231F] bg-white border border-[#E2E4DC] hover:bg-[#F0F1EA] hover:border-[#D1D4CA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58745C]"
          >
            <span>Let&apos;s connect</span>
            <ArrowUpRight className="w-4 h-4 text-[#6B7168]" />
          </a>

          <a
            href="/resume.pdf"
            download="Manish_Chouhan_Resume.pdf"
            className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-lg text-sm font-medium text-[#6B7168] hover:text-[#20231F] border border-transparent hover:border-[#E2E4DC] transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* Social Links & Verified Anchors */}
        <div className="pt-8 border-t border-[#E2E4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex items-center space-x-6 text-sm text-[#6B7168]">
            <a
              href="https://github.com/Manish-10275"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-[#20231F] transition-colors"
              aria-label="Manish Chouhan GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/manish-chouhan-2301a7230/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-[#20231F] transition-colors"
              aria-label="Manish Chouhan LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:manishchouhan123@gmail.com"
              className="inline-flex items-center space-x-2 hover:text-[#20231F] transition-colors"
              aria-label="Send email to Manish Chouhan"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Quick Context Tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#6B7168]">
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E4DC]">
              Founder @ Devoq Labs
            </span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E4DC]">
              IIT Madras Data Science
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
