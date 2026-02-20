import React from 'react';

export const Logo = ({ className = "h-8 w-auto", color = "text-brand-black", iconColor = "text-brand-red" }) => {
    return (
        <div className={`flex items-center gap-2 font-bold tracking-tight ${className}`}>
            <div className="relative flex items-center justify-center">
                {/* Abstract Brain/Human Head Symbol */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-full w-full ${iconColor}`}
                >
                    <path d="M12 2a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
                    <path d="M12 14a5 5 0 0 0-5 5v1h10v-1a5 5 0 0 0-5-5z" />
                    <circle cx="12" cy="7" r="2" fill="currentColor" className="opacity-50" />
                </svg>
            </div>
            <div className={`flex flex-col leading-none ${color}`}>
                <span className="text-lg">Hůmans</span>
                <span className="text-[0.6rem] uppercase tracking-widest opacity-60">School of Intelligence</span>
            </div>
        </div>
    );
};

export default Logo;
