"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Início", href: "/" },
        { name: "Florença", href: "/florenca" },
        { name: "Sobre", href: "#about" },
        { name: "Experiências", href: "#services" },
        { name: "Contato", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                        {/* Using the logo asset */}
                        <Image
                            src="/assets/logo.png"
                            alt="Marise Nakagawa Logo"
                            fill
                            className="object-contain mix-blend-multiply rounded-md"
                        />
                    </div>
                    <span className={cn("text-xl font-medium tracking-wide transition-colors", isScrolled ? "text-primary-dark" : "text-white")}>
                        Marise Nakagawa
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "transition-colors text-sm uppercase tracking-widest hover:text-primary",
                                isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors text-sm uppercase tracking-widest"
                    >
                        Agendar
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-foreground" : "text-white")}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg p-4 flex flex-col gap-4 border-t">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-foreground/80 hover:text-primary py-2 text-center"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
