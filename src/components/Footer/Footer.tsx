"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* 大型LOGO部分 */}
            <div className={styles.logoSection}>
                <div className={styles.bigLogo}>xKnown</div>
            </div>

            {/* 链接部分 */}
            <div className={styles.footerContent}>

                {/* 社交媒体图标 */}
                <div className={styles.socialIcons}>
                    <Link href="https://x.com/xKnownai" aria-label="X">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                    <Link href="https://t.me/xknownai_announcements" aria-label="Telegram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.97 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.38-.27-2.05-.49-.83-.28-1.49-.42-1.43-.89.03-.24.29-.49.79-.74 3.07-1.34 5.12-2.22 6.16-2.66 2.93-1.24 3.54-1.46 3.94-1.46.09 0 .28.02.41.12.11.08.14.2.15.29.02.27-.06.8-.08.93z" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* 版权信息 */}
            <div className={styles.copyright}>
                <p>© {new Date().getFullYear()} xKnown.AI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;