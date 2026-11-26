import Image from "next/image";
import { works } from "@/lib/site";

export default function Works() {
  const items = [...works, { img: "p07", w: 900, h: 952, cap: "بنسل مع رباط جانبي وشيفون", span: "col-span-2 lg:col-span-1" }];
  return (
    <section id="works" aria-labelledby="works-title" className="scroll-mt-4 bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p dir="ltr" className="text-end font-serif text-xl italic text-sage">Selected work</p>
        <h2 id="works-title" className="mt-2 font-display text-4xl font-bold leading-[1.45] text-ink sm:text-6xl">أعمالنا</h2>
        <p className="mt-4 max-w-xl text-lg leading-9">تركيبات وأنماط ننفّذها بالمقاس المطلوب.</p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {items.map((w, i) => {
            const wide = w.span.includes("col-span-2") && !w.span.includes("lg:col-span-1");
            return (
              <figure key={w.img + i} className={`${w.span.startsWith("lg:") ? `col-span-2 ${w.span}` : w.span || ""} ${wide ? "col-span-2" : ""} group relative overflow-hidden bg-paper`}>
                <div className={`relative ${wide ? "aspect-[2/1]" : "aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[19rem]"}`}>
                  <Image
                    src={`/images/${w.img}.webp`} alt={w.cap} fill loading="lazy"
                    sizes={wide ? "(min-width:1024px) 760px, 92vw" : "(min-width:1024px) 370px, 46vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <figcaption className="absolute bottom-3 start-3 max-w-[85%] border border-dashed border-ink/50 bg-chalk px-3 py-1 text-sm font-medium leading-6 text-ink">
                  {w.cap}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
