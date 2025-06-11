"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TypewriterLogo from '../TypewriterLogo/TypewriterLogo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 处理滚动事件
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    return (
        <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navbarContent}>
                <div className={styles.leftSection}>
                    <Link href="/" className={styles.logo}>
                        <TypewriterLogo
                            text="XKNOWN.AI"
                            speed={120}
                            pauseTime={2000}
                            autoRestart={true}
                            className={styles.navbarTypewriter}
                        />
                    </Link>
                </div>

                <div className={styles.centerSection}>
                    <nav className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                        <ul>
                            <li>
                                <Link href="/stats">Stats</Link>
                            </li>
                            <li>
                                <Link href="/docs">Docs</Link>
                            </li>
                            <li>
                                <Link href="/ecosystem">Ecosystem</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.rightSection}>
                    <div className={styles.navSocialIcons}>
                        <Link href="https://x.com/xKnownai" aria-label="X">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                        <Link href="https://t.me/xknownai_announcements" aria-label="Telegram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.97 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.38-.27-2.05-.49-.83-.28-1.49-.42-1.43-.89.03-.24.29-.49.79-.74 3.07-1.34 5.12-2.22 6.16-2.66 2.93-1.24 3.54-1.46 3.94-1.46.09 0 .28.02.41.12.11.08.14.2.15.29.02.27-.06.8-.08.93z" />
                            </svg>
                        </Link>
                    </div>
                    <Link href="/app" className={styles.launchAppButton}>
                        Launch App
                    </Link>
                    <div className={styles.themeToggleWrapper}>
                        <ThemeToggle />
                    </div>

                    {/* 汉堡菜单按钮 - 仅在移动端显示 */}
                    <button
                        className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* 移动菜单 */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <nav>
                        <ul>
                            <li><Link href="/stats" onClick={() => setIsMenuOpen(false)}>Stats</Link></li>
                            <li><Link href="/docs" onClick={() => setIsMenuOpen(false)}>Docs</Link></li>
                            <li><Link href="/ecosystem" onClick={() => setIsMenuOpen(false)}>Ecosystem</Link></li>
                            <li><Link href="/app" onClick={() => setIsMenuOpen(false)} className={styles.mobileLaunchApp}>Launch App</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}