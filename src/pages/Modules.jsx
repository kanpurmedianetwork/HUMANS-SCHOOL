import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { Play, X, CheckCircle, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Modules = () => {
    const { state, markVideoWatched } = useProgress();
    const { t, language } = useLanguage();
    const [activeVideo, setActiveVideo] = useState(null); // { src, id }

    // Helper to get correct video source based on language
    const getBilingualVideo = (enSrc, hiSrc) => {
        return language === 'hi' ? hiSrc : enSrc;
    };

    const handleVideoComplete = (id) => {
        markVideoWatched(id);
    };

    const isWatched = (id) => state.watchedVideos && state.watchedVideos.includes(id);
    const allWatched = state.modulesCompleted;

    return (
        <div className="min-h-screen bg-brand-surface relative overflow-hidden pt-24 px-4 pb-12">
            <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-4">{t('modulesTitle')}</h1>
                    <p className="mt-4 text-xl text-brand-gray">{t('modulesDesc')}</p>
                    <p className="text-xs text-brand-red mt-6 font-medium bg-brand-red/10 border border-brand-red/20 inline-block px-4 py-2 rounded-full tracking-widest uppercase shadow-[0_0_20px_rgba(234,29,36,0.2)]">
                        AI Generated Content: Audio/Video powered by NotebookLM (Google)
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <ModuleCard
                        id="emotional"
                        title={t('moduleEmotional')}
                        duration="07:23"
                        t={t}
                        isWatched={isWatched('emotional')}
                        videoSrc={getBilingualVideo(
                            "/videos/emotional_control_en.mp4",
                            "/videos/emotional_control_hi.mp4"
                        )}
                        onPlay={setActiveVideo}
                    />
                    <ModuleCard
                        id="digital"
                        title={t('moduleDigital')}
                        duration="04:22"
                        t={t}
                        isWatched={isWatched('digital')}
                        videoSrc={getBilingualVideo(
                            "/videos/digital_safety_en.mp4",
                            "/videos/digital_safety_hi.mp4"
                        )}
                        onPlay={setActiveVideo}
                    />
                    <ModuleCard
                        id="ethical"
                        title={t('moduleEthical')}
                        duration="07:47"
                        t={t}
                        isWatched={isWatched('ethical')}
                        videoSrc={getBilingualVideo(
                            "/videos/ethical_decision_making_en.mp4",
                            "/videos/ethical_decision_making_hi.mp4"
                        )}
                        onPlay={setActiveVideo}
                    />
                    <ModuleCard
                        id="crisis"
                        title={t('moduleCrisis')}
                        duration="07:45"
                        t={t}
                        isWatched={isWatched('crisis')}
                        videoSrc={getBilingualVideo(
                            "/videos/crisis_management_en.mp4",
                            "/videos/crisis_management_hi.mp4"
                        )}
                        onPlay={setActiveVideo}
                    />
                </div>

                <div className="text-center relative mt-16">
                    {!allWatched && (
                        <div className="mb-6 text-sm text-brand-gray font-medium animate-pulse tracking-widest uppercase">
                            Complete all modules to unlock Simulation
                        </div>
                    )}
                    <Link
                        to={allWatched ? "/simulation" : "#"}
                        className={`inline-flex items-center px-10 py-5 rounded-full text-sm tracking-widest uppercase font-bold transition-all shadow-[0_0_30px_rgba(234,29,36,0.3)] ${allWatched
                            ? 'bg-brand-red text-white hover:bg-brand-redHover hover:shadow-[0_0_50px_rgba(234,29,36,0.5)]'
                            : 'bg-white/5 text-brand-gray border border-white/10 cursor-not-allowed shadow-none'
                            }`}
                        onClick={(e) => !allWatched && e.preventDefault()}
                    >
                        {allWatched ? (
                            <>
                                {t('proceedSim')} <Play className="ml-2 h-5 w-5 fill-current" />
                            </>
                        ) : (
                            <>
                                <Lock className="mr-2 h-5 w-5" /> Locked
                            </>
                        )}
                    </Link>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={() => setActiveVideo(null)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-brand-surface rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-brand-red rounded-full text-white transition-colors backdrop-blur-md border border-white/10"
                        >
                            <X size={24} />
                        </button>
                        <video
                            src={activeVideo.src}
                            controls
                            autoPlay
                            className="w-full aspect-video"
                            onEnded={() => handleVideoComplete(activeVideo.id)}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

const ModuleCard = ({ id, title, duration, t, videoSrc, onPlay, isWatched }) => {
    return (
        <div
            onClick={() => videoSrc && onPlay({ src: videoSrc, id })}
            className={`relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border flex flex-col justify-between hover:border-brand-red/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer group h-full ${videoSrc ? '' : ''} ${isWatched ? 'border-brand-red/40 ring-1 ring-brand-red/20' : 'border-white/10'}`}
        >
            {isWatched && (
                <div className="absolute top-6 right-6 text-brand-red drop-shadow-[0_0_10px_rgba(234,29,36,0.8)]">
                    <CheckCircle size={24} />
                </div>
            )}

            <div className="flex items-center justify-between mb-8 w-full">
                <div className="flex items-center w-full">
                    <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mr-6 transition-colors duration-300 border ${isWatched ? 'bg-brand-red/20 text-brand-red border-brand-red/30' : (videoSrc ? 'bg-black/50 border-white/5 text-brand-gray group-hover:border-brand-red/50 group-hover:text-brand-red group-hover:bg-brand-red/10' : 'bg-black/20 border-white/5')}`}>
                        <Play className="h-6 w-6 fill-current" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-red transition-colors">{title}</h3>
                        <span className={`text-xs font-bold uppercase tracking-widest ${isWatched ? 'text-brand-red' : 'text-brand-gray'}`}>
                            {isWatched ? 'Completed' : t('videoModule')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between w-full mt-auto">
                {videoSrc && (
                    <div className={`text-sm font-bold flex items-center uppercase tracking-widest transition-colors ${isWatched ? 'text-brand-red/70 group-hover:text-brand-red' : 'text-brand-gray group-hover:text-white'}`}>
                        {isWatched ? 'Watch Again' : 'Watch Video'} &rarr;
                    </div>
                )}
                <span className="text-sm font-mono text-white/50">{duration}</span>
            </div>
        </div>
    );
};

export default Modules;
