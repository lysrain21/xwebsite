"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.copyright}>© 2025</div>
                <div className={styles.footerLinks}>
                    <Link href="/terms">Genesis Event Terms & Conditions</Link>
                    <Link href="/service">Terms of Service</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>
                <div className={styles.socialLinks}>
                    <Link href="/https://x.com/xKnownai" aria-label="X (Twitter)">
                        <Image src="/x.svg" alt="X" width={20} height={20} />
                    </Link>
                    <Link href="https://t.me/xknownai_announcements" aria-label="Telegram">
                        <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}