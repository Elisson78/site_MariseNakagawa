import Link from "next/link";
import { Instagram, Smartphone, Mail, AtSign } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary/10 py-12 border-t border-primary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-primary-dark">Marise Nakagawa</h3>
                        <p className="text-foreground/70 max-w-xs">
                            Viver experiências com imersões sensoriais inesquecíveis na arte, etiqueta, natureza, enogastronomia e história!
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-medium text-foreground uppercase tracking-widest text-sm">Contato</h4>
                        <div className="space-y-2 text-foreground/70">
                            <a href="https://wa.me/393347339210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Smartphone size={18} />
                                <span>+39 334 733 9210</span>
                            </a>
                            <a href="mailto:marise@marisenakagawa" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Mail size={18} />
                                <span>marise@marisenakagawa</span>
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="font-medium text-foreground uppercase tracking-widest text-sm">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/marisenakagawa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full text-pink-600 hover:scale-110 transition-transform shadow-sm"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://www.threads.com/@marisenakagawa?xmt=AQF0tRkbuWJgS1MnYo7WB5gAehNGUZiPG0xpt7UR0vnNPfw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform shadow-sm"
                                aria-label="Threads"
                            >
                                <AtSign size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary/20 text-center text-sm text-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Marise Nakagawa. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
