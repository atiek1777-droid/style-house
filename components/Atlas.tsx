"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { styles, pad } from "@/lib/site";

export default function Atlas() {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = styles[i];

  const go = (n: number) => {
    const k = (n + styles.length) % styles.length;
    setI(k);
    refs.current[k]?.focus();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowLeft") { e.preventDefault(); go(i + 1); }
    if (e.key === "ArrowUp" || e.key === "ArrowRight") { e.preventDefault(); go(i - 1); }
    if (e.key === "Home") { e.preventDefault(); go(0); }
    if (e.key === "End") { e.preventDefault(); go(styles.length - 1); }
  };

  return (
    <section id="styles" aria-labelledby="styles-title" className="scroll-mt-4 bg-paper pb-24 pt-32 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p dir="ltr" className="text-end font-serif text-xl italic text-sage">The pleat atlas</p>
        <h2 id="styles-title" className="mt-2 max-w-2xl font-display text-4xl font-bold leading-[1.45] text-ink sm:text-6xl">
          التصميم في التفاصيل
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-9">
          طريقة تعليق الستارة تغيّر شكلها بالكامل. تصفّح اثني عشر نمطاً واختر ما يناسب غرفتك.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* التبويبات */}
          <div
            role="tablist"
            aria-label="أنماط تعليق الستائر"
            aria-orientation="vertical"
            onKeyDown={onKey}
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {styles.map((st, k) => {
              const on = k === i;
              return (
                <button
                  key={st.n}
                  ref={(el) => { refs.current[k] = el; }}
                  role="tab"
                  id={`tab-${st.n}`}
                  aria-selected={on}
                  aria-controls="atlas-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setI(k)}
                  className={`group flex shrink-0 items-center gap-4 border text-start transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage lg:w-full lg:border-0 lg:border-t lg:border-ink/15 ${
                    on ? "border-sage-deep bg-sage-deep text-paper" : "border-ink/20 hover:bg-linen"
                  } flex-col p-2 lg:flex-row lg:px-3 lg:py-3`}
                >
                  <span className="relative block h-16 w-24 shrink-0 overflow-hidden bg-linen lg:h-12 lg:w-[4.5rem]">
                    <Image src={`/images/t${pad(st.n)}.webp`} alt="" fill sizes="100px" className="object-cover" />
                  </span>
                  <span dir="ltr" className="hidden font-serif text-lg italic opacity-70 lg:block lg:w-8">{pad(st.n)}</span>
                  <span className="flex-1 pe-1 lg:pe-0">
                    <span className="block font-display text-xl font-bold leading-tight">{st.ar}</span>
                    <span className="block font-serif text-sm italic opacity-70">{st.en}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* اللوحة */}
          <div id="atlas-panel" role="tabpanel" aria-labelledby={`tab-${s.n}`} tabIndex={0} className="lg:sticky lg:top-6 lg:self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage">
            <div className="relative aspect-[5/4] overflow-hidden bg-linen sm:aspect-[4/3]">
              {styles.map((st, k) => (
                <Image
                  key={st.n}
                  src={`/images/p${pad(st.n)}.webp`}
                  alt={k === i ? `ستارة بنمط ${st.ar} (${st.en})` : ""}
                  fill
                  sizes="(min-width:1024px) 640px, 92vw"
                  loading={k === 0 ? "eager" : "lazy"}
                  className={`object-cover object-top transition-opacity duration-500 motion-reduce:transition-none ${k === i ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              <p dir="ltr" className="absolute bottom-4 start-4 border border-dashed border-ink/50 bg-chalk px-3 py-1.5 font-serif text-base italic text-ink">
                {pad(s.n)} — {s.en}
              </p>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8">
              <div>
                <h3 className="font-display text-4xl font-bold leading-[1.4] text-ink">{s.ar}</h3>
                <p className="mt-1 text-lg leading-8">{s.text}</p>
              </div>
              <p className="border-t border-ink/20 pt-3 text-sm sm:border-0 sm:pt-0">
                <span className="block font-bold text-ink">مناسب لـ</span>
                {s.fit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
