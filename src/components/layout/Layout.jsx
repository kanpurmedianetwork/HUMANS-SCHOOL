import React from 'react';
import Navbar from './Navbar';
import { Facebook, Instagram, Linkedin, Mail, ExternalLink } from 'lucide-react';

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:bg-brand-red/10 hover:border-brand-red hover:text-brand-red transition-all duration-300 shadow-none hover:shadow-[0_0_15px_rgba(234,29,36,0.3)]"
    >
        {icon}
    </a>
);

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-brand-black font-sans text-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-[96px]">
                {children}
            </main>
            <footer className="bg-brand-black border-t border-white/5 pt-24 pb-8 mt-auto relative z-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                        {/* Left Column: Brand & Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 tracking-wider uppercase">Humans – School of Intelligence</h2>
                            <p className="text-sm leading-relaxed mb-4 text-brand-gray font-light">
                                An open, non-profit digital learning initiative focused on emotional, ethical, and digital awareness for the AI era.
                                <br />
                                <span className="text-brand-red font-bold tracking-wide mt-2 inline-block">FREE. ACCESSIBLE. BUILT FOR EVERYONE.</span>
                            </p>
                            <p className="text-xs text-white/40 mt-6 leading-relaxed">
                                Privacy-first by design. No personal data stored.
                                <br />
                                Aligned with DPDP Act (India) principles.
                            </p>
                        </div>

                        {/* Right Column: Initiative By */}
                        <div className="md:text-right">
                            <p className="text-xs uppercase tracking-widest text-brand-gray mb-2">An initiative by</p>
                            <h3 className="text-xl font-bold text-white mb-1">RedSide Technologies India</h3>
                            <p className="text-sm text-brand-red drop-shadow-[0_0_5px_rgba(234,29,36,0.5)] font-mono">Building responsibility before revenue.</p>

                            <div className="mt-8 flex md:justify-end gap-x-4">
                                <SocialLink href="mailto:Support@schoolofhumans.in" icon={<Mail size={18} />} />
                                <SocialLink href="https://www.linkedin.com/company/humansschool" icon={<Linkedin size={18} />} />
                                <SocialLink href="https://www.instagram.com/schoolofhumanshq" icon={<Instagram size={18} />} />
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-gray uppercase tracking-widest font-mono">
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mb-4 md:mb-0">
                            <p>© 2026 Humans School of Intelligence.</p>
                            <div className="flex items-center gap-4 text-white/50">
                                <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
                                <span>|</span>
                                <a href="#" className="hover:text-brand-red transition-colors">Terms & Conditions</a>
                            </div>
                        </div>
                        <p className="opacity-50">v1.0 (Public Release)</p>
                    </div>
                </div>

                {/* GIANT FOOTER TEXT */}
                <div className="absolute bottom-[-5%] sm:bottom-[-15%] left-0 w-full flex justify-center pointer-events-none opacity-[0.03] select-none z-0">
                    <h1 className="text-[25vw] sm:text-[22vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
                        HUMANS
                    </h1>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
