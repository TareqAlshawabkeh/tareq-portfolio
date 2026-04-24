import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter(
  {
    subsets: [
      "latin",
    ],
  },
);

// SEO and Open Graph Configuration
export const metadata: Metadata =
  {
    title:
      "Eng. Tareq Shawabkeh | AI & Systems Engineer",
    description:
      "Computer Engineering Graduate & AI Developer specializing in real-time systems, machine learning, and scalable architectures.",
    openGraph: {
      title:
        "Eng. Tareq Shawabkeh | Portfolio",
      description:
        "Computer Engineering Graduate & AI Developer specializing in real-time systems and scalable architectures. First Place Winner of NTP 2025.",
      url: "https://tareqshawabkeh.vercel.app", // سنقوم بتحديث هذا الرابط لاحقاً بعد رفع الموقع
      siteName:
        "Tareq Shawabkeh Portfolio",
      images: [
        {
          url: "/og-image.jpg", // مسار الصورة التي ستظهر في منصات التواصل
          width: 1200,
          height: 630,
          alt: "Eng. Tareq Shawabkeh - AI & Systems Engineer",
        },
      ],
      locale:
        "en_US",
      type: "website",
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
      className="scroll-smooth"
    >
      <body
        className={`${inter.className} bg-slate-900 text-slate-100 antialiased pt-16`}
      >
        <Navbar />
        {children}
        {/* كود التتبع تبع جوجل */}
        <GoogleAnalytics gaId="G-0NDCX352PW" />
      </body>
    </html>
  );
}
