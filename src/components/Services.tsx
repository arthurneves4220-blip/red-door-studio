"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Palette,
  Droplets,
  Wind,
  Sparkles,
  Paintbrush,
  Heart,
  Gem,
  Sun,
  Flower2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Scissors,
    title: "Cabeleireiro",
    description: "Cortes modernos e clássicos personalizados para o seu estilo.",
    image: "linear-gradient(135deg, #f5f0e8 0%, #e8e0d5 100%)",
  },
  {
    icon: Palette,
    title: "Coloração",
    description: "Técnicas avançadas de coloração para um visual renovado.",
    image: "linear-gradient(135deg, #f0e8f5 0%, #e0d5e8 100%)",
  },
  {
    icon: Droplets,
    title: "Tratamentos Capilares",
    description: "Hidratação profunda e reconstrução para cabelos saudáveis.",
    image: "linear-gradient(135deg, #e8f0f5 0%, #d5e0e8 100%)",
  },
  {
    icon: Wind,
    title: "Escovas",
    description: "Escovas perfeitas com acabamento profissional.",
    image: "linear-gradient(135deg, #f5f2e8 0%, #e8e5d5 100%)",
  },
  {
    icon: Sparkles,
    title: "Penteados",
    description: "Penteados para ocasiões especiais e no dia a dia.",
    image: "linear-gradient(135deg, #f5e8e8 0%, #e8d5d5 100%)",
  },
  {
    icon: Paintbrush,
    title: "Maquiagem",
    description: "Maquiagem profissional para realçar a sua beleza natural.",
    image: "linear-gradient(135deg, #f5e8f0 0%, #e8d5e0 100%)",
  },
  {
    icon: Heart,
    title: "Estética",
    description: "Tratamentos faciais e corporais de última geração.",
    image: "linear-gradient(135deg, #f0f5e8 0%, #e0e8d5 100%)",
  },
  {
    icon: Gem,
    title: "Unhas",
    description: "Manicure, pedicure e nail art com acabamento impecável.",
    image: "linear-gradient(135deg, #f5f0f0 0%, #e8e0e0 100%)",
  },
  {
    icon: Sun,
    title: "Solário",
    description: "Bronzeamento seguro e uniforme com equipamento moderno.",
    image: "linear-gradient(135deg, #f5f2e8 0%, #e8e5d5 100%)",
  },
  {
    icon: Flower2,
    title: "Bem-Estar",
    description: "Momentos de relaxamento e revitalização completa.",
    image: "linear-gradient(135deg, #f0f0f5 0%, #e0e0e8 100%)",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-medium">
              Os Nossos Serviços
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-elegant-black mb-6">
            Excelência em{" "}
            <span className="italic text-wine-red">cada detalhe</span>
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto font-light">
            Oferecemos uma gama completa de serviços premium, todos realizados
            com produtos profissionais e técnicas de última geração.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 cursor-pointer"
              >
                {/* Image Placeholder */}
                <div
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{ background: service.image }}
                >
                  <service.icon
                    size={40}
                    className="text-elegant-black/20 group-hover:text-wine-red transition-colors duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-wine-red/0 group-hover:bg-wine-red/5 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-elegant-black mb-2 group-hover:text-wine-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-warm-gray font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Gold Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
