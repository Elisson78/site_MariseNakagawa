"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg.png"
                    alt="Paisagem Toscana"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="inline-block text-sm md:text-base font-medium tracking-[0.2em] uppercase bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                        Guia Turístico na Itália
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
                        Viver experiências com <br />
                        <span className="italic font-normal">imersões sensoriais</span>
                    </h1>

                    <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto dark:text-gray-300">
                        Arte, Etiqueta, Natureza, Enogastronomia e História.
                    </p>

                    <div className="pt-8">
                        <Button size="lg" variant="white" asChild className="text-primary-dark hover:text-primary">
                            <a href="#services">Descobrir Roteiros</a>
                        </Button>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
