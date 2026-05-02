import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zahramorshedy.com"),
  title: "زهرة المرشدي | كمباوند العلمين الجديدة",
  description:
    "زهرة المرشدي كمباوند فاخر في العلمين الجديدة. شاليهات متشطبة بالكامل مطلة على اللاجون وحمام السباحة. استلام فوري ونظام سداد مرن.",
  keywords:
    "زهرة، زهرة المرشدي، العلمين الجديدة، كمباوند، شاليه، شقق للبيع، الساحل الشمالي، استلام فوري، تقسيط",
  openGraph: {
    title: "زهرة المرشدي | كمباوند العلمين الجديدة",
    description:
      "زهرة المرشدي كمباوند فاخر في العلمين الجديدة. شاليهات متشطبة بالكامل مطلة على اللاجون وحمام السباحة. استلام فوري ونظام سداد مرن.",
    images: [{ url: "/assets/images/hero.jpg" }],
    locale: "ar_EG",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "زهرة المرشدي",
  description:
    "كمباوند فاخر في قلب العلمين الجديدة. شاليهات متشطبة بالكامل مطلة على اللاجون وحمام السباحة.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "العلمين الجديدة",
    addressCountry: "EG",
  },
  telephone: "+201023665527",
  image: "/assets/images/hero.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAFAF8] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
