"use client";
import React from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import header_logo from '../../public/assets/Header_logo.png'
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {

    const [isOpen, setIsOpen] = useState(false);

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
                <div className="shrink-0 z-110">
                    <Link href="/" className="flex items-center gap-1 group" onClick={() => setIsOpen(false)}>
                        <img src={header_logo.src} alt="S" className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 font-script group-hover:drop-shadow-[0_0_8px_rgba(91,194,130,0.5)] transition-all" />
                        <span className="text-lg sm:text-xl md:text-2xl font-script pt-2 group-hover:text-gray-200 transition-colors whitespace-nowrap">shubham Paghadal</span>
                    </Link>
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
