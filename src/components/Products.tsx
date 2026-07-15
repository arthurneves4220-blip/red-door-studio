"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "Soothing Aloe",
    category: "Cuidados com a Pele",
    price: "€34,90",
    gradient: "from-green-50 to-emerald-50",
  },
  {
    name: "HEMP Nation Original",
    category: "Bronzeamento",
    price: "€42,50",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    name: "Extreme Length",
    category: "Cabelo — Redken",
    price: "€28,90",
    gradient: "from-rose-50 to-pink-50",
  },
  {
    name: "Hair Cleansing Cream",
    category: "Limpeza Capilar",
    price: "€24,50",
    gradient: "from-blue-50 to-sky-50",
  },
  {
    name: "SteamPod",
    category: "Alisamento",
    price: "€189,90",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    name: "SteamPod Creme",
    category: "Alisamento — Creme",
    price: "€38,50",
    gradient: "from-indigo-50 to-blue-50",
  },
  {
    name: "Siren Waves",
    category: "Ondas & Textura",
    price: "€32,90",
    gradient: "from-cyan-50 to-teal-50",
  },
  {
    name: "Bouncy & Tender",
    category: "Volume & Maciez",
    price: "€29,90",
    gradient: "from-orange-50 to-amber-50",
  },
  {
    name: "Fitoterapia",
    category: "Tratamento Natural",
    price: "€45,90",
    gradient: "from-lime-50 to-green-50",
  },
  {
    name: "Color Crush",
    category: "Cor & Brilho",
    price: "€36,50",
    gradient: "from-fuchsia-50 to-pink-50",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-medium">
              Produtos Premium
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-elegant-black mb-6">
            Loja{" "}
            <span className="italic text-wine-red">exclusiva</span>
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto font-light">
            Selecione entre os melhores produtos profissionais do mercado
            internacional, disponíveis exclusivamente no RED DOOR.
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 cursor-pointer"
              >
                {/* Product Image */}
                <div
                  className={`aspect-square flex items-center justify-center bg-gradient-to-br ${product.gradient} relative overflow-hidden`}
                >
                  <div className="w-20 h-28 rounded-lg bg-white/50 shadow-sm group-hover:scale-110 transition-transform duration-500" />
                  {/* Quick Add Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-elegant-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ShoppingBag size={16} />
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">
                    {product.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-elegant-black mt-1 mb-2 group-hover:text-wine-red transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-elegant-black">
                      {product.price}
                    </span>
                    <button className="text-xs tracking-wider uppercase text-warm-gray hover:text-wine-red transition-colors duration-300">
                      Ver produto
                    </button>
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
