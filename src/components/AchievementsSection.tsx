'use client';

import React from 'react';
import { GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { SectionMarker } from './EngineeringMotif';

interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
  notes?: string;
}

interface CertificationItem {
  title: string;
  issuerOrFocus: string;
  badge?: string;
}

const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Liberal Arts (Business Administration Mgmt)',
    institution: 'Harvard University',
    notes: 'Rigorous management principles, organizational leadership, strategy, and commercial execution.',
  },
  {
    degree: 'BS in Data Science & Applications',
    institution: 'IIT Madras',
    period: '2025 – 2029',
    notes: 'Statistical algorithms, machine learning model lifecycles, database management systems, and large-scale data engineering.',
  },
];

const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Credential of Leadership, Impact, & Management',
    issuerOrFocus: 'Team Leadership, Strategy, Finance, Digital World',
  },
  {
    title: 'Google Ads Apps & Play Academy',
    issuerOrFocus: 'Google Certification',
  },
  {
    title: 'AWS Job Roles in Cloud & ML Prep',
    issuerOrFocus: 'Amazon Web Services',
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker number="SEC.05" code="ACADEMIC_CREDENTIALS" label="Education & Certifications" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Academic foundations &amp; verified credentials.
          </h2>
          <p className="text-base md:text-lg text-[#52584F] leading-relaxed">
            Preserved directly from my curriculum vitae: degree programs from Harvard University and IIT Madras alongside verified technical and leadership credentials.
          </p>
        </div>

        {/* 2-Column Layout: Education (Left) & Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education Sub-Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2.5 pb-3 border-b border-[#E2E4DC]">
              <GraduationCap className="w-5 h-5 text-[#58745C]" />
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-[#20231F]">
                Academic Programs
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle hover:border-[#CBD1C4] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h4 className="text-lg font-display font-bold text-[#20231F]">
                      {edu.degree}
                    </h4>
                    {edu.period && (
                      <span className="text-xs font-mono text-[#58745C] bg-[#EBF1EC] px-2.5 py-0.5 rounded-full border border-[#D7E2D9] self-start sm:self-auto">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-mono text-[#58745C] font-semibold mb-3">
                    {edu.institution}
                  </p>
                  {edu.notes && (
                    <p className="text-xs text-[#6B7168] leading-relaxed">
                      {edu.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Sub-Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2.5 pb-3 border-b border-[#E2E4DC]">
              <Award className="w-5 h-5 text-[#58745C]" />
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-[#20231F]">
                Verified Credentials
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E4DC] rounded-xl p-5 shadow-card-subtle flex items-start space-x-4 hover:border-[#CBD1C4] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9] text-[#58745C] flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-bold text-[#20231F] mb-0.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-[#6B7168]">
                      {cert.issuerOrFocus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
