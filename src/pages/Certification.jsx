import React, { useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Award, Share2, Download, Hexagon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Certification = () => {
    const { state, generateCertificate } = useProgress();
    const { t } = useLanguage();

    useEffect(() => {
        generateCertificate();
    }, [generateCertificate]);

    // Calculate total score percentage (simplified for V1)
    // Max Simulation Score = 80 (4 * 20)
    // Max Assessment Score = 50 (5 * 10)
    // Total Max = 130
    const totalAssessment = Object.values(state.assessmentScores).reduce((a, b) => a + b, 0);
    const totalScore = totalAssessment + state.simulationScore;
    const maxScore = 130;
    const percentage = Math.round((totalScore / maxScore) * 100);

    const getGrade = (p) => {
        if (p >= 90) return 'Class A - Visionary';
        if (p >= 75) return 'Class B - Strategist';
        if (p >= 50) return 'Class C - Operator';
        return 'Class D - Initiate';
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 px-4 pb-12">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">{t('profileTitle')}</h1>
                    <p className="mt-2 text-gray-600">{t('verifiedComplete')}</p>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                >
                    <div className="bg-brand-black p-8 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10">
                            <Hexagon className="h-16 w-16 text-brand-red mx-auto mb-4" />
                            <h2 className="text-4xl font-black tracking-tight">{percentage}</h2>
                            <p className="text-sm font-medium text-brand-red uppercase tracking-widest mt-1">{t('iqLabel')}</p>
                            <div className="mt-6 inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm">
                                {getGrade(percentage)}
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <ScoreItem label="Assessment Score" value={totalAssessment} max={50} />
                            <ScoreItem label="Simulation Score" value={state.simulationScore} max={80} />
                        </div>

                        <div className="border-t border-gray-100 pt-8 mb-8">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">{t('detailedAnalysis')}</h3>
                            <div className="space-y-4">
                                <SkillBar label={t('pillarEmotional')} value={state.assessmentScores.emotional} max={10} />
                                <SkillBar label={t('pillarEthical')} value={state.assessmentScores.ethical} max={10} />
                                <SkillBar label={t('pillarDigital')} value={state.assessmentScores.digital} max={10} />
                                <SkillBar label="Critical Thinking" value={state.assessmentScores.criticalThinking} max={10} />
                                <SkillBar label="Applied Response" value={state.assessmentScores.appliedResponse} max={10} />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
                            <div className="mb-4 sm:mb-0">
                                <p className="text-xs text-gray-500 uppercase font-bold">{t('uniqueCode')}</p>
                                <p className="text-lg font-mono font-bold text-brand-black mt-1">{state.uniqueCode || 'Generating...'}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="p-2 text-gray-400 hover:text-brand-black transition-colors" title={t('share')}>
                                    <Share2 size={20} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-brand-black transition-colors" title={t('download')}>
                                    <Download size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="text-center mt-8">
                    <Link to="/" className="text-brand-red font-medium hover:text-brand-black transition-colors">
                        {t('retake')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ScoreItem = ({ label, value, max }) => (
    <div className="text-center">
        <div className="text-2xl font-bold text-gray-900">{value}<span className="text-sm text-gray-400 font-normal">/{max}</span></div>
        <div className="text-xs text-gray-500 uppercase mt-1">{label}</div>
    </div>
);

const SkillBar = ({ label, value, max }) => (
    <div>
        <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-gray-700">{label}</span>
            <span className="text-gray-500">{value}/{max}</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
                className="h-full bg-brand-black rounded-full"
                style={{ width: `${(value / max) * 100}%` }}
            />
        </div>
    </div>
);

export default Certification;
