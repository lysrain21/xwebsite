'use client';
import styles from './page.module.css';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // 初始状态设为null以检测初始加载
  const [theme, setTheme] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroStyle, setHeroStyle] = useState({});
  // 添加移动菜单状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 添加引用来跟踪菜单和菜单按钮
  const menuButtonRef = useRef(null);
  const mobileNavRef = useRef(null);

  // 切换移动菜单状态
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // 初始化主题
  useEffect(() => {
    // 仅在客户端执行
    if (typeof window === 'undefined') return;

    // 从localStorage获取保存的主题，或使用系统偏好
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let initialTheme;
    if (savedTheme) {
      initialTheme = savedTheme;
    } else {
      initialTheme = prefersDark ? 'dark' : 'light';
    }

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    // 仅在客户端执行
    if (typeof window === 'undefined') return;

    // 页面加载动画触发
    setIsLoaded(true);

    // 平滑淡入所有元素
    const elements = document.querySelectorAll('.fadeElement');
    elements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 120 * index); // 稍微延长时间，使动画更加连贯
    });

    // 添加初始动画类
    document.body.classList.add(styles.pageLoaded);

    // 移除加载类
    setTimeout(() => {
      document.body.classList.remove(styles.pageLoaded);
    }, 1500);
  }, []);

  // 修改鼠标移动效果
  useEffect(() => {
    // 仅在客户端执行
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      // 进一步降低敏感度，使效果更微妙
      const dampingFactor = 600;

      // 使用requestAnimationFrame并加入缓动效果
      requestAnimationFrame(() => {
        // 计算鼠标位置相对于窗口中心的偏移量
        const xOffset = (e.clientX - window.innerWidth / 2) / dampingFactor;
        const yOffset = (e.clientY - window.innerHeight / 2) / dampingFactor;

        // 设置平滑过渡
        setHeroStyle({
          transform: `perspective(2000px) 
                      rotateX(${-yOffset}deg) 
                      rotateY(${xOffset}deg)
                      translateZ(0)`,
          transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)' // 更平滑的过渡曲线
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 处理移动菜单打开/关闭效果
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 当菜单打开时，阻止页面滚动
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
      // 获取菜单高度并应用
      const mobileNavElement = document.querySelector(`.${styles.mobileNav}`);
      if (mobileNavElement) {
        const contentHeight = mobileNavElement.scrollHeight;
        (mobileNavElement as HTMLElement).style.height = `${contentHeight}px`;
      }
    } else {
      document.body.classList.remove('menu-open');
      // 重置高度为0
      const mobileNavElement = document.querySelector(`.${styles.mobileNav}`);
      if (mobileNavElement) {
        (mobileNavElement as HTMLElement).style.height = '0';
      }
    }

    // 添加点击外部关闭菜单
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) {
        const menuButton = menuButtonRef.current;
        const mobileNav = mobileNavRef.current;

        if (
          menuButton &&
          mobileNav &&
          !(menuButton as Node).contains(event.target as Node) &&
          !(mobileNav as Node).contains(event.target as Node)
        ) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    if (!theme) return; // 确保theme已初始化

    // 添加过渡类
    document.body.classList.add(styles.themeTransition);

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);

    // 保存到localStorage
    localStorage.setItem('theme', newTheme);

    // 过渡结束后移除类
    setTimeout(() => {
      document.body.classList.remove(styles.themeTransition);
    }, 1000);
  };

  // 确保theme已初始化才渲染界面
  if (theme === null) {
    return <div className={styles.loading}></div>; // 简单的加载状态
  }

  const year = new Date().getFullYear();

  return (
    <div className={styles.main}>
      <div className={styles.audioWaveBackground}></div>

      {/* 集成式单页容器 */}
      <div className={`${styles.singlePageContainer} ${isLoaded ? styles.loaded : ''}`}>
        {/* 导航栏部分 - 集成自Header组件 */}
        <header className={`${styles.headerBar} fadeElement`}>
          <div className={styles.headerLeft}>
            <span className={styles.logoText}>xKnown.ai</span>
            {/* 仅在非移动端显示的导航链接 */}
            <div className={styles.desktopNav}>
              <a href="https://xknown-ai.gitbook.io/xknown.ai-docs/" className={styles.navLink}>Docs</a>
              <a href="https://app.virtuals.io/geneses" className={styles.navLink}>$xKnown</a>
            </div>
            {/* 移动端汉堡菜单按钮 */}
            <button
              ref={menuButtonRef}
              className={styles.menuButton}
              aria-label="Menu"
              onClick={(e) => {
                e.stopPropagation(); // 防止事件冒泡
                toggleMobileMenu();
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d={mobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* 中间部分 - 主题切换和社交链接 */}
          <div className={styles.headerCenter}>
            <button onClick={toggleTheme} className={styles.themeToggle}>
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            <div className={styles.socialLinks}>
              <a href="https://x.com/xKnownai" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://t.me/xknownai_announcements" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.03 6.502c.103.344.39.609.741.702a1.137 1.137 0 0 0 .909-.205l2.962-2.568 4.815 3.51a2.128 2.128 0 0 0 1.253.41c.904 0 1.733-.574 2.025-1.449l5.067-14.993a2.045 2.045 0 0 0-.53-1.899zM7.926 15.226l-.545 5.436L5.5 14.264l10.55-6.46-8.124 7.422zm9.85 5.149-5.566-4.048 9.121-8.332-3.555 12.38z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 右侧部分 */}
          <div className={styles.headerRight}>
            <p className={styles.motto}>Valuing Voice, Powering Ethical AI</p>
            <button className={styles.ctaButton}>Launch soon</button>
          </div>
        </header>

        {/* 添加移动导航菜单 */}
        <div
          ref={mobileNavRef}
          className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}
        >
          <a href="https://xknown-ai.gitbook.io/xknown.ai-docs/" className={styles.mobileNavLink}>Docs</a>
          <a href="https://app.virtuals.io/geneses" className={styles.mobileNavLink}>$xKnown</a>
          <a href="#" className={styles.mobileNavLink}>Launch soon</a>

          {/* 社交媒体链接 */}
          <div className={styles.mobileSocialLinks}>
            <a href="https://x.com/xKnownai" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://t.me/xknownai_announcements" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.03 6.502c.103.344.39.609.741.702a1.137 1.137 0 0 0 .909-.205l2.962-2.568 4.815 3.51a2.128 2.128 0 0 0 1.253.41c.904 0 1.733-.574 2.025-1.449l5.067-14.993a2.045 2.045 0 0 0-.53-1.899zM7.926 15.226l-.545 5.436L5.5 14.264l10.55-6.46-8.124 7.422zm9.85 5.149-5.566-4.048 9.121-8.332-3.555 12.38z" />
              </svg>
            </a>
          </div>

          {/* 移动端主题切换 */}
          <div className={styles.mobileThemeToggle}>
            <button onClick={toggleTheme} aria-label="Toggle theme" className={styles.mobileThemeButton}>
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
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className={styles.heroContainer}>
          <h1 className={`${styles.heroTitle} fadeElement`} style={heroStyle}>
            THE PROTOCOL TO<br />VALUE HUMAN VOICE
          </h1>
          <p className={`${styles.subTitle} fadeElement`}>
            Voice data is scattered, unused, and undervalued. But it doesn&apos;t have to be.
            For the first time, you can upload, evaluate, and earn on a single intelligent agent layer.
          </p>
        </div>

        {/* 简化页脚 */}
        <footer className={styles.footerBar}>
          <div className={styles.footerLeft}>
            <span className={styles.copyright}>© {year} xKnown.ai All Rights Reserved.</span>
          </div>
          <div className={styles.footerRight}>
            <span className={styles.currentTheme}>Current theme: {theme}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}