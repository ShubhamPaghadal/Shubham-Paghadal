"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectCard = ({
    id,
    slug,
    category,
    title,
    description,
    images = [],
    layout = 'standard',
    link = '#',
    badge = '',
    badgeColor = 'brand-green'
}) => {
    const isReverse = layout === 'reverse';
    const projectLink = slug ? `/projects/${slug}` : link;

    return (
        <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 relative z-10`}>

            {/* Text Content */}
            <motion.div
                className="w-full lg:w-[40%] space-y-6 sm:space-y-8"
                initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-2 group cursor-pointer justify-center lg:justify-start">
                    <span className={`h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300`}></span>
                    <span className="text-brand-green font-medium tracking-wide text-xs sm:text-sm uppercase">{category || `Project ${id}`}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white text-center lg:text-left tracking-tight">
                    {title}
                </h2>

                <div className="text-gray-400 text-base sm:text-lg leading-relaxed text-center lg:text-left space-y-4">
                    {typeof description === 'string' ? (
                        description.split('\n\n').map((para, i) => (
                            <p key={i}>{para}</p>
                        ))
                    ) : (
                        description
                    )}
                </div>

                <div className="flex justify-center lg:justify-start pt-4">
                    <Link href={projectLink}>
                        <motion.span
                            className="inline-flex items-center gap-3 text-brand-yellow font-bold group relative py-3 px-1 overflow-hidden cursor-pointer"
                            whileHover="hover"
                        >
                            <span className="text-lg uppercase tracking-wider">Read More</span>
                            <motion.span
                                variants={{
                                    hover: { x: 5 }
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="bg-brand-yellow/10 p-2 rounded-full group-hover:bg-brand-yellow/20 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.span>
                            <motion.div
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-yellow origin-left"
                                initial={{ scaleX: 0 }}
                                variants={{
                                    hover: { scaleX: 1 }
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.span>
                    </Link>
                </div>
            </motion.div>

            {/* Right Image/Presentation Box */}
            <motion.div
                className="w-full lg:w-[60%] perspective-2000"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="relative group/box w-full aspect-16/10 sm:aspect-video lg:aspect-[1.6] flex items-center justify-center">

                    {/* The Large Background Container */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#1E1E24] via-[#2A2A30] to-[#1E1E24] rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 group-hover/box:shadow-[0_40px_100px_rgba(91,194,130,0.2)]">

                        {/* Decorative Animated Glows */}
                        <motion.div
                            className={`absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-green/20 blur-[100px] rounded-full`}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                        />
                        <motion.div
                            className={`absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-yellow/10 blur-[100px] rounded-full`}
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                        />

                        {/* Mesh Grid Overlay */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{
                                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                backgroundSize: '30px 30px'
                            }}
                        />
                    </div>

                    {/* Images Container */}
                    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12">
                        {images.length >= 2 ? (
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Back Image */}
                                <motion.div
                                    className={`absolute ${isReverse ? 'left-[-5%] lg:left-0 top-[10%]' : 'right-[-5%] lg:right-0 top-[10%]'} w-[85%] aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/20 transition-all duration-700 group-hover/box:scale-105`}
                                    style={{
                                        transform: `perspective(1200px) rotateY(${isReverse ? '20deg' : '-20deg'}) rotateX(5deg) rotateZ(${isReverse ? '-4deg' : '4deg'})`,
                                    }}
                                >
                                    <div className="relative w-full h-full group/img">
                                        <img
                                            src={typeof images[1] === 'string' ? images[1] : images[1].src}
                                            alt={`${title} Preview 1`}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                                    </div>
                                </motion.div>

                                {/* Front Image */}
                                <motion.div
                                    className={`absolute ${isReverse ? 'right-[-5%] lg:right-[5%] bottom-[5%]' : 'left-[-5%] lg:left-[5%] bottom-[5%]'} w-[80%] aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.7)] z-20 border-2 sm:border-4 border-white/20 group-hover/box:-translate-y-6 transition-all duration-700 group-hover/box:scale-105`}
                                    style={{
                                        transform: `perspective(1200px) rotateY(${isReverse ? '-15deg' : '15deg'}) rotateX(-5deg) rotateZ(${isReverse ? '2deg' : '-2deg'})`,
                                    }}
                                >
                                    <div className="relative w-full h-full group/img2">
                                        <img
                                            src={typeof images[0] === 'string' ? images[0] : images[0].src}
                                            alt={`${title} Preview 2`}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img2:scale-110"
                                        />
                                        <motion.div
                                            className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none"
                                            animate={{ x: ['-200%', '300%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                        />
                                        {badge && (
                                            <div className={`absolute top-4 ${isReverse ? 'left-4' : 'right-4'} ${badgeColor === 'brand-green' ? 'bg-brand-green' : 'bg-brand-yellow'} ${badgeColor === 'brand-yellow' ? 'text-brand-dark' : 'text-white'} px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl z-30 transform group-hover/box:scale-110 transition-transform duration-500`}>
                                                {badge}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        ) : images.length === 1 ? (
                            <motion.div
                                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white/10 group-hover/box:scale-105 transition-all duration-700"
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative w-full h-full group/single">
                                    <img
                                        src={typeof images[0] === 'string' ? images[0] : images[0].src}
                                        alt={title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/single:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover/single:opacity-100 transition-opacity duration-700"></div>
                                    {badge && (
                                        <div className={`absolute top-6 right-6 ${badgeColor === 'brand-green' ? 'bg-brand-green/90' : 'bg-brand-yellow/90'} backdrop-blur-md px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl z-30 ${badgeColor === 'brand-yellow' ? 'text-brand-dark' : 'text-white'}`}>
                                            {badge}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ) : (
                            <div className="w-full h-full bg-white/5 rounded-3xl flex items-center justify-center text-white/20 italic">
                                No image available
                            </div>
                        )}
                    </div>

                    {/* Decorative Outlines - Visible at low opacity by default */}
                    <div className={`absolute top-10 ${isReverse ? 'right-10' : 'left-10'} w-20 h-20 border-t-2 ${isReverse ? 'border-r-2' : 'border-l-2'} border-brand-green/10 rounded-${isReverse ? 'tr' : 'tl'}-3xl group-hover/box:border-brand-green/40 group-hover/box:scale-110 transition-all duration-700`}></div>
                    <div className={`absolute bottom-10 ${isReverse ? 'left-10' : 'right-10'} w-20 h-20 border-b-2 ${isReverse ? 'border-l-2' : 'border-r-2'} border-brand-yellow/10 rounded-${isReverse ? 'bl' : 'br'}-3xl group-hover/box:border-brand-yellow/40 group-hover/box:scale-110 transition-all duration-700`}></div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
