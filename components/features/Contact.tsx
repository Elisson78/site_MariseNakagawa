"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-primary-dark text-white relative overflow-hidden">
            {/* Abstract Background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-serif">
                        Pronto para sua Imersão?
                    </h2>
                    <p className="text-lg text-white/80">
                        Entre em contato para desenharmos juntos o roteiro perfeito para sua estadia na Itália.
                        Atendimento personalizado e exclusivo.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                        <Button size="lg" variant="default" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none" asChild>
                            <a href="https://wa.me/393347339210" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2" /> Agendar via WhatsApp
                            </a>
                        </Button>

                        <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-transparent" asChild>
                            <a href="mailto:marise@marisenakagawa.com">
                                Enviar E-mail
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
