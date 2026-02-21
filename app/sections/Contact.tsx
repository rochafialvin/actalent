"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, FileText, ExternalLink } from "lucide-react";

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

  return (
    <section id="contact" className="py-24 bg-[#1a3a4a]" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#1E88E5] font-semibold text-sm tracking-wider uppercase mb-4 block">
              {currentContent.subtitle}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{currentContent.title}</h2>
            
            <p className="text-lg text-gray-300 mb-10">{currentContent.description}</p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 text-gray-300 hover:text-[#1E88E5] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#1E88E5] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{currentContent.email}</div>
                  <div className="text-white">{contactInfo.email}</div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{currentContent.address}</div>
                  <div className="text-white">{contactInfo.address}</div>
                </div>
              </div>

              {/* NPWP */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{currentContent.npwp}</div>
                  <div className="text-white">{contactInfo.npwp}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Tally Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#1a3a4a] mb-2">{currentContent.cta}</h3>
              <p className="text-gray-600 text-sm">
                {language === "id"
                  ? "Isi formulir di bawah ini dan tim kami akan menghubungi Anda."
                  : "Fill out the form below and our team will contact you."}
              </p>
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
