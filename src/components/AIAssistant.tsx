'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  sender: 'ai' | 'user';
  text: string;
  timestamp: Date;
}

const PRESET_QAS = [
  {
    q: 'Tell me about Devoq Labs.',
    a: 'Manish is the Founder & CEO of Devoq Labs (founded in June 2025). It is a tech agency offering premium web development, AI integration, UI/UX design, and digital transformation solutions. He manages end-to-end project lifecycles and coordinates cross-functional developer/marketer teams.'
  },
  {
    q: 'What does he study at IIT Madras?',
    a: 'Manish is pursuing a BS in Data Science and Applications (2025-2029) at the prestigious Indian Institute of Technology, Madras. He is also a Core Team Member of Paradox (2026), managing operations, logistics, and partner sponsorships for their flagship events.'
  },
  {
    q: 'What are his key projects?',
    a: 'His key builds include:\n1. Mind Mitra: An AI mental health companion.\n2. AgriBuddy: A smart IoT/AI app supporting sustainable crop health.\n3. Finozest: A high-fidelity financial dashboard.\n4. Devoq Labs Core: Scalable software architectures for client portals.'
  },
  {
    q: 'How can we collaborate with him?',
    a: 'You can work with Manish by clicking "Let\'s Build Together" to open the contact panel, emailing him at manishchouhan123@gmail.com, or scheduling a call directly through the Calendly widget in the Contact section.'
  }
];

export const AIAssistant: React.FC = () => {
  const { aiAssistantOpen, setAiAssistantOpen, playClickSound, playChimeSound, playHoverSound } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Hello! I am Manish's AI Twin. Feel free to ask me anything about his projects, startup ventures, IIT Madras coursework, or scheduling a meeting!",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim() || isTyping) return;

    playClickSound();
    
    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Trigger AI response simulation
    setIsTyping(true);
    
    setTimeout(() => {
      // Find matches in presets or defaults
      const query = text.toLowerCase();
      let answer = "I'm not quite sure how to answer that specific question, but you can check out the sections on About, Skills, and Experience, or shoot Manish an email directly at manishchouhan123@gmail.com!";
      
      const match = PRESET_QAS.find(
        (qa) => query.includes(qa.q.toLowerCase()) || qa.q.toLowerCase().includes(query)
      );
      
      if (match) {
        answer = match.a;
      } else if (query.includes('hello') || query.includes('hi')) {
        answer = 'Hello! How can I assist you in learning more about Manish today?';
      } else if (query.includes('skills') || query.includes('tech')) {
        answer = 'Manish specializes in Python, React, Next.js, Node.js, AWS, Google Cloud, Project Management, Agile, and UI/UX design. You can view his full interactive 3D Skill Galaxy in the Skills section!';
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: answer,
          timestamp: new Date()
        }
      ]);
      setIsTyping(false);
      playChimeSound();
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end">
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setAiAssistantOpen(!aiAssistantOpen);
          playClickSound();
        }}
        onMouseEnter={playHoverSound}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center text-white shadow-lg cursor-pointer z-50 border border-white/20 relative"
      >
        <AnimatePresence mode="wait">
          {aiAssistantOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping border border-[#050505]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {aiAssistantOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[350px] md:w-[400px] h-[500px] bg-background/95 border border-white/10 rounded-2xl shadow-2xl glass-panel flex flex-col mb-4 overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3.5 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue/30 to-brand-purple/30 border border-brand-blue/50 flex items-center justify-center">
                  <Bot className="w-4.5 h-4.5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-semibold tracking-wide flex items-center space-x-1.5">
                    <span>Manish AI Twin</span>
                    <Sparkles className="w-3 h-3 text-brand-accent animate-pulse" />
                  </h3>
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/50">ONLINE & READY</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => { setAiAssistantOpen(false); playClickSound(); }}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    {msg.sender === 'ai' && (
                      <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-brand-blue" />
                      </div>
                    )}
                    <div
                      className={`rounded-xl px-3 py-2 text-xs md:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md'
                          : 'bg-white/5 border border-white/10 text-white/95'
                      }`}
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-brand-blue" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/60 flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Prompt Chips */}
            <div className="px-4 py-2 border-t border-white/5 flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar max-h-[85px]">
              {PRESET_QAS.map((qa, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(qa.q)}
                  disabled={isTyping}
                  className="text-[10px] md:text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-2.5 py-1 text-white/80 transition-all hover:border-brand-purple/40 whitespace-nowrap cursor-pointer"
                >
                  {qa.q}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              className="p-3 border-t border-white/10 bg-white/5 flex items-center space-x-2"
            >
              <input
                type="text"
                placeholder="Ask your query..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isTyping}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs md:text-sm outline-none text-white placeholder-white/30 focus:border-brand-blue/50"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="h-9 w-9 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistant;
