"use client";
import { useMemo, useState } from "react";
import { site, waLink } from "@/lib/site";
import { WhatsApp } from "./icons";

type Head = "carriers" | "pinch" | "goblet" | "gather" | "rings" | "box";
const STYLES: Record<string, { ar: string; f: number; perM: number; head: Head; soft: boolean }> = {
  ripple: { ar: "ويفي", f: 2.0, perM: 5, head: "carriers", soft: true },
  pinch: { ar: "بنش مزدوج", f: 2.2, perM: 4, head: "pinch", soft: true },
  goblet: { ar: "جوبلت", f: 2.2, perM: 4, head: "goblet", soft: true },
  pencil: { ar: "بنسل", f: 2.6, perM: 9, head: "gather", soft: true },
  grommet: { ar: "حلقات", f: 2.0, perM: 5, head: "rings", soft: true },
  flat: { ar: "مسطح", f: 1.5, perM: 3, head: "box", soft: false },
};
const COLORS = [
  { ar: "عاجي", hex: "#e6dfd2" },
  { ar: "رملي", hex: "#c2b197" },
  { ar: "كاكي", hex: "#a98c5e" },
  { ar: "رمادي", hex: "#9b9b9d" },
  { ar: "فحمي", hex: "#5f5e60" },
  { ar: "كحلي", hex: "#2a3452" },
];

const ar = (n: number, d = 0) => n.toLocaleString("ar-EG", { minimumFractionDigits: d, maximumFractionDigits: d });
function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const f = (c: number) => Math.max(0, Math.min(255, Math.round(amt < 0 ? c * (1 + amt) : c + (255 - c) * amt)));
  const r = f((n >> 16) & 255), g = f((n >> 8) & 255), b = f(n & 255);
  return `rgb(${r} ${g} ${b})`;
}

