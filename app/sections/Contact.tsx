"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, FileText, ExternalLink } from "lucide-react";
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
  address: "Jl Cilenggang II, Kec. Serpong, Kota Tangerang Selatan, Indonesia",
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
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 text-gray-300"
              >
                <motion.div 
                  variants={pinVariants}
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  animate={isInView ? {
                    y: [0, -5, 0],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <MapPin className="w-5 h-5 text-[#1E88E5]" />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-400">{currentContent.address}</div>
                  <div className="text-white">{contactInfo.address}</div>
                </div>
              </motion.div>

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

          {/* Right Column - Tally Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-6">
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-[#1a3a4a] mb-2"
              >{currentContent.cta}</motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-sm"
              >
                {language === "id"
                  ? "Isi formulir di bawah ini dan tim kami akan menghubungi Anda."
                  : "Fill out the form below and our team will contact you."}
              </motion.p>
            </div>

            {/* Tally Form Embed */}
            <div className="relative">
              <iframe
                src="https://tally.so/embed/w7Y6XX?alignLeft=1&hideTitle=1&transparentBackground=1"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
                className="rounded-xl"
              >
              </iframe>
            </div>

            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
              Powered by
              <a
                href="https://tally.so"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E88E5] hover:underline inline-flex items-center gap-1"
              >
                Tally
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
