"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import TypewriterLogo from "@/components/TypewriterLogo/TypewriterLogo";

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

        {/* 小组件网格 */}
        <div className={styles.widgetGrid}>
          {/* 硬件采集层 */}
          <div
            className={`${styles.widget} ${activeWidget === 0 ? styles.active : ''}`}
            onMouseEnter={() => setActiveWidget(0)}
            onMouseLeave={() => setActiveWidget(null)}
          >
            <div className={styles.widgetHeader}>
              <h3 className={styles.widgetTitle}>
                <span className={styles.widgetTitleAccent}>Hardware</span> Collection Layer
              </h3>
              <p className={styles.widgetDescription}>
                Smart recording terminals that attach to the back of your smartphone, capturing voice data on-demand with minimal setup.
              </p>
            </div>
            <div className={styles.widgetContent}>
              <Image
                src="/file.svg"
                alt="Hardware Collection Layer"
                width={500}
                height={350}
                className={styles.screenshotImage}
              />
            </div>
          </div>

          {/* AI Agent 层 */}
          <div
            className={`${styles.widget} ${activeWidget === 1 ? styles.active : ''}`}
            onMouseEnter={() => setActiveWidget(1)}
            onMouseLeave={() => setActiveWidget(null)}
          >
            <div className={styles.widgetHeader}>
              <h3 className={styles.widgetTitle}>
                <span className={styles.widgetTitleAccent}>AI Agent</span> Layer
              </h3>
              <p className={styles.widgetDescription}>
                Powerful collaboration between local and cloud-based models to transcribe, summarize, and structure audio data with exceptional accuracy.
              </p>
            </div>
            <div className={styles.widgetContent}>
              <Image
                src="/globe.svg"
                alt="AI Agent Layer"
                width={500}
                height={350}
                className={styles.screenshotImage}
              />
            </div>
          </div>

          {/* DSP 层 */}
          <div
            className={`${styles.widget} ${activeWidget === 2 ? styles.active : ''}`}
            onMouseEnter={() => setActiveWidget(2)}
            onMouseLeave={() => setActiveWidget(null)}
          >
            <div className={styles.widgetHeader}>
              <h3 className={styles.widgetTitle}>
                <span className={styles.widgetTitleAccent}>Data Service</span> Platform
              </h3>
              <p className={styles.widgetDescription}>
                Sophisticated infrastructure handling task distribution, quality verification, and transaction matching to ensure optimal performance and data integrity.
              </p>
            </div>
            <div className={styles.widgetContent}>
              <Image
                src="/file.svg"
                alt="Data Service Platform"
                width={500}
                height={350}
                className={styles.screenshotImage}
              />
            </div>
          </div>

          {/* 区块链基础设施层 */}
          <div
            className={`${styles.widget} ${styles.widgetLarge} ${activeWidget === 3 ? styles.active : ''}`}
            onMouseEnter={() => setActiveWidget(3)}
            onMouseLeave={() => setActiveWidget(null)}
          >
            <div className={styles.widgetHeader}>
              <h3 className={styles.widgetTitle}>
                <span className={styles.widgetTitleAccent}>Blockchain</span> Infrastructure Layer
              </h3>
              <p className={styles.widgetDescription}>
                Trustless environment for data rights confirmation, secure transactions, incentive distribution, and decentralized governance with complete transparency.
              </p>
            </div>
            <div className={styles.widgetContent}>
              <Image
                src="/window.svg"
                alt="Blockchain Infrastructure Layer"
                width={700}
                height={400}
                className={styles.screenshotImage}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
