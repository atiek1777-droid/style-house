import Image from "next/image";
import { site, waLink, telHref } from "@/lib/site";
import { Phone, WhatsApp } from "./icons";
import Logo from "./Logo";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage";

export default function Hero() {
  return (
    <header id="top" className="relative overflow-clip bg-paper text-ink">
      <div aria-hidden className="anim-ruler ruler absolute inset-x-0 top-0 text-ink/40" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <nav aria-label="التنقل الرئيسي" className="flex items-center justify-between py-7">
          <a href="#top" aria-label={site.nameAr} className={focus}><Logo /></a>
          <ul className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
            {[["#styles", "الأنماط"], ["#design", "صمّم ستارتك"], ["#works", "أعمالنا"], ["#services", "خدماتنا"], ["#contact", "تواصل"]].map(([h, t]) => (
              <li key={h}><a href={h} className={`hover:text-sage ${focus}`}>{t}</a></li>
            ))}
          </ul>
          <a href={waLink()} className={`inline-flex min-h-11 items-center gap-2 rounded-full bg-sage-deep px-5 text-sm font-bold text-paper hover:bg-sage ${focus}`}>
            <WhatsApp className="size-5" /> واتساب
          </a>
        </nav>

        <div className="grid items-center gap-14 pb-20 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-12">
          <div>
            <p className="anim-rise text-end font-serif text-xl italic text-sage" dir="ltr" style={{ animationDelay: "0.3s" }}>
              Jeddah · Made to measure
            </p>
            <h1 className="anim-rise mt-3 font-display text-[3.2rem] font-bold leading-[1.35] tracking-normal text-ink sm:text-7xl lg:text-[5.4rem]" style={{ animationDelay: "0.45s" }}>
              {site.tagline}
            </h1>
            <p className="anim-rise mt-6 max-w-lg text-lg leading-9" style={{ animationDelay: "0.6s" }}>
              ستائر مفصّلة بالمقاس: نصمّم ونفصّل ونركّب جميع أنواع الستائر، ونجدّد الكنب والمفروشات، في {site.city} ({site.district}).
            </p>
            <div className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5" style={{ animationDelay: "0.75s" }}>
              <a href="#design" className={`inline-flex min-h-14 items-center justify-center rounded-full bg-sage-deep px-9 text-base font-bold text-paper transition hover:bg-sage ${focus}`}>
                صمّم ستارتك الآن
              </a>
              <a href={telHref} className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-ink/30 px-7 text-base font-bold hover:bg-ink/5 ${focus}`}>
                <Phone className="size-5" />
                <span dir="ltr" className="font-serif text-2xl tracking-wide">{site.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="anim-rise relative ms-auto w-[78%]" style={{ animationDelay: "0.5s" }}>
              <div className="relative aspect-[3/4] overflow-hidden bg-linen">
                <Image src="/images/p01.webp" alt="ستارة ويفي بلون عاجي بطيات منتظمة على سكة" fill priority sizes="(min-width:1024px) 380px, 70vw" className="object-cover" />
              </div>
              <div aria-hidden className="ruler-v absolute -start-5 inset-y-0 text-ink/45" />
              <p dir="ltr" className="absolute top-3 end-3 border border-dashed border-ink/50 bg-chalk px-3 py-1.5 font-serif text-sm italic">
                01 — Ripple fold
              </p>
            </div>
            <div className="anim-settle absolute -bottom-10 start-0 w-[46%] border-[6px] border-paper bg-paper shadow-[0_18px_40px_-18px_rgba(31,35,38,0.5)]">
              <div className="relative aspect-[6/5] overflow-hidden">
                <Image src="/images/own-c-detail.webp" alt="تفصيل حافة مطرزة على ستارة ويفي مع شيفون" fill priority sizes="200px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
