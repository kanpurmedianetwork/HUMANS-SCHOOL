import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        title: "Introduction to Digital Hygiene",
        content: "Digital hygiene refers to the practices and behaviors that help maintain the health and security of your devices and data. Just as you brush your teeth to prevent cavities, you must maintain your digital life to prevent data breaches.",
    },
    {
        title: "Password Management",
        content: "Never reuse passwords. Use a password manager to generate and store complex, unique passwords for every account. Enable Two-Factor Authentication (2FA) wherever possible.",
    },
    {
        title: "Software Updates",
        content: "Keep your operating system and applications updated. Updates often contain critical security patches that protect you from known vulnerabilities.",
    },
    {
        title: "Phishing Awareness",
        content: "Be skeptical of unsolicited emails and messages. Verify the sender's identity before clicking links or downloading attachments. If it looks too good to be true, it probably is.",
    },
];

const Course = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { markCourseComplete } = useProgress();
    const navigate = useNavigate();

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(curr => curr + 1);
        } else {
            markCourseComplete();
            navigate('/lab');
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(curr => curr - 1);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
                <div className="h-2 bg-gray-200 rounded-full">
                    <motion.div
                        className="h-full bg-brand-red rounded-full"
                        animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    />
                </div>
                <p className="text-right text-sm text-gray-500 mt-2">Step {currentSlide + 1} of {slides.length}</p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 min-h-[400px] flex flex-col justify-center"
                >
                    <h2 className="text-3xl font-bold text-brand-black mb-6">{slides[currentSlide].title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">{slides[currentSlide].content}</p>
                </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${currentSlide === 0
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-brand-black hover:bg-gray-100'
                        }`}
                >
                    <ArrowLeft className="mr-2" size={20} /> Previous
                </button>

                <button
                    onClick={nextSlide}
                    className="flex items-center px-6 py-3 bg-brand-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                >
                    {currentSlide === slides.length - 1 ? (
                        <>Complete Course <CheckCircle className="ml-2" size={20} /></>
                    ) : (
                        <>Next <ArrowRight className="ml-2" size={20} /></>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Course;
