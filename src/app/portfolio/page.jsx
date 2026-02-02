"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGem, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import WorkTogether from '@/components/WorkTogether';
import Footer from '@/components/Footer';

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Meclinic",
            category: "Project 1",
            description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There&#39;s no imperative to be an expert at doing everything when you can.",
            images: [
                "https://cdn.dribbble.com/users/1615584/screenshots/15710688/media/6c7a10fb5944358bb75d9e567104b281.jpg",
                "https://cdn.dribbble.com/users/4859185/screenshots/18329618/media/2069792437651a5116757b3f9dc36f0a.png"
            ],
            layout: "standard"
        },
        {
            id: 2,
            title: "Getfizzy",
            category: "Project 2",
            description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There&#39;s no imperative to be an expert at doing everything when you can.",
            images: [
                "https://cdn.dribbble.com/users/4859185/screenshots/19326442/media/6a024c00320df686f06584281313460e.png"
            ],
            layout: "reverse"
        },
        {
            id: 3,
            title: "The Trailer Part Soutlet",
            category: "Project 3",
            description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There&#39;s no imperative to be an expert at doing everything when you can.",
            images: [
                "https://cdn.dribbble.com/users/2399102/screenshots/15655755/media/31422791485202860c238b776263fa7a.png",
                "https://cdn.dribbble.com/users/685954/screenshots/15682896/media/078f1418c3931bb48873752df7185ad1.png"
            ],
            layout: "standard"
        },
        {
            id: 4,
            title: "Neon Dashboard",
            category: "Project 4",
            description: "A futuristic data visualization dashboard with real-time updates. The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
            images: [
                "https://cdn.dribbble.com/userupload/12917454/file/original-44280bba53239a0910103738096f906e.png",
                "https://cdn.dribbble.com/userupload/12917456/file/original-44280bba53239a0910103738096f906e.png"
            ],
            layout: "reverse"
        },
        {
            id: 5,
            title: "Crypto Wallet",
            category: "Project 5",
            description: "Secure and sleek mobile wallet for managing digital assets. The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
            images: [
                "https://cdn.dribbble.com/userupload/10541753/file/original-44280bba53239a0910103738096f906e.png"
            ],
            layout: "standard"
        },
        {
            id: 6,
            title: "Eco Tracker",
            category: "Project 6",
            description: "Track your carbon footprint with beautiful charts and insights. The technological revolution is changing aspect of our lives, and the fabric of society itself. it&#39;s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
            images: [
                "https://cdn.dribbble.com/users/1615584/screenshots/14582737/media/5e8d896173273e0a17f69436440b263e.png",
                "https://cdn.dribbble.com/users/1615584/screenshots/14582738/media/5e8d896173273e0a17f69436440b263e.png"
            ],
            layout: "reverse"
        }
    ];

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
            {projects.map((project, idx) => (
                <section key={project.id} className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 lg:py-32 relative z-10">
                    {/* Background Decorations for some projects */}
                    {project.id === 2 && (
                        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full border-30 border-brand-green/20 blur-sm z-0 opacity-50"></div>
                    )}
                    {project.id === 3 && (
                        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full border-30 border-brand-yellow/20 blur-sm z-0 opacity-50"></div>
                    )}

                    <div className={`flex flex-col ${project.layout === 'reverse' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24 relative z-10`}>
                        {/* Text Content */}
                        <motion.div
                            className="lg:w-1/3 space-y-8"
                            initial={{ opacity: 0, x: project.layout === 'reverse' ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="h-[2px] w-8 bg-brand-green group-hover:w-12 transition-all duration-300"></span>
                                <span className="text-brand-green font-medium tracking-wide text-sm uppercase">{project.category}</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.description}
                            </p>

                            <a href="#" className="flex items-center gap-3 text-brand-yellow hover:text-white transition-colors duration-300 font-medium group text-lg">
                                <span className="bg-brand-yellow/10 p-2 rounded-full group-hover:bg-brand-yellow/20 transition-colors">
                                    <FaGem className="text-xs transform" />
                                </span>
                                Read More
                            </a>
                        </motion.div>

                        {/* Image/Presentation Box */}
                        <motion.div
                            className="lg:w-2/3 w-full"
                            initial={{ opacity: 0, x: project.layout === 'reverse' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-[#4B4B53] rounded-[3rem] p-12 lg:p-16 relative overflow-visible h-[500px] lg:h-[600px] flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                                <div className="relative w-full h-full perspective-1000 flex items-center justify-center">
                                    {project.images.length > 1 ? (
                                        <>
                                            {/* Standard two-image overlap style */}
                                            <motion.div
                                                className="absolute top-10 right-0 lg:right-[-10%] w-[80%] rounded-lg overflow-hidden shadow-2xl z-10 opacity-60"
                                                initial={{ transform: "rotateY(-15deg) rotateZ(5deg) translateY(50px)" }}
                                                whileInView={{ transform: "rotateY(-15deg) rotateZ(5deg) translateY(0px)" }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            >
                                                <img src={project.images[0]} alt={`${project.title} 1`} className="w-full object-cover" />
                                            </motion.div>
                                            <motion.div
                                                className="absolute top-[20%] left-0 lg:left-[-5%] w-[70%] rounded-lg overflow-hidden shadow-2xl z-20 border-4 border-white/10"
                                                initial={{ transform: "rotateY(10deg) rotateZ(-5deg) translateY(80px)" }}
                                                whileInView={{ transform: "rotateY(10deg) rotateZ(-5deg) translateY(0px)" }}
                                                transition={{ duration: 1.2, ease: "easeOut" }}
                                            >
                                                <img src={project.images[1]} alt={`${project.title} 2`} className="w-full object-cover" />
                                            </motion.div>
                                        </>
                                    ) : (
                                        /* Single image style like Getfizzy */
                                        <motion.div
                                            className="w-[90%] rounded-2xl overflow-hidden shadow-2xl z-20"
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <img src={project.images[0]} alt={project.title} className="w-full object-cover" />
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* Lets Work Together Section */}
            <WorkTogether />

            {/* Footer Section */}
            <Footer />
        </div>
    );
}
