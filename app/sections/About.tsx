"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Network, Award } from "lucide-react";

interface AboutProps {
  language: "id" | "en";
}

const content = {
  id: {
    title: "Tentang Perusahaan",
    paragraphs: [
      "ACTalent Solutions Partners lahir dari sebuah visi sederhana: membantu perusahaan kecil dan menengah (UMKM) yang belum memiliki tim Human Resources (HR) internal serta memiliki keterbatasan anggaran dalam proses perekrutan. Kami hadir sebagai solusi praktis untuk menyediakan kandidat berkualitas tanpa harus menanggung biaya besar.",
      "Sebagai Penyedia layanan Recruitment solutions, ACTalent Solutions Partners beroperasi melalui jaringan nasional dengan lebih dari 100 recruiter profesional lintas industri, sehingga memungkinkan proses rekrutmen yang efisien, adaptif, dan selaras dengan kebutuhan bisnis klien.",
    ],
    highlights: [
      {
        icon: Building2,
        title: "Untuk UMKM",
        desc: "Solusi HR tanpa tim internal",
      },
      {
        icon: Network,
        title: "Jaringan Nasional",
        desc: "100+ recruiter profesional",
      },
      {
        icon: Award,
        title: "Berkualitas",
        desc: "Proses rekrutmen efisien",
      },
    ],
  },
  en: {
    title: "About Company",
    paragraphs: [
      "ACTalent Solutions Partners was born from a simple vision: to help small and medium enterprises (SMEs) that don't yet have internal Human Resources (HR) teams and have budget limitations in the recruitment process. We come as a practical solution to provide quality candidates without bearing large costs.",
      "As a Recruitment solutions service provider, ACTalent Solutions Partners operates through a national network with more than 100 professional recruiters across industries, enabling efficient, adaptive recruitment processes aligned with client business needs.",
    ],
    highlights: [
      {
        icon: Building2,
        title: "For SMEs",
        desc: "HR solutions without internal teams",
      },
      {
        icon: Network,
        title: "National Network",
        desc: "100+ professional recruiters",
      },
      {
        icon: Award,
        title: "Quality",
        desc: "Efficient recruitment process",
      },
    ],
  },
};

export default function About({ language }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentContent = content[language];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1E88E5] font-semibold text-sm tracking-wider uppercase mb-4 block">
            {language === "id" ? "Tentang Kami" : "About Us"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mb-6">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-[#1E88E5] mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {currentContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {currentContent.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1E88E5]/10 flex items-center justify-center group-hover:bg-[#1E88E5] transition-colors duration-300">
                  <highlight.icon className="w-7 h-7 text-[#1E88E5] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a3a4a] mb-1">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