export default function Designer() {
  const [w, setW] = useState(320);
  const [h, setH] = useState(270);
  const [style, setStyle] = useState("ripple");
  const [color, setColor] = useState(3);
  const [sheer, setSheer] = useState(true);

  const cfg = STYLES[style];
  const base = COLORS[color].hex;
  const run = (w / 100) * cfg.f;
  const sheerRun = (w / 100) * 2;

  // ───────── الرسم ─────────
  const g = useMemo(() => {
    const X0 = 70, X1 = 570, TOP = 62;
    const drop = Math.max(170, Math.min(330, 500 * (h / w)));
    const pw = (X1 - X0) * 0.3; // عرض كل نصف ستارة مجمّع على الجانب
    const k = Math.max(3, Math.round(cfg.perM * (w / 100) * 0.3));
    const fw = pw / k;
    return { X0, X1, MID: (X0 + X1) / 2, TOP, drop, k, fw, pw, bottom: TOP + drop, RX: X1 - pw };
  }, [w, h, cfg.perM]);

  const stops = cfg.soft
    ? [[0, -0.34], [0.5, 0.12], [1, -0.34]]
    : [[0, -0.3], [0.07, -0.3], [0.09, 0], [0.91, 0], [0.93, -0.3], [1, -0.3]];
  const sheerFw = (g.X1 - g.X0) / Math.max(6, Math.round(5 * (w / 100)));

  const heads: React.ReactNode[] = [];
  for (const side of [0, 1]) {
    const x0 = side === 0 ? g.X0 : g.RX;
    for (let i = 0; i < g.k; i++) {
      const cx = x0 + (i + 0.5) * g.fw;
      const key = `h${side}-${i}`;
      if (cfg.head === "carriers") heads.push(<rect key={key} x={cx - 2} y={g.TOP - 8} width="4" height="10" rx="1.5" fill="#1f2326" />);
      if (cfg.head === "rings") heads.push(<circle key={key} cx={cx} cy={g.TOP + 2} r="5" fill="none" stroke="#1f2326" strokeWidth="1.6" />);
      if (cfg.head === "pinch") heads.push(<path key={key} d={`M${cx - 4} ${g.TOP} Q${cx} ${g.TOP + 20} ${cx + 4} ${g.TOP}`} fill="rgba(0,0,0,.28)" />);
      if (cfg.head === "goblet") heads.push(<ellipse key={key} cx={cx} cy={g.TOP + 12} rx={Math.min(8, g.fw * 0.3)} ry="11" fill="rgba(255,255,255,.22)" stroke="rgba(0,0,0,.25)" />);
    }
  }

  const dim = `${ar(w)} سم`;
  const message = [
    "السلام عليكم، أرغب بتسعير ستائر بالمواصفات التالية:",
    `العرض: ${w} سم`,
    `الارتفاع: ${h} سم`,
    `النمط: ${cfg.ar}`,
    `اللون: ${COLORS[color].ar}`,
    `طبقة شيفون: ${sheer ? "نعم" : "لا"}`,
  ].join("\n");

  const chip = (on: boolean) =>
    `min-h-11 rounded-full border px-4 text-[0.95rem] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist ${
      on ? "border-paper bg-paper text-sage-deep" : "border-paper/35 text-paper hover:bg-paper/10"
    }`;

  return (
    <section id="design" aria-labelledby="design-title" className="scroll-mt-4 bg-sage-deep text-paper">
      <div aria-hidden className="ruler text-paper/35" />
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <p dir="ltr" className="text-end font-serif text-xl italic text-mist">Made to measure</p>
        <h2 id="design-title" className="mt-2 font-display text-4xl font-bold leading-[1.45] sm:text-6xl">صمّم ستارتك</h2>
        <p className="mt-4 max-w-xl text-lg leading-9 text-paper/85">
          أدخل المقاس واختر النمط واللون، وشاهد الستارة أمامك. ثم أرسل المواصفات إلينا لنؤكد المقاس والسعر.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* التحكم */}
          <div className="space-y-8">
            <div>
              <label htmlFor="w" className="flex items-baseline justify-between font-bold">
                <span>عرض الجدار أو النافذة</span><span className="font-display text-2xl">{ar(w)} <small className="text-sm font-sans font-normal">سم</small></span>
              </label>
              <input id="w" type="range" min={100} max={800} step={10} value={w} onChange={(e) => setW(+e.target.value)} />
            </div>
            <div>
              <label htmlFor="h" className="flex items-baseline justify-between font-bold">
                <span>الارتفاع</span><span className="font-display text-2xl">{ar(h)} <small className="text-sm font-sans font-normal">سم</small></span>
              </label>
              <input id="h" type="range" min={200} max={420} step={10} value={h} onChange={(e) => setH(+e.target.value)} />
            </div>

            <fieldset>
              <legend className="mb-3 font-bold">نمط التعليق</legend>
              <div role="radiogroup" className="flex flex-wrap gap-2">
                {Object.entries(STYLES).map(([k, v]) => (
                  <button key={k} type="button" role="radio" aria-checked={style === k} onClick={() => setStyle(k)} className={chip(style === k)}>{v.ar}</button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 font-bold">لون القماش: <span className="font-normal">{COLORS[color].ar}</span></legend>
              <div role="radiogroup" className="flex flex-wrap gap-3">
                {COLORS.map((c, k) => (
                  <button
                    key={c.ar} type="button" role="radio" aria-checked={color === k} aria-label={c.ar} onClick={() => setColor(k)}
                    style={{ background: c.hex }}
                    className={`size-12 rounded-full border-2 transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mist ${color === k ? "scale-110 border-paper ring-2 ring-paper ring-offset-2 ring-offset-sage-deep" : "border-paper/30"}`}
                  />
                ))}
              </div>
            </fieldset>

            <button
              type="button" role="switch" aria-checked={sheer} onClick={() => setSheer(!sheer)}
              className="flex min-h-12 items-center gap-4 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mist"
            >
              <span aria-hidden className={`relative h-7 w-12 rounded-full transition-colors ${sheer ? "bg-paper" : "bg-paper/30"}`}>
                <span className={`absolute top-1 size-5 rounded-full transition-all ${sheer ? "end-1 bg-sage-deep" : "end-6 bg-paper"}`} />
              </span>
              مع طبقة شيفون خلف الستارة
            </button>
          </div>

          {/* المعاينة */}
          <div>
            <div className="border border-dashed border-paper/40 bg-paper p-3 sm:p-5">
              <svg viewBox="0 0 640 430" role="img" aria-label={`معاينة ستارة ${cfg.ar} بعرض ${w} وارتفاع ${h} سنتيمتر بلون ${COLORS[color].ar}`} className="block h-auto w-full">
                <defs>
                  <linearGradient id="fg">{stops.map(([o, a]) => <stop key={o} offset={o} stopColor={shade(base, a)} />)}</linearGradient>
                  <pattern id="foldL" x={g.X0} y="0" width={g.fw} height="10" patternUnits="userSpaceOnUse"><rect width={g.fw} height="10" fill="url(#fg)" /></pattern><pattern id="foldR" x={g.RX} y="0" width={g.fw} height="10" patternUnits="userSpaceOnUse"><rect width={g.fw} height="10" fill="url(#fg)" /></pattern>
                  <linearGradient id="sg"><stop offset="0" stopColor="#d9d6cf" /><stop offset="0.5" stopColor="#ffffff" /><stop offset="1" stopColor="#d9d6cf" /></linearGradient>
                  <pattern id="sfold" x={g.X0} y="0" width={sheerFw} height="10" patternUnits="userSpaceOnUse"><rect width={sheerFw} height="10" fill="url(#sg)" /></pattern>
                  <linearGradient id="vsh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#000" stopOpacity=".38" /><stop offset=".22" stopColor="#000" stopOpacity="0" /><stop offset=".85" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".2" /></linearGradient>
                </defs>
                <rect width="640" height="430" fill="#eee8dd" />
                <rect y={g.bottom + 6} width="640" height={430 - g.bottom} fill="#d8cfbf" />
                <rect x={g.X0 + g.pw * 0.6} y={g.TOP + 20} width={g.X1 - g.X0 - g.pw * 1.2} height={g.drop - 50} fill="#f7fafb" stroke="#cfd6d6" />
                {sheer && <>
                  <rect x={g.X0} y={g.TOP} width={g.X1 - g.X0} height={g.drop} fill="url(#sfold)" opacity=".82" />
                  <rect x={g.X0} y={g.TOP} width={g.X1 - g.X0} height={g.drop} fill="url(#vsh)" opacity=".5" />
                </>}
                <rect x={g.X0} y={g.TOP} width={g.pw} height={g.drop} fill="url(#foldL)" />
                <rect x={g.RX} y={g.TOP} width={g.pw} height={g.drop} fill="url(#foldR)" />
                <rect x={g.X0} y={g.TOP} width={g.pw} height={g.drop} fill="url(#vsh)" />
                <rect x={g.RX} y={g.TOP} width={g.pw} height={g.drop} fill="url(#vsh)" />
                {cfg.head === "gather" && <><rect x={g.X0} y={g.TOP} width={g.pw} height="13" fill={shade(base, -0.28)} /><rect x={g.RX} y={g.TOP} width={g.pw} height="13" fill={shade(base, -0.28)} /></>}
                {cfg.head === "box" && <><rect x={g.X0} y={g.TOP} width={g.pw} height="9" fill={shade(base, -0.3)} /><rect x={g.RX} y={g.TOP} width={g.pw} height="9" fill={shade(base, -0.3)} /></>}
                {heads}
                <rect x={g.X0 - 18} y={g.TOP - 11} width={g.X1 - g.X0 + 36} height="7" rx="3.5" fill="#1f2326" />
                <rect x={g.X0} y={g.bottom - 4} width={g.pw} height="4" fill="rgba(0,0,0,.2)" /><rect x={g.RX} y={g.bottom - 4} width={g.pw} height="4" fill="rgba(0,0,0,.2)" />
                {/* خطوط القياس */}
                <g stroke="#1f2326" strokeWidth="1.2" fill="#1f2326" fontSize="15" fontFamily="inherit">
                  <line x1={g.X0} x2={g.X1} y1={g.bottom + 26} y2={g.bottom + 26} />
                  <line x1={g.X0} x2={g.X0} y1={g.bottom + 19} y2={g.bottom + 33} /><line x1={g.X1} x2={g.X1} y1={g.bottom + 19} y2={g.bottom + 33} />
                  <rect x={g.MID - 38} y={g.bottom + 14} width="76" height="24" fill="#eee8dd" stroke="none" />
                  <text x={g.MID} y={g.bottom + 31} textAnchor="middle" stroke="none">{dim}</text>
                  <line x1={g.X0 - 34} x2={g.X0 - 34} y1={g.TOP} y2={g.bottom} />
                  <line x1={g.X0 - 41} x2={g.X0 - 27} y1={g.TOP} y2={g.TOP} /><line x1={g.X0 - 41} x2={g.X0 - 27} y1={g.bottom} y2={g.bottom} />
                  <text transform={`translate(${g.X0 - 42} ${(g.TOP + g.bottom) / 2}) rotate(-90)`} textAnchor="middle" stroke="none">{ar(h)} سم</text>
                </g>
              </svg>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-px bg-paper/25 text-center sm:grid-cols-4">
              {[
                ["النمط", cfg.ar],
                ["معامل الكثافة", `×${ar(cfg.f, 1)}`],
                ["قماش الستارة", `${ar(run, 1)} م`],
                ["قماش الشيفون", sheer ? `${ar(sheerRun, 1)} م` : "—"],
              ].map(([t, v]) => (
                <div key={t} className="bg-sage-deep px-3 py-4">
                  <dt className="text-sm text-paper/75">{t}</dt>
                  <dd className="font-display text-2xl font-bold">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm leading-7 text-paper/75">
              تقدير أولي لطول القماش (عرضاً) بحسب كثافة الطيّات. نؤكد المقاس والسعر النهائي بعد المعاينة.
            </p>

            <a
              href={waLink(message)}
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-paper px-8 text-base font-bold text-sage-deep transition hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mist sm:w-auto"
            >
              <WhatsApp className="size-6" />
              أرسل المواصفات عبر واتساب
            </a>
            <span className="sr-only">{site.phoneDisplay}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
