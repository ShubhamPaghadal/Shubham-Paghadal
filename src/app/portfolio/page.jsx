"use client";
import React from 'react';
import { motion } from 'framer-motion';
import WorkTogether from '@/components/WorkTogether';
import Footer from '@/components/Footer';
import AllProjects from '@/components/AllProjects';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background text-white overflow-hidden relative font-sans pt-20">
            {/* Page Header */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-20 pb-10 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-7xl lg:text-[84px] font-bold leading-[1.1] tracking-tight mb-6"
                >
                    Selected <span className="text-brand-green">Work</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    A collection of projects where design meets functionality. Each piece is crafted with precision and passion.
                </motion.p>
            </section>

            {/* Projects Loop */}
            <AllProjects />

            {/* Lets Work Together Section */}
            <WorkTogether />

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

