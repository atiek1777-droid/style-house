import type { Metadata, Viewport } from "next";
import "@fontsource/tajawal/arabic-400.css";
import "@fontsource/tajawal/arabic-500.css";
import "@fontsource/tajawal/arabic-700.css";
import "@fontsource/tajawal/latin-400.css";
import "@fontsource/tajawal/latin-700.css";
import "@fontsource/reem-kufi/arabic-400.css";
import "@fontsource/reem-kufi/arabic-700.css";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "./globals.css";
import { site } from "@/lib/site";

const title = `${site.nameEn} | ${site.nameAr} في ${site.city}`;
const description =
  "ستايل هاوس للستائر والكنب في جدة: تصميم وتفصيل وتركيب جميع أنواع الستائر المودرن والكلاسيكية والكهربائية والرول والبلاك أوت، وتفصيل وتنجيد الكنب والمفروشات. أناقة تليق بمنزلك.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "ar_SA", siteName: site.nameAr, images: [{ url: "/og.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};
export const viewport: Viewport = { themeColor: "#f5f1ea", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-paper font-sans text-[1.05rem] leading-8 text-body antialiased">{children}</body>
    </html>
  );
}
