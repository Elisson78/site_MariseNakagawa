"use client";

import { motion } from "framer-motion";
import { Ticket, Clock, Building2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const benefits = [
    {
        icon: Clock,
        title: "72 Horas de Acesso",
        description: "Válido por 3 dias completos"
    },
    {
        icon: Ticket,
        title: "Fura-Fila Garantido",
        description: "Acesso prioritário em todas as atrações"
    },
    {
        icon: Building2,
        title: "+70 Atrações",
        description: "Museus, palácios e monumentos incluídos"
    }
];

const includedAttractions = [
    "Galleria degli Uffizi",
    "Galleria dell'Accademia (David)",
    "Palazzo Vecchio",
    "Cappelle Medicee",
    "Museo Bargello",
    "Santa Croce",
    "Palazzo Pitti",
    "Giardino di Boboli"
];

export function FirenzeCardInfo() {
    return (
        <section className="py-24 bg-gradient-to-b from-surface to-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-12 text-white text-center">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Ticket size={48} className="mx-auto mb-4" />
                                <h2 className="text-3xl md:text-4xl font-serif mb-3">
                                    Firenzecard
                                </h2>
                                <p className="text-xl font-light text-white/90">
                                    Seu Passaporte para Florença
                                </p>
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            <p className="text-lg text-foreground/80 mb-8 text-center leading-relaxed">
                                Florença possui uma riqueza impressionante de monumentos, museus e igrejas históricas.
                                Para aproveitar ao máximo sua visita, o <strong>Firenzecard</strong> é uma excelente opção.
                            </p>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10"
                                    >
                                        <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                                            <benefit.icon size={24} />
                                        </div>
                                        <h3 className="font-serif text-lg text-primary-dark mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-foreground/60">
                                            {benefit.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Included Attractions */}
                            <div className="bg-surface rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-serif text-primary-dark mb-6 text-center">
                                    Principais Atrações Incluídas
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {includedAttractions.map((attraction, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                            <span className="text-foreground/80">{attraction}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Important Alert */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8"
                            >
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-medium text-amber-900 mb-1">
                                            Atenção Importante
                                        </p>
                                        <p className="text-amber-800 text-sm">
                                            O <strong>complexo da catedral</strong> (Duomo, Campanile, Batistério)
                                            <strong> não está incluído</strong> no Firenzecard.
                                            É necessário comprar ingresso separado com "fura-fila".
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* CTA */}
                            <div className="text-center">
                                <p className="text-foreground/70 mb-4">
                                    Ideal para quem deseja explorar Florença com tranquilidade e economia.
                                </p>
                                <Button size="lg" variant="primary" asChild className="group">
                                    <a href="#contact">
                                        Incluir no Meu Roteiro
                                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
