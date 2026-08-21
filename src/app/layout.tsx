import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Dharitri Panchal — Technical Delivery, Project Leadership & Product";
const description =
  "Dharitri Panchal is a technical delivery leader with 7+ years taking SaaS, marketplace, and regulated e-commerce software from ambiguous requirements to production.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dharitripanchal.dev"),
  title,
  description,
  keywords: [
    "Dharitri Panchal",
    "IT Project Manager",
    "Technical Delivery Manager",
    "Project Leadership",
    "Technical Delivery",
    "Posora",
  ],
  authors: [{ name: "Dharitri Panchal" }],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Dharitri Panchal",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
