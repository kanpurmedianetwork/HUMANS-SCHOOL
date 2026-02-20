import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Shield, Smartphone, Globe as GlobeIcon, Activity, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScenarioDashboard from '../components/ScenarioDashboard';

const AnimatedStatement = () => {
    const { t, language } = useLanguage();
    const isHindi = language === 'hi';

    const statements = [
        t('animStat1'),
        t('animStat2'),
        t('animStat3'),
        t('animStat4'),
        t('animStat5'),
        t('animStat6')
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % statements.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-12 overflow-hidden flex items-center justify-center mt-6 mb-8 relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`text-2xl md:text-3xl font-light text-brand-gray tracking-wide absolute ${isHindi ? 'font-hind' : ''}`}
                >
                    {statements[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const TestimonialCurriculumCard = ({ title, desc, delay = 0, isHindi }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: delay }}
        className="break-inside-avoid mb-6 p-8 lg:p-10 rounded-[2rem] bg-brand-surface/40 border border-white/5 hover:border-white/10 hover:bg-brand-surface/80 transition-all duration-500 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 z-0 transition-opacity group-hover:opacity-100 opacity-0 duration-700"></div>
        <div className="flex items-start gap-4 mb-6 relative z-10">
            <h3 className={`text-xl font-bold text-white tracking-wide mt-1.5 ${isHindi ? 'font-hind' : ''}`}>{title}</h3>
        </div>
        <p className={`text-brand-gray font-light leading-relaxed text-base lg:text-lg relative z-10 ${isHindi ? 'font-hind' : ''}`}>
            {desc}
        </p>
    </motion.div>
);

const Home = () => {
    const { t, language } = useLanguage();
    const isHindi = language === 'hi';

    return (
        <div className="bg-brand-black text-white font-sans overflow-hidden">
            {/* SECTION 1: HERO */}
            <section className="relative px-6 pt-40 pb-20 lg:px-8 min-h-[90vh] flex flex-col justify-center overflow-hidden bg-brand-black">
                {/* Planet Horizon Arc */}
                <div className="absolute top-[-30%] sm:top-[-40%] left-1/2 -translate-x-1/2 w-[200%] sm:w-[150%] h-[70%] sm:h-[80%] rounded-[100%] bg-brand-black shadow-[0_120px_150px_rgba(234,29,36,0.25)] border-b border-brand-red/30 z-0 radial-gradient-arc"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/60 to-brand-black z-0"></div>

                {/* Floating Elements (Decorative) */}
                <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[10%] hidden lg:block w-24 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transform shadow-[0_0_30px_rgba(234,29,36,0.1)] -skew-x-12 -rotate-12"
                />
                <motion.div
                    animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[30%] right-[10%] hidden lg:block w-32 h-40 bg-brand-red/5 backdrop-blur-xl border border-brand-red/20 rounded-2xl transform shadow-[0_0_40px_rgba(234,29,36,0.15)] skew-x-12 rotate-12"
                />

                <div className="mx-auto max-w-5xl text-center relative z-10 pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-brand-gray mb-8 backdrop-blur-md ${isHindi ? 'font-hind' : ''}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                        {t('heroVersion')}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className={`text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4 ${isHindi ? 'leading-[1.4] sm:leading-[1.3] font-hind' : 'leading-tight sm:leading-[1.1]'}`}
                    >
                        {t('heroTitlePrefix')}{!isHindi && " "}{!isHindi && <br className="hidden sm:block" />}{isHindi && " "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-redHover to-white drop-shadow-[0_0_20px_rgba(234,29,36,0.5)]">{t('heroTitleHighlight')}</span>
                        {isHindi && ` ${t('heroTitleSuffix')}`}
                    </motion.h1>

                    <AnimatedStatement />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            to="/assessment"
                            className={`w-full sm:w-auto rounded-full bg-brand-red px-10 py-4 text-sm tracking-widest uppercase font-bold text-white hover:bg-brand-redHover transition-all shadow-[0_0_30px_rgba(234,29,36,0.3)] hover:shadow-[0_0_50px_rgba(234,29,36,0.5)] ring-1 ring-white/20 ${isHindi ? 'font-hind' : ''}`}
                        >
                            {t('heroCtaStart')}
                        </Link>
                        <a href="#how-it-works" className={`text-sm font-semibold leading-6 text-brand-gray hover:text-white transition-colors tracking-widest uppercase flex items-center gap-2 ${isHindi ? 'font-hind' : ''}`}>
                            {t('heroCtaLearn')} <span aria-hidden="true" className="text-brand-red">→</span>
                        </a>
                    </motion.div>

                    {/* Trust Strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-sm text-brand-gray/60"
                    >
                        <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-red/60" /> <span className={`uppercase tracking-widest ${isHindi ? 'font-hind text-xs sm:text-sm' : 'font-mono text-[10px] sm:text-xs'}`}>{t('trust1')}</span></div>
                        <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-red/60" /> <span className={`uppercase tracking-widest ${isHindi ? 'font-hind text-xs sm:text-sm' : 'font-mono text-[10px] sm:text-xs'}`}>{t('trust2')}</span></div>
                        <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-red/60" /> <span className={`uppercase tracking-widest ${isHindi ? 'font-hind text-xs sm:text-sm' : 'font-mono text-[10px] sm:text-xs'}`}>{t('trust3')}</span></div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: THE REALITY */}
            <section className="py-24 bg-brand-black text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl mb-6 ${isHindi ? 'font-hind leading-snug sm:leading-snug' : 'leading-tight'}`}>
                        {t('realityTitle')}<br className="hidden sm:block" />
                        <span className={`text-gray-400 ${isHindi ? 'font-hind leading-snug block mt-2' : ''}`}>{t('realitySubtitle')}</span>
                    </h2>
                    <div className={`mx-auto max-w-2xl text-lg text-gray-400 space-y-2 ${isHindi ? 'font-hind leading-relaxed' : ''}`}>
                        <p>{t('realityP1')}</p>
                        <p>{t('realityP2')}</p>
                        <p>{t('realityP3')}</p>
                        <p>{t('realityP4')}</p>
                        <p className="pt-4 font-semibold text-white">{t('realityConclusion')}</p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WHAT IS HUMANS? */}
            <section className="py-24 bg-brand-surface relative overflow-hidden">
                <div className="absolute inset-0 bg-nixt-mesh opacity-50" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold leading-7 text-brand-red uppercase tracking-widest">{t('aboutTitle')}</h2>
                        <p className={`mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl ${isHindi ? 'font-hind leading-snug sm:leading-normal' : ''}`}>
                            {t('aboutHeading')}
                        </p>
                        <p className={`mt-6 text-lg leading-8 text-gray-600 ${isHindi ? 'font-hind leading-relaxed' : ''}`}>
                            {t('aboutDesc')}<br />
                            <span className={`font-hind text-gray-500 ${isHindi ? 'hidden' : 'inline'}`}>{t('aboutHindiDesc')}</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 max-w-4xl mx-auto">
                        <FeatureCard icon={<Brain className="h-10 w-10 text-brand-redHover" />} title={t('pillarEmotional')} />
                        <FeatureCard icon={<Shield className="h-10 w-10 text-brand-redHover" />} title={t('pillarEthical')} />
                        <FeatureCard icon={<Smartphone className="h-10 w-10 text-brand-redHover" />} title={t('pillarDigital')} />
                    </div>
                </div>
            </section>

            {/* SECTION 3.5: CORE VALUES (CHREA) MASONRY */}
            <section className="py-32 bg-brand-black text-white relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-sm font-bold leading-7 text-brand-gray uppercase tracking-widest border border-brand-gray/30 rounded-full px-4 py-1.5 inline-block mb-4 backdrop-blur-sm">{t('valuesSubtitle')}</h2>
                        <p className="mt-2 text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            {t('valuesTitle')}
                        </p>
                    </div>

                    {/* Masonry Asymmetrical Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {/* Courage (Large Hero Block) */}
                        <ValueCard number="1" title={t('val5Title')} desc={t('val5Desc')} isHindi={isHindi} className="md:col-span-2 lg:col-span-2 md:row-span-2 min-h-[400px]" icon={<Shield className="h-10 w-10 text-brand-red" />} />

                        {/* Awareness */}
                        <ValueCard number="2" title={t('val1Title')} desc={t('val1Desc')} isHindi={isHindi} className="min-h-[250px]" icon={<Brain className="h-8 w-8 text-brand-red/80" />} />

                        {/* Ethics */}
                        <ValueCard number="3" title={t('val2Title')} desc={t('val2Desc')} isHindi={isHindi} className="min-h-[250px]" icon={<GlobeIcon className="h-8 w-8 text-brand-red/80" />} />

                        {/* Responsibility */}
                        <ValueCard number="4" title={t('val3Title')} desc={t('val3Desc')} isHindi={isHindi} className="min-h-[250px]" icon={<Smartphone className="h-8 w-8 text-brand-red/80" />} />

                        {/* Human & Logo Blocks */}
                        <ValueCard number="5" title={t('val4Title')} desc={t('val4Desc')} isHindi={isHindi} className="md:col-span-2 lg:col-span-2 min-h-[300px]" icon={<Activity className="h-10 w-10 text-brand-red" />} />
                    </div>
                </div>
            </section>

            {/* SECTION 3.6: CURRICULUM OVERVIEW TESTIMONIAL GRID */}
            <section className="py-32 bg-brand-surface relative border-t border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-nixt-mesh opacity-20" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className={`text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 uppercase ${isHindi ? 'font-hind' : ''}`}>{t('curriculumTitle')}</h2>
                        <p className={`text-xl text-brand-gray max-w-2xl mx-auto font-light leading-relaxed ${isHindi ? 'font-hind' : ''}`}>{t('curriculumSubtitle')}</p>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        <TestimonialCurriculumCard isHindi={isHindi} title={t('curr1Title')} desc={t('curr1Desc')} delay={0.1} />
                        <TestimonialCurriculumCard isHindi={isHindi} title={t('curr2Title')} desc={t('curr2Desc')} delay={0.2} />
                        <TestimonialCurriculumCard isHindi={isHindi} title={t('curr3Title')} desc={t('curr3Desc')} delay={0.3} />
                        <TestimonialCurriculumCard isHindi={isHindi} title={t('curr4Title')} desc={t('curr4Desc')} delay={0.4} />
                        <TestimonialCurriculumCard isHindi={isHindi} title={t('curr5Title')} desc={t('curr5Desc')} delay={0.5} />
                        <TestimonialCurriculumCard isHindi={isHindi} title={t('curr6Title')} desc={t('curr6Desc')} delay={0.6} />
                        <TestimonialCurriculumCard isHindi={isHindi} title={t('curr7Title')} desc={t('curr7Desc')} delay={0.7} />
                    </div>
                </div>
            </section>

            {/* SECTION 4: HOW IT WORKS */}
            <section id="how-it-works" className="py-32 bg-brand-surface relative overflow-hidden">
                <div className="absolute inset-0 bg-nixt-mesh opacity-30" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{t('howTitle')}</h2>
                    </div>
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10 transform -translate-y-1/2"></div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                            <Step number="1" title={t('step1')} />
                            <Step number="2" title={t('step2')} />
                            <Step number="3" title={t('step3')} />
                            <Step number="4" title={t('step4')} />
                            <Step number="5" title={t('step5')} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: REAL WORLD SCENARIOS / ECOSYSTEM */}
            <section className="py-32 bg-brand-black overflow-hidden relative border-t border-white/5">
                <div className="absolute top-0 right-0 w-[80%] h-full bg-nixt-mesh opacity-30 blur-[100px] -z-10" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8 z-10 relative">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 uppercase">
                            {t('scenariosTitle')}
                        </h2>
                        <p className="text-base text-brand-red font-bold leading-relaxed mb-6 font-mono tracking-widest uppercase">
                            These simulations measure your emotional, ethical, and digital reflex under real-world pressure.
                        </p>
                        <p className="text-xl text-brand-gray leading-relaxed font-light">
                            {t('scenariosDesc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        <EcosystemCard
                            title={t('scenarioDeepfakeTitle')}
                            desc={t('scenarioDeepfake')}
                            isHindi={isHindi}
                            gradient="bg-gradient-to-br from-brand-red/40 via-brand-black to-black"
                            delay={0.1}
                        />
                        <EcosystemCard
                            title={t('scenarioScamTitle')}
                            desc={t('scenarioScam')}
                            isHindi={isHindi}
                            gradient="bg-gradient-to-bl from-brand-red/20 via-brand-surface to-black"
                            delay={0.2}
                        />
                        <EcosystemCard
                            title={t('scenarioEthicalTitle')}
                            desc={t('scenarioEthical')}
                            isHindi={isHindi}
                            gradient="bg-gradient-to-tr from-brand-red/30 via-black to-brand-black"
                            delay={0.3}
                        />
                        <EcosystemCard
                            title={t('scenarioEmotionalTitle')}
                            desc={t('scenarioEmotional')}
                            isHindi={isHindi}
                            gradient="bg-gradient-to-tl from-white/10 via-brand-surface to-brand-red/30"
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 6: CERTIFICATION */}
            <section className="py-32 bg-nixt-mesh text-white text-center border-t border-white/5">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <Award className="h-20 w-20 text-brand-red mx-auto mb-8 drop-shadow-[0_0_15px_rgba(234,29,36,0.5)]" />
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        {t('certTitle')}
                    </h2>
                    <p className="text-xl text-brand-gray mb-12">
                        {t('certDesc')}
                    </p>
                    <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto text-left">
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                            <div className="text-3xl font-bold text-brand-red mb-2">{t('certScore')}</div>
                            <div className="text-sm text-brand-gray uppercase tracking-widest">{t('certScoreDesc')}</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                            <div className="text-3xl font-bold text-brand-red mb-2">{t('certBadge')}</div>
                            <div className="text-sm text-brand-gray uppercase tracking-widest">{t('certBadgeDesc')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: DUAL CTA */}
            <section className="py-32 bg-brand-black border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-nixt-mesh opacity-20" />
                <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10 text-center mb-16">
                    <h2 className={`text-4xl font-black tracking-tight text-white mb-6 uppercase ${isHindi ? 'font-hind' : ''}`}>
                        {t('ctaTitle')}
                    </h2>
                    <p className={`text-xl text-brand-gray mb-12 max-w-2xl mx-auto font-light ${isHindi ? 'font-hind' : ''}`}>
                        {t('ctaSubtitle')}
                    </p>
                </div>

                <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Primary Take Assessment Card */}
                    <div className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-red/20 to-brand-black border border-brand-red/30 p-10 flex flex-col items-center text-center hover:border-brand-red transition-colors duration-500 shadow-[0_0_40px_rgba(234,29,36,0.1)] hover:shadow-[0_0_60px_rgba(234,29,36,0.2)]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
                        <Activity className="h-16 w-16 text-white mb-6 relative z-10" />
                        <h3 className={`text-3xl font-bold text-white mb-4 relative z-10 ${isHindi ? 'font-hind' : ''}`}>{t('ctaCard1Title')}</h3>
                        <p className={`text-brand-gray mb-10 relative z-10 font-light ${isHindi ? 'font-hind' : ''}`}>{t('ctaCard1Desc')}</p>
                        <Link
                            to="/assessment"
                            className={`mt-auto relative z-10 inline-block rounded-full bg-white px-8 py-4 text-sm tracking-widest uppercase font-bold text-brand-black hover:bg-gray-200 transition-all ${isHindi ? 'font-hind' : 'font-mono'}`}
                        >
                            {t('ctaCard1Btn')}
                        </Link>
                    </div>

                    {/* Secondary Explore Curriculum Card */}
                    <div className="relative group overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-10 flex flex-col items-center text-center hover:border-white/30 transition-colors duration-500">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mb-20 z-0"></div>
                        <Brain className="h-16 w-16 text-brand-gray mb-6 relative z-10" />
                        <h3 className={`text-3xl font-bold text-white mb-4 relative z-10 ${isHindi ? 'font-hind' : ''}`}>{t('ctaCard2Title')}</h3>
                        <p className={`text-brand-gray mb-10 relative z-10 font-light ${isHindi ? 'font-hind' : ''}`}>{t('ctaCard2Desc')}</p>
                        <Link
                            to="/modules"
                            className={`mt-auto relative z-10 inline-block rounded-full bg-transparent border border-white/20 px-8 py-4 text-sm tracking-widest uppercase font-bold text-white hover:bg-white/10 transition-all ${isHindi ? 'font-hind' : 'font-mono'}`}
                        >
                            {t('ctaCard2Btn')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title }) => (
    <div className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-brand-red/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <div className="mb-6 bg-brand-black/50 p-5 rounded-2xl border border-white/5">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
);

const Step = ({ number, title }) => (
    <div className="relative flex flex-col items-center text-center bg-transparent z-10 p-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red text-white font-black text-2xl mb-6 shadow-[0_0_30px_rgba(234,29,36,0.4)] border border-white/20">
            {number}
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-widest">{title}</h3>
    </div>
);

const ValueCard = ({ number, title, desc, icon, className = "", isHindi }) => (
    <div className={`flex flex-col p-10 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 hover:border-brand-red/50 transition-all duration-500 group relative overflow-hidden ${className}`}>
        <div className="absolute top-0 right-[-10%] w-64 h-64 bg-brand-red/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
        <div className="flex justify-between items-start w-full relative z-10">
            <div className="text-7xl font-black text-white/5 mb-auto group-hover:text-brand-red/20 transition-colors duration-500">{number}</div>
            {icon && (
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-all duration-500">
                    {icon}
                </div>
            )}
        </div>
        <div className="relative z-10 mt-auto pt-8">
            <h3 className={`text-2xl lg:text-3xl font-bold text-white mb-3 tracking-wide group-hover:text-brand-red transition-colors ${isHindi ? 'font-hind' : ''}`}>{title}</h3>
            <p className={`text-brand-gray text-lg leading-relaxed font-light ${isHindi ? 'font-hind' : ''}`}>{desc}</p>
        </div>
    </div>
);

const ScenarioItem = ({ text }) => (
    <li className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 mb-3 group hover:border-brand-red/30 transition-colors">
        <div className="h-3 w-3 rounded-full bg-brand-red mr-5 shadow-[0_0_10px_rgba(234,29,36,0.8)] group-hover:scale-125 transition-transform"></div>
        <span className="text-white text-lg font-medium tracking-wide">{text}</span>
    </li>
);

const EcosystemCard = ({ title, desc, delay, gradient, isHindi }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: delay }}
        className="flex flex-col rounded-[2rem] bg-brand-surface/40 border border-white/10 overflow-hidden group hover:border-brand-red/30 transition-colors duration-500 h-[450px]"
    >
        <div className={`h-1/2 w-full ${gradient} relative overflow-hidden`}>
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/40 to-transparent"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/20 mix-blend-overlay border-b border-white/10"></div>
        </div>
        <div className="p-8 flex-1 flex flex-col pt-8 bg-gradient-to-b from-transparent to-brand-black/80">
            <h3 className={`text-2xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors ${isHindi ? 'font-hind' : ''}`}>{title}</h3>
            <p className={`text-base font-light text-brand-gray leading-relaxed ${isHindi ? 'font-hind' : ''}`}>{desc}</p>
        </div>
    </motion.div>
);

export default Home;
