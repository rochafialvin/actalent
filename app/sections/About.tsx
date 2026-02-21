"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Network, Award } from "lucide-react";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface AboutProps {
  language: "id" | "en";
}

const content = {
  id: {
    title: "Tentang Perusahaan",
    paragraphs: [
      "ACTalent Solutions Partners lahir dari sebuah visi sederhana: membantu perusahaan kecil dan menengah (UMKM) yang belum memiliki tim Human Resources (HR) internal serta memiliki keterbatasan anggaran dalam proses perekrutan. Kami hadir sebagai solusi praktis untuk menyediakan kandidat berkualitas tanpa harus menanggung biaya besar.",
      "Sebagai Penyedia layanan Recruitment solutions, ACTalent Solutions Partners beroperasi melalui jaringan nasional dengan lebih dari 100 recruiter profesional lintas industri, sehingga memungkinkan proses rekrutmen yang efisien, adaptif, dan selaras dengan kebutuhan bisnis klien.",
    ],
    highlights: [
      {
        icon: Building2,
        title: "Untuk UMKM",
        desc: "Solusi HR tanpa tim internal",
      },
      {
        icon: Network,
        title: "Jaringan Nasional",
        desc: "100+ recruiter profesional",
      },
      {
        icon: Award,
        title: "Berkualitas",
        desc: "Proses rekrutmen efisien",
      },
    ],
  },
  en: {
    title: "About Company",
    paragraphs: [
      "ACTalent Solutions Partners was born from a simple vision: to help small and medium enterprises (SMEs) that don't yet have internal Human Resources (HR) teams and have budget limitations in the recruitment process. We come as a practical solution to provide quality candidates without bearing large costs.",
      "As a Recruitment solutions service provider, ACTalent Solutions Partners operates through a national network with more than 100 professional recruiters across industries, enabling efficient, adaptive recruitment processes aligned with client business needs.",
    ],
    highlights: [
      {
        icon: Building2,
        title: "For SMEs",
        desc: "HR solutions without internal teams",
      },
      {
        icon: Network,
        title: "National Network",
        desc: "100+ professional recruiters",
      },
      {
        icon: Award,
        title: "Quality",
        desc: "Efficient recruitment process",
      },
    ],
  },
};

export default function About({ language }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: isMobile || prefersReducedMotion ? 0 : -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: isMobile || prefersReducedMotion ? 0 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlightCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconPopVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#1E88E5] font-semibold text-sm tracking-wider uppercase mb-4 block"
          >
            {language === "id" ? "Tentang Kami" : "About Us"}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mb-6"
          >
            {currentContent.title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-[#1E88E5] mx-auto rounded-full origin-center"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Slides from Left */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {currentContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={isMobile || prefersReducedMotion ? paragraphVariants : leftContentVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Highlights - Slides from Right with Icon Pop */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {currentContent.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={isMobile || prefersReducedMotion ? highlightCardVariants : rightContentVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 30px rgba(30, 136, 229, 0.15)",
                  transition: { duration: 0.2 } 
                }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50/50 transition-colors duration-300 group"
              >
                <motion.div 
                  variants={iconPopVariants}
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1E88E5]/10 flex items-center justify-center group-hover:bg-[#1E88E5] transition-colors duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <highlight.icon className="w-7 h-7 text-[#1E88E5] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </motion.div>
                <div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-xl font-bold text-[#1a3a4a] mb-1"
                  >{highlight.title}</motion.h3>
                  <p className="text-gray-600">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
