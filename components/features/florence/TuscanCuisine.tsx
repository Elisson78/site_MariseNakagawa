"use client";

import { motion } from "framer-motion";
import { Wine, UtensilsCrossed, Droplet, Sandwich } from "lucide-react";
import { Button } from "@/components/ui/Button";

const dishes = [
    {
        name: "Bistecca alla Fiorentina",
        description: "Um grande bife de carne grelhado no fogo, servido quase cru com azeite e sal marinho. É o prato mais famoso de Florença.",
        icon: UtensilsCrossed,
        highlight: true
    },
    {
        name: "Pappa al Pomodoro",
        description: "Uma sopa feita com tomates, pão do dia anterior, alho, azeite e manjericão. Um prato simples e gostoso que todos na Toscana adoram.",
        icon: UtensilsCrossed,
        highlight: false
    },
    {
        name: "Sanduíches Toscanos",
        description: "Prove os panini da região: lampredotto (estômago de vaca), trippa (dobradinha com molho de tomate) e porchetta (porco assado). Populares entre os moradores.",
        icon: Sandwich,
        highlight: false
    }
];

const wines = [
    {
        name: "Chianti Classico",
        region: "Colinas entre Florença e Siena",
        description: "O vinho mais icônico da Toscana"
    },
    {
        name: "Brunello di Montalcino",
        region: "Montalcino",
        description: "Vinho robusto e elegante"
    },
    {
        name: "Vino Nobile di Montepulciano",
        region: "Montepulciano",
        description: "Vinho nobre com história centenária"
    }
];

export function TuscanCuisine() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-medium tracking-widest uppercase text-sm"
                    >
                        Gastronomia Toscana
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif text-primary-dark"
                    >
                        Sabores Autênticos da Toscana
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/70 text-lg"
                    >
                        A cozinha da Toscana é simples e saborosa. Descubra os pratos e vinhos que fazem desta região um paraíso gastronômico.
                    </motion.p>
                </div>

                {/* Dishes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {dishes.map((dish, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`rounded-2xl p-8 transition-all duration-300 ${dish.highlight
                                    ? "bg-primary text-white shadow-xl scale-105"
                                    : "bg-surface border border-gray-200 hover:shadow-lg"
                                }`}
                        >
                            <div className={`p-4 rounded-full w-fit mb-6 ${dish.highlight ? "bg-white/20" : "bg-primary/10 text-primary-dark"
                                }`}>
                                <dish.icon size={32} />
                            </div>
                            <h3 className={`text-xl font-serif mb-3 ${dish.highlight ? "text-white" : "text-primary-dark"
                                }`}>
                                {dish.name}
                            </h3>
                            <p className={`leading-relaxed ${dish.highlight ? "text-white/90" : "text-foreground/70"
                                }`}>
                                {dish.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Wines Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-purple-50 to-red-50 rounded-3xl p-8 md:p-12 mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <Wine className="text-primary" size={36} />
                        <h3 className="text-3xl font-serif text-primary-dark">
                            Vinhos da Toscana
                        </h3>
                    </div>
                    <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
                        A Toscana é mundialmente famosa por seus vinhos excepcionais.
                        Combinam perfeitamente com a gastronomia local.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {wines.map((wine, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                                <h4 className="font-serif text-lg text-primary-dark mb-2">
                                    {wine.name}
                                </h4>
                                <p className="text-sm text-accent mb-2">
                                    📍 {wine.region}
                                </p>
                                <p className="text-foreground/60 text-sm">
                                    {wine.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Olive Oil Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-3xl p-8 md:p-12 border border-green-100"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex p-4 rounded-full bg-white shadow-md mb-6">
                            <Droplet className="text-green-600" size={36} />
                        </div>
                        <h3 className="text-3xl font-serif text-primary-dark mb-4">
                            Azeite Toscano
                        </h3>
                        <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                            O azeite toscano é muito bom e famoso no mundo todo.
                            Tem <strong>cor verde forte</strong> e <strong>sabor frutado com um toque picante</strong>.
                            Vale a pena visitar os olivais e provar diferentes tipos de azeite da região.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
                            <span className="text-2xl">🫒</span>
                            <span className="text-foreground/70 font-medium">
                                Degustação em olivais tradicionais
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-foreground/70 mb-6 text-lg">
                        Quer explorar a gastronomia toscana com um tour personalizado?
                    </p>
                    <Button size="lg" variant="primary" asChild>
                        <a href="#contact">
                            Criar Tour Gastronômico
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
