"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaBehance, FaLinkedinIn, FaDribbble, FaAndroid } from 'react-icons/fa';
import { motion } from 'framer-motion';
import header_logo from '../../public/assets/Header_logo.png'

export default function Navbar() {
    const pathname = usePathname();
    // console.log('header_logo*******', header_logo)
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-4 sm:px-8 bg-transparent">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center gap-1 group">
                        <img src={header_logo.src} alt="S" className="w-12 h-12 font-script group-hover:drop-shadow-[0_0_8px_rgba(91,194,130,0.5)] transition-all" />
                        <span className="text-2xl font-script pt-2 group-hover:text-gray-200 transition-colors">shubham Paghadal</span>
                    </Link>
                </div>

                {/* Center Navigation */}
                <div className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="relative group py-2"
                            >
                                <span className={`text-base font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                    }`}>
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

                {/* Right Side: Socials & CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3 mr-4">
                        {[FaGithub, FaBehance, FaLinkedinIn, FaDribbble, FaAndroid].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-dark/50 hover:bg-brand-green hover:text-white text-gray-400 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>

                    <button className="bg-brand-yellow text-gray-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-[#ebd04f] transition-colors shadow-[0_0_20px_rgba(252,203,110,0.3)] hover:shadow-[0_0_25px_rgba(252,203,110,0.5)] transform hover:scale-105 duration-200">
                        Contact Me
                    </button>
                </div>

                {/* Mobile Menu Button (Hamburger placeholder) */}
                <div className="md:hidden text-white">
                    <button className="p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
