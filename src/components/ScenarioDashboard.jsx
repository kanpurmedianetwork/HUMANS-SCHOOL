import React from 'react';
import { Activity, ShieldAlert, Heart, Lock, TrendingUp, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const ScenarioDashboard = () => {
    return (
        <div className="relative w-full aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl p-6 font-mono text-xs">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Header */}
            <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="flex items-center gap-2 text-gray-400">
                    <ShieldAlert size={16} className="text-brand-red" />
                    <span>THREAT_MONITOR_V2.4</span>
                </div>
                <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-500">LIVE</span>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-2 gap-4 relative z-10 h-[calc(100%-40px)]">

                {/* Module 1: Deepfake Analysis */}
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 flex flex-col">
                    <div className="text-gray-500 mb-2 flex justify-between">
                        <span>DEEPFAKE_ANALYSIS</span>
                        <Activity size={12} />
                    </div>
                    <div className="flex-1 flex items-end gap-1">
                        {[40, 65, 30, 85, 50, 90, 45].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: '0%' }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                                className="w-full bg-brand-red/40 rounded-t-sm"
                            />
                        ))}
                    </div>
                    <div className="mt-2 text-brand-red font-bold">DETECTED (98%)</div>
                </div>

                {/* Module 2: Scam Radar */}
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 relative overflow-hidden">
                    <div className="text-gray-500 mb-2 flex justify-between">
                        <span>PHISHING_RADAR</span>
                        <Lock size={12} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="h-32 w-32 rounded-full border border-brand-red animate-[ping_3s_linear_infinite]" />
                    </div>
                    <div className="mt-8 text-center">
                        <AlertTriangle className="mx-auto text-yellow-500 mb-2" size={24} />
                        <span className="text-yellow-500">Suspicious Link</span>
                    </div>
                </div>

                {/* Module 3: Emotional Baseline */}
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 col-span-2 flex items-center gap-4">
                    <div className="bg-gray-900 p-2 rounded-lg">
                        <Heart className="text-brand-red" size={20} />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between text-gray-500 mb-1">
                            <span>EMOTIONAL_STABILITY</span>
                            <span>NORMAL</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-500"
                                initial={{ width: "80%" }}
                                animate={{ width: ["80%", "60%", "75%", "85%"] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScenarioDashboard;
