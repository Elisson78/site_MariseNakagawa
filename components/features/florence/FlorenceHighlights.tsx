"use client";

import { motion } from "framer-motion";
import { Landmark, Palette, Church, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

const highlights = [
    {
        title: "Patrimônio Histórico",
        description: "Explore o Duomo com a impressionante cúpula de Brunelleschi, a deslumbrante Ponte Vecchio, o majestoso Palazzo Vecchio e o histórico Bargello.",
        icon: Landmark,
        items: [
            { name: "Duomo de Florença", detail: "Cúpula de Brunelleschi" },
            { name: "Ponte Vecchio", detail: "Ponte medieval sobre o Arno" },
            { name: "Palazzo Vecchio", detail: "Antiga sede do governo" },
            { name: "Bargello", detail: "Museu de esculturas renascentistas" }
        ]
    },
    {
        title: "Museus Incríveis",
        description: "Contemple as obras-primas do Renascimento na Galleria degli Uffizi e admire o David de Michelangelo na Galleria dell'Accademia.",
        icon: Palette,
        items: [
            { name: "Galleria degli Uffizi", detail: "Nascimento de Vênus, A Primavera" },
            { name: "Galleria dell'Accademia", detail: "David de Michelangelo" },
            { name: "Obras de Leonardo", detail: "Anunciação e desenhos inventivos" },
            { name: "Mestres Renascentistas", detail: "Rafael, Caravaggio, Giotto" }
        ]
    },
    {
        title: "Igrejas-Museu",
        description: "Descubra verdadeiros tesouros artísticos em igrejas históricas com obras de Michelangelo, Giotto, Brunelleschi e outros mestres.",
        icon: Church,
        items: [
            { name: "Basilica di Santa Croce", detail: "Panteão das Glórias Italianas" },
            { name: "Santa Maria Novella", detail: "Afrescos de Masaccio e Ghirlandaio" },
            { name: "San Lorenzo", detail: "Cappelle Medicee com Michelangelo" },
            { name: "San Miniato al Monte", detail: "Vista panorâmica espetacular" }
        ]
    },
    {
        title: "Gastronomia Toscana",
        description: "Saboreie a autêntica cozinha toscana: Bistecca alla Fiorentina, vinhos premiados e o melhor azeite da Itália.",
        icon: UtensilsCrossed,
        items: [
            { name: "Bistecca alla Fiorentina", detail: "Bife grelhado tradicional" },
            { name: "Vinhos da Toscana", detail: "Chianti, Brunello, Vino Nobile" },
            { name: "Azeite Toscano", detail: "Sabor frutado e picante" },
            { name: "Pappa al Pomodoro", detail: "Sopa tradicional toscana" }
        ]
    }
];

export function FlorenceHighlights() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-surface">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-medium tracking-widest uppercase text-sm"
                    >
                        Florença - O Berço do Renascimento
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif text-primary-dark"
                    >
                        Uma Cidade de Tesouros Inestimáveis
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/70 text-lg leading-relaxed"
                    >
                        A influente <strong>Família Medici</strong>, dinastia de banqueiros e estadistas,
                        governou Florença durante o Renascimento. Foram notáveis mecenas das artes,
                        patrocinando gênios como <strong>Michelangelo, Leonardo da Vinci e Botticelli</strong>.
                        Seu legado inclui suntuosos palácios, igrejas e inúmeras obras de arte que ainda hoje adornam a cidade.
                    </motion.p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-4 rounded-full bg-primary/10 text-primary-dark group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <highlight.icon size={32} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-serif text-primary-dark mb-2">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </div>
                            </div>

                            {/* Items List */}
                            <ul className="space-y-3">
                                {highlight.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                        <div>
                                            <span className="font-medium text-primary-dark">{item.name}</span>
                                            <span className="text-foreground/60 text-sm"> — {item.detail}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
