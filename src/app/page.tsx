"use client";

import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import TypewriterLogo from "@/components/TypewriterLogo/TypewriterLogo";
import Footer from "@/components/Footer/Footer";
import "@/styles/typography.css"; // 导入新创建的排版样式

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <TypewriterLogo
            text="XKNOWN.AI" // 修改为全大写以匹配SPACE10风格
            speed={120}
            pauseTime={2000}
            autoRestart={true}
            className={styles.logo}
          />
        </div>

        <h1 className={styles.title}>
          THE NEXT GENERATION OF VOICE DATA COLLECTION AND MONETIZATION
        </h1>

        <p className={styles.description}>
          xKnown.ai is a comprehensive ecosystem for capturing, processing, and monetizing voice data
          through a multi-layered architecture built with privacy and efficiency at its core.
        </p>

        {/* 英雄区域 */}
        <section className={styles.heroSection}>
          <h2 className={styles.heroTitle}>UNLOCK THE VALUE OF EVERY CONVERSATION</h2>
          <h2 className={styles.heroTitleAccent}>XKNOWN MAKES IT POSSIBLE.</h2>
          <p className={styles.heroSubtitle}>
            Our four-layer architecture seamlessly integrates hardware, AI, data services, and blockchain technology.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
