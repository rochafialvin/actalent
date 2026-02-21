"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Compass, CheckCircle2 } from "lucide-react";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface VisionMissionProps {
  language: "id" | "en";
}

const content = {
  id: {
    vision: {
      title: "Visi",
      content:
        "Menjadi mitra rekrutmen strategis yang terpercaya di tingkat nasional dan internasional dalam menghubungkan perusahaan dengan talenta profesional yang tepat melalui proses yang cepat, fleksibel, dan terukur.",
    },
    mission: {
      title: "Misi",
      items: [
        "Membantu perusahaan menemukan dan merekrut talenta yang tepat secara kompetensi, karakter, dan kesesuaian dengan kebutuhan bisnis.",
        "Menyediakan proses rekrutmen dan headhunting yang terstruktur, transparan, dan efisien guna mengurangi waktu serta risiko kesalahan perekrutan.",
        "Menjadi mitra strategis klien dalam memenuhi kebutuhan talenta jangka pendek maupun jangka panjang melalui pendekatan profesional dan human-centered.",
        "Mengoptimalkan jaringan profesional dan pemanfaatan teknologi untuk menjangkau kandidat terbaik di pasar tenaga kerja.",
        "Menjaga integritas, kerahasiaan data, dan komitmen terhadap hasil dalam membangun hubungan kemitraan jangka panjang.",
      ],
    },
  },
  en: {
    vision: {
      title: "Vision",
      content:
        "To become a trusted strategic recruitment partner at national and international levels in connecting companies with the right professional talent through fast, flexible, and measurable processes.",
    },
    mission: {
      title: "Mission",
      items: [
        "Help companies find and recruit the right talent based on competency, character, and alignment with business needs.",
        "Provide structured, transparent, and efficient recruitment and headhunting processes to reduce time and recruitment error risks.",
        "Become a strategic partner for clients in meeting short-term and long-term talent needs through professional and human-centered approaches.",
        "Optimize professional networks and technology utilization to reach the best candidates in the job market.",
        "Maintain integrity, data confidentiality, and commitment to results in building long-term partnership relationships.",
      ],
    },
  },
};

export default function VisionMission({ language }: VisionMissionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Flip reveal variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: isMobile || prefersReducedMotion ? 0 : 90,
      x: isMobile || prefersReducedMotion ? (language === "id" ? -30 : 30) : 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const missionItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const checkIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.7 + i * 0.1,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  return (
    <section id="vision-mission" className="py-24 bg-gray-50" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Vision Card - Flip from Left */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
            style={{ 
              perspective: 1000,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
          >
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-[#1E88E5]/10 rounded-full"
              animate={isInView ? {
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              } : {}}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-shadow duration-500" style={{ willChange: "transform", backfaceVisibility: "hidden" }}>
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-[#1E88E5] flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Target className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">
                  {currentContent.vision.title}
                </h3>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {currentContent.vision.content}
              </motion.p>
            </div>
          </motion.div>

          {/* Mission Card - Flip from Right */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
            style={{ 
              perspective: 1000,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
          >
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#1a3a4a]/10 rounded-full"
              animate={isInView ? {
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              } : {}}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            
            <div className="relative bg-[#1a3a4a] rounded-3xl p-8 md:p-10 shadow-xl shadow-[#1a3a4a]/20" style={{ willChange: "transform", backfaceVisibility: "hidden" }}>
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Compass className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {currentContent.mission.title}
                </h3>
              </div>

              <div className="space-y-4">
                {currentContent.mission.items.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={missionItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-start gap-3 group"
                  >
                    <motion.div
                      custom={index}
                      variants={checkIconVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#1E88E5] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
