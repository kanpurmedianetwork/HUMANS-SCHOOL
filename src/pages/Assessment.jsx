import React, { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Brain, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Note: In a real app, questions would also be in translations.js
// For now, I'm keeping questions in English as they are complex to auto-translate accurately without context.
// But I will wrap the UI elements.
import { generateAssessment } from '../data/assessmentData';

const Assessment = () => {
    const [strategies, setStrategies] = useState([]);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const { submitAssessment } = useProgress();
    const navigate = useNavigate();
    const { t, language } = useLanguage();

    useEffect(() => {
        // Load random 5 questions on mount
        const questions = generateAssessment(5);
        setStrategies(questions);
    }, []);

    const handleAnswer = (scoreChange) => {
        const nextAnswers = { ...answers };
        // Accumulate scores
        Object.keys(scoreChange).forEach(key => {
            nextAnswers[key] = (nextAnswers[key] || 0) + scoreChange[key];
        });
        setAnswers(nextAnswers);

        if (current < strategies.length - 1) {
            setCurrent(c => c + 1);
        } else {
            // Fill in missing zeros if any
            const finalScores = {
                emotional: nextAnswers.emotional || 0,
                ethical: nextAnswers.ethical || 0,
                digital: nextAnswers.digital || 0,
                criticalThinking: nextAnswers.criticalThinking || 0,
                appliedResponse: nextAnswers.appliedResponse || 0
            };
            submitAssessment(finalScores);
            navigate('/modules');
        }
    };

    if (strategies.length === 0) return <div>Loading...</div>;

    const question = strategies[current];
    const isHindi = language === 'hi';

    return (
        <div className="min-h-screen bg-brand-surface relative overflow-hidden pt-24 px-4 pb-12">
            <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />
            <div className="max-w-2xl mx-auto relative z-10">
                <div className="mb-10 flex justify-between items-end">
                    <div>
                        <span className="text-brand-red font-bold uppercase tracking-widest text-xs">{question.category} Intelligence</span>
                        <h2 className="text-4xl font-bold text-white mt-3">{t('question')} {current + 1}/{strategies.length}</h2>
                    </div>
                    <Brain className="text-brand-red h-12 w-12 drop-shadow-[0_0_15px_rgba(234,29,36,0.5)]" />
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-black/40 h-2 rounded-full mb-10 overflow-hidden border border-white/10">
                    <motion.div
                        className="bg-brand-red h-2 rounded-full shadow-[0_0_15px_rgba(234,29,36,0.8)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${((current + 1) / strategies.length) * 100}%` }}
                    />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative"
                    >
                        <p className="text-2xl font-medium text-white mb-10 leading-relaxed font-sans">
                            {isHindi ? question.questionHi : question.question}
                        </p>

                        <div className="space-y-4">
                            {question.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(option.score)}
                                    className="w-full text-left p-5 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-all duration-300 flex items-center group bg-black/40 hover:bg-brand-red/10 cursor-pointer"
                                >
                                    <div className="h-6 w-6 rounded-full border border-brand-gray group-hover:border-brand-red mr-5 flex-shrink-0 flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(234,29,36,0)] group-hover:shadow-[0_0_15px_rgba(234,29,36,0.5)]">
                                        <div className="h-2 w-2 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-brand-gray font-medium text-lg tracking-wide group-hover:text-white transition-colors">{isHindi ? option.textHi : option.text}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Assessment;
