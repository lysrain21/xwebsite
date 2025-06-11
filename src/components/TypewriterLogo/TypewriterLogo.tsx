"use client";
import { useEffect, useState, useCallback } from 'react';
import styles from './TypewriterLogo.module.css';

interface TypewriterLogoProps {
    text: string;
    speed?: number;
    pauseTime?: number; // 打字完成后暂停的时间（毫秒）
    className?: string;
    autoRestart?: boolean; // 是否自动重新开始
}

export default function TypewriterLogo({
    text,
    speed = 150,
    pauseTime = 2000,
    className = '',
    autoRestart = true
}: TypewriterLogoProps) {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    // 使用useCallback包装restartTyping函数，避免依赖问题
    const restartTyping = useCallback(() => {
        setDisplayText('');
        setIsTyping(true);
        setIsPaused(false);
    }, []);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isTyping && !isPaused) {
            if (displayText.length < text.length) {
                // 继续打字
                timeout = setTimeout(() => {
                    setDisplayText(text.substring(0, displayText.length + 1));
                }, speed);
            } else {
                // 打字完成
                setIsTyping(false);
                setIsPaused(true);

                // 如果启用自动重复，等待指定时间后重新开始
                if (autoRestart) {
                    timeout = setTimeout(() => {
                        restartTyping();
                    }, pauseTime);
                }
            }
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [displayText, text, speed, isPaused, isTyping, pauseTime, autoRestart, restartTyping]);

    return (
        <div
            className={`${styles.typewriterContainer} ${className}`}
            onClick={restartTyping}
            title="Click to restart animation"
        >
            <div className={styles.textWrapper}>
                <span className={styles.text}>{displayText}</span>
                <span className={`${styles.cursor} ${!isTyping && styles.blinking}`}></span>
            </div>
        </div>
    );
}