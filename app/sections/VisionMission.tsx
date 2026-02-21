"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Compass, CheckCircle2 } from "lucide-react";

interface VisionMissionProps {
  language: "id" | "en";
}

const content = {
  id: {
    vision: {
      title: "Visi",
      content:
        "Menjadi mitra rekrutmen strategis yang terpercaya di tingkat nasional dan internasional dalam menghubungkan perusahaan dengan talenta profesional yang tepat melalui proses yang cepat, fleksibel, dan terukur.",
    },
    mission: {
      title: "Misi",
      items: [
        "Membantu perusahaan menemukan dan merekrut talenta yang tepat secara kompetensi, karakter, dan kesesuaian dengan kebutuhan bisnis.",
        "Menyediakan proses rekrutmen dan headhunting yang terstruktur, transparan, dan efisien guna mengurangi waktu serta risiko kesalahan perekrutan.",
        "Menjadi mitra strategis klien dalam memenuhi kebutuhan talenta jangka pendek maupun jangka panjang melalui pendekatan profesional dan human-centered.",
        "Mengoptimalkan jaringan profesional dan pemanfaatan teknologi untuk menjangkau kandidat terbaik di pasar tenaga kerja.",
        "Menjaga integritas, kerahasiaan data, dan komitmen terhadap hasil dalam membangun hubungan kemitraan jangka panjang.",
      ],
    },
  },
  en: {
    vision: {
      title: "Vision",
      content:
        "To become a trusted strategic recruitment partner at national and international levels in connecting companies with the right professional talent through fast, flexible, and measurable processes.",
    },
    mission: {
      title: "Mission",
      items: [
        "Help companies find and recruit the right talent based on competency, character, and alignment with business needs.",
        "Provide structured, transparent, and efficient recruitment and headhunting processes to reduce time and recruitment error risks.",
        "Become a strategic partner for clients in meeting short-term and long-term talent needs through professional and human-centered approaches.",
        "Optimize professional networks and technology utilization to reach the best candidates in the job market.",
        "Maintain integrity, data confidentiality, and commitment to results in building long-term partnership relationships.",
      ],
    },
  },
};

export default function VisionMission({ language }: VisionMissionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentContent = content[language];

  return (
    <section id="vision-mission" className="py-24 bg-gray-50" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1E88E5]/10 rounded-full" />
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1E88E5] flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">
                  {currentContent.vision.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentContent.vision.content}
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1a3a4a]/10 rounded-full" />
            <div className="relative bg-[#1a3a4a] rounded-3xl p-8 md:p-10 shadow-xl shadow-[#1a3a4a]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {currentContent.mission.title}
                </h3>
              </div>

              <div className="space-y-4">
                {currentContent.mission.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1E88E5] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
