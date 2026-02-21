"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Users, TrendingUp, FileText } from "lucide-react";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface ServicesProps {
  language: "id" | "en";
}

const services = {
  id: [
    {
      icon: Search,
      title: "Headhunter & Executive Search",
      description:
        "Pendekatan rekrutmen strategis untuk posisi manajerial hingga eksekutif, dilakukan melalui proses pencarian terarah, seleksi mendalam, dan pendekatan personal guna memastikan kecocokan kompetensi dan kepemimpinan.",
      features: ["Posisi Manajerial", "Level Eksekutif", "Seleksi Mendalam"],
    },
    {
      icon: Users,
      title: "General Recruitment",
      description:
        "Solusi rekrutmen untuk posisi operasional hingga level menengah, dengan proses seleksi yang terstruktur dan efisien, disesuaikan dengan kebutuhan dan dinamika organisasi.",
      features: ["Posisi Operasional", "Level Menengah", "Proses Terstruktur"],
    },
    {
      icon: TrendingUp,
      title: "Mass Hiring",
      description:
        "Layanan rekrutmen skala besar untuk mendukung ekspansi bisnis dan pertumbuhan organisasi, dengan pendekatan yang cepat, terukur, dan terkontrol secara kualitas.",
      features: ["Skala Besar", "Ekspansi Bisnis", "Kualitas Terkontrol"],
    },
    {
      icon: FileText,
      title: "Contract & Employment Advisory",
      description:
        "Layanan ini mencakup penyusunan dan review kontrak, konsultasi regulasi ketenagakerjaan, serta pendampingan strategis dalam pengelolaan hubungan kerja untuk meminimalkan risiko dan menjaga stabilitas bisnis.",
      features: ["Penyusunan Kontrak", "Konsultasi Regulasi", "Pendampingan"],
    },
  ],
  en: [
    {
      icon: Search,
      title: "Headhunter & Executive Search",
      description:
        "Strategic recruitment approach for managerial to executive positions, conducted through targeted search processes, in-depth selection, and personal approach to ensure competency and leadership fit.",
      features: ["Managerial Positions", "Executive Level", "In-depth Selection"],
    },
    {
      icon: Users,
      title: "General Recruitment",
      description:
        "Recruitment solution for operational to mid-level positions, with structured and efficient selection processes, tailored to organizational needs and dynamics.",
      features: ["Operational Roles", "Mid-level", "Structured Process"],
    },
    {
      icon: TrendingUp,
      title: "Mass Hiring",
      description:
        "Large-scale recruitment services to support business expansion and organizational growth, with fast, measurable, and quality-controlled approaches.",
      features: ["Large Scale", "Business Expansion", "Quality Controlled"],
    },
    {
      icon: FileText,
      title: "Contract & Employment Advisory",
      description:
        "This service includes contract drafting and review, labor regulation consultation, and strategic accompaniment in employment relationship management to minimize risks and maintain business stability.",
      features: ["Contract Drafting", "Regulation Consultation", "Strategic Support"],
    },
  ],
};

const content = {
  id: {
    title: "Layanan Kami",
    subtitle: "Solusi Rekrutmen",
    cta: "Hubungi Kami",
  },
  en: {
    title: "Our Services",
    subtitle: "Recruitment Solutions",
    cta: "Contact Us",
  },
};

export default function Services({ language }: ServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentServices = services[language];
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // 3D perspective reveal
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: isMobile || prefersReducedMotion ? 0 : 15,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2,
      },
    },
  };

  const featureTagVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.3,
        ease: "backOut",
      },
    }),
  };

  return (
    <section id="services" className="py-24 bg-gray-50" ref={ref}>
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

        {/* Services Grid with 3D Effect */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ perspective: 1000 }}
        >
          {currentServices.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -10, 
                rotateY: isMobile ? 0 : 5,
                boxShadow: "0 25px 50px rgba(30, 136, 229, 0.15)",
                transition: { duration: 0.3 } 
              }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#1E88E5]/30"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start gap-5">
                <motion.div 
                  variants={iconVariants}
                  className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E88E5] to-[#1565C0] flex items-center justify-center shadow-lg shadow-[#1E88E5]/30"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3 group-hover:text-[#1E88E5] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <motion.span
                        key={feature}
                        custom={i}
                        variants={featureTagVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium bg-[#1E88E5]/10 text-[#1E88E5] rounded-full"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
