import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain, Activity, BookOpen, User, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Logo from '../../components/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { language, toggleLanguage, t } = useLanguage();

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-black/50 backdrop-blur-md border-b border-white/10 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="group" onClick={closeMenu}>
                            <div className="flex items-center">
                                <img src="/logo.png" alt="Humans School" className="h-20 w-auto invert brightness-0 opacity-90" />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:space-x-8 items-center">
                        <NavLink to="/framework" icon={<Activity size={16} />} label="CHREA" currentPath={location.pathname} />
                        <NavLink to="/assessment" icon={<Brain size={16} />} label={t('navAssessment')} currentPath={location.pathname} />
                        <NavLink to="/modules" icon={<BookOpen size={16} />} label={t('navLearning')} currentPath={location.pathname} />
                        <NavLink to="/simulation" icon={<Activity size={16} />} label={t('navSimulation')} currentPath={location.pathname} />

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 px-4 py-1.5 rounded-full border border-white/20 hover:border-brand-red hover:text-brand-red transition-all text-sm font-bold text-gray-300 tracking-wider shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                        >
                            <Globe size={14} />
                            <span>{language === 'en' ? 'HI' : 'EN'}</span>
                        </button>

                        <div className="h-6 w-px bg-white/20 mx-2"></div>
                        <Link
                            to="/assessment"
                            className="inline-flex items-center px-6 py-2.5 border border-brand-red/50 text-sm font-bold rounded-full text-white bg-brand-red/10 hover:bg-brand-red transition-all duration-300 shadow-[0_0_15px_rgba(234,29,36,0.3)] hover:shadow-[0_0_25px_rgba(234,29,36,0.5)] tracking-widest uppercase"
                        >
                            Start Free Assessment
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 px-3 py-1 rounded-full border border-white/20 text-sm font-bold text-gray-300"
                        >
                            <span>{language === 'en' ? 'HI' : 'EN'}</span>
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2 transition-colors">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0f0f11] border-b border-white/10 absolute w-full backdrop-blur-xl">
                    <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
                        <MobileNavLink to="/framework" label="CHREA Framework" onClick={closeMenu} />
                        <MobileNavLink to="/modules" label={t('navLearning')} onClick={closeMenu} />
                        <MobileNavLink to="/simulation" label={t('navSimulation')} onClick={closeMenu} />
                        <MobileNavLink to="/certification" label={t('navCertified')} onClick={closeMenu} />
                        <MobileNavLink to="/assessment" label="Start Free Assessment" isPrimary onClick={closeMenu} />
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ to, icon, label, currentPath }) => {
    const isActive = currentPath === to;
    return (
        <Link
            to={to}
            className={`flex items-center text-sm font-bold uppercase tracking-widest transition-colors duration-200 group ${isActive ? 'text-brand-red' : 'text-brand-gray hover:text-white'
                }`}
        >
            <span className={`mr-2 transition-colors duration-200 ${isActive ? 'text-brand-red drop-shadow-[0_0_8px_rgba(234,29,36,0.8)]' : 'text-brand-gray group-hover:text-brand-red'}`}>{icon}</span>
            {label}
        </Link>
    );
};

const MobileNavLink = ({ to, label, onClick, isPrimary }) => (
    <Link
        to={to}
        onClick={onClick}
        className={`block px-4 py-4 rounded-xl text-base font-bold uppercase tracking-widest transition-all ${isPrimary
            ? 'bg-brand-red text-white text-center mt-6 shadow-[0_0_20px_rgba(234,29,36,0.3)] hover:bg-brand-redHover'
            : 'text-brand-gray hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10'
            }`}
    >
        {label}
    </Link>
);

export default Navbar;
