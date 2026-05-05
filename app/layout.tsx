import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
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
    "زهرة، زهرة المرشدي، العلمين الجديدة، كمباوند، شاليه، شقق للبيع، الساحل الشمالي، استلام فوري، تقسيط، مبيعات زهرة، اسعار زهرة، مبيعات معمار المرشدي، رقم مبيعات زهرة العلمين الجديدة، اسعار ومساحات زهرة الساحل الشمالي، رقم مبيعات مرشدي جروب، مرشدي جروب، زهرة الساحل الشمالي",
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
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2P72KRF');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Google Ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18136608380"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18136608380');
        `}
      </Script>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TWF33C8RJ9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TWF33C8RJ9');
        `}
      </Script>
      <body className="bg-[#FAFAF8] text-[#1a1a1a] antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2P72KRF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
