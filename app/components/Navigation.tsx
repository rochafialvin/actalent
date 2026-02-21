"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  language: "id" | "en";
  setLanguage: (lang: "id" | "en") => void;
}

const navItems = {
  id: [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Keunggulan", href: "#advantages" },
    { label: "Tim", href: "#team" },
    { label: "Klien", href: "#clients" },
    { label: "Kontak", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Advantages", href: "#advantages" },
    { label: "Team", href: "#team" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -40% 0px" }
    );

    const sections = navItems[language].map((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
      return section;
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [language]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "glass shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
            >
              <a href="#home" onClick={() => scrollToSection("#home")} className="inline-block bg-gradient-to-tr from-[#000C1A] to-[#0B1E2F] p-1 rounded-lg">
                <Image
                  src="/logo.png"
                  alt="ACTALENT Solutions Partners"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems[language].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`text-base font-medium transition-all duration-300 relative group px-3 py-2 rounded-md ${
                    activeSection === item.href
                      ? "bg-[#1E88E5]/10"
                      : ""
                  } ${
                    isScrolled ? "text-[#1a3a4a]" : "text-white"
                  }`}
                >
                  {item.label}
                  {/* Underline - only visible on hover (not for active items) */}
                  <span
                    className={`absolute bottom-1 left-3 right-3 h-0.5 bg-[#1E88E5] origin-left transition-transform duration-300 scale-x-0 ${
                      activeSection === item.href ? '' : 'group-hover:scale-x-100'
                    }`}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Language Toggle + Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setLanguage(language === "id" ? "en" : "id")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-[#1E88E5] text-white hover:bg-[#1565C0]"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                {language === "id" ? "EN" : "ID"}
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled ? "text-[#1a3a4a]" : "text-white"
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 lg:hidden w-screen h-screen overflow-hidden"
          >
            <nav className="flex flex-col items-center space-y-2 py-8">
              {navItems[language].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-lg font-medium transition-all duration-300 relative group px-4 py-2 rounded-md w-full text-center ${
                    activeSection === item.href
                      ? "bg-[#1E88E5]/10 text-[#1a3a4a]"
                      : "text-[#1a3a4a]"
                  }`}
                >
                  {item.label}
                  {/* Underline for mobile - only on hover (not for active items) */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 bg-[#1E88E5] transition-transform duration-300 scale-x-0 ${
                      activeSection === item.href ? '' : 'group-hover:scale-x-100'
                    }`}
                  />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
