'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: 'Cybersecurity' | 'Application Dev' | 'Web Development';
    status: string;
    description: string;
    contribution: string;
    highlights: string[];
    tech: string[];
    link?: string;
    github?: string;
}

const PROJECTS_DATA: Project[] = [
    {
        id: 'threattrust',
        title: 'ThreatTrust',
        subtitle: 'Threat Intelligence Aggregation & Database Platform',
        category: 'Cybersecurity',
        status: 'FEATURED INDEPENDENT PROJECT',
        description: 'An independent project focused on researching, aggregating, and organizing cyber threat intelligence from multiple established sources.',
        contribution: 'Engineered the unified database layer and integrated MongoDB, Neo4j, and ChromaDB to the API, implementing data normalization pipelines for heterogeneous threat feeds.',
        highlights: [
            'Researched and integrated threat intelligence sources including NVD, CISA KEV, MITRE ATT&CK, OTX, VirusTotal, and abuse.ch.',
            'Normalized and mapped disparate threat data formats into a coherent, standardized schema.',
            'Handled database architecture across multi-model stores (document, graph, and vector) connected directly to API endpoints.'
        ],
        tech: ['Threat Intelligence', 'MongoDB', 'Neo4j', 'ChromaDB', 'NVD Feed', 'CISA KEV', 'MITRE ATT&CK', 'VirusTotal', 'abuse.ch', 'API Integration'],
        github: 'https://github.com/jyotiKuma1'
    },
    {
        id: 'nursing-home',
        title: 'Nursing Home Management System',
        subtitle: 'Healthcare Patient Records & Daily Operations Portal',
        category: 'Application Dev',
        status: 'APPLICATION DEVELOPMENT',
        description: 'A web-based management application designed to organize patient records, staff information, and daily operational workflows.',
        contribution: 'Implemented core backend functionality with Java and JSP services, designed relational SQL database schemas for secure record retention, and built responsive web interfaces.',
        highlights: [
            'Implemented robust backend functionality and data handlers using Java, JSP, and services.',
            'Engineered relational SQL database schemas for organized patient history and staff record management.',
            'Constructed responsive interfaces using semantic HTML and CSS to reduce manual operational effort.'
        ],
        tech: ['Java', 'JSP', 'SQL Database', 'HTML5', 'CSS3', 'Healthcare Workflow Management'],
        github: 'https://github.com/jyotiKuma1'
    },
    {
        id: 'spotify-app',
        title: 'Spotify-Inspired Web Application',
        subtitle: 'Responsive Interface & Audio Streaming Client Study',
        category: 'Web Development',
        status: 'WEB DEVELOPMENT STUDY',
        description: 'A Spotify-inspired web application developed to explore responsive interface design and application development.',
        contribution: 'Built modular frontend interface components in React.js, HTML, and CSS, adhering to professional development standards and responsive design guidelines.',
        highlights: [
            'Implemented dynamic, responsive UI components utilizing Java and React.js.',
            'Crafted mobile-friendly, fluid layouts with clean HTML and CSS.',
            'Adhered to company-defined design requirements and modular software development standards.'
        ],
        tech: ['React.js', 'Java', 'HTML5', 'CSS3', 'Responsive Design', 'Component Architecture'],
        github: 'https://github.com/jyotiKuma1'
    }
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredProjects = selectedCategory === 'All'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category === selectedCategory);

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("https://raw.githubusercontent.com/devloop01/webgl-slider/main/src/img/noise.png")` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen justify-between">
                
                {/* Unified Top Navigation */}
                <Navbar currentPath="/projects" />

                {/* Main Hero Header */}
                <div className="pt-12 sm:pt-16 pb-8 text-center select-none">
                    <span className="font-mono text-xs sm:text-sm text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Selected Works & Research
                    </span>
                    <h1 className="text-[14vw] sm:text-[11vw] md:text-[8rem] font-black uppercase tracking-tight text-transparent stroke-text opacity-40 leading-none">
                        PROJECTS
                    </h1>
                    <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
                        A curation of threat intelligence database architectures, healthcare management platforms, and responsive web applications.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto no-scrollbar py-2">
                    {['All', 'Cybersecurity', 'Application Dev', 'Web Development'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 sm:px-5 py-2 rounded-full font-mono text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                                selectedCategory === cat
                                    ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-600/20'
                                    : 'bg-white/[0.03] text-white/60 border border-white/10 hover:border-white/30 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="group bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden"
                        >
                            <div className="space-y-4">
                                {/* Top Meta */}
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-xs text-white/40 block">0{idx + 1}</span>
                                    <span className="font-mono text-[10px] text-red-400 border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 rounded-full">
                                        {project.status}
                                    </span>
                                </div>

                                {/* Title & Subtitle */}
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors">
                                        {project.title}
                                    </h2>
                                    <p className="font-mono text-xs text-white/50 mt-1">
                                        {project.subtitle}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* My Contribution */}
                                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 space-y-1">
                                    <span className="font-mono text-[11px] text-red-400 block font-semibold uppercase tracking-wider">
                                        My Contribution:
                                    </span>
                                    <p className="text-white/80 text-xs leading-relaxed">
                                        {project.contribution}
                                    </p>
                                </div>

                                {/* Highlights */}
                                <ul className="space-y-2 text-xs text-white/60 leading-relaxed pt-1">
                                    {project.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-red-500 font-mono text-xs mt-0.5">▸</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack & Action Links */}
                            <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="font-mono text-[11px] text-white/80 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-1">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 hover:text-red-300 font-bold transition-colors"
                                        >
                                            <span>View Project</span>
                                            <span>↗</span>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors"
                                        >
                                            <span>View Repository</span>
                                            <span>↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
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
                        <Link href="/experience" className="hover:text-red-400 transition-colors">
                            Experience →
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
