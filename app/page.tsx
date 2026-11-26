import Hero from "@/components/Hero";
import Atlas from "@/components/Atlas";
import Designer from "@/components/Designer";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import StickyCta from "@/components/StickyCta";
import { site } from "@/lib/site";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: site.nameAr,
    alternateName: site.nameEn,
    slogan: site.tagline,
    url: site.url,
    telephone: `+${site.phoneIntl}`,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.district, addressCountry: "SA" },
    hasMap: site.mapsUrl,
  };
  return (
    <>
      <Hero />
      <main>
        <Atlas />
        <Designer />
        <Works />
        <Services />
        <Contact />
      </main>
      <StickyCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
