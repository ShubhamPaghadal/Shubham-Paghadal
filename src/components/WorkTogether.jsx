"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WorkTogether() {
    return (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-16 sm:pb-32 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#242426] rounded-4xl sm:rounded-[3rem] py-16 sm:py-20 px-6 relative overflow-hidden shadow-2xl"
            >
                {/* Top Left Decoration */}
                <div className="absolute top-[-40px] left-[-40px] sm:top-[-50px] sm:left-[-50px] w-32 h-32 sm:w-56 sm:h-56 bg-brand-green rounded-full opacity-90 blur-xl sm:blur-0"></div>

                {/* Bottom Right Decoration */}
                <div className="absolute bottom-[-40px] right-[-40px] sm:bottom-[-50px] sm:right-[-50px] w-32 h-32 sm:w-56 sm:h-56 border-20 sm:border-30 border-brand-green rounded-full opacity-90 blur-xl sm:blur-0"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="h-[2px] w-12 bg-brand-green/50"></span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                        Lets Work Together
                    </h2>

                    <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                        Ready to bring your ideas to life? I&#39;m currently available for full-time roles and freelance projects. Let&#39;s build something amazing together!
                    </p>

                    <div className="pt-4">
                        <Link href="/contact" className="inline-block bg-brand-yellow hover:bg-[#f0c05a] text-gray-900 font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg transform hover:scale-105">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
