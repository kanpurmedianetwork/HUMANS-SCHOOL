import React, { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { RefreshCw, PlayCircle, X } from 'lucide-react';

const SessionResetModal = () => {
    const { state, resetProgress } = useProgress();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Check if there is any significant progress
        const hasProgress = state.assessmentCompleted || state.modulesCompleted || state.simulationCompleted || (state.watchedVideos && state.watchedVideos.length > 0);

        // We use a session flag to avoid asking on every single reload if the user just chose "Continue"
        // But for this request "visits from same ip", we'll assume a fresh page load (App mount) implies a visit.
        // To be less annoying, we could check if it's the very first mount.

        if (hasProgress) {
            // Check if we already asked in this session (optional, but good UX)
            const sessionAsked = sessionStorage.getItem('sessionResetAsked');
            if (!sessionAsked) {
                setShowModal(true);
                sessionStorage.setItem('sessionResetAsked', 'true');
            }
        }
    }, []);

    const handleContinue = () => {
        setShowModal(false);
    };

    const handleReset = () => {
        if (confirm("Are you sure? This will delete all your certificates and progress.")) {
            resetProgress();
            window.location.reload(); // Reload to ensure clean state
        }
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-[#0f0f11] rounded-3xl max-w-md w-full p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-red/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-nixt-mesh opacity-20 z-0"></div>

                <div className="relative z-10">
                    <button
                        onClick={handleContinue}
                        className="absolute -top-2 -right-2 text-brand-gray hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="text-center mb-6">
                        <div className="h-16 w-16 bg-brand-red/10 rounded-2xl border border-brand-red/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(234,29,36,0.2)]">
                            <RefreshCw className="h-8 w-8 text-brand-red drop-shadow-[0_0_10px_rgba(234,29,36,0.8)]" />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-wide uppercase">Resume Session?</h2>
                        <p className="text-brand-gray mt-3 font-light">
                            We detected previous activity on this device. Would you like to continue where you left off or start fresh?
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <button
                            onClick={handleReset}
                            className="px-4 py-4 bg-white/5 hover:bg-white/10 text-brand-gray hover:text-white border border-white/10 font-bold rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                        >
                            <RefreshCw size={16} />
                            Start Fresh
                        </button>
                        <button
                            onClick={handleContinue}
                            className="px-4 py-4 bg-brand-red/10 border border-brand-red/50 hover:bg-brand-red text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(234,29,36,0.3)] hover:shadow-[0_0_25px_rgba(234,29,36,0.5)] flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                        >
                            <PlayCircle size={16} />
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionResetModal;
