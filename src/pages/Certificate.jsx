import React, { useState, useRef, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import { generateCertificateID, getCurrentDateFormatted } from '../utils/certificateUtils';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Share2, CheckCircle, ShieldCheck, Loader, User, Lock } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useNavigate, Link } from 'react-router-dom';

const Certificate = () => {
    const { state, canAccessCertificate } = useProgress();
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [certificateData, setCertificateData] = useState(null);
    const [nameInput, setNameInput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const certificateRef = useRef(null);

    // Strict Gating Check
    useEffect(() => {
        if (!canAccessCertificate()) {
            // Optional: Redirect if we want to be aggressive, but showing the locked screen is better UX
            // navigate('/'); 
        }
    }, [state]);

    console.log("Certificate Check:", { canAccess: canAccessCertificate(), state });
    if (!canAccessCertificate()) {
        return (
            <div className="min-h-screen pt-32 px-4 bg-brand-surface relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />
                <div className="max-w-md w-full bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 text-center relative z-10">
                    <div className="h-24 w-24 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-red/20 shadow-[0_0_20px_rgba(234,29,36,0.3)]">
                        <Lock className="h-12 w-12 text-brand-red drop-shadow-[0_0_10px_rgba(234,29,36,0.8)]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Certificate Locked</h2>
                    <p className="text-brand-gray mb-6 text-lg font-light leading-relaxed">
                        Certification is generated upon completion of your assessment, learning modules, and simulation scenarios.
                        Your final score reflects your performance across the CHREA Intelligence Model.
                        <br /><span className="text-white font-medium mt-2 inline-block">Instantly verifiable and downloadable upon completion.</span>
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

    // If name is not set, show input form
    if (!certificateData) {
        return (
            <div className="min-h-screen pt-32 px-4 bg-brand-surface relative overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />
                <div className="max-w-md w-full bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 relative z-10">
                    <div className="text-center mb-8">
                        <div className="h-20 w-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-red/20 shadow-[0_0_20px_rgba(234,29,36,0.3)]">
                            <User className="h-10 w-10 text-brand-red drop-shadow-[0_0_10px_rgba(234,29,36,0.8)]" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Final Step</h2>
                        <p className="text-brand-gray mt-4 text-lg">Enter your full name as you want it to appear on your official certificate.</p>
                    </div>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setIsGenerating(true);

                        // Simulate processing
                        setTimeout(() => {
                            const id = generateCertificateID();
                            const date = getCurrentDateFormatted();

                            const assessmentTotal = Object.values(state.assessmentScores).reduce((a, b) => a + b, 0);
                            const finalScore = Math.min(100, assessmentTotal + state.simulationScore);

                            const data = {
                                id,
                                name: nameInput,
                                score: finalScore,
                                date,
                                url: `${window.location.origin}/verify?id=${id}&name=${encodeURIComponent(nameInput)}&score=${finalScore}&date=${encodeURIComponent(date)}`
                            };
                            setCertificateData(data);
                            setIsGenerating(false);
                        }, 1500);
                    }}>
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-300 mb-3 tracking-wide">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none text-white text-lg placeholder-gray-600"
                                placeholder="e.g. Rahul Sharma"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isGenerating || !nameInput.trim()}
                            className="w-full py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-redHover transition-all shadow-[0_0_20px_rgba(234,29,36,0.3)] hover:shadow-[0_0_30px_rgba(234,29,36,0.5)] disabled:opacity-50 disabled:shadow-none flex justify-center items-center uppercase tracking-widest text-sm"
                        >
                            {isGenerating ? <Loader className="animate-spin h-6 w-6" /> : 'Generate Certificate'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const handleDownloadPDF = async () => {
        if (!certificateRef.current) return;

        try {
            const canvas = await html2canvas(certificateRef.current, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Humans_Certificate_${certificateData?.id}.pdf`);
        } catch (error) {
            console.error("PDF Generation Failed", error);
        }
    };

    return (
        <div className="min-h-screen bg-brand-surface relative overflow-hidden pt-24 px-4 pb-12">
            <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Your Certification</h1>
                    <p className="text-brand-gray text-lg">Official verification of your completion of the Humans Intelligence Program.</p>
                </div>

                {/* Certificate Container for Capture */}
                <div className="mb-12 flex justify-center overflow-x-auto">
                    <div
                        ref={certificateRef}
                        className="bg-[#0f0f11] text-white w-[1123px] h-[794px] p-16 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-red/30 flex flex-col items-center text-center justify-between shrink-0 overflow-hidden"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        {/* Mesh overlay for certificate */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at top, #EA1D24 0%, transparent 70%)' }}></div>

                        {/* Header */}
                        <div className="w-full relative z-10">
                            <div className="flex justify-between items-start w-full absolute top-0 left-0">
                                <div className="text-left text-xs text-gray-400 font-sans tracking-widest uppercase">
                                    <p className="mb-1">DOC ID: <span className="text-brand-red">{certificateData.id}</span></p>
                                    <p>DATE: <span className="text-white">{certificateData.date}</span></p>
                                </div>
                                <div className="text-right p-2 bg-white rounded-lg shadow-lg">
                                    <QRCodeSVG
                                        value={certificateData.url}
                                        size={80}
                                        fgColor="#111827"
                                        bgColor="#ffffff"
                                        level="H"
                                    />
                                    <p className="text-[10px] mt-2 font-sans text-gray-800 uppercase tracking-widest font-bold">Scan to Verify</p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col items-center">
                                <img src="/logo.png" alt="Humans School Logo" className="h-24 mb-4 invert brightness-0 opacity-90" />
                                <p className="text-sm tracking-[0.4em] uppercase text-brand-red font-sans font-bold">School of Intelligence</p>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="my-8 relative z-10 w-full">
                            <h2 className="text-5xl italic font-serif text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Certificate of Applied Human Intelligence</h2>
                            <div className="h-px w-64 bg-gradient-to-r from-transparent via-brand-red to-transparent mx-auto"></div>
                        </div>

                        {/* Body */}
                        <div className="space-y-8 max-w-2xl relative z-10">
                            <p className="text-xl text-gray-400 italic">This certifies that</p>
                            <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white font-serif tracking-wide py-2">
                                {certificateData.name}
                            </h3>
                            <p className="text-xl text-gray-400 italic mt-8 leading-relaxed">
                                has successfully completed the <br />
                                <span className="font-bold not-italic text-brand-red uppercase tracking-widest text-lg block mt-2">Self-Assessed Completion Under Humans Open Intelligence Program (V1.0)</span>
                            </p>

                            <div className="text-left bg-black/40 p-8 rounded-2xl border border-white/10 mt-10 font-sans shadow-lg backdrop-blur-sm">
                                <p className="text-sm uppercase text-brand-gray font-bold tracking-widest mb-6 text-center border-b border-white/5 pb-4">Demonstrating Proficiency In</p>
                                <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-base text-gray-300">
                                    <div className="flex items-center"><CheckCircle size={18} className="mr-3 text-brand-red drop-shadow-[0_0_8px_rgba(234,29,36,0.6)]" /> Emotional ({state.assessmentScores.emotional})</div>
                                    <div className="flex items-center"><CheckCircle size={18} className="mr-3 text-brand-red drop-shadow-[0_0_8px_rgba(234,29,36,0.6)]" /> Ethical ({state.assessmentScores.ethical})</div>
                                    <div className="flex items-center"><CheckCircle size={18} className="mr-3 text-brand-red drop-shadow-[0_0_8px_rgba(234,29,36,0.6)]" /> Digital Safety ({state.assessmentScores.digital})</div>
                                    <div className="flex items-center"><CheckCircle size={18} className="mr-3 text-brand-red drop-shadow-[0_0_8px_rgba(234,29,36,0.6)]" /> Fraud Detection ({state.simulationScore}/100)</div>
                                    <div className="flex items-center"><CheckCircle size={18} className="mr-3 text-brand-red drop-shadow-[0_0_8px_rgba(234,29,36,0.6)]" /> Critical Thinking ({state.assessmentScores.criticalThinking})</div>
                                    <div className="flex items-center"><CheckCircle size={18} className="mr-3 text-brand-red drop-shadow-[0_0_8px_rgba(234,29,36,0.6)]" /> Applied Response ({state.assessmentScores.appliedResponse})</div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="w-full flex justify-between items-end mt-16 px-12 relative z-10">
                            <div className="text-center bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="text-5xl font-bold text-white font-sans tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{certificateData.score}%</p>
                                <div className="h-px w-32 bg-brand-red mt-3 mb-3 mx-auto"></div>
                                <p className="text-xs uppercase tracking-widest text-brand-gray font-sans font-bold">Final Score</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <ShieldCheck size={56} className="text-brand-red mb-3 drop-shadow-[0_0_15px_rgba(234,29,36,0.5)]" strokeWidth={1} />
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-sans">Secure & Verifiable</p>
                            </div>

                            <div className="text-center">
                                <div className="hidden border border-brand-red rounded-full h-28 w-28 flex items-center justify-center p-2 transform -rotate-12 shadow-[0_0_20px_rgba(234,29,36,0.3)] bg-black/50 backdrop-blur-md">
                                    <div className="text-center">
                                        <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest">School of</p>
                                        <p className="text-[8px] text-white tracking-widest uppercase mt-1">Intelligence</p>
                                    </div>
                                </div>
                                <p className="text-xs uppercase tracking-widest text-white font-bold font-sans mt-4">Authorized By</p>
                                <p className="text-[10px] uppercase tracking-widest text-brand-red font-sans mt-1">School of Intelligence</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-xl mx-auto relative z-10 mt-8">
                    <button
                        onClick={handleDownloadPDF}
                        className="flex-1 flex items-center justify-center px-8 py-4 bg-brand-red text-white rounded-xl hover:bg-brand-redHover transition-all shadow-[0_0_20px_rgba(234,29,36,0.3)] hover:shadow-[0_0_30px_rgba(234,29,36,0.5)] font-bold uppercase tracking-widest text-sm"
                    >
                        <Download className="mr-3 h-5 w-5" />
                        Download PDF
                    </button>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(certificateData.url);
                            alert("Verification Link Copied to Clipboard!");
                        }}
                        className="flex-1 flex items-center justify-center px-8 py-4 bg-white/5 text-white border border-white/20 rounded-xl hover:bg-white/10 transition-colors font-bold uppercase tracking-widest text-sm backdrop-blur-md"
                    >
                        <Share2 className="mr-3 h-5 w-5" />
                        Share Link
                    </button>
                </div>

                <div className="text-center mt-12 text-sm text-brand-gray relative z-10">
                    <p>Certificate ID: <strong className="text-white">{certificateData.id}</strong> • Generated on <strong className="text-white">{certificateData.date}</strong></p>
                    <p className="mt-2 text-xs">This certificate confirms the completion of the theoretical & simulated components of the core intelligence curriculum.</p>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
