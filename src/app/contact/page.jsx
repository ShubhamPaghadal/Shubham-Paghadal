"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaLinkedinIn, FaGithub, FaInstagram, FaGift, FaTimes, FaCheckCircle } from 'react-icons/fa';
import { Toaster, toast } from 'sonner';
import Footer from '@/components/Footer';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showFlyingPlane, setShowFlyingPlane] = useState(false);
    const [showGiftBox, setShowGiftBox] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            toast.error("Name is required");
            return false;
        }
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            toast.error("Valid email is required");
            return false;
        }
        if (!formData.subject.trim()) {
            toast.error("Subject is required");
            return false;
        }
        if (!formData.message.trim()) {
            toast.error("Message is required");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Success Flow
                setShowFlyingPlane(true);

                // Wait for plane animation to complete (approx 2s)
                setTimeout(() => {
                    setShowFlyingPlane(false);
                    setShowGiftBox(true);
                    toast.success("Message sent successfully!");
                }, 2000);
            } else {
                const data = await response.json();
                toast.error(data.details || "Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-background text-white overflow-hidden relative font-sans">
            <Toaster position="top-right" richColors />

            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full lg:bg-fixed"
                    style={{ backgroundImage: 'url("/assets/background_img.jpeg")' }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/70 to-background"></div>

                {/* Decorative Premium Glows */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/10 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-brand-yellow/5 blur-[100px] rounded-full"></div>
                </div>
            </div>

            <main className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-32 pb-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-24">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <span className="h-[2px] w-8 bg-brand-green"></span>
                        <span className="text-brand-green font-medium tracking-widest text-sm uppercase">Get In Touch</span>
                        <span className="h-[2px] w-8 bg-brand-green"></span>
                    </motion.div>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.2 } } }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Let's Talk About <br />
                        <span className="text-brand-green">Your Next Project</span>
                    </motion.h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.4 } } }}
                        className="w-full lg:w-1/3 space-y-10"
                    >
                        <div className="space-y-8">
                            <div className="contact-row-hover flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/20">
                                    <FaEnvelope className="text-brand-green text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Email Me</h3>
                                    <a href="mailto:shubham.paghadal.dev@gmail.com" className="text-xl sm:text-2xl font-semibold hover:text-brand-green transition-colors">
                                        shubham.paghadal@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-row-hover flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center shrink-0 border border-brand-yellow/20">
                                    <FaPhoneAlt className="text-brand-yellow text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Call Me</h3>
                                    <a href="tel:+919313034950" className="text-xl sm:text-2xl font-semibold hover:text-brand-yellow transition-colors">
                                        +91 93130 34950
                                    </a>
                                </div>
                            </div>

                            <div className="contact-row-hover flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/20">
                                    <FaMapMarkerAlt className="text-brand-green text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Location</h3>
                                    <p className="text-xl sm:text-2xl font-semibold">
                                        Surat, Gujarat, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Sidebar Style */}
                        <div className="flex items-center justify-start gap-4 pt-10 border-t border-white/5">
                            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Follow Me :-</h3>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/paghadal-shubham-4b0246380/" target="_blank" rel="noopener noreferrer" className="link-underline-draw hover:text-brand-yellow transition-colors duration-300">
                                    <FaLinkedinIn className="text-brand-green text-xl" />
                                </a>
                                <a href="https://github.com/ShubhamPaghadal" target="_blank" rel="noopener noreferrer" className="link-underline-draw hover:text-brand-yellow transition-colors duration-300">
                                    <FaGithub className="text-brand-green text-xl" />
                                </a>
                                <a href="https://www.instagram.com/shubham_paghadal_/" target="_blank" rel="noopener noreferrer" className="link-underline-draw hover:text-brand-yellow transition-colors duration-300">
                                    <FaInstagram className="text-brand-green text-xl" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.6 } } }}
                        className="w-full lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 bg-white/5 p-6 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. John Doe"
                                    className="input-glow w-full bg-brand-dark/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-green/50 transition-all text-white placeholder:text-gray-600 focus:bg-brand-dark/60"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="e.g. john@example.com"
                                    className="input-glow w-full bg-brand-dark/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-green/50 transition-all text-white placeholder:text-gray-600 focus:bg-brand-dark/60"
                                />
                            </div>

                            <div className="sm:col-span-2 space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    className="input-glow w-full bg-brand-dark/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-green/50 transition-all text-white placeholder:text-gray-600 focus:bg-brand-dark/60"
                                />
                            </div>

                            <div className="sm:col-span-2 space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    className="input-glow w-full bg-brand-dark/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-green/50 transition-all text-white placeholder:text-gray-600 focus:bg-brand-dark/60 resize-none"
                                ></textarea>
                            </div>

                            <div className="sm:col-span-2 mt-4 text-center lg:text-left">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    type="submit"
                                    className={`btn-shimmer btn-glow-border inline-flex items-center justify-center gap-3 bg-brand-yellow text-brand-dark font-bold px-10 py-5 rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(252,203,110,0.4)] transition-all group w-full sm:w-auto cursor-pointer ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    {!isSubmitting && <FaPaperPlane className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform cursor-pointer" />}
                                </motion.button>
                            </div>

                        </form>
                    </motion.div>

                    {/* Flying Plane Animation */}
                    <AnimatePresence>
                        {showFlyingPlane && (
                            <motion.div
                                initial={{ x: "-20vw", y: "80vh", opacity: 0, rotate: -15 }}
                                animate={{ x: "120vw", y: "0vh", opacity: 1, rotate: 15 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 2.2, ease: "easeOut" }}
                                className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
                            >
                                <div className="p-4 bg-brand-green/20 backdrop-blur-sm rounded-full inline-block shadow-[0_0_30px_rgba(91,194,130,0.4)]">
                                    <FaPaperPlane className="text-brand-green text-8xl drop-shadow-[0_0_20px_rgba(91,194,130,0.7)]" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Gift Box Animation */}
                    <AnimatePresence>
                        {showGiftBox && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 5, 0] }}
                                    onClick={() => { setShowGiftBox(false); setShowModal(true); }}
                                    className="cursor-pointer group relative"
                                >
                                    <div className="absolute -inset-10 bg-brand-yellow/30 blur-3xl rounded-full animate-pulse"></div>
                                    <FaGift className="text-brand-yellow text-9xl relative drop-shadow-[0_0_25px_rgba(252,203,110,0.6)]" />
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center mt-6 font-bold text-xl text-brand-yellow tracking-widest uppercase italic"
                                    >
                                        Click to open
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Final Success Modal */}
                    <AnimatePresence>
                        {showModal && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    className="bg-brand-dark border-2 border-brand-green/30 p-8 sm:p-12 rounded-[2.5rem] max-w-2xl w-full text-center relative overflow-hidden shadow-[0_0_50px_rgba(91,194,130,0.2)]"
                                >
                                    {/* Decor */}
                                    <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-brand-green via-brand-yellow to-brand-green"></div>
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 blur-[60px] rounded-full"></div>
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-yellow/10 blur-[60px] rounded-full"></div>

                                    <div className="mb-6 flex justify-center">
                                        <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center border-2 border-brand-green/40 shadow-[0_0_20px_rgba(91,194,130,0.4)]">
                                            <FaCheckCircle className="text-brand-green text-4xl" />
                                        </div>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white leading-tight">
                                        Congratulations!
                                    </h2>

                                    <div className="space-y-4 text-gray-300 text-lg sm:text-xl font-medium leading-relaxed">
                                        <p>“You have successfully sent a message to <span className="text-brand-green">Shubham Paghadal</span>.</p>
                                        <p>We will get back to you via email and WhatsApp as soon as possible.</p>
                                        <p>Thank you so much. <span className="text-brand-yellow">Visit again!”</span></p>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowModal(false)}
                                        className="mt-10 bg-brand-green text-brand-dark font-bold px-10 py-4 rounded-2xl hover:bg-brand-green/90 transition-colors shadow-[0_0_20px_rgba(91,194,130,0.3)] cursor-pointer"
                                    >
                                        Close Message
                                    </motion.button>

                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors cursor-pointer"
                                    >
                                        <FaTimes className="text-xl" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
}
