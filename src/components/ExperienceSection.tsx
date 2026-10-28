'use client';

import React from 'react';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  isCurrent?: boolean;
}

const EXPERIENCES: Experience[] = [
  {
    id: 'devoq-labs',
    role: 'Founder & CEO',
    company: 'Devoq Labs',
    period: 'Jun 2025 — Present',
    location: 'Remote',
    summary:
      'Directing an independent digital and software development studio focused on custom AI integrations, web application engineering, and technical project delivery.',
    responsibilities: [
      'Lead end-to-end technical scoping, architecture decisions, and software delivery sprints for startup products.',
      'Coordinate developers, UI designers, and outreach contributors to ensure predictable milestone releases.',
      'Build functioning client platforms integrating LLM workflows, speech APIs, and modern frontend stacks.'
    ],
    skills: ['Startup Operations', 'Software Architecture', 'AI Integrations', 'Agile Delivery', 'Technical Scoping'],
    isCurrent: true,
  },
  {
    id: 'jjgillespie',
    role: 'Project Manager',
    company: 'JJGillespie.com',
    period: 'Nov 2025 — Present',
    location: 'Remote',
    summary:
      'Managing distributed technical development sprints, engineering roadmaps, and stakeholder communication for web platforms.',
    responsibilities: [
      'Organize development backlogs, sprint scopes, and priority queues to maintain regular delivery cadence.',
      'Bridge communications between commercial stakeholders and technical developers to prevent scope ambiguity.',
      'Standardize Git repository practices, issue tracking, and sprint retrospectives across the engineering workflow.'
    ],
    skills: ['Sprint Planning', 'Agile / Scrum', 'Stakeholder Communication', 'Git Workflows', 'Task Delegation'],
    isCurrent: true,
  },
  {
    id: 'excelerate',
    role: 'Associate Project Manager Intern',
    company: 'Excelerate',
    period: 'May 2025 — Jun 2025',
    location: 'Remote',
    summary:
      'Supported management in milestone tracking, developer-client alignment, and technical documentation.',
    responsibilities: [
      'Assisted in preparing weekly sprint review dashboards and tracking task completion rates.',
      'Facilitated feedback syncs between clients and engineering contributors to address blockers.',
      'Maintained project documentation and backlog tracking in Jira and shared documentation hubs.'
    ],
    skills: ['Sprint Dashboards', 'Technical Documentation', 'Client Syncs', 'Requirements Tracking'],
  },
  {
    id: 'scaler',
    role: 'Student Intern',
    company: 'Scaler School of Technology',
    period: '2025',
    location: 'Remote',
    summary:
      'Participated in hands-on computer science modules, software problem solving, and technical build assignments.',
    responsibilities: [
      'Implemented foundational data structures, algorithm optimizations, and modular software designs.',
      'Collaborated on group technical assignments and code review sessions.'
    ],
    skills: ['Algorithms', 'Software Fundamentals', 'Code Reviews', 'Collaborative Coding'],
  },
  {
    id: 'codveda',
    role: 'Python Programmer Intern',
    company: 'Codveda Technologies',
    period: '2025',
    location: 'Remote',
    summary:
      'Developed automated Python scripts for parsing data files and supporting codebase maintenance.',
    responsibilities: [
      'Wrote automated script routines for processing text datasets and structuring file directories.',
      'Assisted senior developers with bug fixes, unit test execution, and Git version control.'
    ],
    skills: ['Python Scripting', 'Data Processing', 'Regex & Parsing', 'Git Versioning'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold mb-3">
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Professional experience &amp; roles.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            A chronological timeline of founder responsibilities, project management leadership, and software development internships.
          </p>
        </div>

        {/* Compact Timeline */}
        <div className="relative border-l border-[#E2E4DC] ml-2 md:ml-4 pl-6 md:pl-10 space-y-12">
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
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-[#20231F] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-[#6B7168] mt-1 font-medium">
                      <span className="text-[#20231F] font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-[#8D938A]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs font-mono text-[#58745C] bg-[#EBF1EC] px-3 py-1 rounded-full border border-[#D7E2D9] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm md:text-base text-[#20231F]/90 leading-relaxed mb-4 font-normal">
                  {exp.summary}
                </p>

                {/* Responsibilities list */}
                <ul className="space-y-2 mb-6">
                  {exp.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2.5 text-xs md:text-sm text-[#6B7168] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#58745C] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="pt-4 border-t border-[#EBECE6] flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8D938A] mr-2">
                    Focus:
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
