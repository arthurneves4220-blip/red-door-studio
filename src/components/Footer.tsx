"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
];

export default function Footer() {
  return (
    <footer className="bg-elegant-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#inicio" className="inline-block mb-6">
                <Image
                  src="/logo.jpg"
                  alt="Red Door Estúdio de Beleza"
                  width={120}
                  height={120}
                  className="h-auto rounded-lg"
                />
              </a>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                Abra a porta para a sua melhor versão. Estúdio de beleza e
                bem-estar premium em Mirandela, Portugal.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-6">
                Navegação
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-6">
                Contacto
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">
                    R. Joaquim Teófilo Braga Nº720
                    <br />
                    5370-198 Mirandela
                    <br />
                    Portugal
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  <a
                    href="tel:+351927392105"
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    +351 927 392 105
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div className="text-white/60 text-sm">
                    <p>Seg - Sex: 09:00 - 19:00</p>
                    <p>Sábado: 09:00 - 17:00</p>
                    <p>Domingo: Encerrado</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-6">
                Redes Sociais
              </h3>
              <p className="text-white/60 text-sm mb-6 font-light">
                Siga-nos para ficar a par de todas as novidades e promoções
                exclusivas.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-sm">
                &copy; {new Date().getFullYear()} RED DOOR Studio. Todos os
                direitos reservados.
              </p>
              <p className="text-white/40 text-sm">
                Desenvolvido com{" "}
                <span className="text-gold">&hearts;</span> para a sua
                beleza.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
