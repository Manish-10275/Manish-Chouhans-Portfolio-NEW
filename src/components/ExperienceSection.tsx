'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

export const ExperienceSection: React.FC = () => {
  const { playHoverSound } = useApp();

  const experiences: ExperienceItem[] = [
    {
      id: 0,
      role: 'Founder & CEO',
      company: 'Devoq Labs',
      location: 'Remote',
      duration: 'Jun 2025 - Present',
      description: [
        'Founded and lead a cutting-edge software agency providing premium web interfaces, customized AI endpoints, high-end UI layouts, and corporate digital transformations.',
        'Supervise end-to-end delivery milestones: coordinating client reviews, sprints, task priorities, and deployment logs.',
        'Orchestrate a team of developers, graphic artists, and outreach specialists, reducing overall MVP release latency by 35%.',
        'Direct business growth and client acquisition pipelines, closing high-value service contracts with international startups.'
      ],
      skills: ['Startup Operations', 'Agile Delivery', 'Software Architectures', 'AI API Integration', 'Team Coordination']
    },
    {
      id: 1,
      role: 'Project Manager',
      company: 'JJGillespie.com',
      location: 'Remote',
      duration: 'Nov 2025 - Present',
      description: [
        'Lead distributed teams of engineers and testers to build robust, secure, and enterprise-grade platforms.',
        'Manage task delegation pipelines, monitor milestones, and resolve blockages to maintain delivery velocity.',
        'Bridge communications between commercial project stakeholders and technical execution teams.',
        'Introduced agile boards and Git workflow protocols that boosted product release velocity by 20%.'
      ],
      skills: ['Agile Scrums', 'Git Workflows', 'Stakeholder Communications', 'Sprint Scoping', 'Jira Boards']
    },
    {
      id: 2,
      role: 'Core Team Member',
      company: 'Paradox, IIT Madras',
      location: 'Chennai, India',
      duration: '2026',
      description: [
        'Organized operations, sponsor relations, and event execution for Paradox, IIT Madras\'s flagship annual student symposium.',
        'Coordinated sponsor deals with external brand partners, securing crucial sponsorships from Unacademy and Kryptonix LLP.',
        'Directed an on-ground logistics sub-group managing operations for 2,000+ national student delegates.'
      ],
      skills: ['Event Logistics', 'Brand Relations', 'Team Leadership', 'Corporate Sponsorships']
    },
    {
      id: 3,
      role: 'Associate Project Manager Intern',
      company: 'Excelerate',
      location: 'Remote',
      duration: 'May 2025 - Jun 2025',
      description: [
        'Assisted senior management in mapping project milestones and preparing weekly sprint review dashboards.',
        'Coordinated feedback roundtables with developers and clients to resolve requirements disputes rapidly.',
        'Organized project records and updated technical backlogs, increasing team documentation fidelity.'
      ],
      skills: ['Sprint Dashboards', 'Client Relations', 'Risk Identification', 'Technical Documentation']
    },
    {
      id: 4,
      role: 'Python Programmer Intern',
      company: 'Codveda Technologies',
      location: 'Remote',
      duration: '2025',
      description: [
        'Wrote and optimized automated scripting pipelines for processing large text datasets and indexing directories.',
        'Collaborated closely with code leads to squash critical bugs, write modular tests, and refine codebase performance.',
        'Earned practical knowledge in production repository environments, CI pipelines, and version controls.'
      ],
      skills: ['Python Scripting', 'Data Processing', 'Regex & Parsing', 'Git Versioning']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative grids */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-blue mb-4 tracking-widest uppercase font-mono"
          >
            <span>Timeline</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">Experience</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans">
            Building startup systems, organizing complex timelines, and shipping modular code.
          </p>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12 ml-4 md:ml-8">
          {/* Vertical scroll progress bar line */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-brand-blue via-brand-purple to-transparent pointer-events-none" />

          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={playHoverSound}
              key={exp.id}
              className="relative group"
            >
              {/* Bullet Node Indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-brand-purple flex items-center justify-center z-10 group-hover:border-brand-blue transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple group-hover:bg-brand-blue transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl glass-panel glass-panel-hover relative overflow-hidden">
                {/* Micro-glow */}
                <div className="absolute top-0 right-0 w-[100px] h-[100px] rounded-full bg-brand-blue/5 blur-[40px] pointer-events-none" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white tracking-tight group-hover:text-brand-blue transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-xs text-white/50 font-mono mt-1">
                      <span className="text-white/80 font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-[10px] md:text-xs font-mono text-white/70 shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="space-y-3.5 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2.5 text-xs md:text-sm text-white/60 leading-relaxed font-sans">
                      <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div>
                  <div className="text-[10px] font-bold font-mono tracking-wider text-white/30 mb-2 uppercase">Capabilities Utilized</div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] md:text-xs font-mono bg-white/5 border border-white/5 rounded px-2.5 py-1 text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
