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
  Hand,
  Zap,
  Syringe,
  Activity,
  Stethoscope,
  Dumbbell,
  Leaf,
  Droplet,
  Gem,
  NailPolish,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Scissors,
    title: "Cabeleireiro",
    description: "Cortes, coloração, tratamentos capilares e penteados profissionais.",
    image: "linear-gradient(135deg, #f5f0e8 0%, #e8e0d5 100%)",
  },
  {
    icon: Sparkles,
    title: "Manicure",
    description: "Aplicação de unhas gel, manutenção, extensão, verniz e nail art.",
    image: "linear-gradient(135deg, #f5e8f0 0%, #e8d5e0 100%)",
  },
  {
    icon: Heart,
    title: "Pedicure",
    description: "Tratamento completo com SPA Red Door, parafina e massagem.",
    image: "linear-gradient(135deg, #f0f5e8 0%, #e0e8d5 100%)",
  },
  {
    icon: Droplets,
    title: "Limpeza de Pele",
    description: "Limpeza simples, profunda e tratamento para peles acneicas.",
    image: "linear-gradient(135deg, #e8f0f5 0%, #d5e0e8 100%)",
  },
  {
    icon: Hand,
    title: "Massagens",
    description: "Relaxamento, aromaterapia, bambuterapia e ritual de SPA.",
    image: "linear-gradient(135deg, #f0f0f5 0%, #e0e0e8 100%)",
  },
  {
    icon: Paintbrush,
    title: "Maquiagem",
    description: "Social, noiva, magic makeup e maquiagem profissional.",
    image: "linear-gradient(135deg, #f5e8f0 0%, #e8d5e0 100%)",
  },
  {
    icon: Flower2,
    title: "Pestanas e Sobrancelhas",
    description: "Lifting de pestanas e laminação de sobrancelha.",
    image: "linear-gradient(135deg, #f5f2e8 0%, #e8e5d5 100%)",
  },
  {
    icon: Zap,
    title: "Epilação a Laser",
    description: "IPL, SHR e Diodo para remoção definitiva de pelos.",
    image: "linear-gradient(135deg, #f5e8e8 0%, #e8d5d5 100%)",
  },
  {
    icon: Sun,
    title: "Solário",
    description: "Bronzeamento seguro e uniforme com equipamento moderno.",
    image: "linear-gradient(135deg, #f5f2e8 0%, #e8e5d5 100%)",
  },
  {
    icon: Activity,
    title: "BTL Exilis",
    description: "Radiofrequência + ultrassom para rejuvenescimento e modelagem.",
    image: "linear-gradient(135deg, #e8f0f5 0%, #d5e0e8 100%)",
  },
  {
    icon: Stethoscope,
    title: "Tecarterapia",
    description: "Terapia por radiofrequência para dor e recuperação muscular.",
    image: "linear-gradient(135deg, #f0f5e8 0%, #e0e8d5 100%)",
  },
  {
    icon: Gem,
    title: "Tattoo e Piercing",
    description: "Arte corporal e piercing profissional com equipamento estéril.",
    image: "linear-gradient(135deg, #f5f0f0 0%, #e8e0e0 100%)",
  },
  {
    icon: Leaf,
    title: "Epilação a Cera",
    description: "Remoção de pelos com cera quente e morna profissional.",
    image: "linear-gradient(135deg, #f0f5e8 0%, #e0e8d5 100%)",
  },
  {
    icon: Dumbbell,
    title: "Osteopatia e Acupuntura",
    description: "Tratamentos holísticos para equilíbrio do corpo.",
    image: "linear-gradient(135deg, #e8f0f5 0%, #d5e0e8 100%)",
  },
  {
    icon: Wind,
    title: "Nutrição",
    description: "Aconselhamento nutricional personalizado para saúde e bem-estar.",
    image: "linear-gradient(135deg, #f5f2e8 0%, #e8e5d5 100%)",
  },
  {
    icon: Droplet,
    title: "Pressoterapia",
    description: "Drenagem linfática e circulatória com equipamento profissional.",
    image: "linear-gradient(135deg, #e8f0f5 0%, #d5e0e8 100%)",
  },
  {
    icon: Syringe,
    title: "Hydra Lips",
    description: "Hidratação e preenchimento labial com ácido hialurônico.",
    image: "linear-gradient(135deg, #f5e8f0 0%, #e8d5e0 100%)",
  },
  {
    icon: Sparkles,
    title: "Nutricosmética",
    description: "Suplementação nutricional para beleza de dentro para fora.",
    image: "linear-gradient(135deg, #f0f0f5 0%, #e0e0e8 100%)",
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
          {services.map((service) => (
            <ServiceCard key={`first-${service.title}`} service={service} />
          ))}
          {/* Duplicate set for seamless loop */}
          {services.map((service) => (
            <ServiceCard key={`second-${service.title}`} service={service} />
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

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 cursor-pointer flex-shrink-0 w-64"
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
  );
}
