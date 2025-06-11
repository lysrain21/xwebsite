"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import TypewriterLogo from "@/components/TypewriterLogo/TypewriterLogo";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [activeWidget, setActiveWidget] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <TypewriterLogo
            text="xKnown.ai"
            speed={120}
            pauseTime={2000}
            autoRestart={true} // 确保自动重启
            className={styles.logo}
          />
        </div>

        <h1 className={styles.title}>
          The next generation of voice data collection and monetization
        </h1>

        <p className={styles.description}>
          xKnown.ai is a comprehensive ecosystem for capturing, processing, and monetizing voice data
          through a multi-layered architecture built with privacy and efficiency at its core.
        </p>

        {/* 英雄区域 */}
        <section className={styles.heroSection}>
          <h2 className={styles.heroTitle}>Unlock the value of every conversation</h2>
          <h2 className={styles.heroTitleAccent}>xKnown makes it possible.</h2>
          <p className={styles.heroSubtitle}>
            Our four-layer architecture seamlessly integrates hardware, AI, data services, and blockchain technology.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
