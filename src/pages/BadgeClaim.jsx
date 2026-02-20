import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Award, Lock, CheckCircle, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

const BadgeClaim = () => {
    const { progress, claimBadge } = useProgress();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const isEligible = progress.courseCompleted && progress.labCompleted;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call to Acredible
        setTimeout(() => {
            setLoading(false);
            claimBadge();
            setSuccess(true);
        }, 2000);
    };

    if (success) {
        return (
            <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl text-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6"
                >
                    <CheckCircle className="h-12 w-12 text-green-600" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Badge Issued!</h2>
                <p className="text-gray-600 mb-6">
                    Congratulations, <strong>{name}</strong>! Your Digital Warrior Badge has been sent to <strong>{email}</strong>.
                </p>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                        <Award className="text-brand-red" />
                        <span className="font-semibold">Digital Warrior 2024</span>
                    </div>
                </div>
                <Link to="/" className="text-brand-red font-medium hover:text-red-700">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-20 px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="px-8 py-6 bg-brand-black text-center">
                    <Award className="mx-auto h-12 w-12 text-white mb-2" />
                    <h1 className="text-xl font-bold text-white">Claim Your Badge</h1>
                </div>

                <div className="p-8">
                    {!isEligible ? (
                        <div className="text-center">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                                <Lock className="mx-auto h-8 w-8 text-yellow-500 mb-2" />
                                <h3 className="font-medium text-yellow-800">Prerequisites Not Met</h3>
                                <p className="text-sm text-yellow-700 mt-1">
                                    You must complete the Digital Hygiene Course and pass the Ethics Lab to claim this badge.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <Link
                                    to="/course"
                                    className={`block w-full py-3 px-4 rounded-lg border ${progress.courseCompleted ? 'bg-green-50 border-green-200 text-green-700' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                                >
                                    {progress.courseCompleted ? '✅ Course Completed' : '1. Complete Course'}
                                </Link>
                                <Link
                                    to="/lab"
                                    className={`block w-full py-3 px-4 rounded-lg border ${progress.labCompleted ? 'bg-green-50 border-green-200 text-green-700' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                                >
                                    {progress.labCompleted ? '✅ Lab Completed' : '2. Complete Lab'}
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red disabled:opacity-50 transition-colors"
                            >
                                {loading ? <Loader className="animate-spin h-5 w-5" /> : 'Issue Badge'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BadgeClaim;
