import type { Metadata } from "next";
import { League_Spartan, Cardo } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollTracker from "@/components/ScrollTracker";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const cardo = Cardo({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "El Aula Tutoring Services | Lograremos Juntos",
  description:
    "Interactive Spanish tutoring for CSEC & CAPE students. Free resources, private tutoring, revision sessions, and simulator exams.",
  metadataBase: new URL("https://el-aula.com"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "El Aula Tutoring Services",
    description:
      "Interactive Spanish tutoring for CSEC & CAPE students — Lograremos Juntos.",
    url: "https://el-aula.com",
    siteName: "El Aula",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Aula Tutoring Services",
    description: "Spanish tutoring for CSEC & CAPE — Lograremos Juntos.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${cardo.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-serif bg-brand-orange">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <GoogleAnalytics />
        <ScrollTracker />
      </body>
    </html>
  );
}
