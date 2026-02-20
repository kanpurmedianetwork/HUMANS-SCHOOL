import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
                    <h1 className="text-4xl md:text-5xl font-black mb-4">PRIVACY POLICY</h1>
                    <p className="text-brand-gray text-lg uppercase tracking-widest font-mono">HUMANS – School of Intelligence</p>
                    <p className="text-brand-red mt-2 font-bold">Last Updated: February 2026</p>
                </div>

                <div className="space-y-12 text-gray-300 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>HUMANS – School of Intelligence (“HUMANS”, “we”, “our”, “us”) is a non-profit digital learning initiative focused on emotional, ethical, and digital awareness for the AI era.</p>
                        <p className="mt-4">We are committed to protecting your privacy and ensuring transparency in how this platform operates.</p>
                    </section>

                    <section className="bg-white/5 border border-brand-red/20 p-8 rounded-3xl">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Data Collection Policy</h2>
                        <h3 className="text-brand-red font-bold text-xl mb-4">We Do NOT Collect:</h3>
                        <ul className="list-none space-y-3 mb-6">
                            <li className="flex items-center gap-3"><span className="text-brand-red">×</span> No mandatory account registration</li>
                            <li className="flex items-center gap-3"><span className="text-brand-red">×</span> No personal identification data (Name, Aadhaar, PAN, etc.)</li>
                            <li className="flex items-center gap-3"><span className="text-brand-red">×</span> No biometric data</li>
                            <li className="flex items-center gap-3"><span className="text-brand-red">×</span> No financial information</li>
                            <li className="flex items-center gap-3"><span className="text-brand-red">×</span> No location tracking</li>
                        </ul>
                        <p className="font-bold text-white">HUMANS is designed as a privacy-first, minimal-data platform.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Limited Technical Data</h2>
                        <p className="mb-4">Like most websites, basic technical information may be automatically collected for performance and security purposes, such as:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-brand-gray">
                            <li>Browser type</li>
                            <li>Device type</li>
                            <li>Anonymous usage analytics</li>
                            <li>IP address (for security logging only)</li>
                        </ul>
                        <p className="mb-2 font-bold text-white">This data:</p>
                        <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                            <li>Is not used to identify individuals</li>
                            <li>Is not sold</li>
                            <li>Is not shared for marketing</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
                        <p className="mb-4">We may use essential cookies for:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4 text-brand-gray">
                            <li>Website functionality</li>
                            <li>Performance optimization</li>
                            <li>Security</li>
                        </ul>
                        <p className="font-bold text-white">No behavioral advertising or invasive tracking cookies are used.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Certification & Assessments</h2>
                        <p className="mb-4">If certification is offered:</p>
                        <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                            <li>Any name entered for certificate generation is user-provided voluntarily.</li>
                            <li>Certificate generation may be session-based.</li>
                            <li>We do not permanently store certificate data unless explicitly mentioned.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Children’s Privacy</h2>
                        <p className="mb-4">HUMANS is accessible to all age groups.<br />We do not knowingly collect personal data from children.</p>
                        <p>Parents/guardians may contact us if they believe any data has been submitted.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Data Protection Compliance</h2>
                        <p className="mb-4">HUMANS aligns with:</p>
                        <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                            <li>Digital Personal Data Protection Act (DPDP Act), India</li>
                            <li>Privacy-by-design principles</li>
                            <li>Minimal data architecture</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Tools</h2>
                        <p className="mb-4">If we use third-party tools (e.g., embedded videos, AI tools, analytics services):</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4 text-brand-gray">
                            <li>They operate under their own privacy policies.</li>
                            <li>We do not control their independent data practices.</li>
                        </ul>
                        <p>Users are advised to review those policies separately.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy periodically.<br />Updates will be reflected with a revised "Last Updated" date.</p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
                        <p>For privacy-related concerns:</p>
                        <a href="mailto:hello@kanpurmedianetwork.com" className="text-brand-red font-bold text-xl hover:underline mt-2 inline-block">hello@kanpurmedianetwork.com</a>
                    </section>

                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
