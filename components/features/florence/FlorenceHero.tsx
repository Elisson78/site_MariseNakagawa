"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function FlorenceHero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/florence-hero.jpg"
                    alt="Vista panorâmica de Florença com o Duomo"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
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
                        O Berço do Renascimento
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
                        Descubra <br />
                        <span className="italic font-normal">Florença</span> Comigo
                    </h1>

                    <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                        Contemple obras-primas de Michelangelo, Da Vinci e Botticelli.
                        Explore palácios renascentistas e saboreie a autêntica gastronomia toscana
                        em experiências personalizadas e inesquecíveis.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button size="lg" variant="white" asChild className="text-primary-dark hover:text-primary">
                            <a href="#tours">Ver Tours Exclusivos</a>
                        </Button>
                        <Button size="lg" variant="white" asChild className="bg-white/90 text-primary-dark hover:bg-white">
                            <a href="#contact">Criar Roteiro Personalizado</a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
