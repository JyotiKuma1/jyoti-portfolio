'use client';

import React, { useState } from 'react';

interface ContactFormProps {
    className?: string;
    accessKey?: string;
}

export default function ContactForm({
    className = '',
    accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE'
}: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Reset error state on new input
        if (isError) {
            setIsError(false);
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsError(false);
        setIsSuccess(false);
        setErrorMessage('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Inquiry from ${formData.name}`,
                    from_name: 'Jyoti Kumari Portfolio'
                })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setIsSuccess(true);
                setIsError(false);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setIsError(true);
                setErrorMessage(
                    result.message || 'Unable to transmit your message right now. Please try again or email directly.'
                );
            }
        } catch (error) {
            console.error('Web3Forms submission error:', error);
            setIsError(true);
            setErrorMessage('Network connection error. Please verify your connection or try again shortly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSuccess(false);
        setIsError(false);
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className={`w-full ${className}`}>
            {isSuccess ? (
                <div className="py-12 sm:py-16 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-emerald-500/10">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>

                    <div className="space-y-1">
                        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            Message sent successfully!
                        </h4>
                        <p className="text-sm text-white/60 max-w-sm mx-auto leading-relaxed">
                            Thank you for reaching out. Your note has been delivered and I will get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="pt-2">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="px-6 py-2.5 rounded-full border border-white/20 bg-white/[0.04] text-xs font-mono text-white/80 hover:text-white hover:border-red-500/50 hover:bg-white/[0.08] transition-all cursor-pointer"
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
                    {isError && (
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs sm:text-sm text-red-300 flex items-start gap-3">
                            <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                            <div className="space-y-0.5">
                                <span className="font-semibold block text-red-200">Transmission Error</span>
                                <p className="text-red-300/90 text-xs leading-relaxed">
                                    {errorMessage || 'Failed to dispatch message. Please verify your details and try again.'}
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <div className="space-y-1.5">
                            <label htmlFor="contact-name" className="font-mono text-xs text-white/60 block">
                                YOUR NAME <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                placeholder="e.g. Alex Morgan"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-red-500 focus:bg-white/[0.05] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1.5">
                            <label htmlFor="contact-email" className="font-mono text-xs text-white/60 block">
                                EMAIL ADDRESS <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                placeholder="e.g. alex@company.com"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-red-500 focus:bg-white/[0.05] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                        <label htmlFor="contact-message" className="font-mono text-xs text-white/60 block">
                            MESSAGE <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            placeholder="Share details regarding opportunities, projects, or inquiries..."
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/25 focus:outline-none focus:border-red-500 focus:bg-white/[0.05] transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-red-600/20 cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-red-600"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <span>Dispatch Message</span>
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
