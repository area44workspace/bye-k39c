import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goodbye K39C",
  description: "Tiệc chia tay y đa khoa K39C HPMU",
  openGraph: {
    title: "Goodbye K39C",
    description: "Tiệc chia tay y đa khoa K39C HPMU",
    url: "https://goodbyek39c.netlify.app",
    siteName: "Goodbye K39C",
    images: [
      {
        url: "https://goodbyek39c.netlify.app/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "vi-VN",
    type: "website",
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
  twitter: {
    title: "Goodbye K39C",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
