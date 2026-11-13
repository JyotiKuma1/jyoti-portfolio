'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Lanyard from '@/components/Lanyard';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("https://raw.githubusercontent.com/devloop01/webgl-slider/main/src/img/noise.png")` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen justify-between">
                
                {/* Unified Top Navigation */}
                <Navbar currentPath="/about" />

                {/* Main Hero Header */}
                <div className="pt-12 sm:pt-16 pb-8 text-center select-none">
                    <span className="font-mono text-xs sm:text-sm text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Profile & Research Philosophy
                    </span>
                    <h1 className="text-[14vw] sm:text-[11vw] md:text-[8rem] font-black uppercase tracking-tight text-transparent stroke-text opacity-40 leading-none">
                        ABOUT ME
                    </h1>
                </div>

                {/* 2-Column Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
                    
                    {/* Left Column: Portrait Card, Key Facts & Education */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl group hover:border-white/20 transition-all duration-300">
                            
                            {/* Ambient Top Glow */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

                            {/* Center Portrait - Interactive 3D Lanyard Badge */}
                            <div className="relative w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6">
                                <Lanyard
                                    frontImage="/jyoti.jpg"
                                    backImage="/card-back.svg"
                                    cardColor="#0a0a0a"
                                    strapColor="#e7000b"
                                    metal="silver"
                                    finish="glossy"
                                    orientation="portrait"
                                    size={0.65}
                                    strapLength={0.45}
                                    strapWidth={0.65}
                                    gravity={1}
                                    damping={0.5}
                                    elasticity={0.55}
                                    breeze={0.4}
                                    interactive={true}
                                    intro={true}
                                />
                                <div className="absolute top-3 left-3 pointer-events-none bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 z-10">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span className="font-mono text-[11px] text-white/90">OPEN TO INTERNSHIPS</span>
                                </div>
                                <div className="absolute bottom-3 right-3 pointer-events-none bg-black/50 backdrop-blur-md border border-white/5 rounded-full px-2.5 py-0.5 flex items-center gap-1.5 z-10 opacity-70">
                                    <span className="font-mono text-[10px] text-white/60">INTERACTIVE BADGE</span>
                                </div>
                            </div>

                            {/* Identity Title */}
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                    Jyoti Kumari
                                </h2>
                                <p className="font-mono text-xs sm:text-sm text-red-500 mt-1 uppercase tracking-wider">
                                    Cybersecurity • Threat Intelligence • Digital Forensics
                                </p>
                            </div>

                            {/* Quick Specs */}
                            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                                <div>
                                    <span className="text-white/40 block">LOCATION</span>
                                    <span className="text-white/90 font-medium">Dehradun / India</span>
                                </div>
                                <div>
                                    <span className="text-white/40 block">PROGRAM</span>
                                    <span className="text-white/90 font-medium">MCA Cyber Security</span>
                                </div>
                                <div>
                                    <span className="text-white/40 block">CURRENT SGPA</span>
                                    <span className="text-white/90 font-medium">8.3 / 10.0 (UPES)</span>
                                </div>
                                <div>
                                    <span className="text-white/40 block">SPECIALIZATION</span>
                                    <span className="text-white/90 font-medium">Threat Intel & Forensics</span>
                                </div>
                            </div>

                            {/* Direct Connect Buttons */}
                            <div className="mt-8 flex flex-wrap gap-2.5">
                                <Link
                                    href="/contacts"
                                    className="flex-1 min-w-[130px] text-center py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs sm:text-sm transition-colors duration-200 shadow-lg"
                                >
                                    Let's Connect
                                </Link>
                                <a
                                    href="https://github.com/JyotiKuma1?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white font-mono text-xs flex items-center justify-center transition-colors"
                                >
                                    GitHub ↗
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jyoti-gupta-21621226b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white font-mono text-xs flex items-center justify-center transition-colors"
                                >
                                    LinkedIn ↗
                                </a>
                                <a
                                    href="https://tryhackme.com/p/Jyoti11"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:border-red-500/40 hover:bg-red-600/10 text-white font-mono text-xs flex items-center justify-center transition-colors"
                                >
                                    TryHackMe ↗
                                </a>
                            </div>

                        </div>

                        {/* Education Card */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <h3 className="font-bold text-lg sm:text-xl text-white tracking-tight">
                                    Education
                                </h3>
                                <span className="font-mono text-xs text-white/40">ACADEMICS</span>
                            </div>

                            <div className="space-y-6">
                                {/* UPES Dehradun */}
                                <div className="space-y-1.5 relative pl-5 border-l-2 border-red-500">
                                    <span className="font-mono text-xs text-red-400 block">July 2025 – Present</span>
                                    <h4 className="text-white font-bold text-base leading-snug">
                                        Master of Computer Applications — Cyber Security
                                    </h4>
                                    <p className="text-sm text-white/70">
                                        University of Petroleum and Energy Studies (UPES), Dehradun
                                    </p>
                                    <div className="pt-1">
                                        <span className="font-mono text-xs text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 rounded-full inline-block">
                                            Current SGPA: 8.3 / 10.0
                                        </span>
                                    </div>
                                </div>

                                {/* Jamshedpur Women's University */}
                                <div className="space-y-1.5 relative pl-5 border-l-2 border-white/20">
                                    <span className="font-mono text-xs text-white/40 block">June 2021 – May 2024</span>
                                    <h4 className="text-white font-bold text-base leading-snug">
                                        Bachelor of Computer Applications
                                    </h4>
                                    <p className="text-sm text-white/70">
                                        Jamshedpur Women's University
                                    </p>
                                    <div className="pt-1">
                                        <span className="font-mono text-xs text-white/90 border border-white/15 bg-white/[0.03] px-2.5 py-0.5 rounded-full inline-block">
                                            CGPA: 9.72 / 10.0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Bio Narrative, Pillars, Skills Matrix & Areas of Interest */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        
                        {/* Narrative Section */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="font-serif italic text-xl text-red-500 font-normal">Section</span>
                                <span className="h-px w-10 bg-red-600/50"></span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-6">
                                Curiosity Meets Cybersecurity
                            </h3>

                            <div className="space-y-4 text-sm sm:text-base text-white/75 leading-relaxed font-sans">
                                <p>
                                    I'm Jyoti Kumari, an MCA student specializing in Cyber Security at UPES Dehradun. My interest lies at the intersection of cybersecurity, investigation, and software development.
                                </p>
                                <p>
                                    My experience has exposed me to wireless security testing, digital forensic tools, cyber investigation support, and industrial system troubleshooting. I also enjoy building applications and exploring how data can be collected, organized, and transformed into useful insights.
                                </p>
                                <p>
                                    One of my key independent projects, ThreatTrust, reflects my interest in threat intelligence and security data integration. I worked on its database layer and connected MongoDB, Neo4j, and ChromaDB to the API.
                                </p>
                                <p>
                                    I'm continuously working to strengthen my technical foundations, learn through practical projects, and grow into a cybersecurity professional who can contribute to meaningful security and engineering challenges.
                                </p>
                            </div>

                            {/* Core Pillars */}
                            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <span className="font-mono text-xs text-red-500 font-bold">01 // THREAT INTEL</span>
                                    <h4 className="text-white font-bold text-sm">Threat Data Aggregation</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">
                                        Synthesizing heterogeneous data from NVD, CISA KEV, MITRE ATT&CK, OTX, VirusTotal, and abuse.ch into unified schemas.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <span className="font-mono text-xs text-red-500 font-bold">02 // FORENSICS</span>
                                    <h4 className="text-white font-bold text-sm">Evidence & Analysis</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">
                                        Acquiring and analyzing digital evidence with FTK Imager, Wireshark packet capture, and social media investigative monitoring.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <span className="font-mono text-xs text-red-500 font-bold">03 // TESTING</span>
                                    <h4 className="text-white font-bold text-sm">Wireless & Systems</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">
                                        Practical red teaming and wireless network testing using Flipper Zero and Alfa adapters, along with industrial system fault analysis.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Technical Arsenal Matrix */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <h3 className="font-bold text-lg sm:text-xl text-white tracking-tight">
                                    Technical Arsenal
                                </h3>
                                <span className="font-mono text-xs text-white/40">CORE SKILLS</span>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-wider">
                                        Programming Languages
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {['Java', 'Python', 'C', 'JavaScript'].map((item) => (
                                            <span key={item} className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-wider">
                                        Cybersecurity & Digital Forensics
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {['Wireshark', 'FTK Imager', 'Threat Hunting', 'Flipper Zero', 'Wireless Security Testing', 'Digital Forensics', 'Evidence Acquisition'].map((item) => (
                                            <span key={item} className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-wider">
                                        Threat Intelligence
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {['NVD', 'CISA KEV', 'MITRE ATT&CK', 'OTX', 'VirusTotal', 'abuse.ch'].map((item) => (
                                            <span key={item} className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-wider">
                                        Databases & Storage
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {['SQL', 'MongoDB', 'Neo4j', 'ChromaDB'].map((item) => (
                                            <span key={item} className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-wider">
                                        Web Development
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {['HTML5', 'CSS3', 'React.js', 'JSP & Servlets', 'REST APIs'].map((item) => (
                                            <span key={item} className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Areas of Interest ("What I'm Exploring") */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <h3 className="font-bold text-lg sm:text-xl text-white tracking-tight">
                                    Areas of Interest
                                </h3>
                                <span className="font-mono text-xs text-white/40">EXPLORATION</span>
                            </div>

                            <p className="text-white/60 text-xs sm:text-sm">
                                Core fields of ongoing academic study, technical investigation, and practical exploration:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { title: "Threat Intelligence & Threat Data Analysis", desc: "Data normalization, IoC aggregation & mapping" },
                                    { title: "Digital Forensics & Cyber Investigations", desc: "Evidence preservation, artifact extraction & triage" },
                                    { title: "Wireless Network Security", desc: "RF exploration, protocol testing with Alfa & Flipper" },
                                    { title: "Security Monitoring & Threat Hunting", desc: "Pattern discovery, endpoint logs & anomaly tracing" },
                                    { title: "Secure Software Development", desc: "Defensive coding, API verification & data safety" },
                                    { title: "Web Application Development", desc: "Building responsive tools with Java, React & databases" }
                                ].map((interest, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/40 hover:bg-red-500/5 transition-all group"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                            <h4 className="text-white font-bold text-xs sm:text-sm group-hover:text-red-400 transition-colors">
                                                {interest.title}
                                            </h4>
                                        </div>
                                        <p className="text-[11px] text-white/50 pl-3.5 leading-relaxed font-mono">
                                            {interest.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Footer Navigation Dock */}
                <footer className="pt-8 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
                    <div>
                        © 2026 JYOTI KUMARI — PORTFOLIO
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/experience" className="hover:text-red-400 transition-colors">
                            Experience →
                        </Link>
                        <Link href="/projects" className="hover:text-red-400 transition-colors">
                            Projects →
                        </Link>
                        <Link href="/contacts" className="hover:text-red-400 transition-colors">
                            Contacts →
                        </Link>
                    </div>
                </footer>

            </div>
        </main>
    );
}
