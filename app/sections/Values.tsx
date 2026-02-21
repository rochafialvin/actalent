"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Heart, Shield, Scale, BookOpen, Star, Share2, Users } from "lucide-react";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface ValuesProps {
  language: "id" | "en";
}

const values = {
  id: [
    { letter: "A", title: "Agility", desc: "Responsif dan adaptif terhadap kebutuhan klien dan dinamika pasar tenaga kerja.", icon: Zap },
    { letter: "C", title: "Commitment", desc: "Berorientasi pada hasil dengan komitmen tinggi terhadap kesuksesan klien.", icon: Heart },
    { letter: "T", title: "Trust", desc: "Menjunjung integritas, transparansi, dan kerahasiaan dalam setiap proses rekrutmen.", icon: Shield },
    { letter: "A", title: "Accountability", desc: "Bertanggung jawab penuh atas setiap proses dan hasil rekrutmen yang dijalankan.", icon: Scale },
    { letter: "L", title: "Learning", desc: "Terus mengembangkan pengetahuan dan pendekatan rekrutmen agar tetap relevan dengan kebutuhan pasar.", icon: BookOpen },
    { letter: "E", title: "Excellent", desc: "Menjaga standar kualitas tinggi dalam setiap tahapan layanan rekrutmen.", icon: Star },
    { letter: "N", title: "Networking", desc: "Membangun dan mengelola jaringan profesional untuk menjangkau talenta yang tepat.", icon: Share2 },
    { letter: "T", title: "Teamwork", desc: "Bekerja secara kolaboratif untuk menghasilkan solusi rekrutmen yang optimal.", icon: Users },
  ],
  en: [
    { letter: "A", title: "Agility", desc: "Responsive and adaptive to client needs and labor market dynamics.", icon: Zap },
    { letter: "C", title: "Commitment", desc: "Results-oriented with high commitment to client success.", icon: Heart },
    { letter: "T", title: "Trust", desc: "Upholding integrity, transparency, and confidentiality in every recruitment process.", icon: Shield },
    { letter: "A", title: "Accountability", desc: "Fully responsible for every recruitment process and result carried out.", icon: Scale },
    { letter: "L", title: "Learning", desc: "Continuously developing recruitment knowledge and approaches to remain relevant with market needs.", icon: BookOpen },
    { letter: "E", title: "Excellent", desc: "Maintaining high quality standards in every stage of recruitment service.", icon: Star },
    { letter: "N", title: "Networking", desc: "Building and managing professional networks to reach the right talent.", icon: Share2 },
    { letter: "T", title: "Teamwork", desc: "Working collaboratively to produce optimal recruitment solutions.", icon: Users },
  ],
};

const content = {
  id: {
    title: "Nilai-Nilai Perusahaan",
    subtitle: "ACT LENT",
    description: "Nilai-nilai yang menjadi fondasi dalam setiap tindakan dan keputusan kami.",
  },
  en: {
    title: "Company Values",
    subtitle: "ACT LENT",
    description: "Values that form the foundation of every action and decision we make.",
  },
};

export default function Values({ language }: ValuesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentValues = values[language];
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Calculate diagonal wave delay
  const getDiagonalDelay = (index: number) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    return (row + col) * 0.08;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion || isMobile ? 0.05 : 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile || prefersReducedMotion ? 20 : 40,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const letterBadgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 0.2,
      },
    },
  };

  return (
    <section id="values" className="py-24 bg-white" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#1E88E5] font-semibold text-sm tracking-wider uppercase mb-4 block"
          >
            {currentContent.subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mb-4"
          >
            {currentContent.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {currentContent.description}
          </motion.p>
        </motion.div>

        {/* Values Grid - Diagonal Wave Stagger */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {currentValues.map((value, index) => (
            <motion.div
              key={value.letter}
              variants={cardVariants}
              custom={getDiagonalDelay(index)}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(30, 136, 229, 0.15)",
                transition: { duration: 0.3 } 
              }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl bg-gray-50 hover:bg-[#1a3a4a] transition-all duration-500 h-full">
                {/* Letter Badge with Pop Animation */}
                <motion.div 
                  variants={letterBadgeVariants}
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#1E88E5] flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  {value.letter}
                </motion.div>

                {/* Icon with Scale Animation */}
                <motion.div 
                  variants={iconVariants}
                  className="w-12 h-12 rounded-xl bg-[#1E88E5]/10 group-hover:bg-white/10 flex items-center justify-center mb-4 transition-colors duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-6 h-6 text-[#1E88E5] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1a3a4a] group-hover:text-white mb-2 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
