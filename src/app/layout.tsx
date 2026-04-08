import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Single font for better performance
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vidyadayini - Master Your Board Exams with India's Finest Educators",
    template: "%s | Vidyadayini",
  },
  description: "Live classes, structured courses, and personalized learning for Bihar Board, UP Board, CBSE, MP Board & more. Trusted by 2,50,000+ students across India. संकल्प से सिद्धि तक — हर सपना होगा साकार",
  keywords: "Vidyadayini, board exam preparation, online coaching, Bihar Board, UP Board, CBSE, live classes, test series, board exam 2026, विद्यादायिनी",
  authors: [{ name: "Vidyadayini" }],
  creator: "Vidyadayini",
  publisher: "Vidyadayini",
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
  alternates: {
    canonical: "https://vidyadayini.com",
  },
  openGraph: {
    title: "Vidyadayini - Master Your Board Exams",
    description: "Interactive live classes, structured curriculum, and customized learning paths — delivered in your preferred language.",
    url: "https://vidyadayini.com",
    siteName: "Vidyadayini",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vidyadayini - Board Exam Preparation Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidyadayini - Board Exam Preparation",
    description: "From Determination to Achievement — Every Dream Will Come True",
    images: ["/twitter-image.jpg"],
    creator: "@vidyadayini",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="geo.region" content="IN" />
        <meta name="application-name" content="Vidyadayini" />
        <meta name="apple-mobile-web-app-title" content="Vidyadayini" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Vidyadayini",
              alternateName: "विद्यादायिनी",
              url: "https://vidyadayini.com",
              logo: "https://vidyadayini.com/logo.png",
              sameAs: [
                "https://www.facebook.com/vidyadayini",
                "https://www.instagram.com/vidyadayini",
                "https://www.youtube.com/@vidyadayini",
                "https://twitter.com/vidyadayini",
              ],
              description: "India's leading platform for board exam preparation with live classes and expert teachers.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "25000",
                bestRating: "5",
                worstRating: "1",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Vidyadayini",
              url: "https://vidyadayini.com",
              potentialAction: {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://vidyadayini.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
            }),
          }}
        />
      </head>
      <body className="bg-gradient-to-b from-gray-50 to-white antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}