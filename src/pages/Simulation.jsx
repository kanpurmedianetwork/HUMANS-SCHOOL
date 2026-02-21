import React, { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Activity, AlertTriangle, MessageSquare, Smartphone, RefreshCw, BarChart, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { generateScenarios } from '../data/simulationData';

const Simulation = () => {
    const { submitSimulation } = useProgress();
    const navigate = useNavigate();
    const { t, language } = useLanguage();

    const [scenarioQueue, setScenarioQueue] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    useEffect(() => {
        try {
            // Load 5 random scenarios
            const scenarios = generateScenarios(5);
            if (scenarios && Array.isArray(scenarios)) {
                setScenarioQueue(scenarios);
            } else {
                console.error("generateScenarios returned invalid data:", scenarios);
                setScenarioQueue([]); // Keep empty to show loading or error
            }
        } catch (error) {
            console.error("Failed to generate scenarios:", error);
            setScenarioQueue([]);
        }
    }, []);

    const handleChoice = (score) => {
        // Add score
        setTotalScore(s => s + score);

        // Move to next
        if (currentIndex < scenarioQueue.length - 1) {
            setCurrentIndex(i => i + 1);
        } else {
            // Finish
            submitSimulation(totalScore + score); // Add last score
            navigate('/badge');
        }
    };

    if (!scenarioQueue || scenarioQueue.length === 0) return <div>Loading scenarios... (If this persists, check console)</div>;

    const currentScenario = scenarioQueue[currentIndex];
    if (!currentScenario) {
        return (
            <div className="min-h-screen bg-brand-black text-white pt-24 px-4 flex items-center justify-center">
                <div className="text-center">
                    <AlertTriangle className="h-12 w-12 text-brand-red mx-auto mb-4" />
                    <h2 className="text-xl font-bold">Scenario Data Error</h2>
                    <p className="text-gray-400">Current scenario index {currentIndex} is invalid or data is missing.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
                    >
                        Reload
                    </button>
                </div>
            </div>
        );
    }

    const isHindi = language === 'hi';

    return (
        <div className="min-h-screen bg-brand-surface relative overflow-hidden pt-24 px-4 pb-12">
            <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />
            <div className="max-w-3xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <span className="text-brand-red font-mono uppercase tracking-widest text-xs flex items-center gap-2 drop-shadow-[0_0_10px_rgba(234,29,36,0.8)]">
                            <Activity size={14} className="animate-pulse" /> {t('liveSimulation')}
                        </span>
                        <h2 className="text-4xl font-bold text-white mt-2">{t('scenario')} {currentIndex + 1}/{scenarioQueue.length}</h2>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            <Activity className="text-brand-red drop-shadow-[0_0_10px_rgba(234,29,36,0.5)]" size={24} />
                            <span className="font-mono font-bold text-xl text-white">{totalScore}</span>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center">
                            <Lock className="text-brand-gray" size={24} />
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-3xl p-10 relative overflow-hidden"
                    >
                        {/* Static Indicator Glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-redHover shadow-[0_0_20px_rgba(234,29,36,0.8)]" />

                        <div className="flex gap-6 mb-8">
                            <div className="p-4 bg-brand-red/10 border border-brand-red/20 rounded-2xl text-brand-red flex-shrink-0 shadow-[0_0_15px_rgba(234,29,36,0.3)]">
                                {currentScenario.icon || <AlertTriangle size={24} />}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-brand-gray mb-3 uppercase tracking-widest flex items-center gap-2">
                                    {currentScenario.type}
                                </h3>
                                <p className="text-2xl leading-relaxed text-white font-sans font-medium">
                                    {isHindi ? currentScenario.situationHi : currentScenario.situation}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/10">
                            {currentScenario.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleChoice(option.score)}
                                    className="w-full text-left p-5 rounded-2xl border border-white/10 bg-black/40 hover:bg-brand-red/10 hover:border-brand-red/50 transition-all duration-300 group flex items-center"
                                >
                                    <div className="h-4 w-4 rounded-full border border-brand-gray group-hover:border-brand-red mr-5 flex-shrink-0 flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(234,29,36,0)] group-hover:shadow-[0_0_15px_rgba(234,29,36,0.5)]">
                                        <div className="h-1.5 w-1.5 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-brand-gray text-lg font-medium group-hover:text-white transition-colors tracking-wide">
                                        {isHindi ? option.textHi : option.text}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Simulation;
