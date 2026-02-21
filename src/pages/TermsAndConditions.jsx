import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-black min-h-screen text-white pt-32 pb-24 px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">TERMS & CONDITIONS</h1>
                    <p className="text-brand-gray text-lg uppercase tracking-widest font-mono">HUMANS – School of Intelligence</p>
                    <p className="text-brand-red mt-2 font-bold">Last Updated: February 2026</p>
                </div>

                <div className="space-y-12 text-gray-300 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing and using HUMANS, you agree to comply with these Terms & Conditions.</p>
                        <p className="mt-4 font-bold text-brand-red">If you do not agree, please discontinue use.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Purpose of Platform</h2>
                        <p className="mb-4">HUMANS is an educational and awareness initiative designed to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-brand-gray">
                            <li>Improve emotional intelligence</li>
                            <li>Build ethical reasoning</li>
                            <li>Increase digital awareness</li>
                            <li>Promote responsible AI usage</li>
                        </ul>
                        <p className="font-bold text-white bg-brand-red/10 p-4 border border-brand-red/30 rounded-xl">It is not a replacement for legal, psychological, or financial advice.</p>
                    </section>

                    <section className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Use of Content</h2>
                        <p className="mb-4">All content including:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-brand-gray">
                            <li>Curriculum</li>
                            <li>Assessments</li>
                            <li>Simulations</li>
                            <li>Videos</li>
                            <li>Worksheets</li>
                        </ul>
                        <p className="mb-6">is the intellectual property of HUMANS unless otherwise stated.</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-green-400 mb-3 text-lg">Users may:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Use content for personal learning</li>
                                    <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Share with attribution</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-red mb-3 text-lg">Users may NOT:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><span className="text-brand-red">✖</span> Sell content</li>
                                    <li className="flex items-center gap-2"><span className="text-brand-red">✖</span> Modify and claim ownership</li>
                                    <li className="flex items-center gap-2"><span className="text-brand-red">✖</span> Use for misleading or commercial misuse</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Badge System</h2>
                        <p className="mb-4">Digital Badges (if provided):</p>
                        <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                            <li>Reflect personal participation and commitment to the pledge.</li>
                            <li>Do not represent formal education or government accreditation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Ethical Use Clause</h2>
                        <p className="mb-4">Users agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                            <li>Use the platform for misinformation</li>
                            <li>Attempt to exploit assessments</li>
                            <li>Reverse-engineer or misuse educational tools</li>
                            <li>Harass other participants (if interactive features exist)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer</h2>
                        <p className="mb-4">HUMANS provides educational awareness content only.</p>
                        <p className="mb-4">We are not responsible for:</p>
                        <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                            <li>Personal decisions made after viewing content</li>
                            <li>External fraud incidents</li>
                            <li>Misinterpretation of educational materials</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                        <p className="mb-4">To the maximum extent permitted by law:</p>
                        <p className="font-bold text-white">HUMANS shall not be liable for any indirect, incidental, or consequential damages arising from use of the platform.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                        <p>These Terms shall be governed by the laws of India.</p>
                        <p className="mt-2">Any disputes shall fall under appropriate jurisdiction within India.</p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Modification of Terms</h2>
                        <p>We reserve the right to modify these terms at any time. Continued usage implies acceptance of updates.</p>
                    </section>

                </div>
            </motion.div>
        </div>
    );
};

export default TermsAndConditions;
