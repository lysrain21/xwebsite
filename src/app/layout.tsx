import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeProvider';

export const metadata: Metadata = {
  title: 'xKnown.ai - Voice Data Ecosystem',
  description: 'A comprehensive ecosystem for capturing, processing, and monetizing voice data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}