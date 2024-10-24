import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Invest News",
  description:
    " Informação inteligente para suas melhores decisões financeiras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="dark:bg-gray-400">
            <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
