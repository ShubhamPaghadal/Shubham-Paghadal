"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function Contact() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-background text-white overflow-hidden relative font-sans">
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

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.4 } } }}
                        className="w-full lg:w-1/3 space-y-10"
                    >
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/20">
                                    <FaEnvelope className="text-brand-green text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Email Me</h3>
                                    <a href="mailto:shubhampaghadal7@gmail.com" className="text-xl sm:text-2xl font-semibold hover:text-brand-green transition-colors">
                                        shubham.paghadal@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center shrink-0 border border-brand-yellow/20">
                                    <FaPhoneAlt className="text-brand-yellow text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Call Me</h3>
                                    <a href="tel:+919512345678" className="text-xl sm:text-2xl font-semibold hover:text-brand-yellow transition-colors">
                                        +91 93130 34950
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
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
                        <div className="pt-10 border-t border-white/5">
                            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">Follow Me</h3>
                            <div className="flex gap-4">
                                {['Github', 'Linkedin', 'Instagram'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="text-gray-400 hover:text-brand-green transition-colors text-sm font-medium border-b border-transparent hover:border-brand-green pb-1"
                                    >
                                        {social}
                                    </a>
                                ))}
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
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="e.g. John Doe"
                                    className="w-full bg-brand-dark/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-green/50 transition-all text-white placeholder:text-gray-600 focus:bg-brand-dark/60"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="e.g. john@example.com"
                                    className="w-full bg-brand-dark/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-green/50 transition-all text-white placeholder:text-gray-600 focus:bg-brand-dark/60"
                                />
                            </div>

                            <div className="sm:col-span-2 space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="How can I help you?"
                                    className="w-full bg-brand-dark/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-green/50 transition-all text-white placeholder:text-gray-600 focus:bg-brand-dark/60"
                                />
                            </div>

                            <div className="sm:col-span-2 space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder="Write your message here..."
                                    className="w-full bg-brand-dark/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-green/50 transition-all text-white placeholder:text-gray-600 focus:bg-brand-dark/60 resize-none"
                                ></textarea>
                            </div>

                            <div className="sm:col-span-2 mt-4 text-center lg:text-left">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    className="inline-flex items-center justify-center gap-3 bg-brand-yellow text-brand-dark font-bold px-10 py-5 rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(252,203,110,0.4)] transition-all group"
                                >
                                    <span>Send Message</span>
                                    <FaPaperPlane className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
