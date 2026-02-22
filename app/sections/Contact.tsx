"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, FileText, MessageCircle } from "lucide-react";
import { useIsMobile, useReducedMotion } from "../lib/animations";

interface ContactProps {
  language: "id" | "en";
}

const content = {
  id: {
    title: "Mari Bekerja Sama",
    subtitle: "Hubungi Kami",
    description: "Siap membantu perusahaan Anda menemukan talenta terbaik. Hubungi kami untuk konsultasi gratis.",
    email: "Email",
    address: "Alamat",
    npwp: "NPWP",
    cta: "Kirim Pesan",
  },
  en: {
    title: "Let's Work Together",
    subtitle: "Contact Us",
    description: "Ready to help your company find the best talent. Contact us for a free consultation.",
    email: "Email",
    address: "Address",
    npwp: "Tax ID",
    cta: "Send Message",
  },
};

const contactInfo = {
  email: "actalentsolutionspartners@gmail.com",
  address: "Kota Jakarta, Indonesia",
  npwp: "1000 0000 0618 2783",
};

export default function Contact({ language }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentContent = content[language];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Stagger fields
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: isMobile || prefersReducedMotion ? 0 : -30,
      y: isMobile || prefersReducedMotion ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Map pin bounce effect
  const pinVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  // Social icons pop with elastic
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  const formVariants = {
    hidden: { opacity: 0, x: isMobile || prefersReducedMotion ? 0 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-24 bg-[#1a3a4a]" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info with Stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span 
              variants={itemVariants}
              className="text-[#1E88E5] font-semibold text-sm tracking-wider uppercase mb-4 block"
            >
              {currentContent.subtitle}
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >{currentContent.title}</motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 mb-10"
            >{currentContent.description}</motion.p>

            <div className="space-y-6">
              {/* Email */}
              <motion.a
                variants={itemVariants}
                href={`mailto:${contactInfo.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300 hover:text-[#1E88E5] transition-colors group"
              >
                <motion.div 
                  variants={iconVariants}
                  custom={0}
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#1E88E5] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-400">{currentContent.email}</div>
                  <div className="text-white">{contactInfo.email}</div>
                </div>
              </motion.a>

              {/* Address - with bouncing pin */}
              <motion.a
                variants={itemVariants}
                href="https://maps.google.com/?q=Jakarta+Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300 hover:text-[#1E88E5] transition-colors group"
              >
                <motion.div 
                  variants={pinVariants}
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#1E88E5] transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <MapPin className="w-5 h-5" />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-400">{currentContent.address}</div>
                  <div className="text-white">{contactInfo.address}</div>
                </div>
              </motion.a>

              {/* NPWP */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 text-gray-300"
              >
                <motion.div 
                  variants={iconVariants}
                  custom={2}
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <FileText className="w-5 h-5" />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-400">{currentContent.npwp}</div>
                  <div className="text-white">{contactInfo.npwp}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - WhatsApp CTA */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-white mb-4"
              >
                {language === "id" ? "Chat WhatsApp" : "WhatsApp Chat"}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="text-gray-300"
              >
                {language === "id"
                  ? "Hubungi kami langsung melalui WhatsApp untuk respons cepat."
                  : "Contact us directly via WhatsApp for a quick response."}
              </motion.p>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/+6283192179737?text=${encodeURIComponent(
                language === "id"
                  ? "Halo, saya ingin membahas layanan rekrutmen untuk perusahaan saya"
                  : "Hi, I want to discuss recruitment services for my company"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full bg-[#25D366] hover:bg-[#22c35e] text-white font-semibold py-4 px-8 rounded-2xl text-center transition-colors flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              {language === "id" ? "Chat di WhatsApp" : "Chat on WhatsApp"}
            </motion.a>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="text-center text-sm text-gray-400 mt-6"
            >
              {language === "id"
                ? "Respon dalam 24 jam"
                : "Response within 24 hours"}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
