"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="agendar" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-black via-elegant-black to-wine-red" />

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-wine-red blur-3xl"
      />

      {/* Red Door Silhouette */}
      <div className="absolute right-10 lg:right-20 top-1/2 -translate-y-1/2 opacity-10">
        <div className="w-24 h-36 lg:w-32 lg:h-48 rounded-t-full bg-wine-red relative">
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-gold font-medium">
              Agendamento
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Pronta para{" "}
            <span className="italic text-gold">transformar</span>
            <br />
            o seu visual?
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 font-light">
            Agende agora o seu atendimento e descubra uma experiência de
            beleza única. A nossa equipa está pronta para cuidar de si.
          </p>

          <motion.a
            href="tel:+351927392105"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-white text-elegant-black px-10 py-5 rounded-full text-lg font-medium tracking-wider hover:bg-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Agendar atendimento
            <ArrowRight size={20} />
          </motion.a>

          <p className="mt-8 text-white/50 text-sm">
            Ou ligue para{" "}
            <a
              href="tel:+351927392105"
              className="text-gold hover:text-white transition-colors"
            >
              +351 927 392 105
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
