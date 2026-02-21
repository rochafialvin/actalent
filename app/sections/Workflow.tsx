"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Search, Filter, ListTodo, UserCheck } from "lucide-react";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface WorkflowProps {
  language: "id" | "en";
}

const steps = {
  id: [
    {
      icon: ClipboardList,
      title: "Needs Assessment",
      description: "Penyelarasan kebutuhan posisi, kualifikasi, serta tujuan bisnis klien guna memastikan proses rekrutmen berjalan tepat sasaran.",
    },
    {
      icon: Search,
      title: "Talent Sourcing",
      description: "Pencarian dan penyaringan kandidat melalui jaringan recruiter serta database talenta untuk menemukan kandidat yang paling relevan.",
    },
    {
      icon: Filter,
      title: "Screening & Evaluation",
      description: "Evaluasi kandidat berdasarkan kompetensi, pengalaman, dan kesesuaian budaya dengan kebutuhan organisasi klien.",
    },
    {
      icon: ListTodo,
      title: "Shortlisting & Interview Support",
      description: "Penyampaian daftar kandidat terpilih (shortlist) kepada klien disertai pendampingan selama proses wawancara.",
    },
    {
      icon: UserCheck,
      title: "Placement & Follow-Up",
      description: "Dukungan proses penempatan kandidat hingga resmi bergabung, dilengkapi dengan monitoring dan tindak lanjut pasca-rekrutmen.",
    },
  ],
  en: [
    {
      icon: ClipboardList,
      title: "Needs Assessment",
      description: "Alignment of position needs, qualifications, and client business objectives to ensure recruitment processes run on target.",
    },
    {
      icon: Search,
      title: "Talent Sourcing",
      description: "Searching and screening candidates through recruiter networks and talent databases to find the most relevant candidates.",
    },
    {
      icon: Filter,
      title: "Screening & Evaluation",
      description: "Evaluating candidates based on competency, experience, and cultural fit with client organizational needs.",
    },
    {
      icon: ListTodo,
      title: "Shortlisting & Interview Support",
      description: "Delivering the selected candidate list (shortlist) to clients accompanied by support during the interview process.",
    },
    {
      icon: UserCheck,
      title: "Placement & Follow-Up",
      description: "Supporting the candidate placement process until officially joining, equipped with monitoring and post-recruitment follow-up.",
    },
  ],
};

const content = {
  id: {
    title: "Proses Kerja Kami",
    subtitle: "Alur Layanan",
    step: "Langkah",
  },
  en: {
    title: "Our Workflow",
    subtitle: "Service Flow",
    step: "Step",
  },
};

export default function Workflow({ language }: WorkflowProps) {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const currentSteps = steps[language];
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  
  // Line draw animation based on scroll
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  // Node pop with elastic effect
  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.15,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    }),
  };

  // Card bounce from alternating sides
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isMobile || prefersReducedMotion ? 0 : 0,
      y: isMobile || prefersReducedMotion ? 30 : 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section id="workflow" className="py-24 bg-gray-50" ref={sectionRef}>
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

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line - Animated Draw */}
          {!isMobile && !prefersReducedMotion && (
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-[#1E88E5] origin-top"
                style={{ height: lineHeight }}
              />
            </div>
          )}
          
          {(isMobile || prefersReducedMotion) && (
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1E88E5]/20 hidden md:block" />
          )}

          {currentSteps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <motion.div 
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <motion.div 
                      variants={iconVariants}
                      className="w-12 h-12 rounded-xl bg-[#1E88E5] flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#1a3a4a]">{step.title}</h3>
                  </div>
                  <p className={`text-gray-600 text-sm leading-relaxed ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Node - Elastic Pop - Positioned on opposite side from content */}
              <motion.div
                custom={index}
                variants={nodeVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.2 }}
                className={`absolute w-16 h-16 rounded-full bg-white border-4 border-[#1E88E5] flex items-center justify-center shadow-lg z-10 ${
                  index % 2 === 0 
                    ? "left-8 md:left-[calc(50%+2rem)]" // Even: content left, number right of line with 2rem gap
                    : "left-8 md:left-[calc(50%-6rem)]" // Odd: content right, number left of line with 2rem gap
                }`}
              >
                <span className="text-[#1E88E5] font-bold text-lg">{index + 1}</span>
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
