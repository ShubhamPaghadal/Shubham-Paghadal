"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaBehance, FaLinkedinIn, FaDribbble, FaAndroid, FaHome, FaLayerGroup, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import header_logo from '../../public/assets/Header_logo.png'

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/', icon: FaHome },
        { name: 'Portfolio', path: '/portfolio', icon: FaLayerGroup },
        { name: 'Contact', path: '/contact', icon: FaEnvelope },
    ];

    const socialLinks = [
        { Icon: FaGithub, href: "https://github.com/ShubhamPaghadal" },
        { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/paghadal-shubham-4b0246380/" },
        { Icon: FaBehance, href: "#" },
        { Icon: FaDribbble, href: "#" },
        { Icon: FaAndroid, href: "#" },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-100 px-4 sm:px-8 transition-all duration-300 ${scrolled || isOpen ? 'py-4 bg-background/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'
                }`}>
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    {/* Logo Area */}
                    <div className="shrink-0 z-110">
                        <Link href="/" className="flex items-center gap-1 group" onClick={() => setIsOpen(false)}>
                            <img src={header_logo.src} alt="S" className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 font-script group-hover:drop-shadow-[0_0_8px_rgba(91,194,130,0.5)] transition-all" />
                            <span className="text-lg sm:text-xl md:text-2xl font-script pt-2 group-hover:text-gray-200 transition-colors whitespace-nowrap">shubham Paghadal</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center gap-10">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className="relative group py-2"
                                >
                                    <span className={`text-base font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                        {item.name}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green shadow-[0_0_10px_rgba(91,194,130,0.8)]"
                                        />
                                    )}
                                    {!isActive && (
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop Socials & CTA */}
                    <div className="hidden xl:flex items-center gap-4">
                        <div className="flex items-center gap-2 mr-4">
                            {socialLinks.map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-dark/50 hover:bg-brand-green hover:text-white text-gray-400 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        <Link href="/contact">
                            <button className="bg-brand-yellow text-gray-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-[#ebd04f] transition-colors shadow-[0_0_20px_rgba(252,203,110,0.3)] hover:shadow-[0_0_25px_rgba(252,203,110,0.5)] transform hover:scale-105 duration-200 cursor-pointer">
                                Contact Me
                            </button>
                        </Link>
                    </div>

                    {/* Mobile/Medium Menu Button - Hamburger */}
                    <div className="xl:hidden flex items-center z-110">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 w-10 h-10 flex items-center justify-center text-white focus:outline-none bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group shadow-lg"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 7, backgroundColor: "#5bc282" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                                    className="w-full h-0.5 block rounded-full"
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0, backgroundColor: "#ffffff" }}
                                    className="w-full h-0.5 block rounded-full"
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -7, backgroundColor: "#5bc282" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                                    className="w-full h-0.5 block rounded-full"
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* FULL SCREEN MOBILE OVERLAY (Directly under Fragment to ensure top-level context) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="fixed inset-0 bg-background z-9999 xl:hidden flex flex-col overflow-hidden"
                    >
                        {/* Overlay Header */}
                        <div className="flex items-center justify-between px-4 sm:px-8 py-6 border-b border-white/5">
                            <div className="flex items-center gap-1">
                                <img src={header_logo.src} alt="S" className="w-9 h-9 sm:w-11" />
                                <span className="text-lg sm:text-xl font-script pt-2 text-white">shubham Paghadal</span>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all"
                            >
                                <div className="w-5 h-5 flex flex-col justify-center items-center relative">
                                    <span className="absolute w-full h-0.5 bg-brand-green rotate-45" />
                                    <span className="absolute w-full h-0.5 bg-brand-green -rotate-45" />
                                </div>
                            </button>
                        </div>

                        {/* Overlay Content */}
                        <div className="grow overflow-y-auto px-6 py-12 flex flex-col">
                            <div className="max-w-md mx-auto w-full space-y-12">
                                {/* Nav Items */}
                                <div className="space-y-4">
                                    {navItems.map((item, idx) => {
                                        const isActive = pathname === item.path;
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + idx * 0.1 }}
                                            >
                                                <Link
                                                    href={item.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center justify-center gap-4 py-5 rounded-2xl transition-all text-2xl font-bold ${isActive
                                                        ? 'bg-brand-green/10 text-brand-green border border-brand-green/20'
                                                        : 'text-white/90 hover:bg-white/5 active:scale-95'
                                                        }`}
                                                >
                                                    <Icon className={isActive ? 'text-brand-green' : 'text-gray-500'} />
                                                    <span>{item.name}</span>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Social Links & CTA Section */}
                                <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-10">
                                    <div className="flex items-center gap-4 max-[360px]:flex-col">
                                        {socialLinks.map(({ Icon, href }, idx) => (
                                            <motion.a
                                                key={idx}
                                                href={href}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + idx * 0.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-brand-green transition-all"
                                            >
                                                <Icon size={24} />
                                            </motion.a>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="w-full"
                                    >
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                                            <button className="w-full bg-brand-yellow text-brand-dark font-black px-8 py-5 rounded-2xl text-xl shadow-2xl active:scale-95 transition-all">
                                                Contact Me
                                            </button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
                            <img src={header_logo.src} alt="" className="w-full h-full object-contain scale-150 rotate-12 grayscale" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
