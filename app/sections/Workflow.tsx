"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Search, Filter, ListTodo, UserCheck } from "lucide-react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentSteps = steps[language];
  const currentContent = content[language];

  return (
    <section id="workflow" className="py-24 bg-gray-50" ref={ref}>
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1E88E5]/20 hidden md:block" />

          {currentSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-20 md:ml-0">
                  <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-[#1E88E5] flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a4a]">{step.title}</h3>
                  </div>
                  <p className={`text-gray-600 text-sm leading-relaxed ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#1E88E5] flex items-center justify-center shadow-lg z-10">
                <span className="text-[#1E88E5] font-bold text-lg">{index + 1}</span>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
