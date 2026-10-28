'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Competencies', href: '#competencies' },
  { label: 'Education', href: '#education' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F7F7F2]/90 backdrop-blur-md border-b border-[#E2E4DC] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand / Wordmark */}
        <a
          href="#top"
          className="group flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 text-[#20231F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58745C] rounded"
        >
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-[#20231F]">
            Manish Chouhan
          </span>
          <span className="text-[11px] font-mono text-[#6B7168] sm:pl-2 sm:border-l sm:border-[#E2E4DC]">
            Project Manager &amp; Technical Product Leader
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#6B7168] hover:text-[#20231F] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58745C] rounded py-1 px-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-[#58745C] hover:bg-[#47604B] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#58745C]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-[#20231F] rounded-lg hover:bg-[#EFEFEA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58745C]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2E4DC] bg-[#F7F7F2] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-4 text-base">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#20231F] font-medium py-1 hover:text-[#58745C] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E2E4DC]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-[#58745C] hover:bg-[#47604B] transition-colors"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
