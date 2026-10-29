'use client';

import React from 'react';

interface SectionMarkerProps {
  number: string;
  code: string;
  label: string;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({ number, code, label }) => {
  return (
    <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-[#58745C] font-semibold mb-3 select-none">
      <span className="w-2 h-2 rounded-full bg-[#58745C]" />
      <span className="text-[#6B7168]">[{number} // {code}]</span>
      <span className="text-[#8D938A]">•</span>
      <span className="uppercase text-[#58745C]">{label}</span>
    </div>
  );
};

export const TechnicalChip: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#F1F2EC] border border-[#E2E4DC] text-[11px] font-mono text-[#20231F]">
      <span className="text-[#8D938A]">{label}:</span>
      <span className="font-semibold text-[#354837]">{value}</span>
    </div>
  );
};

export const SystemBusLine: React.FC = () => {
  return (
    <div className="relative w-full py-4 flex items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#DDE2D8] to-transparent" />
      <div className="absolute px-3 bg-[#F7F7F2] text-[10px] font-mono text-[#8D938A] flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#58745C]" />
        <span>SYS.BUS // FLOW_INTERCONNECT</span>
      </div>
    </div>
  );
};
