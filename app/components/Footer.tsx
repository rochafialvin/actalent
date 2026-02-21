"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FooterProps {
  language: "id" | "en";
}

const navItems = {
  id: [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Tim", href: "#team" },
    { label: "Kontak", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer({ language }: FooterProps) {
  const currentNav = navItems[language];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F2744] py-12">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/logo.png"
              alt="ACTALENT Solutions Partners"
              width={180}
              height={45}
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {currentNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              © 2025 PT ACTALENT SOLUTIONS PARTNERS
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {language === "id"
                ? "Semua hak dilindungi undang-undang"
                : "All rights reserved"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
