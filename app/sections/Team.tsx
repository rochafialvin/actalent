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
    description: "Temui para ahli yang berdedikasi untuk kesuksesan rekrutmen Anda.",
  },
  en: {
    title: "Our Team",
    subtitle: "Organizational Structure",
    description: "Meet the experts dedicated to your recruitment success.",
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
            {currentContent.description}
          </p>
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
