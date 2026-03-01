"use client";
import React, { useState, useEffect, useCallback, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt, FaCode, FaPaintBrush, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import projectsData from '@/data/projectsData';
import Footer from '@/components/Footer';

export default function ProjectDetailPage({ params }) {
    const resolvedParams = use(params);
    const { slug } = resolvedParams;
    const project = projectsData.find((p) => p.slug === slug);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [screenshotSlide, setScreenshotSlide] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const getImageSrc = useCallback((img) => {
        if (!img) return '';
        return typeof img === 'string' ? img : img.src;
    }, []);

    const allImages = project?.images || [];

    // Auto-slide for hero carousel
    useEffect(() => {
        if (allImages.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % allImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [allImages.length]);

    // Auto-slide for screenshots carousel
    useEffect(() => {
        if (allImages.length <= 1) return;
        const interval = setInterval(() => {
            setScreenshotSlide((prev) => (prev + 1) % allImages.length);
        }, 5500);
        return () => clearInterval(interval);
    }, [allImages.length]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (!isLightboxOpen) return;
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsLightboxOpen(false);
            if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % allImages.length);
            if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLightboxOpen, allImages.length]);

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center gap-6 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-6xl font-black text-center"
                >
                    Project Not Found
                </motion.h1>
                <Link href="/">
                    <motion.span
                        className="inline-flex items-center gap-2 text-brand-green font-bold text-lg hover:gap-3 transition-all"
                        whileHover={{ x: -5 }}
                    >
                        <FaArrowLeft /> Back to Home
                    </motion.span>
                </Link>
            </div>
        );
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
        })
    };

    return (
        <div className="min-h-screen bg-background text-white overflow-hidden relative font-sans pt-20">

            {/* Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/8 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] bg-brand-yellow/5 blur-[120px] rounded-full" />
            </div>

            {/* Back Button */}
            <motion.div
                className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-8 sm:pt-12 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/">
                    <motion.span
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-green font-medium text-sm sm:text-base transition-colors duration-300 group"
                        whileHover={{ x: -5 }}
                    >
                        <FaArrowLeft className="text-xs group-hover:text-brand-green transition-colors" />
                        <span>Back to Projects</span>
                    </motion.span>
                </Link>
            </motion.div>

            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-8 sm:pb-16 relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    {/* Left Text */}
                    <motion.div
                        className="w-full lg:w-[45%] space-y-5 sm:space-y-6"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeInUp} custom={0} className="flex items-center gap-2 group">
                            <span className="h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300" />
                            <span className="text-brand-green font-medium tracking-wide text-xs sm:text-sm uppercase">
                                {project.category}
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            custom={1}
                            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                        >
                            {project.title}
                        </motion.h1>

                        {project.badge && (
                            <motion.div variants={fadeInUp} custom={2}>
                                <span className={`inline-block ${project.badgeColor === 'brand-green' ? 'bg-brand-green' : 'bg-brand-yellow'} ${project.badgeColor === 'brand-yellow' ? 'text-brand-dark' : 'text-white'} px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest`}>
                                    {project.badge}
                                </span>
                            </motion.div>
                        )}

                        <motion.div
                            variants={fadeInUp}
                            custom={3}
                            className="w-full h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent"
                        />

                        <motion.div variants={fadeInUp} custom={4} className="space-y-3">
                            <h3 className="text-sm sm:text-base font-bold text-white/90 uppercase tracking-wider flex items-center gap-2">
                                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                About This Project
                            </h3>
                            <div className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-3">
                                {typeof project.description === 'string' ? (
                                    project.description.split('\n\n').map((para, i) => (
                                        <p key={i}>{para.trim()}</p>
                                    ))
                                ) : (
                                    project.description
                                )}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Hero Image Carousel */}
                    <motion.div
                        className="w-full lg:w-[55%]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] group aspect-video bg-[#1E1E24]">
                            {/* Decorative glow */}
                            <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] bg-brand-green/10 blur-[100px] rounded-full pointer-events-none z-0" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 cursor-pointer"
                                    onClick={() => { setLightboxIndex(currentSlide); setIsLightboxOpen(true); }}
                                >
                                    <img
                                        src={getImageSrc(allImages[currentSlide])}
                                        alt={`${project.title} - ${currentSlide + 1}`}
                                        className="w-full h-full object-contain bg-[#1a1a1e]"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Gradient overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10" />

                            {/* Navigation */}
                            {allImages.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length)}
                                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
                                    >
                                        <FaChevronLeft className="text-xs sm:text-sm" />
                                    </button>
                                    <button
                                        onClick={() => setCurrentSlide((prev) => (prev + 1) % allImages.length)}
                                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
                                    >
                                        <FaChevronRight className="text-xs sm:text-sm" />
                                    </button>

                                    {/* Dots indicator */}
                                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
                                        {allImages.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx
                                                    ? 'bg-brand-green w-6 sm:w-8'
                                                    : 'bg-white/30 hover:bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Badge */}
                            {project.badge && (
                                <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 z-20 ${project.badgeColor === 'brand-green' ? 'bg-brand-green' : 'bg-brand-yellow'} ${project.badgeColor === 'brand-yellow' ? 'text-brand-dark' : 'text-white'} px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-2xl`}>
                                    {project.badge}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project Screenshots Section */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12 sm:py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3 flex items-center gap-3">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Project Screenshots
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base mb-8 sm:mb-10">
                        Full-resolution views of the project in action
                    </p>
                </motion.div>

                {/* Screenshots Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="relative"
                >
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#1E1E24] group">
                        {/* Background decoration */}
                        <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-brand-yellow/5 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative w-full aspect-[16/10] sm:aspect-video overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={screenshotSlide}
                                    initial={{ opacity: 0, x: 80 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -80 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 cursor-pointer"
                                    onClick={() => { setLightboxIndex(screenshotSlide); setIsLightboxOpen(true); }}
                                >
                                    <img
                                        src={getImageSrc(allImages[screenshotSlide])}
                                        alt={`${project.title} Screenshot ${screenshotSlide + 1}`}
                                        className="w-full h-full object-contain bg-[#1a1a1e]"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation arrows */}
                        {allImages.length > 1 && (
                            <>
                                <button
                                    onClick={() => setScreenshotSlide((prev) => (prev - 1 + allImages.length) % allImages.length)}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
                                >
                                    <FaChevronLeft className="text-sm" />
                                </button>
                                <button
                                    onClick={() => setScreenshotSlide((prev) => (prev + 1) % allImages.length)}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
                                >
                                    <FaChevronRight className="text-sm" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnail strip */}
                    {allImages.length > 1 && (
                        <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                            {allImages.map((img, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setScreenshotSlide(index)}
                                    className={`relative w-16 h-10 sm:w-24 sm:h-14 lg:w-28 lg:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${screenshotSlide === index
                                        ? 'border-brand-green shadow-[0_0_15px_rgba(91,194,130,0.4)] scale-105'
                                        : 'border-white/10 opacity-50 hover:opacity-80 hover:border-white/20'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <img
                                        src={getImageSrc(img)}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {screenshotSlide === index && (
                                        <motion.div
                                            className="absolute inset-0 border-2 border-brand-green rounded-lg sm:rounded-xl"
                                            layoutId="screenshotHighlight"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    )}
                </motion.div>
            </section>

            {/* Extra Information Section */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12 sm:py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
                >
                    {/* Project Live Link */}
                    <motion.a
                        href={project.liveLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-br from-[#232328] via-[#1E1E22] to-[#1A1A1E] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-brand-green/30 transition-all duration-500 overflow-hidden cursor-pointer"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Glow */}
                        <div className="absolute -top-[30%] -right-[30%] w-[60%] h-[60%] bg-brand-green/0 group-hover:bg-brand-green/10 blur-[80px] rounded-full transition-all duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-green/10 group-hover:bg-brand-green/20 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-500">
                                <FaExternalLinkAlt className="text-brand-green text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-brand-green transition-colors duration-300">
                                Project Live Link
                            </h3>
                            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                Visit the live version of this project to see it in action.
                            </p>
                            <motion.div
                                className="mt-4 inline-flex items-center gap-2 text-brand-green text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <span>Open Link</span>
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.div>
                        </div>
                    </motion.a>

                    {/* Developed & Designed By */}
                    <motion.div
                        className="group relative bg-gradient-to-br from-[#232328] via-[#1E1E22] to-[#1A1A1E] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-brand-yellow/30 transition-all duration-500 overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Glow */}
                        <div className="absolute -top-[30%] -right-[30%] w-[60%] h-[60%] bg-brand-yellow/0 group-hover:bg-brand-yellow/8 blur-[80px] rounded-full transition-all duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-yellow/10 group-hover:bg-brand-yellow/20 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-500">
                                <FaPaintBrush className="text-brand-yellow text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-brand-yellow transition-colors duration-300">
                                Developed & Designed by
                            </h3>
                            <p className="text-gray-400 text-sm sm:text-base font-semibold">
                                Shubham Paghadal
                            </p>
                            <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                                Frontend Developer & UI Designer
                            </p>
                        </div>
                    </motion.div>

                    {/* Technologies Used */}
                    <motion.div
                        className="group relative bg-gradient-to-br from-[#232328] via-[#1E1E22] to-[#1A1A1E] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-brand-green/30 transition-all duration-500 overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Glow */}
                        <div className="absolute -top-[30%] -right-[30%] w-[60%] h-[60%] bg-brand-green/0 group-hover:bg-brand-green/10 blur-[80px] rounded-full transition-all duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-green/10 group-hover:bg-brand-green/20 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-500">
                                <FaCode className="text-brand-green text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-brand-green transition-colors duration-300">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {(project.technologies || []).map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] sm:text-xs font-medium hover:bg-brand-green/10 hover:border-brand-green/30 hover:text-brand-green transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Footer Section */}
            <Footer />

            {/* Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        {/* Close */}
                        <motion.button
                            className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        {/* Arrows */}
                        {allImages.length > 1 && (
                            <>
                                <motion.button
                                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length); }}
                                    whileHover={{ scale: 1.1, x: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaChevronLeft />
                                </motion.button>
                                <motion.button
                                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % allImages.length); }}
                                    whileHover={{ scale: 1.1, x: 3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaChevronRight />
                                </motion.button>
                            </>
                        )}

                        {/* Lightbox Image */}
                        <motion.div
                            className="relative max-w-[90vw] max-h-[80vh] sm:max-w-[85vw]"
                            onClick={(e) => e.stopPropagation()}
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <img
                                src={getImageSrc(allImages[lightboxIndex])}
                                alt={`${project.title} - ${lightboxIndex + 1}`}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg sm:rounded-xl shadow-2xl border border-white/10"
                            />
                        </motion.div>

                        {/* Counter & Thumbnails */}
                        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3">
                            <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm text-white/80 font-medium border border-white/10">
                                {lightboxIndex + 1} / {allImages.length}
                            </div>
                            {allImages.length > 1 && (
                                <div className="flex gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-white/10">
                                    {allImages.map((img, index) => (
                                        <motion.button
                                            key={index}
                                            className={`w-8 h-5 sm:w-12 sm:h-8 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${lightboxIndex === index
                                                ? 'border-brand-green shadow-[0_0_10px_rgba(91,194,130,0.4)]'
                                                : 'border-transparent opacity-50 hover:opacity-80'
                                                }`}
                                            onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <img
                                                src={getImageSrc(img)}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
