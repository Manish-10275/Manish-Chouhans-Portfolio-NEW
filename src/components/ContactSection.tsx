'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, ExternalLink, Copy, Check, Send, Globe } from 'lucide-react';
import { SectionMarker } from './EngineeringMotif';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('manishchouchan123@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subjectLine = encodeURIComponent(
      formData.subject
        ? `[Engineering / Product Inquiry] ${formData.subject}`
        : `[Inquiry] From ${formData.name}`
    );
    const bodyText = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:manishchouchan123@gmail.com?subject=${subjectLine}&body=${bodyText}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker number="SEC.06" code="INITIATE_CONNECTION" label="Get In Touch" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Let&apos;s build dependable software &amp; AI systems.
          </h2>
          <p className="text-base md:text-lg text-[#52584F] leading-relaxed">
            Available for Software Engineering, AI Engineering, and Technical Product roles. Reach out directly via email, phone, or the form below.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Card */}
            <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block">
                Direct Contact
              </span>

              {/* Email */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#EBECE6]">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-[#EBF1EC] text-[#58745C] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8D938A] block">Email</span>
                    <a
                      href="mailto:manishchouchan123@gmail.com"
                      className="text-sm font-medium text-[#20231F] hover:text-[#58745C] transition-colors break-all font-mono"
                    >
                      manishchouchan123@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-[#F1F2EC] text-[#6B7168] hover:text-[#20231F] transition-colors text-xs flex items-center space-x-1"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#58745C]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 pb-4 border-b border-[#EBECE6]">
                <div className="p-2 rounded-lg bg-[#EBF1EC] text-[#58745C] flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8D938A] block">Phone</span>
                  <a
                    href="tel:+918905694021"
                    className="text-sm font-medium text-[#20231F] hover:text-[#58745C] transition-colors font-mono"
                  >
                    +91 89056 94021
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3 pb-4 border-b border-[#EBECE6]">
                <div className="p-2 rounded-lg bg-[#EBF1EC] text-[#58745C] flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8D938A] block">Location</span>
                  <span className="text-sm font-medium text-[#20231F]">
                    Sojat Road, Pali, Rajasthan, India
                  </span>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block mb-2">
                  Verified Profiles
                </span>

                <a
                  href="https://www.linkedin.com/in/manish-chouhan-2301a7230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#FAF9F5] hover:bg-[#F1F2EC] border border-[#E2E4DC] text-xs font-medium text-[#20231F] transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <Linkedin className="w-4 h-4 text-[#58745C]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6B7168]" />
                </a>

                <a
                  href="https://github.com/Manish-10275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#FAF9F5] hover:bg-[#F1F2EC] border border-[#E2E4DC] text-xs font-medium text-[#20231F] transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <Github className="w-4 h-4 text-[#58745C]" />
                    <span>GitHub Repositories</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6B7168]" />
                </a>
              </div>
            </div>

            {/* Approved CV Document Card */}
            <div className="bg-white border border-[#E2E4DC] rounded-xl p-6 shadow-card-subtle space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block">
                Curriculum Vitae
              </span>
              <p className="text-xs text-[#6B7168] leading-relaxed">
                Download the finalized, two-page curriculum vitae covering my full engineering background, AI automations, and academic credentials.
              </p>

              <div>
                <a
                  href="/resume.pdf"
                  download="Manish_Chouhan_CV.pdf"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-medium text-[#58745C] hover:text-[#47604B] bg-[#EBF1EC] hover:bg-[#E0EBE2] border border-[#D7E2D9] transition-colors w-full justify-center"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Final CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E2E4DC] rounded-xl p-8 shadow-card-subtle">
              <h3 className="text-xl font-display font-bold text-[#20231F] mb-1">
                Send an Inquiry
              </h3>
              <p className="text-xs text-[#6B7168] mb-6">
                Fill in your details below to launch a pre-addressed email message.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9] text-xs text-[#354837] flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#58745C] flex-shrink-0" />
                  <span>Your email client has been opened with your inquiry pre-filled.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#6B7168] mb-1.5 font-medium"
                    >
                      Your Name <span className="text-[#58745C]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-[#FAF9F5] border border-[#E2E4DC] rounded-lg px-3.5 py-2.5 text-sm text-[#20231F] outline-none placeholder-[#8D938A] focus:border-[#58745C] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#6B7168] mb-1.5 font-medium"
                    >
                      Email Address <span className="text-[#58745C]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. elena@company.com"
                      className="w-full bg-[#FAF9F5] border border-[#E2E4DC] rounded-lg px-3.5 py-2.5 text-sm text-[#20231F] outline-none placeholder-[#8D938A] focus:border-[#58745C] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#6B7168] mb-1.5 font-medium"
                  >
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineer / AI Engineering Inquiry"
                    className="w-full bg-[#FAF9F5] border border-[#E2E4DC] rounded-lg px-3.5 py-2.5 text-sm text-[#20231F] outline-none placeholder-[#8D938A] focus:border-[#58745C] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#6B7168] mb-1.5 font-medium"
                  >
                    Message <span className="text-[#58745C]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the project, role, requirements, or timeline..."
                    className="w-full bg-[#FAF9F5] border border-[#E2E4DC] rounded-lg px-3.5 py-2.5 text-sm text-[#20231F] outline-none placeholder-[#8D938A] focus:border-[#58745C] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#58745C] hover:bg-[#47604B] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58745C] w-full sm:w-auto justify-center"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
