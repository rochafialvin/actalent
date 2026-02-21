"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface ClientsProps {
  language: "id" | "en";
}

const clients = [
  { name: "ITF", image: "/clients/act-client-itf.jpeg" },
  { name: "Skillventory", image: "/clients/act-client-skillventory.jpeg" },
  { name: "MKIT", image: "/clients/act-client-mkit.jpeg" },
  { name: "KARTINIS", image: "/clients/act-client-kartinis.PNG" },
  { name: "PT VELLIA KANDI", image: "/clients/act-client-vellia.jpeg" },
  { name: "Kata Kala", image: "/clients/act-client-kata-kala.jpeg" },
  { name: "PT INDOBRIZ", image: "/clients/act-client-indobriz.jpeg" },
  { name: "DHT", image: "/clients/act-client-dht.jpeg" },
  { name: "Mawfeeq", image: "/clients/act-client-mawfeeq.jpeg" },
];

const content = {
  id: {
    title: "Klien Kami",
    subtitle: "Dipercaya Oleh",
    description: "Kami telah bekerja sama dengan berbagai perusahaan dari berbagai industri.",
  },
  en: {
    title: "Our Clients",
    subtitle: "Trusted By",
    description: "We have collaborated with various companies from different industries.",
  },
};

export default function Clients({ language }: ClientsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentContent = content[language];
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Triple the clients array for truly seamless loop
  // Using A-B-A pattern so the loop point is invisible
  const duplicatedClients = [...clients, ...clients, ...clients];

  // Fade entrance for logos
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="clients" className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto mb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {currentContent.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee Container with Fade Entrance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div
          className="flex animate-marquee"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'fit-content'
          }}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              custom={index}
              variants={isMobile || prefersReducedMotion ? {} : logoVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 mx-8 w-40 h-24 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
            >
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
