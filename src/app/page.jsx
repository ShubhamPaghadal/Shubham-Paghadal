"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiUpwork, SiGreensock } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { FaGem, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import banner_img from '../../public/assets/banner_img.png'
import WorkTogether from '@/components/WorkTogether';
import Footer from '@/components/Footer';

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
                        Since beginning my journey as a Frontend Software Engineer 1.5 years ago, I’ve worked on building responsive and user-friendly web applications. I’ve collaborated with teams to develop multiple websites including e-commerce platforms, doctor portals, and business management systems.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col items-center lg:items-start gap-2 pt-2 sm:pt-4">
                        <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#14a800]">
                            <SiUpwork className="text-2xl sm:text-3xl" />
                            <span className="text-white text-base sm:text-lg font-normal">100% Job Success</span>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-brand-dark hover:bg-[#333] transition-colors border border-white/5 rounded-full px-1 py-1 pr-4 flex items-center gap-2 cursor-pointer mt-2">
                                <div className="bg-pink-600 p-1 rounded-full">
                                    <FaGem className="text-white text-[10px]" />
                                </div>
                                <span className="text-[10px] sm:text-xs font-bold text-gray-300 tracking-wider uppercase">TOP RATED PLUS</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image Section - Completely Redesigned */}
                <motion.div
                    className="w-full lg:w-1/2 flex items-center justify-center relative mt-16 sm:mt-20 lg:mt-8 min-h-[600px] lg:min-h-[700px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Circular Background Elements - Green + Dark Concentric Circles */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-5">
                        {/* Outer Green Circle */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[520px] sm:h-[520px] lg:w-[650px] lg:h-[650px] rounded-full border-30 sm:border-40 lg:border-50 border-brand-green/20"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.2,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                        >
                            {/* Pulsing glow */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-brand-green/5 blur-2xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.4, 0.6, 0.4]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>

                        {/* Inner Dark Circle */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[430px] sm:h-[430px] lg:w-[540px] lg:h-[540px] rounded-full bg-background/50 backdrop-blur-sm border border-brand-green/10"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1.3,
                                delay: 0.4,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                        />
                    </div>

                    {/* Animated Gradient Mesh Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Blob Gradient 1 */}
                        <motion.div
                            className="absolute top-[10%] right-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full opacity-20"
                            style={{
                                background: 'radial-gradient(circle, rgba(91, 194, 130, 0.3) 0%, transparent 70%)',
                                filter: 'blur(60px)'
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 30, 0],
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Blob Gradient 2 */}
                        <motion.div
                            className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full opacity-15"
                            style={{
                                background: 'radial-gradient(circle, rgba(252, 203, 110, 0.3) 0%, transparent 70%)',
                                filter: 'blur(50px)'
                            }}
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [0, -20, 0],
                                y: [0, 30, 0],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />

                        {/* Grid Pattern Overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.02]"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(91, 194, 130, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(91, 194, 130, 0.5) 1px, transparent 1px)',
                                backgroundSize: '50px 50px'
                            }}
                        />
                    </div>

                    {/* Main Content Container */}
                    <div className="relative z-10 w-full max-w-[500px] lg:max-w-[600px] px-4 sm:px-6">

                        {/* Central Image Card with 3D Effect */}
                        <motion.div
                            className="relative group"
                            initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
                            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.3,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                            style={{ perspective: '1000px' }}
                        >
                            {/* Geometric Accent Lines */}
                            <motion.div
                                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-l-2 border-t-2 border-brand-green/40 z-0"
                                initial={{ opacity: 0, x: -20, y: -20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            />

                            <motion.div
                                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-r-2 border-b-2 border-brand-yellow/40 z-0"
                                initial={{ opacity: 0, x: 20, y: 20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                            />

                            {/* Holographic Card Container */}
                            <motion.div
                                className="relative bg-linear-to-br from-brand-dark/40 via-brand-dark/30 to-brand-dark/40 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-6 border border-white/10 shadow-2xl overflow-hidden"
                                whileHover={{
                                    scale: 1.02,
                                    rotateY: 2,
                                    rotateX: -2,
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {/* Scanline Effect */}
                                <motion.div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    style={{
                                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(91, 194, 130, 0.03) 2px, rgba(91, 194, 130, 0.03) 4px)',
                                    }}
                                    animate={{
                                        backgroundPosition: ['0px 0px', '0px 100px'],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Gradient Border Glow */}
                                <div className="absolute inset-0 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-brand-green/0 via-brand-green/5 to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Person Image */}
                                <motion.div
                                    className="relative"
                                    animate={{
                                        y: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <img
                                        src={banner_img.src}
                                        alt="Shubham Paghadal"
                                        className="relative w-full h-auto object-contain rounded-2xl sm:rounded-3xl"
                                        style={{
                                            maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                                            filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4))'
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Floating Tech Skill Cards - Fixed Positioning */}
                        {[
                            { name: 'React.js', icon: 'React', color: 'brand-green', experience: '1.5 Yrs', position: 'top-[8%] left-0 sm:left-[-5%] lg:left-[-8%]', delay: 0.6 },
                            { name: 'JavaScript', icon: 'JS', color: 'brand-yellow', experience: 'Expert', position: 'top-[32%] right-0 sm:right-[-5%] lg:right-[-8%]', delay: 0.8 },
                            { name: 'VS Code', icon: <VscVscode className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />, color: 'blue-500', experience: 'Daily', position: 'bottom-[28%] left-0 sm:left-[-5%] lg:left-[-8%]', delay: 1.0 },
                            { name: 'GSAP', icon: <SiGreensock className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />, color: 'green-500', experience: 'Pro', position: 'bottom-[8%] right-0 sm:right-[-5%] lg:right-[-8%]', delay: 1.2 }
                        ].map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className={`absolute ${skill.position} z-20 group cursor-pointer`}
                                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: skill.delay,
                                    ease: [0.34, 1.56, 0.64, 1]
                                }}
                            >
                                <motion.div
                                    className="relative bg-brand-dark/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 lg:p-4 border border-white/10 shadow-xl min-w-[90px] sm:min-w-[110px] lg:min-w-[130px]"
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3 + (index * 0.5),
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                    whileHover={{
                                        scale: 1.08,
                                        rotateZ: index % 2 === 0 ? 3 : -3,
                                        borderColor: `rgba(91, 194, 130, 0.5)`,
                                        boxShadow: `0 20px 50px rgba(91, 194, 130, 0.3)`,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {/* Card Content */}
                                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                                        {/* Icon/Text */}
                                        <div className="text-xl sm:text-2xl font-bold">
                                            {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                                        </div>

                                        {/* Skill Name */}
                                        <div className="text-[10px] sm:text-xs font-semibold text-white/90 text-center">
                                            {skill.name}
                                        </div>

                                        {/* Experience Badge */}
                                        <div className="text-[8px] sm:text-[10px] px-2 py-0.5 rounded-full bg-brand-green/20 text-brand-green font-medium">
                                            {skill.experience}
                                        </div>
                                    </div>

                                    {/* Glow Effect */}
                                    <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/10 group-hover:to-brand-yellow/10 transition-all duration-500 blur-sm`} />

                                    {/* Floating Progress Indicator */}
                                    <motion.div
                                        className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-brand-green rounded-full border-2 border-brand-dark"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [1, 0.6, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3
                                        }}
                                    />
                                </motion.div>

                                {/* Connecting Line - Hidden on mobile for cleaner look */}
                                <svg className="hidden sm:block absolute top-1/2 left-1/2 w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] pointer-events-none opacity-15" style={{ transform: 'translate(-50%, -50%)' }}>
                                    <motion.line
                                        x1="75"
                                        y1="75"
                                        x2={index % 2 === 0 ? "120" : "30"}
                                        y2={index < 2 ? "30" : "120"}
                                        stroke="url(#gradient)"
                                        strokeWidth="1"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: skill.delay + 0.3 }}
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="rgba(91, 194, 130, 0.5)" />
                                            <stop offset="100%" stopColor="rgba(252, 203, 110, 0.5)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </motion.div>
                        ))}

                        {/* Floating Particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full"
                                    style={{
                                        background: i % 2 === 0 ? 'rgba(91, 194, 130, 0.4)' : 'rgba(252, 203, 110, 0.4)',
                                        left: `${20 + (Math.random() * 60)}%`,
                                        top: `${20 + (Math.random() * 60)}%`,
                                    }}
                                    animate={{
                                        y: [0, -50, 0],
                                        x: [0, Math.random() * 20 - 10, 0],
                                        opacity: [0, 1, 0],
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

                        {/* Circular Progress Ring */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] pointer-events-none"
                            initial={{ opacity: 0, rotate: 0 }}
                            animate={{ opacity: 0.08, rotate: 360 }}
                            transition={{
                                opacity: { delay: 1.5, duration: 1 },
                                rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                            }}
                        >
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="url(#ringGradient)"
                                    strokeWidth="0.2"
                                    strokeDasharray="5 5"
                                />
                                <defs>
                                    <linearGradient id="ringGradient">
                                        <stop offset="0%" stopColor="rgba(91, 194, 130, 0.6)" />
                                        <stop offset="50%" stopColor="rgba(252, 203, 110, 0.6)" />
                                        <stop offset="100%" stopColor="rgba(91, 194, 130, 0.6)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Project 1 Section */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Text Content */}
                    <motion.div
                        className="w-full lg:w-1/3 space-y-6 sm:space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 group cursor-pointer justify-center lg:justify-start">
                            <span className="h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300"></span>
                            <span className="text-brand-green font-medium tracking-wide text-xs sm:text-sm uppercase">Project 1</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
                            Meclinic
                        </h2>

                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-center lg:text-left">
                            The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn.
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <a href="#" className="flex items-center gap-3 text-brand-yellow hover:text-white transition-colors duration-300 font-medium group text-base sm:text-lg">
                                <span className="bg-brand-yellow/10 p-2 rounded-full group-hover:bg-brand-yellow/20 transition-colors">
                                    <FaGem className="text-[10px] transform" />
                                </span>
                                Read More
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image/Presentation Box */}
                    <motion.div
                        className="w-full lg:w-2/3 lg:h-[600px]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-[#4B4B53] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-16 relative overflow-hidden sm:overflow-visible h-[300px] sm:h-[450px] lg:h-full flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl">

                            {/* Mockup Images */}
                            <div className="relative w-full h-full perspective-1000">
                                {/* Back Image */}
                                <motion.div
                                    className="absolute top-5 right-0 lg:right-[-10%] w-[80%] rounded-lg overflow-hidden shadow-2xl z-10 opacity-60"
                                    initial={{ transform: "rotateY(-15deg) rotateZ(5deg) translateY(50px)" }}
                                    whileInView={{ transform: "rotateY(-15deg) rotateZ(5deg) translateY(0px)" }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <img src="https://cdn.dribbble.com/users/1615584/screenshots/15710688/media/6c7a10fb5944358bb75d9e567104b281.jpg" alt="Meclinic Screen 1" className="w-full object-cover" />
                                </motion.div>

                                {/* Front Image */}
                                <motion.div
                                    className="absolute top-[15%] left-0 lg:left-[-5%] w-[70%] rounded-lg overflow-hidden shadow-2xl z-20 border-2 sm:border-4 border-white/10"
                                    initial={{ transform: "rotateY(10deg) rotateZ(-5deg) translateY(80px)" }}
                                    whileInView={{ transform: "rotateY(10deg) rotateZ(-5deg) translateY(0px)" }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    <img src="https://cdn.dribbble.com/users/4859185/screenshots/18329618/media/2069792437651a5116757b3f9dc36f0a.png" alt="Meclinic Screen 2" className="w-full object-cover" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project 2 Section - Reverse Layout */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32 relative z-10 lg:mb-20">
                {/* Background Decoration */}
                <div className="absolute top-[-5%] right-[-5%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full border-[20px] sm:border-[30px] border-brand-green/10 blur-sm z-0 opacity-50"></div>

                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 relative z-10">
                    {/* Text Content */}
                    <motion.div
                        className="w-full lg:w-1/3 space-y-6 sm:space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 group cursor-pointer justify-center lg:justify-start">
                            <span className="h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300"></span>
                            <span className="text-brand-green font-medium tracking-wide text-xs sm:text-sm uppercase">Project 2</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
                            Getfizzy
                        </h2>

                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-center lg:text-left">
                            Modern beverage tracking application focusing on wellness and hydration. Built with cutting edge technologies for a seamless user experience.
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <a href="#" className="flex items-center gap-3 text-brand-yellow hover:text-white transition-colors duration-300 font-medium group text-base sm:text-lg">
                                <span className="bg-brand-yellow/10 p-2 rounded-full group-hover:bg-brand-yellow/20 transition-colors">
                                    <FaGem className="text-[10px] transform" />
                                </span>
                                Read More
                            </a>
                        </div>
                    </motion.div>

                    {/* Image/Presentation Box */}
                    <motion.div
                        className="w-full lg:w-2/3 lg:h-[600px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-[#4B4B53] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-16 relative overflow-hidden h-[300px] sm:h-[450px] lg:h-full flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                            <div className="relative w-full h-full perspective-1000 flex items-center justify-center">
                                <motion.div
                                    className="w-[90%] sm:w-[85%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl z-20"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img src="https://cdn.dribbble.com/users/4859185/screenshots/19326442/media/6a024c00320df686f06584281313460e.png" alt="Getfizzy App" className="w-full object-cover" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project 3 Section - Standard Layout */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
                {/* Background Decoration */}
                <div className="absolute bottom-[-5%] left-[-5%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full border-[20px] sm:border-[30px] border-brand-yellow/10 blur-sm z-0 opacity-50"></div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
                    {/* Left Text Content */}
                    <motion.div
                        className="w-full lg:w-1/3 space-y-6 sm:space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 group cursor-pointer justify-center lg:justify-start">
                            <span className="h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300"></span>
                            <span className="text-brand-green font-medium tracking-wide text-xs sm:text-sm uppercase">Project 3</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
                            The Trailer Part Outlet
                        </h2>

                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-center lg:text-left">
                            A comprehensive e-commerce platform for trailer parts and accessories. Optimized for high performance and conversion.
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <a href="#" className="flex items-center gap-3 text-brand-yellow hover:text-white transition-colors duration-300 font-medium group text-base sm:text-lg">
                                <span className="bg-brand-yellow/10 p-2 rounded-full group-hover:bg-brand-yellow/20 transition-colors">
                                    <FaGem className="text-[10px] transform" />
                                </span>
                                Read More
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image/Presentation Box */}
                    <motion.div
                        className="w-full lg:w-2/3 lg:h-[600px]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-[#4B4B53] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-16 relative overflow-hidden h-[300px] sm:h-[450px] lg:h-full flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                            {/* Mockup Images */}
                            <div className="relative w-full h-full perspective-1000 flex items-center justify-center">
                                {/* Floating Top Image */}
                                <motion.div
                                    className="absolute top-5 right-5 w-[60%] rounded-lg overflow-hidden shadow-xl z-10"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img src="https://cdn.dribbble.com/users/2399102/screenshots/15655755/media/31422791485202860c238b776263fa7a.png" alt="Project 3 Detail" className="w-full object-cover" />
                                </motion.div>

                                {/* Main Bottom Image */}
                                <motion.div
                                    className="absolute bottom-5 left-5 w-[70%] rounded-lg overflow-hidden shadow-2xl z-20"
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <img src="https://cdn.dribbble.com/users/685954/screenshots/15682896/media/078f1418c3931bb48873752df7185ad1.png" alt="Project 3 Main" className="w-full object-cover" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="flex justify-center pb-32">
                <Link href="/portfolio">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
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
