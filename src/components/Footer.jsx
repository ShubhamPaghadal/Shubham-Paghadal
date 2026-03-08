"use client";
import React from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub, FaHeart } from 'react-icons/fa';
import header_logo from '../../public/assets/Header_logo.png'
import Link from 'next/link';

export default function Footer() {

    const socialLinks = [
        { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/paghadal-shubham-4b0246380/" },
        { Icon: FaInstagram, href: "https://www.instagram.com/shubham_paghadal_/" },
        { Icon: FaTwitter, href: "#" },
        { Icon: FaGithub, href: "https://github.com/ShubhamPaghadal" }
    ];

    return (
        <footer className="relative z-10 border-t border-white/5">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="flex items-center gap-1.5 group">
                            <img
                                src={header_logo.src}
                                alt="S"
                                className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 group-hover:drop-shadow-[0_0_12px_rgba(91,194,130,0.6)] transition-all duration-500"
                            />
                            <span className="text-xl sm:text-2xl md:text-[30px] logo-font text-white pt-1 group-hover:text-brand-green transition-colors duration-500 whitespace-nowrap">
                                Shubham Paghadal
                            </span>
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-500 text-xs sm:text-sm order-3 md:order-2 text-center md:text-left flex items-center gap-1.5">
                        <span>© {new Date().getFullYear()} Made with</span>
                        <FaHeart className="text-brand-green text-[10px] animate-pulse" />
                        <span>by Shubham Paghadal</span>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-3 sm:gap-4 order-2 md:order-3">
                        {socialLinks.map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-fill w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:border-brand-green/30 text-gray-400 hover:text-white group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(91,194,130,0.3)]"
                            >
                                <Icon size={18} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
