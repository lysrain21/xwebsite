"use client";

import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "@/styles/typography.css"; // 导入新创建的排版样式

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        {/* 修改垂直品牌标识 - 类似Anza网站 */}
        <div className={styles.verticalBrandContainer}>
          <div className={styles.verticalLine}></div>
          <div className={styles.verticalBrand}>
            XKNOWN
          </div>
        </div>

        <h1 className={styles.title}>
          THE NEXT GENERATION OF VOICE DATA COLLECTION AND MONETIZATION
        </h1>

        <p className={styles.description}>
          xKnown.ai is a comprehensive ecosystem for capturing, processing, and monetizing voice data
          through a multi-layered architecture built with privacy and efficiency at its core.
        </p>
      </main>

      <Footer />
    </div>
  );
}
