"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, ShoppingCart, Cpu, Landmark, Truck, Megaphone, Heart, GraduationCap } from "lucide-react";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface IndustriesProps {
  language: "id" | "en";
}

const industries = {
  id: [
    { icon: Factory, name: "Manufaktur & Industri" },
    { icon: ShoppingCart, name: "Retail & FMCG" },
    { icon: Cpu, name: "Teknologi & Startup" },
    { icon: Landmark, name: "Perbankan & Keuangan" },
    { icon: Truck, name: "Logistik & Transportasi" },
    { icon: Megaphone, name: "Marketing, Advertising & Communication" },
    { icon: Heart, name: "Kesehatan & Farmasi" },
    { icon: GraduationCap, name: "Edukasi & Layanan Profesional" },
  ],
  en: [
    { icon: Factory, name: "Manufacturing & Industry" },
    { icon: ShoppingCart, name: "Retail & FMCG" },
    { icon: Cpu, name: "Technology & Startup" },
    { icon: Landmark, name: "Banking & Finance" },
    { icon: Truck, name: "Logistics & Transportation" },
    { icon: Megaphone, name: "Marketing, Advertising & Communication" },
    { icon: Heart, name: "Health & Pharmacy" },
    { icon: GraduationCap, name: "Education & Professional Services" },
  ],
};

const content = {
  id: {
    title: "Industri yang Kami Layani",
    subtitle: "Jangkauan Layanan",
    intro: "Kami melayani berbagai industri di tingkat nasional dan internasional, antara lain:",
    closing: "Kami telah membantu perusahaan klien dari berbagai sektor membangun tim yang solid, kompeten, dan siap berkembang.",
  },
  en: {
    title: "Industries We Serve",
    subtitle: "Service Coverage",
    intro: "We serve various industries at national and international levels, including:",
    closing: "We have helped client companies from various sectors build solid, competent, and ready-to-grow teams.",
  },
};

export default function Industries({ language }: IndustriesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentIndustries = industries[language];
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Masonry wave pattern (not linear)
  const getMasonryDelay = (index: number) => {
    const pattern = [0, 0.08, 0.04, 0.12, 0.02, 0.1, 0.06, 0.14];
    return pattern[index];
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: isMobile || prefersReducedMotion ? 0.9 : 0.8,
      y: isMobile || prefersReducedMotion ? 20 : 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: getMasonryDelay(i),
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Icon rotation on appear
  const iconVariants = {
    hidden: { rotate: -360, scale: 0 },
    visible: (i: number) => ({
      rotate: 0,
      scale: 1,
      transition: {
        delay: 0.2 + getMasonryDelay(i),
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="industries" className="py-24 bg-white" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">{currentContent.subtitle}</div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5"
          >
            {currentContent.title}
          </motion.h2>
          <p className="text-center mt-5 opacity-75">
            {currentContent.intro}
          </p>
        </motion.div>

        {/* Industries Grid - Masonry Wave + Icon Rotation */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {currentIndustries.map((industry, index) => (
            <motion.div
              key={industry.name}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(30, 136, 229, 0.15)",
                transition: { duration: 0.2 } 
              }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-[#1E88E5] transition-all duration-500 h-full flex flex-col items-center justify-center">
                <motion.div 
                  custom={index}
                  variants={iconVariants}
                  className="w-16 h-16 rounded-full bg-[#1E88E5]/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors duration-300"
                >
                  <industry.icon className="w-8 h-8 text-[#1E88E5] group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="text-sm md:text-base font-semibold text-[#1a3a4a] group-hover:text-white transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{currentContent.closing}</p>
        </motion.div>
      </div>
    </section>
  );
}
