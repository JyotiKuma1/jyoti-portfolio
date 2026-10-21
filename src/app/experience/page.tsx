'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
            {/* Background Noise Texture */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("https://raw.githubusercontent.com/devloop01/webgl-slider/main/src/img/noise.png")` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen justify-between">
                
                {/* Unified Top Navigation */}
                <Navbar currentPath="/experience" />

                {/* Main Hero Header */}
                <div className="pt-12 sm:pt-16 pb-8 text-center select-none">
                    <span className="font-mono text-xs sm:text-sm text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Internships & Practical Exposure
                    </span>
                    <h1 className="text-[14vw] sm:text-[11vw] md:text-[8rem] font-black uppercase tracking-tight text-transparent stroke-text opacity-40 leading-none">
                        EXPERIENCE
                    </h1>
                    <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
                        Practical exposure across cyber investigations, wireless security testing, digital forensics, and industrial troubleshooting.
                    </p>
                </div>

                {/* Timeline Stepper Track */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-8 items-center px-1">
                    {/* Node 1: Auto Custer */}
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-white/40 bg-transparent shrink-0"></div>
                        <span className="text-xs sm:text-sm text-white/60 font-sans tracking-wide">
                            Jun, 2023 — Aug, 2023
                        </span>
                        <div className="hidden md:block h-px bg-white/15 flex-1 ml-2"></div>
                    </div>

                    {/* Node 2: Tata Steel */}
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-white/40 bg-transparent shrink-0"></div>
                        <span className="text-xs sm:text-sm text-white/60 font-sans tracking-wide">
                            May, 2024 — Sep, 2024
                        </span>
                        <div className="hidden md:block h-px bg-white/15 flex-1 ml-2"></div>
                    </div>

                    {/* Node 3: UPES Centre for Cybersecurity */}
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-white/40 bg-transparent shrink-0"></div>
                        <span className="text-xs sm:text-sm text-white/60 font-sans tracking-wide">
                            Jun, 2026 — Jul, 2026
                        </span>
                        <div className="hidden md:block h-px bg-white/15 flex-1 ml-2"></div>
                    </div>

                    {/* Node 4: Cyber Cell */}
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 font-sans tracking-wide">
                            Jul, 2026 — Aug, 2026
                        </span>
                        <span className="text-[10px] sm:text-xs text-red-400 border border-red-500/40 bg-red-500/10 px-2.5 py-0.5 rounded-full font-sans font-medium">
                            Cyber Cell
                        </span>
                    </div>
                </div>

                {/* 4-Card Experience Grid (2x2 Balanced Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-16">
                    
                    {/* Card 1: Cyber Cell Intern */}
                    <div className="group bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-9 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-white/40 block">01</span>
                                <span className="font-mono text-[10px] text-red-400 border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 rounded-full">
                                    CYBER INVESTIGATION
                                </span>
                            </div>

                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                                    Cyber Cell Intern
                                </h2>
                                <p className="text-sm sm:text-base text-white/70 font-normal mt-1">
                                    Cyber Cell Police Station, Dehradun
                                </p>
                                <span className="text-xs text-white/40 font-mono block mt-0.5">July 2026 – August 2026</span>
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed pt-2">
                                Contributed to red teaming activities and practical wireless security testing in operational environments.
                            </p>

                            <ul className="space-y-2.5 text-sm text-white/75 leading-relaxed pt-2">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Gained hands-on exposure to Flipper Zero and wireless testing using Alfa adapters.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Practiced acquiring and analyzing digital evidence with digital forensic tools.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Supported cyber investigations through active social media monitoring and intelligence workflows.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="pt-8 mt-8 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">TECH ARSENAL:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Flipper Zero", "Alfa Adapters", "FTK Imager", "Wireshark", "OSINT", "Evidence Acquisition"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-white transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Summer Research Intern (Centre for Cybersecurity, UPES) */}
                    <div className="group bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-9 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-white/40 block">02</span>
                                <span className="font-mono text-[10px] text-red-400 border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 rounded-full">
                                    CENTRE FOR CYBERSECURITY, UPES
                                </span>
                            </div>

                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                                    Cybersecurity Research Intern
                                </h2>
                                <p className="text-sm sm:text-base text-white/70 font-normal mt-1">
                                    Centre for Cybersecurity, School of Computer Science, UPES Dehradun
                                </p>
                                <span className="text-xs text-white/40 font-mono block mt-0.5">1 June 2026 – 31 July 2026</span>
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed pt-2">
                                Completed an intensive summer research internship in a cybersecurity-focused academic environment, cultivating professional development, adaptability, and perseverance.
                            </p>

                            <ul className="space-y-2.5 text-sm text-white/75 leading-relaxed pt-2">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Conducted cybersecurity research and technical study at the Centre for Cybersecurity, School of Computer Science.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Strengthened professional adaptability, problem-solving rigor, and analytical perseverance under academic mentorship.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Collaborated with faculty mentors on cybersecurity methodologies and technical investigative frameworks.</span>
                                </li>
                            </ul>

                            {/* Letter of Recommendation Callout */}
                            <div className="mt-5 p-4 rounded-2xl bg-red-500/[0.07] border border-red-500/25">
                                <div className="flex items-center gap-2 mb-1.5 text-red-400 font-mono text-xs font-semibold tracking-wider uppercase">
                                    <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    Letter of Recommendation Awarded
                                </div>
                                <p className="text-white/80 text-xs sm:text-sm italic leading-relaxed">
                                    &ldquo;Recommended without reservation and with full confidence in her ability to contribute positively to an organization.&rdquo;
                                </p>
                                <span className="block mt-2 text-xs text-white/50 font-mono">
                                    — Dr. Akashdeep Bhardwaj, Professor & Head, Centre for Cybersecurity, UPES
                                </span>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="pt-8 mt-8 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">TECH ARSENAL:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Academic Research", "Cybersecurity Architecture", "Security Protocols", "Threat Analysis", "Professional Development"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-white transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Error Detection Intern (Tata Steel) */}
                    <div className="group bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-9 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-white/40 block">03</span>
                                <span className="font-mono text-[10px] text-white/60 border border-white/20 bg-white/[0.05] px-2.5 py-0.5 rounded-full">
                                    INDUSTRIAL SYSTEMS
                                </span>
                            </div>

                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                                    Error Detection Intern
                                </h2>
                                <p className="text-sm sm:text-base text-white/70 font-normal mt-1">
                                    Tata Steel, Jamshedpur
                                </p>
                                <span className="text-xs text-white/40 font-mono block mt-0.5">May 2024 – September 2024</span>
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed pt-2">
                                Performed error detection, technical log monitoring, and root-cause analysis across operational plant systems.
                            </p>

                            <ul className="space-y-2.5 text-sm text-white/75 leading-relaxed pt-2">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Performed error detection and technical analysis in industrial and operational systems.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Assisted in monitoring system logs and troubleshooting technical operational faults.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Prepared detailed diagnostic reports on errors and contributed to corrective reliability measures.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="pt-8 mt-8 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">TECH ARSENAL:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Log Monitoring", "Industrial Fault Analysis", "Diagnostics", "Troubleshooting", "Reliability"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-white transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Web Developer Intern (Auto Custer Limited) */}
                    <div className="group bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-9 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-white/40 block">04</span>
                                <span className="font-mono text-[10px] text-white/60 border border-white/20 bg-white/[0.05] px-2.5 py-0.5 rounded-full">
                                    WEB ENGINEERING
                                </span>
                            </div>

                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                                    Web Developer Intern
                                </h2>
                                <p className="text-sm sm:text-base text-white/70 font-normal mt-1">
                                    Auto Custer Limited, Jamshedpur
                                </p>
                                <span className="text-xs text-white/40 font-mono block mt-0.5">June 2023 – August 2023</span>
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed pt-2">
                                Developed and maintained responsive company web interfaces and client experiences.
                            </p>

                            <ul className="space-y-2.5 text-sm text-white/75 leading-relaxed pt-2">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Implemented responsive, cross-device interfaces using HTML, CSS, and JavaScript.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Collaborated with design and backend engineering teams to ensure consistent site functionality.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Optimized website performance, resolved UI bugs, and supported cross-browser compatibility.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="pt-8 mt-8 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">TECH ARSENAL:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-Browser Testing", "Performance"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-white transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Practical Highlights Section */}
                <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl">
                    <span className="font-mono text-xs text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Technical Competencies
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                        Practical Security Exposure & Methodologies
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="border border-white/10 bg-white/[0.02] p-5 rounded-2xl">
                            <span className="font-mono text-xs text-red-400 block mb-2">01 / WIRELESS & RED TEAMING</span>
                            <h4 className="text-white font-bold text-sm mb-2">RF & Wireless Testing</h4>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Hands-on exploration of wireless network security testing, packet inspection, and antenna protocols using Flipper Zero and Alfa external adapters.
                            </p>
                        </div>
                        <div className="border border-white/10 bg-white/[0.02] p-5 rounded-2xl">
                            <span className="font-mono text-xs text-red-400 block mb-2">02 / RESEARCH & ACADEMIA</span>
                            <h4 className="text-white font-bold text-sm mb-2">Centre for Cybersecurity, UPES</h4>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Rigorous academic research and security frameworks under the mentorship of Dr. Akashdeep Bhardwaj, Professor & Head of the Centre for Cybersecurity.
                            </p>
                        </div>
                        <div className="border border-white/10 bg-white/[0.02] p-5 rounded-2xl">
                            <span className="font-mono text-xs text-red-400 block mb-2">03 / DIGITAL FORENSICS</span>
                            <h4 className="text-white font-bold text-sm mb-2">Evidence Acquisition & Triage</h4>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Acquiring and analyzing digital forensic evidence with FTK Imager and Wireshark, preserving chain-of-custody and identifying investigative indicators.
                            </p>
                        </div>
                        <div className="border border-white/10 bg-white/[0.02] p-5 rounded-2xl">
                            <span className="font-mono text-xs text-red-400 block mb-2">04 / LOG & FAULT ANALYSIS</span>
                            <h4 className="text-white font-bold text-sm mb-2">Operational Error Detection</h4>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Systematic monitoring of operational system logs at Tata Steel, diagnosing recurring errors, and formulating technical improvements to enhance system uptime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Navigation Dock */}
                <footer className="pt-8 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
                    <div>
                        © 2026 JYOTI KUMARI — PORTFOLIO
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/about" className="hover:text-red-400 transition-colors">
                            About →
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
