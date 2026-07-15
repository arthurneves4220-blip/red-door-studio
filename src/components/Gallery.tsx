"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const galleryItems = [
  {
    id: 1,
    gradient: "from-rose-100 to-pink-100",
    title: "Coloração Premium",
    category: "Cabelo",
  },
  {
    id: 2,
    gradient: "from-amber-50 to-yellow-50",
    title: "Escova Perfeita",
    category: "Estilo",
  },
  {
    id: 3,
    gradient: "from-purple-100 to-violet-100",
    title: "Maquiagem Artística",
    category: "Maquiagem",
  },
  {
    id: 4,
    gradient: "from-teal-50 to-cyan-50",
    title: "Tratamento Facial",
    category: "Estética",
  },
  {
    id: 5,
    gradient: "from-orange-100 to-amber-100",
    title: "Penteados de Festa",
    category: "Penteado",
  },
  {
    id: 6,
    gradient: "from-blue-50 to-indigo-50",
    title: "Manicure Luxury",
    category: "Unhas",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1
    );
  };

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-medium">
              Galeria
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-elegant-black mb-6">
            Inspiração em{" "}
            <span className="italic text-wine-red">cada imagem</span>
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto font-light">
            Veja os nossos trabalhos e descubra a qualidade que nos
            caracteriza. Cada projeto é uma obra de arte.
          </p>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 cursor-pointer"
              >
                {/* Image Placeholder */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-elegant-black/0 group-hover:bg-elegant-black/40 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl text-white mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-elegant-black/90 flex items-center justify-center p-6"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${galleryItems[selectedIndex].gradient}`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/30" />
                    <h3 className="font-display text-2xl text-elegant-black">
                      {galleryItems[selectedIndex].title}
                    </h3>
                    <span className="text-xs tracking-[0.2em] uppercase text-gold">
                      {galleryItems[selectedIndex].category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
