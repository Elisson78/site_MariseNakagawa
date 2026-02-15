"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Sparkles, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const tours = [
    {
        id: "privativo",
        title: "Tour Privativo Personalizado",
        subtitle: "Experiência Exclusiva",
        description: "Crie sua própria experiência em Florença. Visitamos os monumentos e museus que você escolher, no seu ritmo, com total flexibilidade e atenção personalizada.",
        duration: "3-4 horas",
        price: "300€",
        maxPeople: "Máx. 6 pessoas",
        icon: Sparkles,
        featured: true,
        benefits: [
            "Roteiro 100% personalizado",
            "Horário flexível",
            "Atenção exclusiva",
            "Dicas locais privilegiadas"
        ],
        cta: "Reserve Sua Experiência Exclusiva"
    },
    {
        id: "multi-dias",
        title: "Tours em Vários Dias",
        subtitle: "Explore com Calma",
        description: "Divida o tour em dois ou mais dias de 3-4 horas cada. Deixe tempo livre para explorar, saborear um gelato, fazer compras e degustar um bom vinho.",
        duration: "3-4h por dia",
        price: "Sob consulta",
        maxPeople: "Flexível",
        icon: Calendar,
        featured: false,
        benefits: [
            "Mini roteiro personalizado",
            "Tempo livre entre tours",
            "Nossas melhores dicas",
            "Ritmo confortável"
        ],
        cta: "Criar Meu Roteiro"
    },
    {
        id: "tematico",
        title: "Tours Temáticos",
        subtitle: "Sua Paixão, Sua Experiência",
        description: "Tours focados em temas específicos: Família Medici, seu artista preferido, história do Renascimento... Você será o autor dessa experiência enriquecedora!",
        duration: "3-4 horas",
        price: "Sob consulta",
        maxPeople: "Personalizado",
        icon: Heart,
        featured: false,
        benefits: [
            "Tema à sua escolha",
            "Aprofundamento histórico",
            "Experiência única",
            "Conhecimento especializado"
        ],
        cta: "Personalizar Minha Experiência"
    },
    {
        id: "grupo",
        title: "Tours em Grupo",
        subtitle: "Opção Econômica",
        description: "Compartilhe a experiência com outros viajantes em grupos pequenos (máx. 10 pessoas) e aproveite preços acessíveis sem perder a qualidade.",
        duration: "Varia por tour",
        price: "A partir de 75€",
        maxPeople: "Máx. 10 pessoas",
        icon: Users,
        featured: false,
        benefits: [
            "Tour externo 3h: 75€/pessoa (mín. 4)",
            "Tour Accademia 1h30: 75€/pessoa (mín. 3)",
            "Tour Uffizi 2h: 95€/pessoa (mín. 3)",
            "Ingressos incluídos nos museus"
        ],
        cta: "Participar de um Grupo"
    }
];

const extras = [
    "Aluguel de bicicletas",
    "Patinetes elétricos",
    "Carrinhos elétricos",
    "Charretes tradicionais",
    "Veículo com motorista privado"
];

export function FlorenceTours() {
    return (
        <section id="tours" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-medium tracking-widest uppercase text-sm"
                    >
                        Tours e Experiências
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif text-primary-dark"
                    >
                        Escolha Sua Experiência em Florença
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/70 text-lg"
                    >
                        Tours sempre a pé, mas podemos organizar transporte especial conforme sua necessidade.
                    </motion.p>
                </div>

                {/* Tours Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group rounded-2xl p-8 transition-all duration-300 ${tour.featured
                                    ? "bg-primary text-white shadow-2xl scale-105 md:scale-110 border-2 border-primary"
                                    : "bg-surface border border-gray-200 hover:border-primary/30 hover:shadow-xl"
                                }`}
                        >
                            {/* Badge for Featured */}
                            {tour.featured && (
                                <div className="inline-block mb-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium tracking-wider uppercase">
                                    ⭐ Mais Popular
                                </div>
                            )}

                            {/* Icon & Title */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className={`p-3 rounded-full ${tour.featured ? "bg-white/20" : "bg-primary/10 text-primary-dark"
                                    }`}>
                                    <tour.icon size={28} />
                                </div>
                                <div className="flex-1">
                                    <p className={`text-sm font-medium mb-1 ${tour.featured ? "text-white/80" : "text-accent"
                                        }`}>
                                        {tour.subtitle}
                                    </p>
                                    <h3 className={`text-2xl font-serif ${tour.featured ? "text-white" : "text-primary-dark"
                                        }`}>
                                        {tour.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <p className={`mb-6 leading-relaxed ${tour.featured ? "text-white/90" : "text-foreground/70"
                                }`}>
                                {tour.description}
                            </p>

                            {/* Info */}
                            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-current/10">
                                <div>
                                    <p className={`text-xs uppercase tracking-wider mb-1 ${tour.featured ? "text-white/60" : "text-foreground/50"
                                        }`}>
                                        Duração
                                    </p>
                                    <p className={`font-medium ${tour.featured ? "text-white" : "text-primary-dark"
                                        }`}>
                                        {tour.duration}
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-xs uppercase tracking-wider mb-1 ${tour.featured ? "text-white/60" : "text-foreground/50"
                                        }`}>
                                        Preço
                                    </p>
                                    <p className={`font-bold text-lg ${tour.featured ? "text-white" : "text-primary"
                                        }`}>
                                        {tour.price}
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-xs uppercase tracking-wider mb-1 ${tour.featured ? "text-white/60" : "text-foreground/50"
                                        }`}>
                                        Pessoas
                                    </p>
                                    <p className={`font-medium text-sm ${tour.featured ? "text-white" : "text-primary-dark"
                                        }`}>
                                        {tour.maxPeople}
                                    </p>
                                </div>
                            </div>

                            {/* Benefits */}
                            <ul className="space-y-2 mb-8">
                                {tour.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className={tour.featured ? "text-white" : "text-accent"}>✓</span>
                                        <span className={`text-sm ${tour.featured ? "text-white/90" : "text-foreground/70"
                                            }`}>
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button
                                variant={tour.featured ? "white" : "outline"}
                                className={`w-full group-hover:scale-105 transition-transform ${!tour.featured && "hover:border-primary hover:bg-primary hover:text-white"
                                    }`}
                                asChild
                            >
                                <a href="#contact">
                                    {tour.cta} <ArrowRight size={16} className="ml-2" />
                                </a>
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Extras Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10"
                >
                    <h3 className="text-2xl font-serif text-primary-dark mb-4 text-center">
                        Opções de Transporte Especial
                    </h3>
                    <p className="text-foreground/70 text-center mb-6">
                        Os tours são sempre a pé, mas podemos organizar:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {extras.map((extra, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-primary-dark border border-primary/20 hover:border-primary/40 transition-colors"
                            >
                                {extra}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
