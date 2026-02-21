"use client";

import { motion } from "framer-motion";
import { ArrowDown, Users, Clock, Shield } from "lucide-react";

interface HeroProps {
  language: "id" | "en";
}

const content = {
  id: {
    headline: "Menghubungkan Talenta,",
    headlineAccent: "Membangun Kesuksesan",
    description:
      "Di tengah tantangan rekrutmen yang semakin kompleks mulai dari keterbatasan talenta berkualitas hingga risiko kesalahan penempatan, ACTalent Solutions Partners hadir sebagai mitra strategis yang membantu perusahaan menemukan dan menempatkan talenta secara cepat, tepat, dan selaras dengan kebutuhan bisnis.",
    stats: [
      { icon: Users, value: "100+", label: "Recruiter Profesional" },
      { icon: Clock, value: "1-2", label: "Minggu Shortlist" },
      { icon: Shield, value: "30-90", label: "Hari Garansi" },
    ],
    cta: "Pelajari Lebih Lanjut",
  },
  en: {
    headline: "Connecting Talent,",
    headlineAccent: "Building Success",
    description:
      "In the midst of increasingly complex recruitment challenges—from limited quality talent to placement error risks—ACTalent Solutions Partners emerges as a strategic partner helping companies find and place talent quickly, accurately, and aligned with business needs.",
    stats: [
      { icon: Users, value: "100+", label: "Professional Recruiters" },
      { icon: Clock, value: "1-2", label: "Weeks Shortlist" },
      { icon: Shield, value: "30-90", label: "Days Guarantee" },
    ],
    cta: "Learn More",
  },
};

export default function Hero({ language }: HeroProps) {
  const currentContent = content[language];

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a3a4a] via-[#1E3A5F] to-[#0F2744] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #1E88E5 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, #1E88E5 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(30, 136, 229, 0.3) 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#1E88E5] rounded-full opacity-30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            {currentContent.headline}
            <br />
            <span className="text-[#1E88E5]">{currentContent.headlineAccent}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {currentContent.description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1E88E5] text-white font-semibold rounded-full hover:bg-[#1565C0] transition-all duration-300 hover:shadow-lg hover:shadow-[#1E88E5]/30"
          >
            {currentContent.cta}
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {currentContent.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <stat.icon className="w-8 h-8 text-[#1E88E5] mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
