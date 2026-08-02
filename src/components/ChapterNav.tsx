import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { navigate } from '@/router';

export function ChapterNav({
  prev,
  next,
}: {
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}) {
  return (
    <nav className="mt-12 grid gap-3 sm:grid-cols-2">
      {prev ? (
        <button
          onClick={() => navigate('#/story/' + prev.slug)}
          className="group flex items-center gap-3 rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/30 transition-all p-4 text-right"
        >
          <ChevronRight className="w-5 h-5 text-ink-3 group-hover:text-gold-2 transition-colors flex-shrink-0" />
          <span className="flex-1 min-w-0">
            <span className="block text-[10px] text-ink-3 tracking-wider uppercase">الفصل السابق</span>
            <span className="block text-sm text-ink group-hover:text-gold-2 transition-colors truncate">{prev.title}</span>
          </span>
        </button>
      ) : (
        <span />
      )}
      {next ? (
        <button
          onClick={() => navigate('#/story/' + next.slug)}
          className="group flex items-center gap-3 rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/30 transition-all p-4 text-right sm:text-left"
        >
          <span className="flex-1 min-w-0 order-2 sm:order-1">
            <span className="block text-[10px] text-ink-3 tracking-wider uppercase">الفصل التالي</span>
            <span className="block text-sm text-ink group-hover:text-gold-2 transition-colors truncate">{next.title}</span>
          </span>
          <ChevronLeft className="w-5 h-5 text-ink-3 group-hover:text-gold-2 transition-colors flex-shrink-0 order-1 sm:order-2" />
        </button>
      ) : (
        <span />
      )}
    </nav>
  );
}

export function ContinueButton({ slug, label = 'تابع القراءة' }: { slug: string; label?: string }) {
  return (
    <button
      onClick={() => navigate('#/story/' + slug)}
      className="group inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-gradient-to-l from-gold-dim to-gold text-bg font-semibold text-sm hover:from-gold hover:to-gold-2 transition-all shadow-lg shadow-gold/20"
    >
      <span>{label}</span>
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
    </button>
  );
}

export function BackToSection({ hash, label }: { hash: string; label: string }) {
  return (
    <button
      onClick={() => navigate(hash)}
      className="inline-flex items-center gap-1.5 text-sm text-ink-3 hover:text-gold-2 transition-colors mt-6"
    >
      <ChevronRight className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}
