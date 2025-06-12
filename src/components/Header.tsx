'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [mobileMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logo}>xKnown.ai</div>
                <nav className={styles.nav}>
                    <a href="#" className={styles.navLink}>Docs</a>
                    <a href="#" className={styles.navLink}>$xKnown</a>
                </nav>
                <button
                    className={styles.menuButton}
                    aria-label="Menu"
                    onClick={toggleMobileMenu}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>

            <div className={styles.center}>
                <div className={styles.iconContainer}>
                    <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'light' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>

                    <a href="https://x.com/xKnownai" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    <a href="https://t.me/xknownai_announcements" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.03 6.502c.103.344.39.609.741.702a1.137 1.137 0 0 0 .909-.205l2.962-2.568 4.815 3.51a2.128 2.128 0 0 0 1.253.41c.904 0 1.733-.574 2.025-1.449l5.067-14.993a2.045 2.045 0 0 0-.53-1.899zM7.926 15.226l-.545 5.436L5.5 14.264l10.55-6.46-8.124 7.422zm9.85 5.149-5.566-4.048 9.121-8.332-3.555 12.38z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className={styles.right}>
                <p className={styles.motto}>Valuing Voice, Powering Ethical AI</p>
                <a href="#" className={styles.learnMoreButton}>Launch APP</a>
            </div>

            {/* 移动导航菜单 - 增强版 */}
            <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                <a href="#" className={styles.mobileNavLink}>Docs</a>
                <a href="#" className={styles.mobileNavLink}>$xKnown</a>
                <a href="#" className={styles.mobileNavLink}>Launch APP</a>

                {/* 社交媒体链接 */}
                <div className={styles.mobileSocialLinks}>
                    <a href="https://x.com/xKnownai" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                    <a href="https://t.me/xknownai_announcements" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.03 6.502c.103.344.39.609.741.702a1.137 1.137 0 0 0 .909-.205l2.962-2.568 4.815 3.51a2.128 2.128 0 0 0 1.253.41c.904 0 1.733-.574 2.025-1.449l5.067-14.993a2.045 2.045 0 0 0-.53-1.899zM7.926 15.226l-.545 5.436L5.5 14.264l10.55-6.46-8.124 7.422zm9.85 5.149-5.566-4.048 9.121-8.332-3.555 12.38z" />
                        </svg>
                    </a>
                </div>

                {/* 主题切换 */}
                <div className={styles.mobileThemeToggle}>
                    <button onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
                    </button>
                </div>
            </div>
        </header>
    );
}