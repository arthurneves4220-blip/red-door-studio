"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Location() {
  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-medium">
              Localização
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-elegant-black mb-6">
            Visite-nos no{" "}
            <span className="italic text-wine-red">Red Door</span>
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto font-light">
            Estamos convenientemente localizados no centro de Mirandela.
            Venha conhecer o nosso espaço e descobrir uma experiência de beleza única.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Map */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-7.2620%2C41.4850%2C-7.2510%2C41.4920&layer=mapnik&marker=41.4885%2C-7.2565"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização Red Door"
              />
              {/* Overlay for styling */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>
          </ScrollReveal>

          {/* Info Cards */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Address Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-off-white rounded-2xl p-6 shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-wine-red" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-elegant-black mb-2">
                      Morada
                    </h3>
                    <p className="text-warm-gray font-light leading-relaxed">
                      R. Joaquim Teófilo Braga Nº720
                      <br />
                      5370-198 Mirandela
                      <br />
                      Portugal
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-off-white rounded-2xl p-6 shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-wine-red" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-elegant-black mb-2">
                      Telefone
                    </h3>
                    <a
                      href="tel:+351927392105"
                      className="text-warm-gray font-light hover:text-wine-red transition-colors"
                    >
                      +351 927 392 105
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Hours Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-off-white rounded-2xl p-6 shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-wine-red" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-elegant-black mb-2">
                      Horário
                    </h3>
                    <div className="text-warm-gray font-light space-y-1">
                      <p>Seg - Sex: 09:00 - 19:00</p>
                      <p>Sábado: 09:00 - 17:00</p>
                      <p>Domingo: Encerrado</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Directions Button */}
              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=Red+Door+Estudio+de+Beleza+Mirandela+Portugal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full bg-wine-red text-white px-8 py-4 rounded-full font-medium tracking-wider hover:bg-wine-red/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Navigation size={20} />
                Como Chegar
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
