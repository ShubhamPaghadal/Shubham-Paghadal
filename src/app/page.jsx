"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SiUpwork, SiGreensock } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { FaGem, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import banner_img from '../../public/assets/banner_img.png'

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
        <div className="min-h-screen bg-[#1D1D20] text-white overflow-hidden relative font-sans">

            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-between relative z-10">

                {/* Left Content Section */}
                <motion.div
                    className="lg:w-1/2 flex flex-col justify-center items-start space-y-6 z-20 mt-20 lg:mt-0"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* <motion.div variants={fadeInUp} className="flex items-center gap-2 group cursor-pointer">
                        <span className="h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300"></span>
                        <span className="text-brand-green font-medium tracking-wide text-sm uppercase">Introducing</span>
                    </motion.div> */}

                    <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl lg:text-[84px] font-bold leading-[1.1] tracking-tight">
                        I&#39;m <br />
                        Shubham <br />
                        Paghadal
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-xl leading-relaxed">
                        Since beginning my journey as a freelance designer nearly 7 years ago, I&#39;ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col gap-2 pt-4">
                        <div className="flex items-center gap-2 text-2xl font-bold text-[#14a800]">
                            <SiUpwork className="text-3xl" />
                            <span className="text-white text-lg font-normal">100% Job Success</span>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#2a2a2c] hover:bg-[#333] transition-colors border border-white/5 rounded-full px-1 py-1 pr-4 flex items-center gap-2 cursor-pointer mt-2">
                                <div className="bg-pink-600 p-1.5 rounded-full">
                                    <FaGem className="text-white text-xs" />
                                </div>
                                <span className="text-xs font-bold text-gray-300 tracking-wider">TOP RATED PLUS</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image Section */}
                <motion.div
                    className="lg:w-1/2 h-full flex items-end justify-center relative mt-10 lg:mt-0 pb-20 lg:pb-0"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Green Circle Background */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border-[40px] border-brand-green/20 bg-brand-green flex items-center justify-center overflow-visible z-0">
                        {/* Inner lighter circle if needed, mainly just the solid pleasant green from reference */}
                        <div className="absolute inset-0 rounded-full bg-brand-green/10 blur-3xl"></div>
                    </div>

                    {/* Person Image */}
                    <motion.img
                        src={banner_img.src}
                        alt="Shubham Paghadal"
                        className="relative w-[800px] h-[800px] z-10 object-cover object-top drop-shadow-2xl mask-image-gradient"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />

                    {/* Floating Icons */}
                    {/* .NET - Top Left */}
                    <motion.div
                        className="absolute top-[20%] left-[10%] lg:left-[5%] bg-[#2a2a2c] p-4 rounded-full shadow-2xl z-20"
                        variants={floatAnimation}
                        animate="animate"
                    >
                        <div className="w-12 h-12 flex items-center justify-center font-bold text-white text-lg">React</div>
                    </motion.div>

                    {/* VS Code - Left Middle */}
                    <motion.div
                        className="absolute top-[50%] left-[-5%] lg:left-[-10%] bg-[#2a2a2c] p-4 rounded-full shadow-2xl z-20"
                        variants={floatAnimation}
                        animate="animate"
                        transition={{ delay: 0.5 }}
                    >
                        <VscVscode className="w-8 h-8 text-blue-500" />
                    </motion.div>

                    {/* JS - Right Middle */}
                    <motion.div
                        className="absolute top-[55%] right-[-5%] lg:right-[-5%] bg-[#2a2a2c] p-5 rounded-full shadow-2xl z-20"
                        variants={floatAnimation}
                        animate="animate"
                        transition={{ delay: 1 }}
                    >
                        <span className="text-xl font-bold font-mono">JS</span>
                    </motion.div>

                    {/* Sketch/Gem - Top Right */}
                    <motion.div
                        className="absolute top-[25%] right-[10%] lg:right-[5%] bg-[#2a2a2c] p-4 rounded-full shadow-2xl z-20"
                        variants={floatAnimation}
                        animate="animate"
                        transition={{ delay: 0.7 }}
                    >
                        <SiGreensock className="w-6 h-6 text-green-400" />
                    </motion.div>

                </motion.div>
            </section>

            {/* Project 1 Section */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 lg:py-32 relative z-10 mb-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Text Content */}
                    <motion.div
                        className="lg:w-1/3 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <span className="h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300"></span>
                            <span className="text-brand-green font-medium tracking-wide text-sm uppercase">Project 1</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white">
                            Meclinic
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There&#39;s no imperative to be an expert at doing everything when you can.
                        </p>

                        <a href="#" className="flex items-center gap-3 text-brand-yellow hover:text-white transition-colors duration-300 font-medium group text-lg">
                            <span className="bg-brand-yellow/10 p-2 rounded-full group-hover:bg-brand-yellow/20 transition-colors">
                                <FaGem className="text-xs transform" />
                            </span>
                            Read More
                        </a>
                    </motion.div>

                    {/* Right Image/Presentation Box */}
                    <motion.div
                        className="lg:w-2/3 w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-[#4B4B53] rounded-[3rem] p-12 lg:p-16 relative overflow-visible h-[500px] lg:h-[600px] flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl">

                            {/* Mockup Images */}
                            <div className="relative w-full h-full perspective-1000">
                                {/* Back Image */}
                                <motion.div
                                    className="absolute top-10 right-0 lg:right-[-10%] w-[80%] rounded-lg overflow-hidden shadow-2xl z-10 opacity-60"
                                    initial={{ transform: "rotateY(-15deg) rotateZ(5deg) translateY(50px)" }}
                                    whileInView={{ transform: "rotateY(-15deg) rotateZ(5deg) translateY(0px)" }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <img src="https://cdn.dribbble.com/users/1615584/screenshots/15710688/media/6c7a10fb5944358bb75d9e567104b281.jpg" alt="Meclinic Screen 1" className="w-full object-cover" />
                                </motion.div>

                                {/* Front Image */}
                                <motion.div
                                    className="absolute top-[20%] left-0 lg:left-[-5%] w-[70%] rounded-lg overflow-hidden shadow-2xl z-20 border-4 border-white/10"
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
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 lg:py-32 relative z-10 mb-20">
                {/* Background Decoration - Green Circle Top Right */}
                <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full border-[30px] border-brand-green/20 blur-sm z-0 opacity-50"></div>

                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 relative z-10">
                    {/* Text Content (Right side on desktop) */}
                    <motion.div
                        className="lg:w-1/3 space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <span className="h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300"></span>
                            <span className="text-brand-green font-medium tracking-wide text-sm uppercase">Project 2</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white">
                            Getfizzy
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There&#39;s no imperative to be an expert at doing everything when you can.
                        </p>

                        <a href="#" className="flex items-center gap-3 text-brand-yellow hover:text-white transition-colors duration-300 font-medium group text-lg">
                            <span className="bg-brand-yellow/10 p-2 rounded-full group-hover:bg-brand-yellow/20 transition-colors">
                                <FaGem className="text-xs transform" />
                            </span>
                            Read More
                        </a>
                    </motion.div>

                    {/* Image/Presentation Box (Left side on desktop) */}
                    <motion.div
                        className="lg:w-2/3 w-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-[#4B4B53] rounded-[3rem] p-12 lg:p-16 relative overflow-visible h-[500px] lg:h-[600px] flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl">

                            {/* Mockup Images */}
                            <div className="relative w-full h-full perspective-1000 flex items-center justify-center">
                                {/* Main Center Image */}
                                <motion.div
                                    className="w-[90%] rounded-2xl overflow-hidden shadow-2xl z-20"
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
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 lg:py-32 relative z-10 mb-20">
                {/* Background Decoration - Yellow Circle Bottom Left */}
                <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full border-[30px] border-brand-yellow/20 blur-sm z-0 opacity-50"></div>

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
                    {/* Left Text Content */}
                    <motion.div
                        className="lg:w-1/3 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <span className="h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300"></span>
                            <span className="text-brand-green font-medium tracking-wide text-sm uppercase">Project 3</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white">
                            The Trailer Part Soutlet
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There&#39;s no imperative to be an expert at doing everything when you can.
                        </p>

                        <a href="#" className="flex items-center gap-3 text-brand-yellow hover:text-white transition-colors duration-300 font-medium group text-lg">
                            <span className="bg-brand-yellow/10 p-2 rounded-full group-hover:bg-brand-yellow/20 transition-colors">
                                <FaGem className="text-xs transform" />
                            </span>
                            Read More
                        </a>
                    </motion.div>

                    {/* Right Image/Presentation Box */}
                    <motion.div
                        className="lg:w-2/3 w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-[#4B4B53] rounded-[3rem] p-12 lg:p-16 relative overflow-visible h-[500px] lg:h-[600px] flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl">

                            {/* Mockup Images */}
                            <div className="relative w-full h-full perspective-1000 flex items-center justify-center">
                                {/* Floating Top Image */}
                                <motion.div
                                    className="absolute top-10 right-10 w-[60%] rounded-lg overflow-hidden shadow-xl z-10"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img src="https://cdn.dribbble.com/users/2399102/screenshots/15655755/media/31422791485202860c238b776263fa7a.png" alt="Project 3 Detail" className="w-full object-cover" />
                                </motion.div>

                                {/* Main Bottom Image */}
                                <motion.div
                                    className="absolute bottom-10 left-10 w-[70%] rounded-lg overflow-hidden shadow-2xl z-20"
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

            {/* View All Button */}
            <div className="flex justify-center pb-32">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
                >
                    View All
                </motion.button>
            </div>

            {/* Lets Work Together Section */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-32 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#242426] rounded-[3rem] py-20 px-6 relative overflow-hidden shadow-2xl"
                >
                    {/* Top Left Decoration */}
                    <div className="absolute top-[-50px] left-[-50px] w-40 h-40 sm:w-56 sm:h-56 bg-brand-green rounded-full opacity-90"></div>

                    {/* Bottom Right Decoration */}
                    <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 sm:w-56 sm:h-56 border-[30px] border-brand-green rounded-full opacity-90"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="h-[2px] w-12 bg-brand-green/50"></span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                            Lets Work Together
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                            The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn.
                        </p>

                        <div className="pt-4">
                            <a href="/contact" className="inline-block bg-brand-yellow hover:bg-[#f0c05a] text-gray-900 font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-[0_0_20px_rgba(252,203,110,0.3)] hover:shadow-[0_0_30px_rgba(252,203,110,0.5)] transform hover:scale-105">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer Section */}
            <footer className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12 relative z-10 border-t border-white/5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-1">
                        <span className="text-brand-green text-5xl font-script">S</span>
                        <span className="text-3xl font-script text-white pt-2">hubham Paghadal</span>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-500 text-sm">
                        © 2026 Shubham Paghadal. All rights reserved.
                    </div>


                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com/in/paghadal-shubham-4b0246380/" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2a2a2c] hover:bg-brand-green group transition-all duration-300 transform hover:-translate-y-1">
                            <FaLinkedinIn className="text-brand-yellow group-hover:text-white text-xl transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/shubham_paghadal_/" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2a2a2c] hover:bg-brand-green group transition-all duration-300 transform hover:-translate-y-1">
                            <FaInstagram className="text-brand-yellow group-hover:text-white text-xl transition-colors" />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2a2a2c] hover:bg-brand-green group transition-all duration-300 transform hover:-translate-y-1">
                            <FaTwitter className="text-brand-yellow group-hover:text-white text-xl transition-colors" />
                        </a>
                        <a href="https://github.com/ShubhamPaghadal" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2a2a2c] hover:bg-brand-green group transition-all duration-300 transform hover:-translate-y-1">
                            <FaGithub className="text-brand-yellow group-hover:text-white text-xl transition-colors" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
