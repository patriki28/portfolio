import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SanityLive } from '@/sanity/live';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Patrick Diesta',
    description:
        'Motivated and passionate software developer with a strong foundation in Web Development. Enthusiastic about building impactful solutions and exploring emerging technologies. Skilled in programming, problem-solving, and eager to contribute to innovative software projects.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </>
                </ThemeProvider>
                <SanityLive />
            </body>
        </html>
    );
}
