import { Geist, Geist_Mono, Sacramento } from "next/font/google"; // Sacramento looks similar to the signature font
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

const sacramento = Sacramento({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-sacramento',
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
                className={`${geistSans.variable} ${geistMono.variable} ${sacramento.variable} antialiased bg-background text-white font-sans`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
