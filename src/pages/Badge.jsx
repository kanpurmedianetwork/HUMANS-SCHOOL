import React, { useState, useRef, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import { Download, Share2, CheckCircle, ShieldCheck, Lock, Shield } from 'lucide-react';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';

const Badge = () => {
    const { state, canAccessCertificate } = useProgress();
    const { t } = useLanguage();
    const [hasPledged, setHasPledged] = useState(false);
    const badgeRef = useRef(null);

    if (!canAccessCertificate()) {
        return (
            <div className="min-h-screen pt-32 px-4 bg-brand-surface relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />
                <div className="max-w-md w-full bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 text-center relative z-10">
                    <div className="h-24 w-24 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-red/20 shadow-[0_0_20px_rgba(234,29,36,0.3)]">
                        <Lock className="h-12 w-12 text-brand-red drop-shadow-[0_0_10px_rgba(234,29,36,0.8)]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Badge Locked</h2>
                    <p className="text-brand-gray mb-6 text-lg font-light leading-relaxed">
                        The Digital Human Badge is awarded upon completion of your assessment, learning modules, and simulation scenarios.
                    </p>

                    <div className="space-y-4 text-left bg-black/40 p-6 rounded-2xl mb-10 border border-white/5">
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-300">1. Assessment</span>
                            {state.assessmentCompleted ? <CheckCircle className="text-brand-red h-6 w-6" /> : <span className="text-sm text-gray-600 uppercase tracking-widest font-bold">Pending</span>}
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-300">2. Learning Modules</span>
                            {state.modulesCompleted ? <CheckCircle className="text-brand-red h-6 w-6" /> : <span className="text-sm text-gray-600 uppercase tracking-widest font-bold">Pending</span>}
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-300">3. Simulation</span>
                            {state.simulationCompleted ? <CheckCircle className="text-brand-red h-6 w-6" /> : <span className="text-sm text-gray-600 uppercase tracking-widest font-bold">Pending</span>}
                        </div>
                    </div>

                    <Link to="/" className="block w-full py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-redHover transition-all shadow-[0_0_20px_rgba(234,29,36,0.3)] hover:shadow-[0_0_30px_rgba(234,29,36,0.5)] uppercase tracking-widest text-sm">
                        Return to Dashboard
                    </Link>
                </div>
            </div>
        );
    }

    if (!hasPledged) {
        return (
            <div className="min-h-screen pt-32 px-4 bg-brand-surface relative overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />
                <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 relative z-10">
                    <div className="text-center mb-8">
                        <div className="h-20 w-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-red/20 shadow-[0_0_20px_rgba(234,29,36,0.3)]">
                            <Shield className="h-10 w-10 text-brand-red drop-shadow-[0_0_10px_rgba(234,29,36,0.8)]" />
                        </div>
                        <h2 className="text-4xl font-serif text-white mb-4">Digital Human Pledge</h2>
                        <div className="h-px w-32 bg-brand-red mx-auto mb-6"></div>
                        <div className="text-left text-brand-gray text-lg space-y-6 bg-black/40 p-8 rounded-2xl border border-white/5">
                            <p>As a participant in the School of Intelligence framework, I pledge to:</p>
                            <ul className="list-disc pl-5 space-y-3">
                                <li><strong>Think Critically:</strong> I will question the information I consume and prioritize truth over engagement.</li>
                                <li><strong>Act Ethically:</strong> I will consider the human impact of the digital tools and AI I use.</li>
                                <li><strong>Stay Secure:</strong> I will protect my digital identity and help safeguard the privacy of others.</li>
                                <li><strong>Maintain Empathy:</strong> I will remember that behind every screen is a human being.</li>
                            </ul>
                            <p className="italic text-center mt-6 text-white text-xl font-serif">&quot;I commit to being a responsible, aware, and ethical digital citizen.&quot;</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setHasPledged(true)}
                        className="w-full py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-redHover transition-all shadow-[0_0_20px_rgba(234,29,36,0.3)] hover:shadow-[0_0_30px_rgba(234,29,36,0.5)] flex justify-center items-center uppercase tracking-widest text-sm"
                    >
                        I Accept This Pledge
                    </button>
                </div>
            </div>
        );
    }

    const handleDownloadBadge = async () => {
        if (!badgeRef.current) return;

        try {
            const canvas = await html2canvas(badgeRef.current, {
                scale: 3,
                useCORS: true,
                backgroundColor: null // Transparent background
            });

            const link = document.createElement('a');
            link.download = 'Humans_Digital_Badge.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error("Badge Generation Failed", error);
        }
    };

    return (
        <div className="min-h-screen bg-brand-surface relative overflow-hidden pt-24 px-4 pb-12 flex flex-col items-center">
            <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />
            <div className="max-w-3xl w-full relative z-10 text-center">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Your Digital Human Badge</h1>
                    <p className="text-brand-gray text-lg">You have accepted the pledge and demonstrated proficiency in the core intelligence curriculum.</p>
                </div>

                {/* Badge Container */}
                <div className="flex justify-center mb-12">
                    <div
                        ref={badgeRef}
                        className="relative w-80 h-80 flex items-center justify-center p-4 bg-transparent"
                    >
                        {/* Outer Glow & Border */}
                        <div className="absolute inset-0 rounded-full border-4 border-brand-red/50 shadow-[0_0_40px_rgba(234,29,36,0.5)] animate-[pulse_4s_ease-in-out_infinite]"></div>

                        {/* Inner Content */}
                        <div className="w-full h-full bg-[#0f0f11] rounded-full flex flex-col items-center justify-center border-2 border-white/20 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #EA1D24 0%, transparent 60%)' }}></div>

                            <img src="/logo.png" alt="Humans School Logo" className="h-12 invert brightness-0 opacity-90 mb-2 relative z-10" />
                            <h2 className="text-2xl font-serif text-white font-bold text-center tracking-wide leading-tight mb-2 relative z-10">
                                Digital<br />Human
                            </h2>
                            <div className="h-px w-16 bg-brand-red my-2 relative z-10"></div>
                            <p className="text-[10px] tracking-[0.2em] text-brand-red font-bold uppercase relative z-10">Verified</p>
                            <p className="text-[8px] tracking-widest text-gray-400 uppercase mt-1 relative z-10">School of Intelligence</p>
                        </div>

                        {/* Decorational Elements */}
                        <div className="absolute top-0 right-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
                        <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-brand-red rounded-full shadow-[0_0_10px_#EA1D24]"></div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-xl mx-auto">
                    <button
                        onClick={handleDownloadBadge}
                        className="flex-1 flex items-center justify-center px-8 py-4 bg-brand-red text-white rounded-xl hover:bg-brand-redHover transition-all shadow-[0_0_20px_rgba(234,29,36,0.3)] hover:shadow-[0_0_30px_rgba(234,29,36,0.5)] font-bold uppercase tracking-widest text-sm"
                    >
                        <Download className="mr-3 h-5 w-5" />
                        Save Badge
                    </button>
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: 'My Digital Human Badge',
                                    text: 'I just pledged to be an ethical, secure, and critical thinker in the digital world at Humans School of Intelligence!',
                                    url: window.location.origin,
                                }).catch(console.error);
                            } else {
                                alert("Sharing is not supported on this browser. Try downloading the badge instead!");
                            }
                        }}
                        className="flex-1 flex items-center justify-center px-8 py-4 bg-white/5 text-white border border-white/20 rounded-xl hover:bg-white/10 transition-colors font-bold uppercase tracking-widest text-sm backdrop-blur-md"
                    >
                        <Share2 className="mr-3 h-5 w-5" />
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Badge;
