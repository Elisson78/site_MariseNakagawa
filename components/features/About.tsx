"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/marise-green.jpg"
                                alt="Marise Nakagawa"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <span className="text-accent font-medium tracking-widest uppercase text-sm">
                            Sobre Mim
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary-dark">
                            Marise Nakagawa
                        </h2>
                        <div className="space-y-4 text-foreground/80 leading-relaxed">
                            <p>
                                Bem-vindo ao mundo das experiências sensoriais na Itália. Sou Marise Nakagawa,
                                sua guia especializada em proporcionar momentos inesquecíveis através da
                                <strong> Essentia</strong>.
                            </p>
                            <p>
                                Meu trabalho vai além do turismo convencional. Dedico-me a apresentar a
                                verdadeira alma da Toscana e regiões vizinhas, conectando você à arte,
                                à natureza e à rica enogastronomia local com elegância e profundidade.
                            </p>
                            <p>
                                Seja explorando as galerias de Florença, degustando vinhos em Bolgheri
                                ou descobrindo os segredos do Chianti, cada roteiro é desenhado para
                                despertar seus sentidos e criar memórias eternas.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
