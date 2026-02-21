"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import VisionMission from "./sections/VisionMission";
import Values from "./sections/Values";
import Services from "./sections/Services";
import Advantages from "./sections/Advantages";
import Industries from "./sections/Industries";
import Workflow from "./sections/Workflow";
import SLA from "./sections/SLA";
import Team from "./sections/Team";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";

export default function Home() {
  const [language, setLanguage] = useState<"id" | "en">("id");

  return (
    <main className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <Hero language={language} />
      <About language={language} />
      <VisionMission language={language} />
      <Values language={language} />
      <Services language={language} />
      <Advantages language={language} />
      <Industries language={language} />
      <Workflow language={language} />
      <SLA language={language} />
      <Team language={language} />
      <Clients language={language} />
      <Contact language={language} />
      
      <Footer language={language} />
    </main>
  );
}
