import type { Metadata, Viewport } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import SEOHead from "../components/SEOHead";
import { profile } from "../data/projects";

const display = Syne({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

// Runs before paint so the saved theme never flashes the wrong palette.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark-theme')}catch(e){}`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e4e5ec" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1d23" },
  ],
};

const SITE = profile.url;
const TITLE = 'Bimme Audrey Zun — Frontend Developer in Yaoundé, Cameroon';
const DESCRIPTION =
  'Bimme Audrey Zun is a frontend web developer in Yaoundé, Cameroon, building fast, responsive websites with React and Next.js. Selected work: DANIHF, CAPVETS, CJ Visuals and Anexiums.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: '%s — Bimme Audrey Zun',
  },
  description: DESCRIPTION,
  applicationName: 'Bimme Audrey Zun',
  keywords: [
    'Bimme Audrey Zun',
    'Bimme Audrey',
    'Audrey Bimme',
    'Bimme',
    'Frontend Developer Cameroon',
    'Web Developer Yaoundé',
    'React Developer Cameroon',
    'Next.js Developer Cameroon',
  ],
  authors: [{ name: 'Bimme Audrey Zun', url: SITE }],
  creator: 'Bimme Audrey Zun',
  publisher: 'Bimme Audrey Zun',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    firstName: 'Bimme Audrey',
    lastName: 'Zun',
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    siteName: 'Bimme Audrey Zun',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@small_bimme',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Set GOOGLE_SITE_VERIFICATION in Vercel to the code from Google Search Console's "HTML tag" method.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <SEOHead />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
