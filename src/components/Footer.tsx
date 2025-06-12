'use client';

import styles from './Footer.module.css';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
    const { theme } = useTheme();
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <div className={styles.copyright}>
                    <p>© {year} xKnown.ai</p>
                    <p>All Rights Reserved.</p>
                </div>
            </div>

            <div className={styles.center}>
                <div className={styles.system}>
                    <p>Current theme: {theme === 'light' ? 'Light' : 'Dark'}</p>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.linkGroup}>
                    <a href="#" className={styles.link}>Privacy Policy</a>
                    <a href="#" className={styles.link}>Terms of Use</a>
                </div>
                <div className={styles.linkGroup}>
                    <a href="#" className={styles.link}>About Us</a>
                    <a href="#" className={styles.link}>Contact Us</a>
                </div>
                <div className={styles.linkGroup}>
                    <a href="#" className={styles.link}>Whitepaper</a>
                    <a href="https://x.com/xKnownai" className={styles.link}>Twitter</a>
                </div>
            </div>
        </footer>
    );
}