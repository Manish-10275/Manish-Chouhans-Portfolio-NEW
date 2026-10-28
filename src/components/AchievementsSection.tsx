'use client';

import React from 'react';
import { Award, ShieldCheck, Globe2, BookOpen, Users } from 'lucide-react';

interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

const CREDENTIALS: Credential[] = [
  {
    id: 'kaggle-ai-agents',
    title: 'AI Agents Intensive Course',
    issuer: 'Kaggle',
    date: '2025',
    category: 'AI & Autonomous Systems',
    description:
      'Completed practical coursework on building autonomous agents, multi-step tool use, function calling, evaluation frameworks, and agentic reasoning architectures.',
    icon: <ShieldCheck className="w-5 h-5 text-[#58745C]" />,
  },
  {
    id: 'google-ai',
    title: 'Google AI Learning Programs',
    issuer: 'Google',
    date: '2025',
    category: 'Machine Learning & Cloud',
    description:
      'Foundational learning in applied AI concepts, machine learning model lifecycles, and Google Cloud AI service integration.',
    icon: <Award className="w-5 h-5 text-[#58745C]" />,
  },
  {
    id: 'neoteric-summit',
    title: 'Neoteric Summit Dubai 2026',
    issuer: 'Neoteric Global Platform',
    date: '2026',
    category: 'Global Tech & Innovation',
    description:
      'Selected participant and delegate exploring emerging technologies, global founder ecosystems, and generative AI operational frameworks in Dubai.',
    icon: <Globe2 className="w-5 h-5 text-[#58745C]" />,
  },
  {
    id: 'paradox-operations',
    title: 'Core Team Operations & Sponsorships',
    issuer: 'Paradox, IIT Madras',
    date: '2026',
    category: 'Event Leadership & Logistics',
    description:
      'Organized logistical operations and coordinate corporate partner sponsorships for Paradox, the flagship annual symposium at IIT Madras.',
    icon: <Users className="w-5 h-5 text-[#58745C]" />,
  },
  {
    id: 'published-books',
    title: 'Published Author of 3 Poetry Collections',
    issuer: 'Independent Literary Publishing',
    date: '2024 — 2025',
    category: 'Writing & Reflection',
    description:
      'Authored and published three distinct creative collections exploring human emotion, creative growth, and introspective philosophical thought.',
    icon: <BookOpen className="w-5 h-5 text-[#58745C]" />,
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold mb-3">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Honors, certifications &amp; milestones.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            Evidence-based programs, institute responsibilities, and verified technical learning milestones.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle flex flex-col justify-between hover:border-[#D1D4CA] transition-colors duration-150"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9]">
                    {cred.icon}
                  </div>
                  <span className="text-xs font-mono text-[#58745C] bg-[#EBF1EC] px-2.5 py-0.5 rounded-full border border-[#D7E2D9]">
                    {cred.date}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8D938A] block mb-1">
                  {cred.category}
                </span>
                <h3 className="text-base font-display font-bold text-[#20231F] mb-1">
                  {cred.title}
                </h3>
                <p className="text-xs font-mono text-[#6B7168] font-medium mb-3">
                  {cred.issuer}
                </p>
                <p className="text-xs text-[#6B7168] leading-relaxed">
                  {cred.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
