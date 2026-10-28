'use client';

import React from 'react';
import { Cpu, Code, Target, BarChart3 } from 'lucide-react';

interface SkillGroup {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    icon: <Cpu className="w-5 h-5 text-[#58745C]" />,
    summary:
      'Applying machine learning models, autonomous workflows, and LLM interfaces to solve discrete operational and scientific challenges.',
    skills: [
      'Python',
      'LLM API Integration',
      'AI Agents',
      'Workflow Automation',
      'Model Evaluation',
      'API Integration',
      'Prompt Engineering',
      'Computer Vision Basics'
    ],
  },
  {
    id: 'development',
    title: 'Development',
    icon: <Code className="w-5 h-5 text-[#58745C]" />,
    summary:
      'Building performant, accessible web applications and reliable backend microservices with modern TypeScript and component libraries.',
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'HTML / Semantic CSS',
      'REST APIs',
      'Git & GitHub'
    ],
  },
  {
    id: 'product-delivery',
    title: 'Product & Delivery',
    icon: <Target className="w-5 h-5 text-[#58745C]" />,
    summary:
      'Guiding agile software cycles, managing task dependencies, authoring clear documentation, and bridging technical and business priorities.',
    skills: [
      'Product Thinking',
      'Project Coordination',
      'Requirements Analysis',
      'Stakeholder Communication',
      'Workflow Design',
      'Technical Documentation',
      'Agile / Scrum Cycles',
      'Jira & Trello Management'
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    icon: <BarChart3 className="w-5 h-5 text-[#58745C]" />,
    summary:
      'Extracting, transforming, and interpreting data structures to evaluate system performance and support evidence-based decisions.',
    skills: [
      'SQL',
      'Data Analysis',
      'Python Data Processing',
      'Pandas & NumPy',
      'Excel (Advanced)',
      'Power BI & Reporting',
      'Statistical Fundamentals'
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold mb-3">
            <span>Capabilities &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Technical and delivery skills.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            A grounded overview of technologies, tools, and methodologies I actively use across engineering, product management, and data analysis.
          </p>
        </div>

        {/* 4-Column / 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white border border-[#E2E4DC] rounded-xl p-7 md:p-8 shadow-card-subtle flex flex-col justify-between hover:border-[#D1D4CA] transition-colors duration-150"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9]">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#20231F] tracking-tight">
                    {group.title}
                  </h3>
                </div>

                <p className="text-sm text-[#6B7168] leading-relaxed mb-6">
                  {group.summary}
                </p>
              </div>

              <div className="pt-5 border-t border-[#EBECE6]">
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1 rounded bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]"
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
