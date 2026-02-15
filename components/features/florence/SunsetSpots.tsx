"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sunset, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const spots = [
    {
        name: "Piazzale Michelangelo",
        description: "O mirante mais deslumbrante de Florença, onde o céu se transforma em uma tela de cores douradas enquanto o sol beija os telhados vermelhos da cidade histórica.",
        image: "/assets/piazzale-michelangelo.jpg",
        highlight: true,
        features: [
            "Vista panorâmica de 360°",
            "Réplica do David de Michelangelo",
            "Melhor horário: 1h antes do pôr do sol"
        ]
    },
    {
        name: "Fiesole",
        description: "Esta joia etrusca milenar, fundada em 1000 a.C., repousa majestosamente nas colinas, oferecendo uma vista mágica de Florença banhada pelos últimos raios solares do dia.",
        image: "/assets/florence-hero.jpg",
        highlight: false,
        features: [
            "Ruínas romanas e etruscas",
            "Teatro antigo ao ar livre",
            "Atmosfera tranquila e histórica"
        ]
    },
    {
        name: "Rooftops Exclusivos",
        description: "Terraços exclusivos que convidam a brindar com um prosecco enquanto a cidade se ilumina aos seus pés e a cúpula do Duomo ganha contornos dourados no horizonte florentino.",
        image: "/assets/tuscan-wine.jpg",
        highlight: false,
        features: [
            "Acesso exclusivo",
            "Aperitivo italiano incluído",
            "Vista privilegiada do Duomo"
        ]
    }
];

export function SunsetSpots() {
    return (
        <section className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-purple-50/30">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-orange-600 mb-4"
                    >
                        <Sunset size={32} />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-medium tracking-widest uppercase text-sm block"
                    >
                        Momentos Mágicos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif text-primary-dark"
                    >
                        Pôr do Sol Inesquecível
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/70 text-lg leading-relaxed"
                    >
                        Florença ganha uma beleza ainda mais especial ao entardecer.
                        Descubra os melhores lugares para testemunhar este espetáculo da natureza.
                    </motion.p>
                </div>

                {/* Spots Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {spots.map((spot, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`group rounded-2xl overflow-hidden transition-all duration-300 ${spot.highlight
                                ? "bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-2xl md:scale-105"
                                : "bg-white border border-gray-200 hover:shadow-xl hover:border-orange-200"
                                }`}
                        >
                            {/* Image Header */}
                            <div className={`relative h-48 overflow-hidden ${spot.highlight
                                ? "bg-gradient-to-br from-orange-500/20 to-pink-500/20"
                                : "bg-gradient-to-br from-orange-50 to-pink-50"
                                }`}>
                                <Image
                                    src={spot.image}
                                    alt={spot.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <h3 className="absolute bottom-4 left-0 right-0 text-2xl font-serif text-center text-white px-4">
                                    {spot.name}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <p className={`mb-6 leading-relaxed ${spot.highlight ? "text-white/90" : "text-foreground/70"
                                    }`}>
                                    {spot.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {spot.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <MapPin
                                                size={16}
                                                className={`flex-shrink-0 mt-1 ${spot.highlight ? "text-white/80" : "text-orange-500"
                                                    }`}
                                            />
                                            <span className={`text-sm ${spot.highlight ? "text-white/90" : "text-foreground/70"
                                                }`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Experience Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
                >
                    <Sparkles className="mx-auto mb-6" size={48} />
                    <h3 className="text-3xl font-serif mb-4">
                        Experiência Completa ao Pôr do Sol
                    </h3>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        Combine a visita a um desses mirantes com um aperitivo italiano tradicional.
                        Brinde com prosecco enquanto Florença se transforma em um quadro vivo de cores douradas e rosadas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="white" asChild className="text-primary-dark hover:text-primary">
                            <a href="#contact">
                                Reservar Experiência ao Pôr do Sol
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
