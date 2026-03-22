import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import SEOHead from "../components/SEOHead";

export const metadata: Metadata = {
  title: {
    default: "Bimme Audrey || Frontend Developer",
    template: "%s | Bimme Audrey"
  },
  description: "Bimme Audrey - Frontend Web Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio of responsive websites, UI/UX designs, and innovative web applications.",
  keywords: [
    "Bimme Audrey",
    "Frontend Developer in Cameroon",
    "Web Developer in Cameroon",
    "React Developer in Cameroon",
    "Next.js Developer in Cameroon",
    "Responsive Web Design in Cameroon",
    "JavaScript Developer in Cameroon",
    "Cameroon Female Developer"
  ],
  authors: [{ name: "Bimme Audrey", url: "https://bimmeaudrey.vercel.app" }],
  creator: "Bimme Audrey",
  publisher: "Bimme Audrey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bimmeaudrey.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bimme Audrey || Frontend Developer",
    description: "Frontend Web Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio of responsive websites and innovative web applications.",
    url: "https://bimmeaudrey.vercel.app",
    siteName: "Bimme Audrey Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "Bimme Audrey - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Bimme Audrey || Frontend Developer",
    description: "Frontend Web Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
