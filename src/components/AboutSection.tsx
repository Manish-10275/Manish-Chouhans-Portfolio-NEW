'use client';

import React from 'react';
import { BookOpen, Compass, Award, CheckCircle2, Code2, Sparkles, HeartHandshake } from 'lucide-react';
import { SectionMarker } from './EngineeringMotif';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker number="SEC.04" code="HUMAN_SIGNATURE" label="About & Philosophy" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            The intersection of code, intelligence &amp; product thinking.
          </h2>
          <p className="text-base md:text-lg text-[#52584F] leading-relaxed">
            Analytical rigor in data science from IIT Madras, business management frameworks from Harvard University, and a humanistic approach to technology.
          </p>
        </div>

        {/* 3-Column Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: The Engineer */}
          <div className="bg-white border border-[#E2E4DC] rounded-xl p-7 shadow-card-subtle flex flex-col justify-between hover:border-[#CBD1C4] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9] flex items-center justify-center text-[#58745C] mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#20231F] mb-2">
                The Systems &amp; AI Engineer
              </h3>
              <p className="text-xs md:text-sm text-[#52584F] leading-relaxed">
                Trained in mathematical data science, algorithmic thinking, and machine learning lifecycles at <strong className="text-[#20231F]">IIT Madras</strong>. I favor deterministic architectures—strict schemas, clean TypeScript, and resilient APIs—upon which generative intelligence can be reliably built.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F0F1EA] text-[11px] font-mono text-[#8D938A]">
              IIT MADRAS • DATA SCIENCE &amp; APPLICATIONS
            </div>
          </div>

          {/* Pillar 2: The Product Leader */}
          <div className="bg-white border border-[#E2E4DC] rounded-xl p-7 shadow-card-subtle flex flex-col justify-between hover:border-[#CBD1C4] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9] flex items-center justify-center text-[#58745C] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#20231F] mb-2">
                The Technical Product Leader
              </h3>
              <p className="text-xs md:text-sm text-[#52584F] leading-relaxed">
                Coursework in business administration and management from <strong className="text-[#20231F]">Harvard University</strong>. Having founded Devoq Labs and managed engineering sprints across enterprise clients, I bridge commercial goals with developer tasks to ensure on-time delivery.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F0F1EA] text-[11px] font-mono text-[#8D938A]">
              HARVARD UNIVERSITY • MANAGEMENT STUDIES
            </div>
          </div>

          {/* Pillar 3: The Human Touch */}
          <div className="bg-white border border-[#E2E4DC] rounded-xl p-7 shadow-card-subtle flex flex-col justify-between hover:border-[#CBD1C4] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9] flex items-center justify-center text-[#58745C] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#20231F] mb-2">
                The Creative Signature
              </h3>
              <p className="text-xs md:text-sm text-[#52584F] leading-relaxed">
                Published author of <strong className="text-[#20231F]">three poetry collections</strong>. Creative writing cultivates acute attention to language, deep empathy for user perspectives, and the patience to listen before designing solutions.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F0F1EA] text-[11px] font-mono text-[#8D938A]">
              PUBLISHED AUTHOR • 3 COLLECTIONS
            </div>
          </div>
        </div>

        {/* Engineering Tenets / How I Build */}
        <div className="p-8 rounded-2xl bg-white border border-[#E2E4DC] shadow-card-subtle">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold block mb-1">
              Guiding Engineering Principles
            </span>
            <h3 className="text-xl md:text-2xl font-display font-bold text-[#20231F]">
              How I approach software and AI development
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm text-[#52584F]">
            <div className="space-y-1.5 p-4 rounded-xl bg-[#FAF9F5] border border-[#E2E4DC]">
              <strong className="text-[#20231F] block font-mono text-xs uppercase">
                1. Predictable Foundations
              </strong>
              <p className="leading-relaxed">
                AI should enhance well-engineered systems, not paper over fragile architecture. I prioritize clean data models, idempotency, and automated test coverage.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-[#FAF9F5] border border-[#E2E4DC]">
              <strong className="text-[#20231F] block font-mono text-xs uppercase">
                2. Real-World Practicality
              </strong>
              <p className="leading-relaxed">
                Avoid unnecessary complexity. Measure latency, token consumption, and actual client requirements before introducing heavyweight frameworks.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-[#FAF9F5] border border-[#E2E4DC]">
              <strong className="text-[#20231F] block font-mono text-xs uppercase">
                3. End-to-End Ownership
              </strong>
              <p className="leading-relaxed">
                From initial stakeholder requirements and API schema design to CI/CD pipeline automation and post-launch monitoring, I take pride in complete delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
