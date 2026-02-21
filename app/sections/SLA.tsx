"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, RefreshCw, DollarSign, Lock } from "lucide-react";

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
  },
  en: {
    title: "SLA & Guarantee",
    subtitle: "Our Commitment",
  },
};

export default function SLA({ language }: SLAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentGuarantees = guarantees[language];
  const currentContent = content[language];

  return (
    <section id="sla" className="py-24 bg-[#1a3a4a]" ref={ref}>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{currentContent.title}</h2>
          <div className="w-24 h-1 bg-[#1E88E5] mx-auto rounded-full" />
        </motion.div>

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentGuarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#1E88E5]/10 flex items-center justify-center mb-5 group-hover:bg-[#1E88E5] transition-colors duration-300">
                <guarantee.icon className="w-7 h-7 text-[#1E88E5] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1a3a4a] mb-3">{guarantee.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{guarantee.description}</p>

              {/* Highlight Badge */}
              <div className="inline-block px-4 py-2 bg-[#1E88E5] text-white font-bold rounded-full text-sm">
                {guarantee.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
