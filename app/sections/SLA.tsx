"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, RefreshCw, DollarSign, Lock } from "lucide-react";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface SLAProps {
  language: "id" | "en";
}

const guarantees = {
  id: [
    {
      icon: Clock,
      title: "Waktu Shortlist",
      description:
        "Penyampaian shortlist kandidat dilakukan dalam rentang waktu 1-2 minggu setelah kebutuhan rekrutmen disepakati.",
      highlight: "1-2 Minggu",
    },
    {
      icon: RefreshCw,
      title: "Garansi Penggantian",
      description:
        "Fasilitas penggantian kandidat dengan masa garansi 30-90 hari sejak kandidat bergabung, sesuai dengan skema kerja sama yang disepakati, dengan satu kali penggantian per posisi.",
      highlight: "30-90 Hari",
    },
    {
      icon: DollarSign,
      title: "Skema Biaya",
      description:
        "Menerapkan skema Success Fee, dengan struktur yang transparan dan dirancang fleksibel sesuai skema kerja sama yang disepakati.",
      highlight: "Success Fee",
    },
    {
      icon: Lock,
      title: "Kerahasiaan Data",
      description:
        "Seluruh data perusahaan (klien) dan kandidat diperlakukan secara rahasia dan dikelola secara profesional dalam setiap proses rekrutmen.",
      highlight: "100% Rahasia",
    },
  ],
  en: [
    {
      icon: Clock,
      title: "Shortlist Timeline",
      description:
        "Candidate shortlist delivery is done within 1-2 weeks after recruitment needs are agreed upon.",
      highlight: "1-2 Weeks",
    },
    {
      icon: RefreshCw,
      title: "Replacement Guarantee",
      description:
        "Candidate replacement facility with a 30-90 day guarantee period since the candidate joined, according to the agreed cooperation scheme, with one replacement per position.",
      highlight: "30-90 Days",
    },
    {
      icon: DollarSign,
      title: "Cost Scheme",
      description:
        "Implements Success Fee schemes, with transparent structures designed flexibly according to the agreed cooperation scheme.",
      highlight: "Success Fee",
    },
    {
      icon: Lock,
      title: "Data Confidentiality",
      description:
        "All company (client) and candidate data is treated confidentially and managed professionally in every recruitment process.",
      highlight: "100% Confidential",
    },
  ],
};

const content = {
  id: {
    title: "SLA & Garansi",
    subtitle: "Komitmen Kami",
    description: "Komitmen kami terhadap kualitas dan keunggulan layanan.",
  },
  en: {
    title: "SLA & Guarantee",
    subtitle: "Our Commitment",
    description: "Our commitment to quality and service excellence.",
  },
};

export default function SLA({ language }: SLAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentGuarantees = guarantees[language];
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Badge bounce
  const badgeVariants = {
    hidden: { scale: 0, y: 20 },
    visible: (i: number) => ({
      scale: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
  };

  return (
    <section id="sla" className="py-24 bg-gray-50" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentGuarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 30px rgba(30, 136, 229, 0.08)",
                transition: { duration: 0.2 }
              }}
              className="group bg-white rounded-2xl p-6 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 transition-all duration-300"
            >
              <motion.div
                variants={iconVariants}
                className="w-14 h-14 rounded-2xl bg-[#1E88E5]/10 flex items-center justify-center mb-5 group-hover:bg-[#1E88E5] transition-colors duration-300"
              >
                <guarantee.icon className="w-7 h-7 text-[#1E88E5] group-hover:text-white transition-colors duration-300" />
              </motion.div>

              <h3 className="text-xl font-bold text-[#1a3a4a] mb-3">{guarantee.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{guarantee.description}</p>

              <motion.div
                custom={index}
                variants={badgeVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 bg-[#1E88E5] text-white font-bold rounded-full text-sm shadow-lg shadow-[#1E88E5]/30"
              >
                {guarantee.highlight}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
