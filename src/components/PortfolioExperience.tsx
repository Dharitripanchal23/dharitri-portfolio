"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { WhoIAm } from "@/components/sections/WhoIAm";
import { Journey } from "@/components/sections/Journey";
import { Leadership } from "@/components/sections/Leadership";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";
import { PosoraStory } from "@/components/sections/PosoraStory";
import { PosoraProduct } from "@/components/sections/PosoraProduct";
import { Toolbox } from "@/components/sections/Toolbox";
import { Architecture } from "@/components/sections/Architecture";
import { Process } from "@/components/sections/Process";
import { Impact } from "@/components/sections/Impact";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { Terminal } from "@/components/terminal/Terminal";
import { Contact } from "@/components/sections/Contact";

export function PortfolioExperience() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <div
        className="noise-overlay"
        style={{ opacity: loaded ? 0.035 : 0 }}
        aria-hidden
      />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease-out",
        }}
      >
        <Header />
        <main id="main-content">
          <Hero />
          <Mission />
          <WhoIAm />
          <Journey />
          <Leadership />
          <Philosophy />
          <Projects />
          <PosoraStory />
          <PosoraProduct />
          <Toolbox />
          <Architecture />
          <Process />
          <Impact />
          <CurrentFocus />
          <Terminal />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
