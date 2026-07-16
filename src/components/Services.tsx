"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Droplets,
  Wind,
  Paintbrush,
  Heart,
  Sun,
  Flower2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Sparkles,
    title: "Unhas",
    description: "Manicure, pedicure e nail art com acabamento impecável.",
    gradient: "linear-gradient(135deg, #4a1520 0%, #8b2040 50%, #2d0a12 100%)",
  },
  {
    icon: Sun,
    title: "Solário",
    description: "Bronzeamento seguro e uniforme com equipamento moderno.",
    gradient: "linear-gradient(135deg, #5a1a25 0%, #c44040 50%, #3d0f18 100%)",
  },
  {
    icon: Flower2,
    title: "Bem-Estar",
    description: "Momentos de relaxamento e revitalização completa.",
    gradient: "linear-gradient(135deg, #3a1018 0%, #6b2030 50%, #2a0a12 100%)",
  },
  {
    icon: Scissors,
    title: "Cabeleireiro",
    description: "Cortes modernos e clássicos personalizados para o seu estilo.",
    gradient: "linear-gradient(135deg, #4a1520 0%, #8b2040 50%, #2d0a12 100%)",
  },
  {
    icon: Paintbrush,
    title: "Coloração",
    description: "Técnicas avançadas de coloração para um visual renovado.",
    gradient: "linear-gradient(135deg, #5a1a25 0%, #9b3045 50%, #3d0f18 100%)",
  },
  {
    icon: Droplets,
    title: "Tratamentos Capilares",
    description: "Hidratação profunda e reconstrução para cabelos saudáveis.",
    gradient: "linear-gradient(135deg, #3a1018 0%, #7b2535 50%, #2a0a12 100%)",
  },
  {
    icon: Wind,
    title: "Escovas",
    description: "Escovas perfeitas com acabamento profissional.",
    gradient: "linear-gradient(135deg, #4a1520 0%, #8b2040 50%, #2d0a12 100%)",
  },
  {
    icon: Heart,
    title: "Penteados",
    description: "Penteados para ocasiões especiais e no dia a dia.",
    gradient: "linear-gradient(135deg, #5a1a25 0%, #a0354a 50%, #3d0f18 100%)",
  },
  {
    icon: Paintbrush,
    title: "Maquiagem",
    description: "Maquiagem profissional para realçar a sua beleza natural.",
    gradient: "linear-gradient(135deg, #3a1018 0%, #6b2030 50%, #2a0a12 100%)",
  },
  {
    icon: Heart,
    title: "Estética",
    description: "Tratamentos faciais e corporais de última geração.",
    gradient: "linear-gradient(135deg, #4a1520 0%, #8b2040 50%, #2d0a12 100%)",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-white overflow-hidden">
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
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Carousel Track */}
        <div className="carousel-track flex gap-6 px-6">
          {/* First set of services */}
          {services.map((service, index) => (
            <ServiceCard key={`first-${service.title}`} service={service} index={index + 1} />
          ))}
          {/* Duplicate set for seamless loop */}
          {services.map((service, index) => (
            <ServiceCard key={`second-${service.title}`} service={service} index={index + 1} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-track {
          animation: scroll 40s linear infinite;
          width: max-content;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const number = String(index).padStart(2, '0');

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 cursor-pointer flex-shrink-0 w-72 h-[420px]"
    >
      {/* Image Section */}
      <div
        className="absolute inset-0 h-[65%] rounded-t-2xl overflow-hidden"
        style={{ background: service.gradient }}
      >
        {/* Number */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-white/80 text-sm font-medium tracking-wider">{number}</span>
        </div>

        {/* Placeholder Image Effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-32 h-32 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Curved White Section */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-white rounded-b-2xl">
        {/* Curved Top */}
        <div
          className="absolute -top-6 left-0 right-0 h-12 bg-white"
          style={{
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          }}
        />

        {/* Icon Circle */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-light-gray">
          <service.icon size={20} className="text-wine-red" />
        </div>

        {/* Content */}
        <div className="pt-8 px-5 text-center">
          <h3 className="font-display text-xl font-semibold text-wine-red mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-warm-gray font-light leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Divider */}
          <div className="w-8 h-px bg-wine-red/30 mx-auto mb-3" />

          {/* Brand */}
          <div className="text-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-wine-red font-medium">
              RED DOOR
            </span>
            <br />
            <span className="text-[7px] tracking-[0.2em] uppercase text-warm-gray">
              ESTÚDIO DE BELEZA E BEM-ESTAR
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
