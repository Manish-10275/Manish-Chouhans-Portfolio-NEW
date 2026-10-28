'use client';

import React from 'react';
import { Target, Cpu, Code2, Briefcase, Terminal } from 'lucide-react';

interface CompetencyGroup {
  id: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    id: 'project-methodologies',
    category: 'Project Methodologies',
    icon: <Target className="w-5 h-5 text-[#58745C]" />,
    description: 'Frameworks and operational structures used to lead engineering sprints and deliver on-time software milestones.',
    skills: [
      'Agile Project Management',
      'Sprint Planning',
      'Scrum',
      'Risk Assessment',
      'Resource Allocation'
    ],
  },
  {
    id: 'ai-workflow-automation',
    category: 'AI & Workflow Automation',
    icon: <Cpu className="w-5 h-5 text-[#58745C]" />,
    description: 'Designing automated pipelines, integrating LLM APIs, and eliminating operational latency across digital processes.',
    skills: [
      'AI Automation',
      'Prompt Engineering',
      'OpenAI APIs',
      'Process Optimization',
      'Pipeline Integration'
    ],
  },
  {
    id: 'technical-stack',
    category: 'Technical Stack',
    icon: <Code2 className="w-5 h-5 text-[#58745C]" />,
    description: 'Core languages, backend frameworks, and frontend architectures used across production codebases.',
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'React.js',
      'Next.js',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'AWS'
    ],
  },
  {
    id: 'business-operations',
    category: 'Business & Operations',
    icon: <Briefcase className="w-5 h-5 text-[#58745C]" />,
    description: 'Strategic management practices connecting client objectives with engineering implementation.',
    skills: [
      'Strategic Planning',
      'Client Communication',
      'Technical Documentation',
      'Product Lifecycle Management'
    ],
  },
  {
    id: 'technical-systems',
    category: 'Technical & Systems',
    icon: <Terminal className="w-5 h-5 text-[#58745C]" />,
    description: 'DevOps, database management, cloud environments, and analytical reporting systems.',
    skills: [
      'Git & GitHub',
      'Docker',
      'REST API Architecture',
      'Node.js & Express',
      'SQL',
      'Supabase',
      'Google Cloud Platform',
      'FastAPI',
      'TensorFlow',
      'Power BI',
      'Advanced Excel'
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="competencies" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold mb-3">
            <span>Project Management &amp; Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Technical competencies &amp; delivery tools.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            The complete spectrum of technical stacks, project methodologies, systems, and operational competencies directly from my finalized CV.
          </p>
        </div>

        {/* 5 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETENCY_GROUPS.map((group, idx) => (
            <div
              key={group.id}
              className={`bg-white border border-[#E2E4DC] rounded-xl p-7 shadow-card-subtle flex flex-col justify-between hover:border-[#D1D4CA] transition-colors duration-150 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9]">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#20231F] tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-[#6B7168] leading-relaxed mb-6">
                  {group.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBECE6]">
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]"
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

export default SkillsSection;
