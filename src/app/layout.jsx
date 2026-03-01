import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const greatVibes = Great_Vibes({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-great-vibes',
});

export const metadata = {
    title: "Shubham Paghadal - Portfolio",
    description: "Senior Designer & Developer",
    icons: {
        icon: "/assets/Header_logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased bg-background text-white font-sans`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
