import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { AlertTriangle, Check, X } from 'lucide-react';

const scenarios = [
    {
        question: "You receive an email from 'HR Department' asking you to verify your login credentials immediately to avoid account suspension. The link looks like `http://company-hr-secure.com.login-verify.net`. What do you do?",
        options: [
            { text: "Click the link and login quickly.", correct: false },
            { text: "Report the email as phishing.", correct: true },
            { text: "Reply to the email asking if it's real.", correct: false },
        ]
    },
    {
        question: "You find a USB drive in the parking lot labeled 'Executive Salaries'.",
        options: [
            { text: "Plug it in to see whose salaries are on it.", correct: false },
            { text: "Take it to the IT security team.", correct: true },
            { text: "Leave it there.", correct: false }, // Arguably okay, but taking to IT is better
        ]
    },
    {
        question: "A friend asks to borrow your work laptop to check their personal email.",
        options: [
            { text: "Let them use it, but watch them.", correct: false },
            { text: "Create a guest account for them.", correct: false },
            { text: "Politely decline. Work devices are for work only.", correct: true },
        ]
    }
];

const Lab = () => {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const { markLabComplete } = useProgress();
    const navigate = useNavigate();

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(s => s + 1);

        if (currentScenario < scenarios.length - 1) {
            setCurrentScenario(current => current + 1);
        } else {
            // Finish
            const finalScore = isCorrect ? score + 1 : score;
            if (finalScore === scenarios.length) {
                markLabComplete();
                setShowResult(true);
            } else {
                alert("You didn't pass all scenarios. Try again!");
                setCurrentScenario(0);
                setScore(0);
            }
        }
    };

    if (showResult) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-12 rounded-3xl shadow-xl"
                >
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
                        <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Lab Completed!</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        You've demonstrated excellent digital ethics awareness. You are now ready to claim your Digital Warrior Badge.
                    </p>
                    <button
                        onClick={() => navigate('/certification')}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-red hover:bg-red-700 transition-colors"
                    >
                        Claim Badge & Certificate
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Digital Ethics Lab</h1>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-medium text-gray-500">Scenario {currentScenario + 1} of {scenarios.length}</span>
                        <div className="flex space-x-1">
                            {[...Array(scenarios.length)].map((_, i) => (
                                <div key={i} className={`h-2 w-8 rounded-full ${i <= currentScenario ? 'bg-brand-red' : 'bg-gray-200'}`} />
                            ))}
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-8">
                        {scenarios[currentScenario].question}
                    </h2>

                    <div className="space-y-4">
                        {scenarios[currentScenario].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option.correct)}
                                className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-brand-black hover:bg-gray-50 transition-all duration-200"
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lab;
