"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Maria Santos",
    rating: 5,
    text: "Experiência incrível! A equipa é extremamente profissional e o ambiente é maravilhoso. Saí de lá me sentindo uma nova pessoa.",
    date: "Há 2 semanas",
    avatar: "MS",
  },
  {
    name: "Ana Rodrigues",
    rating: 5,
    text: "Melhor salão de beleza de Mirandela! A coloração ficou perfeita e o atendimento foi impecável do início ao fim.",
    date: "Há 1 mês",
    avatar: "AR",
  },
  {
    name: "Sofia Ferreira",
    rating: 5,
    text: "Adorei cada minuto! Desde a recepção até ao resultado final, tudo foi feito com muito carinho e profissionalismo.",
    date: "Há 3 semanas",
    avatar: "SF",
  },
  {
    name: "Carla Mendes",
    rating: 4,
    text: "Ambiente super acolhedor e profissionais excelentes. Recomendo a todos que procuram qualidade e bom atendimento.",
    date: "Há 2 meses",
    avatar: "CM",
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-medium">
              Avaliações
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-elegant-black mb-6">
            O que dizem os nossos{" "}
            <span className="italic text-wine-red">clientes</span>
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Star
                    size={24}
                    className={
                      i < 4
                        ? "fill-gold text-gold"
                        : "fill-gold/50 text-gold/50"
                    }
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-3xl font-display font-semibold text-elegant-black">
              4,3
            </span>
            <span className="text-sm text-warm-gray">
              321 avaliações Google
            </span>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-off-white rounded-2xl p-6 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 h-full flex flex-col"
              >
                {/* Quote Icon */}
                <Quote
                  size={32}
                  className="text-gold/30 mb-4"
                />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < review.rating
                          ? "fill-gold text-gold"
                          : "fill-light-gray text-light-gray"
                      }
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-warm-gray font-light leading-relaxed flex-1 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-light-gray">
                  <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-wine-red">
                      {review.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-elegant-black">
                      {review.name}
                    </p>
                    <p className="text-xs text-warm-gray">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
