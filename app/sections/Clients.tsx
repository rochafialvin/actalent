"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
  { name: "EHI", image: "/clients/act-client-goat.jpeg" },
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

  // Double the clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

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
          <span className="text-[#1E88E5] font-semibold text-sm tracking-wider uppercase mb-4 block">
            {currentContent.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mb-6">{currentContent.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{currentContent.description}</p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee hover:pause">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-8 w-40 h-24 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
