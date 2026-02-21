"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
          <span className="text-[#1E88E5] font-semibold text-sm tracking-wider uppercase mb-4 block">
            {currentContent.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mb-6">{currentContent.title}</h2>
          <div className="w-24 h-1 bg-[#1E88E5] mx-auto rounded-full" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl aspect-square bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-lg font-bold text-[#1a3a4a] mb-1">{member.name}</h3>
              <p className="text-[#1E88E5] font-medium text-sm">{member.position[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
