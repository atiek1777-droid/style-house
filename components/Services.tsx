import Image from "next/image";
import { services, steps, why } from "@/lib/site";
import { Arrow } from "./icons";

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 border-b border-ink/20">
      {items.map((t) => (
        <li key={t} className="flex items-center justify-between gap-4 border-t border-ink/20 py-4 text-lg font-medium text-ink">
          {t}
          <Arrow className="size-5 shrink-0 text-sage" />
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  return (
    <>
      <section id="services" aria-labelledby="services-title" className="scroll-mt-4 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p dir="ltr" className="text-end font-serif text-xl italic text-sage">What we make</p>
          <h2 id="services-title" className="mt-2 font-display text-4xl font-bold leading-[1.45] text-ink sm:text-6xl">خدماتنا</h2>

          <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="grid gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[16rem] overflow-hidden bg-linen sm:max-w-none">
                <Image src="/images/p05.webp" alt="ستارتان بنمط بنش بلون رمادي فاتح بجانب نافذة" fill sizes="(min-width:1024px) 220px, 60vw" className="object-cover" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold leading-[1.5] text-ink">الستائر</h3>
                <p className="mt-1">تصميم وتفصيل وتركيب بالمقاس، بخيارات من الأقمشة والخامات والألوان.</p>
                <List items={services.curtains} />
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl font-bold leading-[1.5] text-ink">الكنب والمفروشات</h3>
              <p className="mt-1">تفصيل وتجديد وتنجيد، بتصاميم عصرية تناسب ديكور منزلك.</p>
              <List items={services.sofas} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="steps-title" className="bg-linen py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 id="steps-title" className="font-display text-4xl font-bold leading-[1.45] text-ink sm:text-5xl">من القياس إلى التركيب</h2>
          <div aria-hidden className="ruler mt-8 text-ink/40" />
          <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span dir="ltr" className="font-serif text-5xl italic text-sage">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink">{s.t}</h3>
                <p className="mt-1 leading-8">{s.d}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-24 font-display text-3xl font-bold leading-[1.45] text-ink sm:text-4xl">لماذا ستايل هاوس؟</h2>
          <ul className="mt-8 grid gap-px bg-ink/15 sm:grid-cols-2">
            {why.map((w) => (
              <li key={w.t} className="bg-linen p-6">
                <h3 className="font-display text-2xl font-bold text-ink">{w.t}</h3>
                <p className="mt-1">{w.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
