"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Database, Zap, Wallet, HeartHandshake } from "lucide-react";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface AdvantagesProps {
  language: "id" | "en";
}

const advantages = {
  id: [
    {
      icon: Globe,
      title: "Jaringan Nasional",
      description:
        "Didukung oleh ekosistem nasional yang terdiri dari lebih dari 100 recruiter profesional, memungkinkan proses rekrutmen yang lebih cepat, menjangkau kandidat di berbagai wilayah, dan sesuai dengan kebutuhan klien.",
    },
    {
      icon: Database,
      title: "Database Kandidat Luas",
      description:
        "Memiliki akses ke basis data kandidat yang beragam dan terus diperbarui, sehingga memudahkan pencarian talenta yang relevan sesuai kompetensi, pengalaman, dan kebutuhan bisnis.",
    },
    {
      icon: Zap,
      title: "Proses Recruitmen Cepat dan Akurat",
      description:
        "Menggunakan kombinasi pendekatan digital dan personal untuk memastikan proses seleksi berjalan efisien tanpa mengorbankan kualitas dan ketepatan kandidat.",
    },
    {
      icon: Wallet,
      title: "Sistem Biaya Fleksible",
      description:
        "Menerapkan skema success fee dengan struktur biaya yang kompetitif dan disesuaikan dengan kebutuhan serta skala rekrutmen klien.",
    },
    {
      icon: HeartHandshake,
      title: "Pendekatan Human-Centered",
      description:
        "Menilai kandidat tidak hanya dari sisi kualifikasi teknis, tetapi juga kesesuaian karakter, budaya kerja, dan nilai dengan organisasi klien.",
    },
  ],
  en: [
    {
      icon: Globe,
      title: "National Network",
      description:
        "Supported by a national ecosystem consisting of more than 100 professional recruiters, enabling faster recruitment processes, reaching candidates in various regions, and aligned with client needs.",
    },
    {
      icon: Database,
      title: "Extensive Candidate Database",
      description:
        "Has access to diverse and continuously updated candidate databases, making it easier to search for relevant talent according to competency, experience, and business needs.",
    },
    {
      icon: Zap,
      title: "Fast and Accurate Recruitment Process",
      description:
        "Uses a combination of digital and personal approaches to ensure selection processes run efficiently without sacrificing candidate quality and accuracy.",
    },
    {
      icon: Wallet,
      title: "Flexible Cost System",
      description:
        "Implements success fee schemes with competitive cost structures tailored to client needs and recruitment scale.",
    },
    {
      icon: HeartHandshake,
      title: "Human-Centered Approach",
      description:
        "Evaluates candidates not only from technical qualifications but also character fit, work culture, and values with the client organization.",
    },
  ],
};

const content = {
  id: {
    title: "Keunggulan Kami",
    subtitle: "Mengapa Memilih Kami",
    description: "Nikmati manfaat bekerja sama dengan recruiter profesional.",
  },
  en: {
    title: "Our Advantages",
    subtitle: "Why Choose Us",
    description: "Experience the benefits of working with professional recruiters.",
  },
};

export default function Advantages({ language }: AdvantagesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentAdvantages = advantages[language];
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Radial expand animation - items appear from center outward
  const getRadialDelay = (index: number, total: number) => {
    const centerIndex = Math.floor(total / 2);
    const distance = Math.abs(index - centerIndex);
    return distance * 0.1;
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: isMobile || prefersReducedMotion ? 0.9 : 0.5,
      y: isMobile || prefersReducedMotion ? 30 : 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: getRadialDelay(i, currentAdvantages.length),
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const iconPulseVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: [0, 1.2, 1],
      transition: {
        delay: 0.3 + getRadialDelay(i, currentAdvantages.length),
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="advantages" className="py-24 bg-gray-50" ref={ref}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentAdvantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(30, 136, 229, 0.15)",
                transition: { duration: 0.2 }
              }}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#1E88E5]/30 transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  custom={index}
                  variants={iconPulseVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1E88E5] flex items-center justify-center"
                >
                  <advantage.icon className="w-7 h-7 text-white" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a3a4a] mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{advantage.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
