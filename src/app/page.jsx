"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiUpwork, SiGreensock, SiNextdotjs } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { FaGem, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import banner_img from '../../public/assets/banner_img.png'
import WorkTogether from '@/components/WorkTogether';
import Footer from '@/components/Footer';
import AllProjects from '@/components/AllProjects';


export default function Home() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const floatAnimation = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-background text-white overflow-hidden relative font-sans">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.18, scale: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat w-full h-full lg:bg-fixed"
                    style={{ backgroundImage: 'url("/assets/background_img.jpeg")' }}
                />
                {/* Multi-layered gradient for better blending */}
                <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/70 to-background"></div>
                <div className="absolute inset-0 bg-linear-to-r from-background/30 via-transparent to-background/30"></div>

                {/* Decorative Premium Glows */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/15 blur-[120px] rounded-full"></div>
                    <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-brand-yellow/10 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-1/4 left-[-5%] w-[25%] h-[25%] bg-brand-green/5 blur-[80px] rounded-full"></div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 pt-24 lg:pt-32">

                {/* Left Content Section */}
                <motion.div
                    className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 z-20"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold leading-[1.1] tracking-tight">
                        I'm <br className="hidden lg:block" />
                        Shubham <br className="hidden lg:block" />
                        Paghadal
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed px-4 lg:px-0 max-[1200px]:w-[95%]">
                        Since beginning my journey as a Frontend Software Engineer 1 year ago, I’ve worked on building responsive and user-friendly web applications. I’ve collaborated with teams to develop multiple websites including e-commerce platforms, doctor portals, and business management systems.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col items-center lg:items-start gap-2 pt-2 sm:pt-4">
                        <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#14a800]">
                            <SiUpwork className="text-2xl sm:text-3xl" />
                            <span className="text-white text-base sm:text-lg font-normal">100% Job Success</span>
                        </div>
                        <div className="flex items-start">
                            <div className="btn-fill-slide bg-brand-dark hover:bg-[#333] transition-colors border border-white/5 rounded-full px-1 py-1 pr-4 flex items-center gap-2 cursor-pointer mt-2">
                                <div className="bg-pink-600 p-1 rounded-full">
                                    <FaGem className="text-white text-[10px]" />
                                </div>
                                <span className="text-[10px] sm:text-xs font-bold text-gray-300 tracking-wider uppercase">TOP RATED PLUS</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image Section - Circular Design */}
                <motion.div
                    className="w-full lg:w-1/2 flex items-center justify-center relative mt-16 sm:mt-20 lg:mt-8 min-h-[500px] sm:min-h-[600px] lg:min-h-[530px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Animated Gradient Mesh Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            className="absolute top-[10%] right-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full opacity-20"
                            style={{
                                background: 'radial-gradient(circle, rgba(91, 194, 130, 0.3) 0%, transparent 70%)',
                                filter: 'blur(60px)'
                            }}
                            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full opacity-15"
                            style={{
                                background: 'radial-gradient(circle, rgba(252, 203, 110, 0.3) 0%, transparent 70%)',
                                filter: 'blur(50px)'
                            }}
                            animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </div>

                    {/* Main Circular Content Container */}
                    <div className="relative z-10 flex items-center justify-center">

                        {/* Outer Glowing Ring */}
                        <motion.div
                            className="absolute rounded-full"
                            style={{
                                width: 'clamp(300px, 55vw, 420px)',
                                height: 'clamp(300px, 55vw, 420px)',
                                background: 'conic-gradient(from 0deg, rgba(91, 194, 130, 0.3), rgba(252, 203, 110, 0.15), rgba(91, 194, 130, 0.05), rgba(252, 203, 110, 0.15), rgba(91, 194, 130, 0.3))',
                                filter: 'blur(25px)',
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Outer Decorative Ring Border */}
                        <motion.div
                            className="absolute rounded-full border-2 border-brand-green/15"
                            style={{
                                width: 'clamp(320px, 58vw, 450px)',
                                height: 'clamp(320px, 58vw, 450px)',
                            }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                        />

                        {/* Dashed Orbital Ring - slowly rotating */}
                        <motion.div
                            className="absolute pointer-events-none"
                            style={{
                                width: 'clamp(340px, 62vw, 480px)',
                                height: 'clamp(340px, 62vw, 480px)',
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        >
                            <svg className="w-full h-full" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="98" fill="none" stroke="url(#orbitalGrad)" strokeWidth="0.5" strokeDasharray="8 6" opacity="0.3" />
                                <defs>
                                    <linearGradient id="orbitalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#5bc282" />
                                        <stop offset="50%" stopColor="#fccb6e" />
                                        <stop offset="100%" stopColor="#5bc282" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.div>

                        {/* Inner Circle Background */}
                        <motion.div
                            className="absolute rounded-full bg-background/60 backdrop-blur-sm border border-brand-green/10"
                            style={{
                                width: 'clamp(280px, 50vw, 390px)',
                                height: 'clamp(280px, 50vw, 390px)',
                            }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.3, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                            {/* Pulsing glow inside */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-brand-green/5 blur-2xl"
                                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>

                        {/* Circle Image Container - clips the image to circle, no legs */}
                        <motion.div
                            className="relative rounded-full overflow-hidden border-[3px] border-brand-green/25 shadow-[0_0_60px_rgba(91,194,130,0.15),0_0_120px_rgba(91,194,130,0.05)]"
                            style={{
                                width: 'clamp(260px, 48vw, 370px)',
                                height: 'clamp(260px, 48vw, 370px)',
                            }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                            {/* Inner gradient overlay for depth */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-background/30 z-10 pointer-events-none" />

                            {/* Subtle animated shine */}
                            <motion.div
                                className="absolute inset-0 z-20 pointer-events-none rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, transparent 100%)',
                                }}
                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            <motion.img
                                src={banner_img.src}
                                alt="Shubham Paghadal"
                                className="w-full h-full object-cover object-top"
                                style={{
                                    objectPosition: 'center 15%',
                                    filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                                }}
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>



                        {/* Floating Tech Skill Cards - Diamond Layout around circle */}
                        {[
                            {
                                name: 'React.js', icon: 'React', experience: '1.5 Yrs', delay: 0.6,
                                pos: { top: '-110px', left: '50%', transform: 'translateX(-50%)' }
                            },
                            {
                                name: 'JavaScript', icon: 'JS', experience: 'Expert', delay: 0.8,
                                pos: { top: '50%', right: '-130px', transform: 'translateY(-50%)' }
                            },
                            {
                                name: 'VS Code', icon: <VscVscode className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />, experience: 'Daily', delay: 1.0,
                                pos: { top: '50%', left: '-130px', transform: 'translateY(-50%)' }
                            },
                            {
                                name: 'Next JS', icon: <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, experience: 'Pro', delay: 1.2,
                                pos: { bottom: '-110px', left: '50%', transform: 'translateX(-50%)' }
                            }
                        ].map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="absolute z-20 group cursor-pointer"
                                style={skill.pos}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: skill.delay,
                                    ease: [0.34, 1.56, 0.64, 1]
                                }}
                            >
                                <motion.div
                                    className="relative bg-brand-dark/90 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3 lg:p-4 border border-white/10 shadow-xl min-w-[90px] sm:min-w-[110px] lg:min-w-[130px]"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        duration: 3 + (index * 0.5),
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        borderColor: 'rgba(91, 194, 130, 0.5)',
                                        boxShadow: '0 20px 50px rgba(91, 194, 130, 0.3)',
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                                        <div className="text-xl sm:text-2xl font-bold">
                                            {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                                        </div>
                                        <div className="text-[10px] sm:text-xs font-semibold text-white/90 text-center">
                                            {skill.name}
                                        </div>
                                        <div className="text-[8px] sm:text-[10px] px-2 py-0.5 rounded-full bg-brand-green/20 text-brand-green font-medium">
                                            {skill.experience}
                                        </div>
                                    </div>

                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/10 group-hover:to-brand-yellow/10 transition-all duration-500 blur-sm" />

                                    {/* Status dot */}
                                    <motion.div
                                        className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand-green rounded-full border-2 border-brand-dark"
                                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                    />
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Floating Particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full"
                                    style={{
                                        background: i % 2 === 0 ? 'rgba(91, 194, 130, 0.5)' : 'rgba(252, 203, 110, 0.5)',
                                        left: `${15 + (Math.random() * 70)}%`,
                                        top: `${15 + (Math.random() * 70)}%`,
                                    }}
                                    animate={{
                                        y: [0, -40, 0],
                                        x: [0, Math.random() * 15 - 7, 0],
                                        opacity: [0, 0.8, 0],
                                        scale: [0, 1.5, 0],
                                    }}
                                    transition={{
                                        duration: 4 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 3,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <AllProjects />

            <div className="flex justify-center pb-32">
                <Link href="/portfolio">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-shimmer btn-glow-border bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
                    >
                        View All
                    </motion.button>
                </Link>
            </div>

            {/* Lets Work Together Section */}
            <WorkTogether />

            {/* Footer Section */}
            <Footer />
        </div>
    );
}
