import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Shield, Users, Globe, Brain, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Framework = () => {
    const { t } = useLanguage();

    const values = [
        {
            id: 'c',
            letter: 'C',
            icon: <MessageSquare className="h-8 w-8 text-white" />,
            title: t('val5Title'), // Courage
            desc: t('val5Desc'),
            detail: t('frameworkCourageDetail')
        },
        {
            id: 'h',
            letter: 'H',
            icon: <Users className="h-8 w-8 text-white" />,
            title: t('val4Title'), // Human
            desc: t('val4Desc'),
            detail: t('frameworkHumanDetail')
        },
        {
            id: 'r',
            letter: 'R',
            icon: <Globe className="h-8 w-8 text-white" />,
            title: t('val3Title'), // Responsibility
            desc: t('val3Desc'),
            detail: t('frameworkRespDetail')
        },
        {
            id: 'e',
            letter: 'E',
            icon: <Shield className="h-8 w-8 text-white" />,
            title: t('val2Title'), // Ethics
            desc: t('val2Desc'),
            detail: t('frameworkEthicsDetail')
        },
        {
            id: 'a',
            letter: 'A',
            icon: <Brain className="h-8 w-8 text-white" />,
            title: t('val1Title'), // Awareness
            desc: t('val1Desc'),
            detail: t('frameworkAwarenessDetail')
        }
    ];

    return (
        <div className="bg-brand-surface min-h-screen pt-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-nixt-mesh opacity-50 z-0" />

            {/* Hero */}
            <section className="text-white py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl font-black mb-8 tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-redHover drop-shadow-[0_0_20px_rgba(234,29,36,0.5)]">CHREA</span> FRAMEWORK
                    </motion.h1>
                    <p className="text-2xl text-brand-gray max-w-3xl mx-auto font-light leading-relaxed">
                        {t('frameworkSubtitle')}
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 px-6 max-w-6xl mx-auto relative z-10 pb-32">
                <div className="grid grid-cols-1 gap-8">
                    {values.map((val, index) => (
                        <motion.div
                            key={val.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row items-start gap-8 p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-brand-red/50 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0 bg-black/50 p-6 rounded-2xl border border-white/10 group-hover:border-brand-red/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors flex flex-col items-center justify-center min-w-[120px]">
                                <span className="text-5xl font-black text-brand-red block text-center mb-4 drop-shadow-[0_0_15px_rgba(234,29,36,0.8)]">{val.letter}</span>
                                <div className="text-brand-red opacity-80 group-hover:opacity-100 transition-opacity">
                                    {val.icon}
                                </div>
                            </div>
                            <div className="flex-1 mt-2">
                                <h3 className="text-3xl font-bold text-white mb-2 tracking-wide group-hover:text-brand-red transition-colors">{val.title}</h3>
                                <p className="text-xl text-brand-red font-medium mb-4 uppercase tracking-widest text-sm">{val.desc}</p>
                                <p className="text-brand-gray leading-relaxed text-lg font-light">
                                    {val.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Framework;
