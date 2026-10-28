'use client';

import React from 'react';
import { GraduationCap, BookOpen, Heart, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            A developer working between technology, product thinking, and execution.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            From self-taught programming beginnings in Rajasthan to foundational studies at IIT Madras and building Devoq Labs.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#20231F] leading-relaxed font-normal text-base md:text-lg">
            <p className="text-[#20231F]/90">
              I&apos;m an AI automation professional and developer who enjoys working at the intersection of technology, product thinking, and execution. Through my projects and work with Devoq Labs, I&apos;ve explored how software, AI models, and automation can turn complex ideas into practical tools.
            </p>

            <p className="text-[#6B7168] text-base">
              My technical journey began with self-taught Python scripting and web fundamentals while overcoming educational resource constraints in a local government school in Rajasthan. That early grounding taught me to build with whatever tools were accessible, debug tenaciously, and respect the discipline required to write clean, modular software.
            </p>

            <p className="text-[#6B7168] text-base">
              Today, I split my focus between engineering AI workflows, coordinating software development roadmaps as a project manager, and pursuing rigorous academic foundations in computational statistics and business management.
            </p>

            {/* Small Personal Detail: Published Author */}
            <div className="pt-4 border-t border-[#EBECE6]">
              <div className="p-5 rounded-xl bg-white border border-[#E2E4DC] flex items-start space-x-4 shadow-card-subtle">
                <div className="p-2.5 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9] text-[#58745C] flex-shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-[#20231F] mb-1">
                    Published Author &amp; Creative Reflection
                  </h4>
                  <p className="text-xs md:text-sm text-[#6B7168] leading-relaxed">
                    Outside of technical engineering, I have authored and published poetry books exploring emotional depth, self-awareness, and human reflection. Writing poetry cultivates precision of thought, empathy, and creative clarity that directly informs how I design human-centered digital products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Education & Academic Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 md:p-7 shadow-card-subtle">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9] text-[#58745C]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block">
                    Higher Education
                  </span>
                  <span className="text-xs font-mono text-[#58745C] font-medium">
                    2025 — 2029 (In Progress)
                  </span>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-display font-bold text-[#20231F] mb-1">
                Indian Institute of Technology, Madras
              </h3>
              <p className="text-xs font-mono text-[#6B7168] mb-3">
                BS in Data Science and Applications
              </p>
              <p className="text-xs md:text-sm text-[#6B7168] leading-relaxed mb-4">
                Rigorous degree program focusing on statistical algorithms, machine learning lifecycles, database system design, and large-scale computational analysis.
              </p>

              <div className="pt-3 border-t border-[#EBECE6] text-xs text-[#6B7168] space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58745C]" />
                  <span>Core Team Member, Paradox IIT Madras 2026 (Operations &amp; Logistics)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58745C]" />
                  <span>Coursework: Linear Algebra, Database Management, Machine Learning</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 md:p-7 shadow-card-subtle">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9] text-[#58745C]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block">
                    Management Studies
                  </span>
                  <span className="text-xs font-mono text-[#58745C] font-medium">
                    Coursework Studies (Active)
                  </span>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-display font-bold text-[#20231F] mb-1">
                Harvard University DCE
              </h3>
              <p className="text-xs font-mono text-[#6B7168] mb-3">
                ALB in Business Administration &amp; Management
              </p>
              <p className="text-xs md:text-sm text-[#6B7168] leading-relaxed">
                Academic studies encompassing strategic management, product economics, organizational leadership, and commercial execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
