"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Users, Clock, Shield } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useIsMobile, useCounter, useReducedMotion } from "../lib/animations";

interface HeroProps {
  language: "id" | "en";
}

const content = {
  id: {
    headline: ["Menghubungkan Talenta,", "Membangun Kesuksesan"],
    description:
      "Di tengah tantangan rekrutmen yang semakin kompleks mulai dari keterbatasan talenta berkualitas hingga risiko kesalahan penempatan, ACTalent Solutions Partners hadir sebagai mitra strategis yang membantu perusahaan menemukan dan menempatkan talenta secara cepat, tepat, dan selaras dengan kebutuhan bisnis.",
    stats: [
      { icon: Users, value: 100, suffix: "+", label: "Recruiter Profesional", duration: 2000 },
      { icon: Clock, value: 2, prefix: "1-", label: "Minggu Shortlist", duration: 1500 },
      { icon: Shield, value: 90, prefix: "30-", label: "Hari Garansi", duration: 2000 },
    ],
    scrollIndicator: "Scroll ke bawah",
  },
  en: {
    headline: ["Connecting Talent,", "Building Success"],
    description:
      "In the midst of increasingly complex recruitment challenges—from limited quality talent to placement error risks—ACTalent Solutions Partners emerges as a strategic partner helping companies find and place talent quickly, accurately, and aligned with business needs.",
    stats: [
      { icon: Users, value: 100, suffix: "+", label: "Professional Recruiters", duration: 2000 },
      { icon: Clock, value: 2, prefix: "1-", label: "Weeks Shortlist", duration: 1500 },
      { icon: Shield, value: 90, prefix: "30-", label: "Days Guarantee", duration: 2000 },
    ],
    scrollIndicator: "Scroll down",
  },
};

// Counter Component
function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  duration = 2000 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  duration?: number;
}) {
  const { count, ref } = useCounter({ end: value, duration });
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (<span ref={ref}>{prefix}{value}{suffix}</span>);
  }
  
  return (<span ref={ref}>{prefix}{count}{suffix}</span>);
}

export default function Hero({ language }: HeroProps) {
  const currentContent = content[language];
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  
  // Parallax effect
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const statsItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#1a3a4a] overflow-hidden"
    >
      {/* Background Pattern with Parallax */}
      {!prefersReducedMotion && !isMobile && (
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #1E88E5 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, #1E88E5 0%, transparent 50%),
                               radial-gradient(circle at 40% 40%, rgba(30, 136, 229, 0.3) 0%, transparent 40%)`,
            }}
          />
        </motion.div>
      )}
      
      {(prefersReducedMotion || isMobile) && (
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #1E88E5 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, #1E88E5 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(30, 136, 229, 0.3) 0%, transparent 40%)`,
          }}
        />
      )}

      {/* Floating Elements */}
      {!isMobile && (
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ y: prefersReducedMotion ? undefined : backgroundY }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#1E88E5] rounded-full opacity-30"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={!prefersReducedMotion ? {
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              } : {}}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Content */}
      <motion.div 
        className="relative z-10 section-padding w-full max-w-7xl mx-auto pt-32 pb-20"
        style={{ y: prefersReducedMotion || isMobile ? 0 : contentY, opacity: prefersReducedMotion ? 1 : opacity }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline with Staggered Reveal */}
          <div className="mb-6">
            {currentContent.headline.map((line, index) => (
              <motion.h1
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={headlineVariants}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ${
                  index === 1 ? "text-[#1E88E5]" : "text-white"
                }`}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {currentContent.description}
          </motion.p>
        </div>

        {/* Stats Bar with Counter Animation */}
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {currentContent.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statsItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                <stat.icon className="w-8 h-8 text-[#1E88E5] mx-auto mb-3" />
              </motion.div>
              <div className="text-4xl font-bold text-white mb-1">
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                  duration={stat.duration}
                />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="text-xs text-gray-400 uppercase tracking-widest">{currentContent.scrollIndicator}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-[#1E88E5]" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
