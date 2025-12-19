"use client";

import { motion } from "framer-motion";
import { Check, Clock, Car, Map, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

const plans = [
    {
        name: "Essentia Half-Day",
        duration: "4 Horas",
        description: "Ideal para uma imersão focada em uma cidade ou atração específica.",
        features: [
            "Guia Privativo Exclusivo",
            "Roteiro Personalizado",
            "Walking Tour em Florença ou Siena",
            "Suporte via WhatsApp",
        ],
        highlight: false,
    },
    {
        name: "Essentia Full Day",
        duration: "8 Horas",
        description: "A experiência completa para explorar a Toscana sem pressa.",
        features: [
            "Tudo do plano Half-Day",
            "Acompanhamento em Almoço",
            "Visita a Vinícolas (Chianti/Montalcino)",
            "Gestão de Reservas",
        ],
        highlight: true,
    },
    {
        name: "Veículo Privativo",
        duration: "Opcional",
        description: "Conforto e segurança para seus deslocamentos pela região.",
        features: [
            "Mercedes Classe E ou V-Class",
            "Motorista Profissional (NCC)",
            "Pick-up no Hotel",
            "Água e Wi-Fi a bordo",
        ],
        highlight: false,
    },
];

export function Plans() {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-accent font-medium tracking-widest uppercase text-sm">
                        Investimento
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary-dark">
                        Planos & Tarifas
                    </h2>
                    <p className="text-foreground/70">
                        Escolha a modalidade que melhor se adapta ao seu ritmo de viagem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 border hover:shadow-2xl transition-all duration-500 flex flex-col ${plan.highlight
                                ? "bg-primary text-white border-primary ring-4 ring-primary/20"
                                : "bg-white text-foreground border-primary/10 hover:border-primary/50"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs uppercase tracking-widest font-medium">
                                    Mais Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                                <div className="flex items-center gap-2 text-sm opacity-80">
                                    <Clock size={16} />
                                    <span>{plan.duration}</span>
                                </div>
                            </div>

                            <p className={`mb-8 ${plan.highlight ? "text-white/80" : "text-foreground/70"}`}>
                                {plan.description}
                            </p>

                            <div className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? "bg-accent" : "bg-primary/20 text-primary-dark"}`}>
                                            <Check size={12} />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant={plan.highlight ? "white" : "outline"}
                                className={`w-full ${!plan.highlight && "hover:bg-primary hover:text-white border-primary/30"}`}
                                asChild
                            >
                                <a href="#contact">Consultar Valores</a>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
