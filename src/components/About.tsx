"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const features = [
  "Atendimento personalizado",
  "Produtos profissionais",
  "Equipe especializada",
  "Ambiente acolhedor",
  "Equipamentos modernos",
];

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury">
                <Image
                  src="/about.jpg"
                  alt="Red Door Estúdio de Beleza"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gold/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-wine-red/10 -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="divider-gold" />
                <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-medium">
                  Sobre Nós
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-light text-elegant-black mb-6 leading-tight">
                Uma história de{" "}
                <span className="italic text-wine-red">paixão</span> e{" "}
                <span className="italic text-gold">dedicação</span>
              </h2>

              <div className="space-y-5 text-warm-gray font-light leading-relaxed">
                <p>
                  O RED DOOR nasceu da vontade de criar um espaço onde a
                  beleza e o bem-estar se encontram em perfeita harmonia.
                  Desde a nossa inauguração, temos dedicado nos a oferecer
                  uma experiência única e personalizada a cada cliente.
                </p>
                <p>
                  A nossa equipa é formada por profissionais altamente
                  qualificados e apaixonados pelo que fazem. Cada
                  tratamento é realizado com atenção aos detalhes e com
                  os melhores produtos do mercado internacional.
                </p>
                <p>
                  No RED DOOR, não somos apenas um salão de beleza — somos
                  um refúgio onde a sua melhor versão ganha forma.
                </p>
              </div>

              {/* Features */}
              <div className="mt-10 space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-gold" />
                    </div>
                    <span className="text-elegant-black font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a href="#agendar" className="btn-primary">
                  Conheça-nos melhor
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
