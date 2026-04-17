"use client";

import { TestimonialsColumn } from "../components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "We had a great experience with ACTalent sourcing a Digital Marketing candidate. They were professional, delivered on expectations, and honored their 90-day replacement guarantee. A reliable partner.",
    image: "/images/testimonials/dina-lovian-sari.jpeg",
    name: "Dina Lovian Sari",
    role: "Founder",
  },
  {
    text: "Trusting ACTalent was the right decision. They addressed our healthcare recruitment needs satisfactorily. The process was smooth, drama-free, and completed quickly despite my initial overwhelm.",
    image: "/images/testimonials/septiono.jpeg",
    name: "Septiono",
    role: "Director",
  },
  {
    text: "I've been working with ACTalent for a long time, and the experience has been consistently positive. The team is supportive, responsive, and reliable. They've helped me source high-quality candidates across multiple roles, especially for my US-based clients.",
    image: "/images/testimonials/suraj-kushwah.jpeg",
    name: "Suraj Kushwah",
    role: "Founder",
  },
  {
    text: "I've worked with ACTalent on multiple recruitment projects. They demonstrated strong expertise in talent acquisition and collaborative delivery. Highly dedicated and professional—I confidently recommend them.",
    image: "https://placehold.co/600x600?text=IW&font=roboto",
    name: "Ivy Wang",
    role: "International Talent Acquisition",
  },
  {
    text: "ACTalent helped us find competent employees who matched our requirements. Their follow-up support and replacement guarantee gave us real security. Extremely helpful for a growing business.",
    image: "/images/testimonials/yudo-mochdie.jpeg",
    name: "Yudo Mochdie",
    role: "Deputy Director",
  },
];

const firstColumn = [testimonials[0], testimonials[1], testimonials[2], testimonials[3], testimonials[4]];
const secondColumn = [testimonials[2], testimonials[4], testimonials[1], testimonials[3], testimonials[0]];
const thirdColumn = [testimonials[4], testimonials[0], testimonials[3], testimonials[1], testimonials[2]];

interface TestimonialsProps {
  language: "id" | "en";
}

const Testimonials = ({ language }: TestimonialsProps) => {
  const content = {
    id: {
      badge: "Testimoni",
      title: "Apa kata pengguna kami",
      description: "Lihat apa kata pelanggan kami tentang kami."
    },
    en: {
      badge: "Testimonials",
      title: "What our users say",
      description: "See what our customers have to say about us."
    }
  };

  const t = content[language];

  return (
    <section id="testimonials" className="bg-white my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">{t.badge}</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            {t.title}
          </h2>
          <p className="text-center mt-5 opacity-75">
            {t.description}
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={75} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={95} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={85} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
