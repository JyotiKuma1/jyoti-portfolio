'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

export default function ContactsPage() {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jkumari75628@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("https://raw.githubusercontent.com/devloop01/webgl-slider/main/src/img/noise.png")` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen justify-between">
                
                {/* Unified Top Navigation */}
                <Navbar currentPath="/contacts" />

                {/* Main Hero Header */}
                <div className="pt-12 sm:pt-16 pb-8 text-center select-none">
                    <span className="font-mono text-xs sm:text-sm text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Get In Touch
                    </span>
                    <h1 className="text-[14vw] sm:text-[11vw] md:text-[8rem] font-black uppercase tracking-tight text-transparent stroke-text opacity-40 leading-none">
                        CONTACTS
                    </h1>
                    <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
                        I'm open to connecting with cybersecurity professionals, collaborating on meaningful technical projects, and exploring internship and early-career opportunities in cybersecurity and software development.
                    </p>
                </div>

                {/* 2-Column Contact Hub */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
                    
                    {/* Left Column: Direct Communication Channels */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        
                        {/* Availability Pill */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span className="font-mono text-xs text-white/80 font-medium">STATUS: READY TO COLLABORATE</span>
                            </div>
                            <span className="font-mono text-[11px] text-white/40">DEHRADUN (IST)</span>
                        </div>

                        {/* Email Card */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-white/20 transition-all shadow-2xl">
                            <span className="font-mono text-xs text-red-400 block uppercase tracking-wider">
                                Direct Email
                            </span>
                            <h2 className="text-lg sm:text-xl font-bold text-white break-all">
                                jkumari75628@gmail.com
                            </h2>
                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={handleCopyEmail}
                                    className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/10 font-mono text-xs text-white transition-colors cursor-pointer flex items-center gap-2"
                                >
                                    <span>{copiedEmail ? '✓ Copied' : 'Copy Email'}</span>
                                </button>
                                <a
                                    href="mailto:jkumari75628@gmail.com"
                                    className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 font-mono text-xs text-white transition-colors flex items-center gap-1.5"
                                >
                                    <span>Open Mail</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Academic / Location Card */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-3 hover:border-white/20 transition-all shadow-2xl">
                            <span className="font-mono text-xs text-red-400 block uppercase tracking-wider">
                                Academic Location
                            </span>
                            <h2 className="text-base sm:text-lg font-bold text-white">
                                UPES Dehradun, Uttarakhand, India
                            </h2>
                            <p className="text-white/50 text-xs font-mono leading-relaxed">
                                Department of Computer Science & Engineering • Cyber Security
                            </p>
                        </div>

                        {/* Social / Professional Handles */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
                            <span className="font-mono text-xs text-white/40 block uppercase tracking-wider">
                                Professional Networks
                            </span>
                            <div className="grid grid-cols-2 gap-3 pt-1">
                                <a
                                    href="https://github.com/jyotiKuma1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-red-500/40 hover:bg-red-600/10 transition-all flex flex-col gap-1 group"
                                >
                                    <span className="text-white font-bold text-sm group-hover:text-red-400 transition-colors flex items-center justify-between">
                                        GitHub <span>↗</span>
                                    </span>
                                    <span className="font-mono text-[11px] text-white/40">Repositories & Code</span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/jyoti-gupta-21621226b"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-red-500/40 hover:bg-red-600/10 transition-all flex flex-col gap-1 group"
                                >
                                    <span className="text-white font-bold text-sm group-hover:text-red-400 transition-colors flex items-center justify-between">
                                        LinkedIn <span>↗</span>
                                    </span>
                                    <span className="font-mono text-[11px] text-white/40">Professional Profile</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Direct Message Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                            
                            <div className="mb-6">
                                <span className="font-mono text-xs text-red-500 tracking-[0.3em] uppercase block mb-1">
                                    Send An Inquiry
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                    Let's Connect.
                                </h3>
                                <p className="text-white/60 text-xs sm:text-sm mt-2 leading-relaxed">
                                    Leave a message below for inquiries, collaborative security research, or early-career opportunities.
                                </p>
                            </div>

                            <ContactForm />
                        </div>
                    </div>

                </div>

                {/* Footer Quote & Navigation Dock */}
                <div className="text-center py-4 text-xs font-mono text-white/40 border-t border-white/5">
                    "Designed with curiosity. Built for continuous learning."
                </div>

                <footer className="pt-4 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
                    <div>
                        © 2026 JYOTI KUMARI — PORTFOLIO
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/about" className="hover:text-red-400 transition-colors">
                            About →
                        </Link>
                        <Link href="/experience" className="hover:text-red-400 transition-colors">
                            Experience →
                        </Link>
                        <Link href="/projects" className="hover:text-red-400 transition-colors">
                            Projects →
                        </Link>
                    </div>
                </footer>

            </div>
        </main>
    );
}
