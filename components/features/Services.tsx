"use client";

import { motion } from "framer-motion";
import { Landmark, Wine, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
    {
        title: "Florença Clássica & Secreta",
        description: "Mergulhe no berço do Renascimento. Visitas guiadas à Galeria Uffizi, Academia e segredos históricos da cidade.",
        icon: Landmark,
        featured: false,
    },
    {
        title: "Toscana Enogastronômica",
        description: "Chianti, Val D'Orcia e Bolgheri. Degustações exclusivas, almoços em vinícolas e paisagens de tirar o fôlego.",
        icon: Wine,
        featured: true,
    },
    {
        title: "Concierge & Privativos",
        description: "Transporte privativo de luxo, reservas exclusivas e roteiros 100% personalizados para seu conforto.",
        icon: Car,
        featured: false,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-accent font-medium tracking-widest uppercase text-sm">
                        Nossos Roteiros
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary-dark">
                        Experiências Essentia
                    </h2>
                    <p className="text-foreground/70">
                        Descubra a Itália através de itinerários curados com paixão e excelência.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${service.featured
                                    ? "bg-primary text-white border-primary shadow-lg"
                                    : "bg-surface border-gray-100 hover:border-primary/30"
                                }`}
                        >
                            <div className={`p-4 rounded-full w-fit mb-6 ${service.featured ? "bg-white/20" : "bg-primary/10 text-primary-dark"
                                }`}>
                                <service.icon size={32} />
                            </div>

                            <h3 className={`text-2xl font-serif mb-4 ${service.featured ? "text-white" : "text-primary-dark"
                                }`}>
                                {service.title}
                            </h3>

                            <p className={`mb-8 leading-relaxed ${service.featured ? "text-white/90" : "text-foreground/70"
                                }`}>
                                {service.description}
                            </p>

                            <Button
                                variant={service.featured ? "white" : "outline"}
                                className={`w-full group-hover:scale-105 transition-transform ${!service.featured && "hover:border-primary hover:text-primary"
                                    }`}
                                asChild
                            >
                                <a href="#contact">
                                    Planejar Viagem <ArrowRight size={16} className="ml-2" />
                                </a>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
