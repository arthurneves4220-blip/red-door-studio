"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const InstagramSvg = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const posts = [
  { id: 1, gradient: "from-pink-200 to-rose-200", likes: 124, comments: 12 },
  { id: 2, gradient: "from-amber-100 to-orange-100", likes: 89, comments: 8 },
  { id: 3, gradient: "from-purple-200 to-violet-200", likes: 256, comments: 24 },
  { id: 4, gradient: "from-teal-100 to-cyan-100", likes: 178, comments: 15 },
  { id: 5, gradient: "from-rose-100 to-pink-100", likes: 312, comments: 31 },
  { id: 6, gradient: "from-blue-100 to-indigo-100", likes: 145, comments: 11 },
];

export default function Instagram() {
  return (
    <section id="instagram" className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-medium">
              Instagram
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-elegant-black mb-6">
            Siga-nos no{" "}
            <span className="italic text-wine-red">Instagram</span>
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto font-light mb-8">
            Acompanhe o nosso dia a dia, veja os nossos trabalhos e fique
            por dentro das novidades e promoções.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <InstagramSvg size={18} />
            Seguir @reddoor.studio
          </a>
        </ScrollReveal>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 cursor-pointer"
              >
                {/* Image Placeholder */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <InstagramSvg
                      size={32}
                      className="text-white/50 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-elegant-black/0 group-hover:bg-elegant-black/50 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <Heart size={16} className="fill-white" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={16} className="fill-white" />
                      <span className="text-sm font-medium">
                        {post.comments}
                      </span>
                    </div>
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
