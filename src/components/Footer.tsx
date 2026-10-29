'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E2E4DC] bg-[#F7F7F2] py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Brand & Subtext */}
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-[#20231F] block mb-1">
              Manish Chouhan
            </span>
            <p className="text-xs font-mono text-[#6B7168]">
              Software Engineer, AI Engineer &amp; Product Builder • IIT Madras &amp; Harvard Studies
            </p>
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#6B7168]">
            <a href="#projects" className="hover:text-[#20231F] transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#20231F] transition-colors">
              Experience
            </a>
            <a href="#competencies" className="hover:text-[#20231F] transition-colors">
              Competencies
            </a>
            <a href="#about" className="hover:text-[#20231F] transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-[#20231F] transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-[#20231F] transition-colors">
              Contact
            </a>
            <a
              href="/resume.pdf"
              download="Manish_Chouhan_CV.pdf"
              className="text-[#58745C] hover:text-[#47604B] transition-colors font-semibold font-mono"
            >
              Final CV (PDF)
            </a>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#EBECE6] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8D938A]">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:manishchouchan123@gmail.com"
              className="hover:text-[#20231F] transition-colors flex items-center space-x-1.5 font-mono"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href="tel:+918905694021"
              className="hover:text-[#20231F] transition-colors flex items-center space-x-1.5 font-mono"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 89056 94021</span>
            </a>
            <a
              href="https://www.linkedin.com/in/manish-chouhan-2301a7230/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#20231F] transition-colors flex items-center space-x-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Manish-10275"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#20231F] transition-colors flex items-center space-x-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} Manish Chouhan. Built with Next.js &amp; TypeScript.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 hover:text-[#20231F] transition-colors text-xs p-1"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
