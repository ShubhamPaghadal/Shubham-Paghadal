"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGem, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import WorkTogether from '@/components/WorkTogether';
import Footer from '@/components/Footer';
import ProjectSection from '@/components/ProjectSection';

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
            <div className="space-y-0">
                {projects.map((project) => (
                    <ProjectSection
                        key={project.id}
                        id={project.id}
                        category={project.category}
                        title={project.title}
                        description={project.description}
                        images={project.images}
                        layout={project.layout}
                        badge={project.id % 2 === 0 ? "NEW" : "LIVE"}
                        badgeColor={project.id % 2 === 0 ? "brand-yellow" : "brand-green"}
                    />
                ))}
            </div>

            {/* Lets Work Together Section */}
            <WorkTogether />

            {/* Footer Section */}
            <Footer />
        </div>
    );
}
