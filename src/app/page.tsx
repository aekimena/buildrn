"use client";

import Footer from "@/componets/common/Footer";
import CTAFinal from "@/componets/home/CTAFinal";
import Benefits from "@/componets/home/FeaturedSection";
import HeroSection from "@/componets/home/HeroSection";
import KeyFeatures from "@/componets/home/KeyFeatures";
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-white px-24">
      <HeroSection />
      <KeyFeatures />
      <Benefits />
      <CTAFinal />
      <Footer />
    </div>
  );
}
