'use client';

import React from 'react';
import { BookOpen, Compass, Award, CheckCircle2 } from 'lucide-react';

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
            Bridging management discipline with technical execution.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            Combining rigorous management principles from Harvard University with advanced technical foundations from IIT Madras.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#20231F] leading-relaxed font-normal text-base md:text-lg">
            <p className="text-[#20231F]/90">
              I am a results-driven Project Manager, AI Automation Associate, and Technical Builder. My focus centers on directing end-to-end product lifecycles, managing distributed developer teams, and designing automated pipelines that eliminate friction across modern operational workflows.
            </p>

            <p className="text-[#6B7168] text-base">
              Through my roles directing digital transformations at Devoq Labs, automating media operations at Pixellab.Media, and managing enterprise sprints at JJGillespie.com, I have consistently aligned commercial client objectives with engineering roadmaps. I specialize in turning complex software architectures into predictable, on-time delivery milestones.
            </p>

            <p className="text-[#6B7168] text-base">
              My technical grounding in data science at IIT Madras coupled with business management coursework at Harvard University allows me to speak the language of both software engineers and business stakeholders, ensuring clarity, risk mitigation, and execution speed.
            </p>

            {/* Creative Note: Published Author */}
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
                    Beyond engineering and agile management, I have authored and published three poetry collections. This discipline cultivates clarity of thought, active listening, and human empathy—attributes that directly elevate team leadership and technical product design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Tenets */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle">
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-[#20231F] mb-4">
                Core Leadership Tenets
              </h3>

              <div className="space-y-4 text-xs md:text-sm text-[#6B7168]">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#58745C] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#20231F] block">Clear Requirements &amp; Scope</strong>
                    <span>Eliminating ambiguity early through rigorous backlog documentation, milestone mapping, and user story refinement.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#58745C] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#20231F] block">Predictable Sprint Velocity</strong>
                    <span>Utilizing Scrum and Agile best practices to unblock technical contributors and maintain consistent delivery cadence.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#58745C] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#20231F] block">AI-Driven Process Optimization</strong>
                    <span>Integrating language models and custom automations to eliminate repetitive engineering and operational overhead.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block mb-2">
                Institutional Foundations
              </span>
              <div className="space-y-2 text-xs font-mono text-[#20231F]">
                <div className="p-2.5 rounded bg-[#F1F2EC] border border-[#E2E4DC]">
                  Harvard University — Bachelor of Liberal Arts (Business Administration Mgmt)
                </div>
                <div className="p-2.5 rounded bg-[#F1F2EC] border border-[#E2E4DC]">
                  IIT Madras — BS in Data Science &amp; Applications (2025 – 2029)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
