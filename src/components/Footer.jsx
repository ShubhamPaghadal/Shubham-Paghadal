"use client";
import React from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const socialLinks = [
        { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/paghadal-shubham-4b0246380/" },
        { Icon: FaInstagram, href: "https://www.instagram.com/shubham_paghadal_/" },
        { Icon: FaTwitter, href: "#" },
        { Icon: FaGithub, href: "https://github.com/ShubhamPaghadal" }
    ];

    return (
        <footer className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10 sm:py-12 relative z-10 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
                {/* Logo */}
                <div className="flex items-center gap-1 group">
                    <span className="text-brand-green text-4xl sm:text-5xl font-script group-hover:drop-shadow-[0_0_8px_rgba(91,194,130,0.5)] transition-all">S</span>
                    <span className="text-2xl sm:text-3xl font-script text-white pt-2 group-hover:text-gray-300 transition-colors">hubham Paghadal</span>
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-xs sm:text-sm order-3 md:order-2 text-center md:text-left">
                    © {new Date().getFullYear()} Shubham Paghadal. All rights reserved.
                </div>

                {/* Socials */}
                <div className="flex items-center gap-3 sm:gap-4 order-2 md:order-3">
                    {socialLinks.map(({ Icon, href }, idx) => (
                        <a
                            key={idx}
                            href={href}
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-brand-dark hover:bg-brand-green group transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <Icon size={20} className="text-brand-yellow group-hover:text-white transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
