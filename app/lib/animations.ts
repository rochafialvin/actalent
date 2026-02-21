"use client";

import { useEffect, useState, useRef } from "react";
import { Variants, useInView } from "framer-motion";

// ==================== ANIMATION VARIANTS ====================

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" }
  }
};

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateY: 15 },
  visible: { 
    opacity: 1, 
    rotateY: 0,
    transition: { duration: 0.7, ease: "easeInOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// ==================== MOBILE DETECTION ====================

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

// ==================== COUNTER ANIMATION HOOK ====================

interface UseCounterProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export function useCounter({ end, duration = 2000, startOnView = true }: UseCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (hasStarted) return;
    
    setHasStarted(true);
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isInView, startOnView, hasStarted]);

  return { count, ref };
}

// ==================== REDUCED MOTION CHECK ====================

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

// ==================== SECTION-SPECIFIC CONFIGS ====================

export const sectionConfigs = {
  hero: {
    duration: 0.8,
    staggerDelay: 0.15,
    ease: "easeOut"
  },
  about: {
    duration: 0.6,
    staggerDelay: 0.1,
    ease: "easeOut"
  },
  values: {
    duration: 0.5,
    staggerDelay: 0.08,
    ease: "backOut"
  },
  visionMission: {
    duration: 0.7,
    staggerDelay: 0.12,
    ease: "easeInOut"
  },
  services: {
    duration: 0.6,
    staggerDelay: 0.1,
    ease: "easeOut"
  },
  advantages: {
    duration: 0.7,
    staggerDelay: 0.1,
    ease: "circOut"
  },
  workflow: {
    duration: 0.8,
    staggerDelay: 0.15,
    ease: "easeInOut"
  },
  sla: {
    duration: 0.6,
    staggerDelay: 0.1,
    ease: "backOut"
  },
  industries: {
    duration: 0.5,
    staggerDelay: 0.08,
    ease: "easeOut"
  },
  team: {
    duration: 0.7,
    staggerDelay: 0.1,
    ease: "easeOut"
  },
  clients: {
    duration: 0.6,
    staggerDelay: 0,
    ease: "easeOut"
  },
  contact: {
    duration: 0.5,
    staggerDelay: 0.08,
    ease: "backOut"
  }
};

// ==================== PARALLAX HOOK ====================

export function useParallax(speed: number = 0.3) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const relativeScroll = scrolled - elementTop;
      setOffset(relativeScroll * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { offset, ref };
}
