"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface TeamProps {
  language: "id" | "en";
}

const team = [
  {
    name: "Audria Cahya Tari",
    position: {
      id: "Founder & Director",
      en: "Founder & Director",
    },
    image: "/team/act-profile-audria.jpeg",
  },
  {
    name: "Apriliyana Nur Rafiani",
    position: {
      id: "Head of Legal",
      en: "Head of Legal",
    },
    image: "/team/act-profile-apriliyana.jpeg",
  },
  {
    name: "Tabah Reksa Rizki",
    position: {
      id: "HR Manager",
      en: "HR Manager",
    },
    image: "/team/act-profile-tabah.jpeg",
  },
  {
    name: "Fikri Satria Nugraha",
    position: {
      id: "Project Manager",
      en: "Project Manager",
    },
    image: "/team/act-profile-fikri.jpeg",
  },
  {
    name: "Audina Sarah Suciati",
    position: {
      id: "Head of Finance & Tax",
      en: "Head of Finance & Tax",
    },
    image: "/team/act-profile-audina.png",
  },
];

const content = {
  id: {
    title: "Tim Kami",
    subtitle: "Struktur Organisasi",
  },
  en: {
    title: "Our Team",
    subtitle: "Organizational Structure",
  },
};

export default function Team({ language }: TeamProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Photo frame draw animation - wave stagger
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile || prefersReducedMotion ? 30 : 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Frame draw animation
  const frameVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0,
    },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  // Info slide up from bottom
  const infoVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="team" className="py-24 bg-white" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
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
            {currentContent.subtitle}
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

        {/* Team Grid - Wave Stagger with Frame Draw */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group text-center"
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100">
                {/* Decorative Frame SVG */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <motion.rect
                    x="2"
                    y="2"
                    width="96"
                    height="96"
                    rx="8"
                    fill="none"
                    stroke="#1E88E5"
                    strokeWidth="1"
                    custom={index}
                    variants={frameVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ pathLength: 0 }}
                  />
                </svg>
                
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info - Slide up from bottom */}
              <motion.div
                custom={index}
                variants={infoVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <h3 className="text-lg font-bold text-[#1a3a4a] mb-1">{member.name}</h3>
                <p className="text-[#1E88E5] font-medium text-sm">{member.position[language]}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
