"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { WhoIAm } from "@/components/sections/WhoIAm";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { PosoraStory } from "@/components/sections/PosoraStory";
import { PosoraProduct } from "@/components/sections/PosoraProduct";
import { Toolbox } from "@/components/sections/Toolbox";
import { Architecture } from "@/components/sections/Architecture";
import { Impact } from "@/components/sections/Impact";
import { Terminal } from "@/components/terminal/Terminal";
import { Contact } from "@/components/sections/Contact";

export function PortfolioExperience() {
  return (
    <>
      <div className="noise-overlay" aria-hidden />
      <Header />
      <main id="main-content">
        <Hero />
        <Mission />
        <WhoIAm />
        <Journey />
        <Impact />
        <Projects />
        <PosoraStory />
        <PosoraProduct />
        <Architecture />
        <Toolbox />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
