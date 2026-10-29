'use client';

import React, { useState } from 'react';
import { Calendar, Briefcase, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { SectionMarker } from './EngineeringMotif';

interface Experience {
  id: string;
  role: string;
  organization: string;
  domain: 'ai' | 'engineering' | 'product';
  period: string;
  bullets: string[];
  skills: string[];
  isCurrent?: boolean;
}

const EXPERIENCES: Experience[] = [
  {
    id: 'pixellab',
    role: 'AI Automation Associate',
    organization: 'Pixellab.Media',
    domain: 'ai',
    period: 'Sep 01, 2026 — Present',
    bullets: [
      'Design and implement AI-driven automation workflows to streamline operational pipelines and enhance project delivery speed.',
      'Integrate advanced language models and APIs into digital ecosystems to optimize media workflows and business efficiency.'
    ],
    skills: ['AI Automation', 'Workflow Optimization', 'LLM Integration', 'Process Optimization', 'API Pipelines'],
    isCurrent: true,
  },
  {
    id: 'devoq-labs',
    role: 'Founder & Project Director',
    organization: 'Devoq Labs',
    domain: 'product',
    period: 'Jun 2025 — Present',
    bullets: [
      'Direct end-to-end project lifecycles for web development, AI integration, and digital transformation initiatives, managing timelines and scope.',
      'Coordinate cross-functional teams of developers and designers, aligning resource allocation with client business milestones.',
      'Supervise end-to-end delivery milestones, coordinating client reviews, sprints, task priorities, and deployment logs across customized AI endpoints and web platforms.'
    ],
    skills: ['Project Direction', 'Resource Allocation', 'Full Lifecycle Delivery', 'AI Endpoints', 'Client Reviews'],
    isCurrent: true,
  },
  {
    id: 'jjgillespie',
    role: 'Project Manager',
    organization: 'JJGillespie.com',
    domain: 'product',
    period: 'Nov 2025 — Present',
    bullets: [
      'Manage distributed project schedules, deliverables, and cross-team communications to ensure strategic alignment with organizational objectives.',
      'Implement workflow improvements and milestone tracking that boost team productivity and delivery speed.',
      'Bridge communications between commercial project stakeholders and technical execution teams to maintain clear task delegation pipelines and milestone tracking.'
    ],
    skills: ['Project Schedules', 'Agile Sprints', 'Stakeholder Communication', 'Task Delegation', 'Milestone Tracking'],
    isCurrent: true,
  },
  {
    id: 'excelerate',
    role: 'Associate Project Manager Intern',
    organization: 'Excelerate',
    domain: 'product',
    period: 'May 2025 — Jun 2025',
    bullets: [
      'Assisted in planning, tracking, and executing deliverables while maintaining strict quality assurance and timeline constraints.',
      'Assisted senior management in mapping project milestones, organizing project documentation backlogs, and preparing sprint review dashboards.'
    ],
    skills: ['Sprint Dashboards', 'Milestone Mapping', 'Quality Assurance', 'Documentation Backlogs'],
  },
  {
    id: 'paradox',
    role: 'Core Team Operations Manager',
    organization: 'Paradox, IIT Madras',
    domain: 'engineering',
    period: '2026',
    bullets: [
      'Managed event operations, large-scale logistics, and participant engagement for a flagship institutional event under strict deadlines.'
    ],
    skills: ['Event Operations', 'Large-Scale Logistics', 'Participant Engagement', 'Resource Allocation'],
  },
  {
    id: 'codveda',
    role: 'Python Programmer Intern',
    organization: 'Codveda Technologies',
    domain: 'engineering',
    period: '2025',
    bullets: [
      'Developed automated Python scripting pipelines for processing text datasets and indexing directories.',
      'Collaborated closely with technical leads to debug scripts, write modular tests, and refine codebase performance within Git version-controlled environments.'
    ],
    skills: ['Python Scripting', 'Data Processing', 'Script Debugging', 'Git Versioning'],
  },
];

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'engineering' | 'product'>('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'all') return true;
    return exp.domain === filter;
  });

  return (
    <section id="experience" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <SectionMarker number="SEC.02" code="CAREER_TIMELINE" label="Professional Experience" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
              Track record of technical execution &amp; leadership.
            </h2>
            <p className="text-base md:text-lg text-[#52584F] leading-relaxed">
              Every position verified from my curriculum vitae, reflecting hands-on AI workflow automation, full-stack project direction, and operational management.
            </p>
          </div>

          {/* Interactive Domain Filter Tabs */}
          <div className="inline-flex p-1 rounded-lg bg-[#EAECE4] border border-[#DCDFD5] text-xs self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md font-mono text-[11px] transition-all ${
                filter === 'all'
                  ? 'bg-white text-[#20231F] font-semibold shadow-xs'
                  : 'text-[#6B7168] hover:text-[#20231F]'
              }`}
            >
              All ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 rounded-md font-mono text-[11px] transition-all ${
                filter === 'ai'
                  ? 'bg-white text-[#58745C] font-semibold shadow-xs'
                  : 'text-[#6B7168] hover:text-[#20231F]'
              }`}
            >
              AI &amp; Automation
            </button>
            <button
              onClick={() => setFilter('engineering')}
              className={`px-3 py-1.5 rounded-md font-mono text-[11px] transition-all ${
                filter === 'engineering'
                  ? 'bg-white text-[#58745C] font-semibold shadow-xs'
                  : 'text-[#6B7168] hover:text-[#20231F]'
              }`}
            >
              Engineering
            </button>
            <button
              onClick={() => setFilter('product')}
              className={`px-3 py-1.5 rounded-md font-mono text-[11px] transition-all ${
                filter === 'product'
                  ? 'bg-white text-[#58745C] font-semibold shadow-xs'
                  : 'text-[#6B7168] hover:text-[#20231F]'
              }`}
            >
              Product &amp; Direction
            </button>
          </div>
        </div>

        {/* Experience Timeline Grid */}
        <div className="relative pl-6 md:pl-10 border-l border-[#DDE2D8] space-y-12">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-white transition-all duration-200 ${
                  exp.isCurrent
                    ? 'border-[#58745C] ring-4 ring-[#EBF1EC]'
                    : 'border-[#CBD1C4] group-hover:border-[#58745C]'
                }`}
              >
                {exp.isCurrent && (
                  <span className="absolute inset-0.5 rounded-full bg-[#58745C] animate-pulse" />
                )}
              </div>

              {/* Experience Card */}
              <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 md:p-8 shadow-card-subtle hover:border-[#CBD1C4] transition-all">
                {/* Meta Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-[#20231F]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm font-mono text-[#58745C] font-semibold mt-0.5">
                      <span>{exp.organization}</span>
                      <span className="text-[#8D938A]">•</span>
                      <span className="text-xs uppercase text-[#788075]">
                        {exp.domain === 'ai' ? 'AI & Systems' : exp.domain === 'engineering' ? 'Core Engineering' : 'Product & Strategy'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 self-start sm:self-auto">
                    {exp.isCurrent && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#EBF1EC] text-[#354837] border border-[#D7E2D9]">
                        Active Role
                      </span>
                    )}
                    <span className="text-xs font-mono text-[#6B7168] bg-[#F1F2EC] px-2.5 py-1 rounded border border-[#E2E4DC]">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 my-5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start space-x-3 text-sm md:text-base text-[#20231F]/90 leading-relaxed font-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#58745C] mt-2.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Chips */}
                <div className="pt-4 border-t border-[#EBECE6] flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-[#8D938A] mr-1">DOMAINS:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#F7F7F2] text-[#353A33] border border-[#E2E4DC]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
