import { Geist, Geist_Mono, Poppins, Sacramento } from "next/font/google"; // Sacramento looks similar to the signature font
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

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

const sacramento = Sacramento({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-sacramento',
});

export const metadata = {
    title: "Shubham Paghadal - Portfolio",
    description: "Senior Designer & Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${sacramento.variable} antialiased bg-[#1D1D20] text-white font-sans`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
