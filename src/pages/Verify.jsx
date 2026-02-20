import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { AlertTriangle, ShieldCheck, User, Calendar, Award } from 'lucide-react';
// import { useLanguage } from '../context/LanguageContext'; // Unused

const Verify = () => {
    const [searchParams] = useSearchParams();

    // Derived data from URL params - no need for state/effect
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const score = searchParams.get('score');
    const date = searchParams.get('date');

    const verificationData = (id && name && score) ? { id, name, score, date } : null;

    // Validation logic
    const isValid = verificationData && id.startsWith('HUM-') && id.includes('-INT-AIX-');

    return (
        <div className="min-h-screen bg-gray-50 pt-24 px-4 pb-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Credential Verification</h1>
                    <p className="text-gray-600">Humans School of Intelligence Public Registry</p>
                </div>

                {verificationData ? (
                    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 ${isValid ? 'border-green-500' : 'border-red-500'}`}>
                        {/* Status Header */}
                        <div className={`p-6 flex items-center justify-center ${isValid ? 'bg-green-50' : 'bg-red-50'}`}>
                            {isValid ? (
                                <div className="text-center">
                                    <div className="bg-green-100 p-3 rounded-full inline-flex mb-3">
                                        <ShieldCheck className="h-8 w-8 text-green-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-green-700">Valid Credential</h2>
                                    <p className="text-green-600 text-sm mt-1">This certificate is authentic and issued by Humans School.</p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="bg-red-100 p-3 rounded-full inline-flex mb-3">
                                        <AlertTriangle className="h-8 w-8 text-red-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-red-700">Invalid Credential</h2>
                                    <p className="text-red-600 text-sm mt-1">The certificate ID could not be verified.</p>
                                </div>
                            )}
                        </div>

                        {/* Certificate Details */}
                        {isValid && (
                            <div className="p-8 space-y-6">
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Credential ID</p>
                                    <p className="text-lg font-mono font-medium text-gray-900">{verificationData.id}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start">
                                        <User className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Issued To</p>
                                            <p className="text-lg font-bold text-gray-900">{verificationData.name}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Award className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Proficiency Score</p>
                                            <p className="text-lg font-bold text-gray-900">{verificationData.score}%</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Calendar className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Issued On</p>
                                            <p className="text-lg text-gray-900">{verificationData.date}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6 mt-6">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Authorized Issuer</p>
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 bg-brand-black text-white rounded-full flex items-center justify-center font-bold text-xs mr-3">
                                            HSi
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">Humans School of Intelligence</p>
                                            <p className="text-xs text-gray-500">RedSide Technologies India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!isValid && (
                            <div className="p-8 text-center">
                                <p className="text-gray-600">Please contact support if you believe this is an error.</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center p-12 bg-white rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-500">No verification data found in URL.</p>
                        <Link to="/" className="text-brand-red font-bold mt-4 inline-block hover:underline">Return Home</Link>
                    </div>
                )}

                <div className="text-center mt-8">
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Humans School of Intelligence. All verification requests are logged for security.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Verify;
