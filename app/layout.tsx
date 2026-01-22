import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SummaryButton from "./components/SummaryButton";
import { MobileMenuProvider } from "./components/MobileMenuContext"; // <CHANGE> added import
import { Poppins } from "next/font/google";
import { Outfit } from "next/font/google";
import BannerAdsTop from "./components/BannersAdsTop";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nepal Voices - Trusted News from Nepal",
  description: "Independent journalism and latest news from Nepal",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}  ${poppins.variable} ${outfit.variable} antialiased bg-white text-black`}
      >
        {/* <CHANGE> wrapped everything with MobileMenuProvider */}
        <MobileMenuProvider>
          {/* FIXED HEADER */}
          <Header />
          <div className="h-5 md:h-5" />

          {/* <BannerAdsTop/> */}
          {/* CONTENT OFFSET FOR FIXED HEADER */}
          <main className="pt -28 md:pt-32 lg:pt-36 min-h-screen">
            {children}
          </main>

          {/* FLOATING SUMMARY BUTTON */}
          <SummaryButton />
          <Footer />
        </MobileMenuProvider>
      </body>
    </html>
  );
}