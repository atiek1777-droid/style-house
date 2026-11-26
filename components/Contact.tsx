import { site, waLink, telHref } from "@/lib/site";
import { Phone, Pin, WhatsApp } from "./icons";
import Logo from "./Logo";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mist";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-4 bg-ink text-paper">
      <div aria-hidden className="ruler text-paper/30" />
      <div className="mx-auto max-w-5xl px-5 pb-10 pt-24 text-center sm:px-8 sm:pt-32">
        <p dir="ltr" className="text-center font-serif text-xl italic text-mist">Let&rsquo;s measure</p>
        <h2 id="contact-title" className="mt-2 font-display text-4xl font-bold leading-[1.45] sm:text-6xl">ابدأ بقياس نافذتك</h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-9 text-paper/80">
          ستايل هاوس: أناقة تليق بمنزلك. راسلنا أو اتصل وأخبرنا بالمقاس والنمط الذي تفضّله.
        </p>

        <a href={telHref} dir="ltr" aria-label={`اتصل على ${site.phoneDisplay}`} className={`mt-8 inline-block font-serif text-6xl tracking-wide hover:text-mist sm:text-9xl ${focus}`}>
          {site.phoneDisplay}
        </a>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <a href={waLink()} className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-paper px-9 text-base font-bold text-ink hover:bg-mist sm:w-auto ${focus}`}>
            <WhatsApp className="size-6" /> راسلنا على واتساب
          </a>
          <a href={telHref} className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-paper/40 px-9 text-base font-bold hover:bg-paper/10 sm:w-auto ${focus}`}>
            <Phone className="size-5" /> اتصل الآن
          </a>
        </div>

        <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-2 border border-dashed border-paper/35 p-6">
          <Pin className="size-6 text-mist" />
          <p className="font-display text-2xl font-bold">{site.district}، {site.city}</p>
          <p dir="ltr" className="font-serif text-xl tracking-wider text-paper/80">{site.plusCode}</p>
          <a href={site.mapsUrl} className={`mt-1 inline-flex min-h-11 items-center font-bold underline underline-offset-8 hover:text-mist ${focus}`}>افتح الموقع في الخرائط</a>
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-sm leading-8 text-paper/65">
          ستايل هاوس للستائر والكنب في جدة متخصصون في تصميم وتفصيل وتركيب جميع أنواع الستائر: المودرن والكلاسيكية، والكهربائية الذكية وستائر التحكم عن بعد والواي فاي، وستائر الرول والبلاك أوت والشفافة، وستائر المجالس والصالات وغرف النوم. ونقدم كذلك تفصيل وتجديد وتنجيد الكنب والصوفا والمفروشات المنزلية، بجودة خامات ودقة تنفيذ وحلول متكاملة للمنازل والشقق والفلل والمجالس.
        </p>
      </div>

      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-3 border-t border-paper/15 px-5 pb-28 pt-8 text-center sm:px-8 md:pb-10">
        <Logo />
        <p className="text-sm text-paper/70">{site.nameAr}، أناقة تليق بمنزلك</p>
      </footer>
    </section>
  );
}
