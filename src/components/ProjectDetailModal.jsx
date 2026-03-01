"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetailModal = ({ isOpen, onClose, project }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (lightboxOpen) {
                    setLightboxOpen(false);
                } else {
                    onClose();
                }
            }
            if (lightboxOpen && project?.images) {
                if (e.key === 'ArrowRight') {
                    setSelectedImage((prev) => (prev + 1) % project.images.length);
                }
                if (e.key === 'ArrowLeft') {
                    setSelectedImage((prev) => (prev - 1 + project.images.length) % project.images.length);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, lightboxOpen, onClose, project]);

    const getImageSrc = useCallback((img) => {
        if (!img) return '';
        return typeof img === 'string' ? img : img.src;
    }, []);

    if (!project) return null;

    const allImages = project.images || [];

    // Overlay + modal animations
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const modalVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 300,
                mass: 0.8,
            }
        },
        exit: {
            opacity: 0,
            y: 40,
            scale: 0.97,
            transition: { duration: 0.25, ease: "easeIn" }
        }
    };

    const staggerChildren = {
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.15
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const imageHoverVariants = {
        rest: { scale: 1 },
        hover: {
            scale: 1.03,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-md"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto py-6 sm:py-10 px-3 sm:px-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-[900px] bg-gradient-to-b from-[#232328] via-[#1D1D22] to-[#18181C] rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_50px_150px_rgba(0,0,0,0.7)] overflow-hidden my-auto"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Glows */}
                            <div className="absolute -top-[20%] -right-[20%] w-[50%] h-[50%] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none" />
                            <div className="absolute -bottom-[20%] -left-[20%] w-[40%] h-[40%] bg-brand-yellow/8 blur-[100px] rounded-full pointer-events-none" />

                            {/* Close Button */}
                            <motion.button
                                className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                                onClick={onClose}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            <motion.div
                                className="relative z-10"
                                variants={staggerChildren}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Hero Image Section */}
                                <motion.div
                                    className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer group"
                                    variants={fadeInUp}
                                    onClick={() => { setSelectedImage(0); setLightboxOpen(true); }}
                                >
                                    <img
                                        src={getImageSrc(allImages[selectedImage] || allImages[0])}
                                        alt={`${project.title} - Featured`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#232328] via-transparent to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#232328]/30 via-transparent to-[#232328]/30" />

                                    {/* Expand icon */}
                                    <motion.div
                                        className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                        </svg>
                                    </motion.div>

                                    {/* Badge */}
                                    {project.badge && (
                                        <div className={`absolute top-3 right-12 sm:top-5 sm:right-18 ${project.badgeColor === 'brand-green' ? 'bg-brand-green' : 'bg-brand-yellow'} ${project.badgeColor === 'brand-yellow' ? 'text-brand-dark' : 'text-white'} px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-2xl`}>
                                            {project.badge}
                                        </div>
                                    )}
                                </motion.div>

                                {/* Content Section */}
                                <div className="px-5 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10 -mt-6 sm:-mt-8 relative z-10">
                                    {/* Category & Title */}
                                    <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
                                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                            <span className="h-[2px] w-6 sm:w-8 bg-brand-green" />
                                            <span className="text-brand-green font-medium tracking-wide text-[10px] sm:text-xs uppercase">
                                                {project.category || `Project ${project.id}`}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                                            {project.title}
                                        </h2>
                                    </motion.div>

                                    {/* Separator */}
                                    <motion.div
                                        variants={fadeInUp}
                                        className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-5 sm:mb-6"
                                    />

                                    {/* Description */}
                                    <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
                                        <h3 className="text-sm sm:text-base font-bold text-white/90 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            About This Project
                                        </h3>
                                        <div className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-3">
                                            {typeof project.description === 'string' ? (
                                                project.description.split('\n\n').map((para, i) => (
                                                    <p key={i} className="text-gray-400/90">{para.trim()}</p>
                                                ))
                                            ) : (
                                                project.description
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Image Gallery */}
                                    {allImages.length > 0 && (
                                        <motion.div variants={fadeInUp}>
                                            <h3 className="text-sm sm:text-base font-bold text-white/90 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
                                                <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                Project Gallery
                                            </h3>
                                            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                                                {allImages.map((img, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className={`relative rounded-lg sm:rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-colors duration-300 ${allImages.length === 1
                                                                ? 'col-span-2 aspect-video'
                                                                : allImages.length === 3 && index === 2
                                                                    ? 'col-span-2 aspect-[21/9]'
                                                                    : 'aspect-video'
                                                            }`}
                                                        variants={imageHoverVariants}
                                                        initial="rest"
                                                        whileHover="hover"
                                                        onClick={() => {
                                                            setSelectedImage(index);
                                                            setLightboxOpen(true);
                                                        }}
                                                    >
                                                        <img
                                                            src={getImageSrc(img)}
                                                            alt={`${project.title} - Screenshot ${index + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        {/* Hover overlay */}
                                                        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                                            <motion.div
                                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                                                initial={{ opacity: 0, scale: 0.5 }}
                                                                whileHover={{ opacity: 1, scale: 1 }}
                                                            >
                                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                                </svg>
                                                            </motion.div>
                                                        </div>
                                                        {/* Image number badge */}
                                                        <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-black/50 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] text-white/70 font-medium border border-white/10">
                                                            {index + 1}/{allImages.length}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Lightbox */}
                    <AnimatePresence>
                        {lightboxOpen && (
                            <motion.div
                                className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setLightboxOpen(false)}
                            >
                                {/* Close button */}
                                <motion.button
                                    className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                                    onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>

                                {/* Navigation arrows */}
                                {allImages.length > 1 && (
                                    <>
                                        <motion.button
                                            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
                                            }}
                                            whileHover={{ scale: 1.1, x: -3 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </motion.button>
                                        <motion.button
                                            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage((prev) => (prev + 1) % allImages.length);
                                            }}
                                            whileHover={{ scale: 1.1, x: 3 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </motion.button>
                                    </>
                                )}

                                {/* Lightbox Image */}
                                <motion.div
                                    className="relative max-w-[90vw] max-h-[85vh] sm:max-w-[85vw]"
                                    onClick={(e) => e.stopPropagation()}
                                    key={selectedImage}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <img
                                        src={getImageSrc(allImages[selectedImage])}
                                        alt={`${project.title} - Image ${selectedImage + 1}`}
                                        className="max-w-full max-h-[85vh] object-contain rounded-lg sm:rounded-xl shadow-2xl border border-white/10"
                                    />
                                    {/* Image counter */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm text-white/80 font-medium border border-white/10">
                                        {selectedImage + 1} / {allImages.length}
                                    </div>
                                </motion.div>

                                {/* Thumbnail strip */}
                                {allImages.length > 1 && (
                                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-white/10">
                                        {allImages.map((img, index) => (
                                            <motion.button
                                                key={index}
                                                className={`w-10 h-7 sm:w-14 sm:h-9 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${selectedImage === index
                                                        ? 'border-brand-green shadow-[0_0_10px_rgba(91,194,130,0.4)]'
                                                        : 'border-transparent opacity-50 hover:opacity-80'
                                                    }`}
                                                onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailModal;
