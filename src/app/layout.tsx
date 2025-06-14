import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
    title: 'xKnown - Democratizing AI Data Ownership',
    description: 'A research and technology initiative enabling user-centric voice data collection, transcription, and blockchain-based ownership for participatory AI development.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}