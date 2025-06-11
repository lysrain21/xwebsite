"use client";
import Link from 'next/link';
import styles from './Navbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <Link href="/">xKnown.ai</Link>
            </div>
            <div className={styles.links}>
                <Link href="/donate">$xKnown</Link>
                <Link href="/docs">Docs</Link>
                <Link href="/faq">FAQ</Link>
                <ThemeToggle />
                <a href="#" className={styles.downloadBtn}>Launch APP</a>
            </div>
        </nav>
    );
}