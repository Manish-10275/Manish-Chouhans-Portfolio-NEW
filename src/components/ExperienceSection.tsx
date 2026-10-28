'use client';

import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  organization: string;
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
    period: '2025',
    bullets: [
      'Developed automated Python scripting pipelines for processing text datasets and indexing directories.',
      'Collaborated closely with technical leads to debug scripts, write modular tests, and refine codebase performance within Git version-controlled environments.'
    ],
    skills: ['Python Scripting', 'Data Processing', 'Script Debugging', 'Git Versioning'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold mb-3">
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Track record of leadership &amp; delivery.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            All six professional positions from my finalized curriculum vitae, covering AI automation, agency direction, enterprise project management, and software internships.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#E2E4DC] ml-2 md:ml-4 pl-6 md:pl-10 space-y-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                  exp.isCurrent
                    ? 'border-[#58745C] bg-[#58745C]'
                    : 'border-[#E2E4DC] bg-white group-hover:border-[#58745C] transition-colors'
                }`}
              />

              {/* Card Container */}
              <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 md:p-8 shadow-card-subtle hover:border-[#D1D4CA] transition-colors duration-150">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-4 border-b border-[#EBECE6]">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-[#20231F] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#58745C] mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs font-mono text-[#58745C] bg-[#EBF1EC] px-3 py-1 rounded-full border border-[#D7E2D9] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets directly from CV */}
                <ul className="space-y-2.5 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-sm md:text-base text-[#20231F]/90 leading-relaxed font-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#58745C] mt-2.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="pt-4 border-t border-[#EBECE6] flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8D938A] mr-2">
                    Competencies:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]"
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
