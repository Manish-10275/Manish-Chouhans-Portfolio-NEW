'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, ExternalLink, Copy, Check, Send, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('manishchouhan123@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto link for direct reliable dispatch
    const subjectLine = encodeURIComponent(
      formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Inquiry] From ${formData.name}`
    );
    const bodyText = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:manishchouhan123@gmail.com?subject=${subjectLine}&body=${bodyText}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold mb-3">
            <span>Contact &amp; Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Let&apos;s start a conversation.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            I am always open to discussing new technical projects, AI automation initiatives, engineering roles, and product collaborations. Reach out directly via email or the form below.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Information & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block mb-2">
                Direct Email
              </span>
              <a
                href="mailto:manishchouhan123@gmail.com"
                className="text-base md:text-lg font-mono font-medium text-[#20231F] hover:text-[#58745C] transition-colors block break-all mb-4"
              >
                manishchouhan123@gmail.com
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium text-[#20231F] bg-[#F1F2EC] hover:bg-[#E8EAE2] transition-colors border border-[#E2E4DC]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#58745C]" />
                    <span className="text-[#58745C] font-semibold">Email copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#6B7168]" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>

            {/* Profiles & Location */}
            <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block">
                Verified Profiles
              </span>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/manish-chouhan-2301a7230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F1F2EC] transition-colors text-sm text-[#20231F]"
                >
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-4 h-4 text-[#58745C]" />
                    <span className="font-medium">LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8D938A]" />
                </a>

                <a
                  href="https://github.com/Manish-10275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F1F2EC] transition-colors text-sm text-[#20231F]"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="w-4 h-4 text-[#58745C]" />
                    <span className="font-medium">GitHub Repositories</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8D938A]" />
                </a>

                <div className="flex items-center space-x-3 p-3 text-sm text-[#6B7168]">
                  <MapPin className="w-4 h-4 text-[#8D938A]" />
                  <span>Sojat Road, Pali, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Resume Access Card */}
            <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block mb-2">
                Curriculum Vitae
              </span>
              <p className="text-xs text-[#6B7168] leading-relaxed mb-4">
                Download the verified PDF version of my resume or view the live hosted document online.
              </p>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href="/resume.pdf"
                  download="Manish_Chouhan_Resume.pdf"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-white bg-[#20231F] hover:bg-[#353A33] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                <a
                  href="https://canva.link/z8w8qqvzceccfyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-[#20231F] bg-[#F1F2EC] hover:bg-[#E8EAE2] transition-colors border border-[#E2E4DC]"
                >
                  <span>View Online CV</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6B7168]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E2E4DC] rounded-2xl p-7 md:p-9 shadow-card-subtle">
              <h3 className="text-xl font-display font-bold text-[#20231F] tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs md:text-sm text-[#6B7168] leading-relaxed mb-6">
                Fill out the fields below and submit to trigger a direct email transmission with your pre-formatted note.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7168] mb-1.5 font-medium">
                      Your Name <span className="text-[#58745C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#FAF9F5] border border-[#E2E4DC] rounded-lg px-3.5 py-2.5 text-sm text-[#20231F] outline-none placeholder-[#8D938A] focus:border-[#58745C] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7168] mb-1.5 font-medium">
                      Email Address <span className="text-[#58745C]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      className="w-full bg-[#FAF9F5] border border-[#E2E4DC] rounded-lg px-3.5 py-2.5 text-sm text-[#20231F] outline-none placeholder-[#8D938A] focus:border-[#58745C] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7168] mb-1.5 font-medium">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Automation Project / Collaboration Inquiry"
                    className="w-full bg-[#FAF9F5] border border-[#E2E4DC] rounded-lg px-3.5 py-2.5 text-sm text-[#20231F] outline-none placeholder-[#8D938A] focus:border-[#58745C] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7168] mb-1.5 font-medium">
                    Message <span className="text-[#58745C]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timeline, question, or role details..."
                    className="w-full bg-[#FAF9F5] border border-[#E2E4DC] rounded-lg px-3.5 py-2.5 text-sm text-[#20231F] outline-none placeholder-[#8D938A] focus:border-[#58745C] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#58745C] hover:bg-[#47604B] transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="p-3.5 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9] text-[#354837] text-xs font-mono flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#58745C] flex-shrink-0" />
                    <span>Your mail client has been opened with your message. Thank you for connecting!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
