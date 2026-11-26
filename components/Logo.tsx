export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg aria-hidden viewBox="0 0 40 40" className="size-9 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 7h32" strokeWidth="2.4" />
        <path d="M9 7c-3 8-3 17 0 26M16 7c-3 8-3 17 0 26M24 7c3 8 3 17 0 26M31 7c3 8 3 17 0 26" />
      </svg>
      <span dir="ltr" className="leading-none">
        <span className="block font-serif text-[1.7rem] tracking-[0.04em]">Style House</span>
        <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.5em] opacity-75">Curtains</span>
      </span>
    </span>
  );
}
