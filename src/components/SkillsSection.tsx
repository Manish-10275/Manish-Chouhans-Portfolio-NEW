'use client';

import React, { useState } from 'react';
import { Target, Cpu, Code2, Briefcase, Terminal, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionMarker } from './EngineeringMotif';

interface CompetencyGroup {
  id: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  skills: { name: string; projectLinked?: string }[];
}

const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    id: 'programming-languages',
    category: 'Programming Languages',
    icon: <Code2 className="w-5 h-5 text-[#58745C]" />,
    description: 'Core typed and scripting languages utilized for algorithmic data processing, backend services, and web frontends.',
    skills: [
      { name: 'Python', projectLinked: 'AgriBuddy & HBB Analyzer' },
      { name: 'TypeScript', projectLinked: 'Ad Automation OS & Portfolio' },
      { name: 'JavaScript', projectLinked: 'Devoq Speech Services' },
      { name: 'SQL', projectLinked: 'PostgreSQL & Supabase' },
    ],
  },
  {
    id: 'ai-ml-engineering',
    category: 'AI & Machine Learning Engineering',
    icon: <Cpu className="w-5 h-5 text-[#58745C]" />,
    description: 'LLM API orchestrations, neural speech synthesis, computer vision classification, and NLP pipelines.',
    skills: [
      { name: 'OpenAI APIs', projectLinked: 'LLM Workflows' },
      { name: 'Google Gemini API', projectLinked: 'HBB Mutation Analyzer' },
      { name: 'Google Speech-to-Text', projectLinked: 'Devoq Speech Services' },
      { name: 'AI33.pro TTS', projectLinked: 'Devoq Speech Services' },
      { name: 'TensorFlow', projectLinked: 'AgriBuddy' },
      { name: 'Prompt Engineering', projectLinked: 'Mind Mitra' },
      { name: 'NLP Pipelines', projectLinked: 'Mind Mitra' },
      { name: 'FastAPI', projectLinked: 'AgriBuddy' },
    ],
  },
  {
    id: 'fullstack-systems',
    category: 'Full-Stack & Backend Systems',
    icon: <Layers className="w-5 h-5 text-[#58745C]" />,
    description: 'High-throughput microservice gateways, relational databases, ORM models, and modern React architectures.',
    skills: [
      { name: 'Fastify', projectLinked: 'Ad Automation OS' },
      { name: 'Node.js & Express', projectLinked: 'Devoq Speech Services' },
      { name: 'Next.js & React', projectLinked: 'Ad Automation OS' },
      { name: 'Prisma ORM', projectLinked: 'Ad Automation OS' },
      { name: 'PostgreSQL', projectLinked: 'Ad Automation OS' },
      { name: 'Supabase', projectLinked: 'Ad Automation OS' },
      { name: 'REST API Architecture', projectLinked: 'All Microservices' },
    ],
  },
  {
    id: 'devops-cloud',
    category: 'DevOps & Cloud Infrastructure',
    icon: <Terminal className="w-5 h-5 text-[#58745C]" />,
    description: 'Containerized deployments, version control, CI/CD pipelines, and cloud computing environments.',
    skills: [
      { name: 'Docker', projectLinked: 'Devoq Speech Services' },
      { name: 'AWS', projectLinked: 'Cloud Roles Prep' },
      { name: 'Google Cloud Platform', projectLinked: 'Speech API Integration' },
      { name: 'Git & GitHub', projectLinked: 'Version Control Workflows' },
      { name: 'Railway & Vercel', projectLinked: 'Ad Automation OS Deployments' },
      { name: 'CI/CD Pipelines', projectLinked: 'Automated Deployments' },
    ],
  },
  {
    id: 'project-methodologies',
    category: 'Methodologies & Technical Leadership',
    icon: <Target className="w-5 h-5 text-[#58745C]" />,
    description: 'Management frameworks from Harvard University and technical operations from IIT Madras.',
    skills: [
      { name: 'Agile Project Management', projectLinked: 'JJGillespie.com' },
      { name: 'Sprint Planning & Scrum', projectLinked: 'Devoq Labs' },
      { name: 'Risk Assessment', projectLinked: 'Client Reviews' },
      { name: 'Technical Documentation', projectLinked: 'PRDs & Backlogs' },
      { name: 'Resource Allocation', projectLinked: 'Cross-functional Teams' },
      { name: 'Stakeholder Communication', projectLinked: 'Client Milestones' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="competencies" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker number="SEC.03" code="TECHNICAL_COMPETENCIES" label="Core Stack" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Technical competencies &amp; engineering stack.
          </h2>
          <p className="text-base md:text-lg text-[#52584F] leading-relaxed">
            Directly mapped from my curriculum vitae: programming languages, full-stack backends, machine learning pipelines, and agile management frameworks.
          </p>
        </div>

        {/* Competency Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETENCY_GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle flex flex-col justify-between hover:border-[#CBD1C4] transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-3 pb-3 border-b border-[#EBECE6]">
                  <div className="p-2 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9]">
                    {group.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#20231F]">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-[#6B7168] leading-relaxed mb-4">
                  {group.description}
                </p>

                {/* Skills Interactive List */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => {
                    const isSelected = selectedSkill === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                        className={`text-xs font-mono px-2.5 py-1 rounded border transition-all text-left ${
                          isSelected
                            ? 'bg-[#58745C] text-white border-[#58745C] shadow-xs'
                            : 'bg-[#F7F7F2] text-[#20231F] border-[#E2E4DC] hover:border-[#CBD1C4]'
                        }`}
                      >
                        <span>{skill.name}</span>
                        {skill.projectLinked && isSelected && (
                          <span className="block text-[10px] text-[#DCE7DD] mt-0.5">
                            ↳ {skill.projectLinked}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Insight */}
              <div className="mt-5 pt-3 border-t border-[#F0F1EA] text-[11px] font-mono text-[#8D938A] flex items-center justify-between">
                <span>{group.skills.length} VERIFIED SKILLS</span>
                <span className="text-[#58745C]">PROVEN IN PRODUCTION</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
