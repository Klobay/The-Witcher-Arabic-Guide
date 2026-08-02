import { PageShell, SectionHeading, Ornament } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BackToSection } from '@/components/ChapterNav';
import { getMagicEntry } from '@/data/magic';
import { useReveal } from '@/hooks';
import { Sparkles } from 'lucide-react';

export function MagicEntryPage({ id }: { id: string }) {
  useReveal();
  const m = getMagicEntry(id);

  if (!m) {
    return (
      <PageShell>
        <p className="text-ink-3">لم يُعثر على الموضوع.</p>
        <BackToSection hash="#/magic" label="العودة إلى السحر" />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', hash: '#/' },
          { label: 'السحر', hash: '#/magic' },
          { label: m.name },
        ]}
      />

      <div className="flex items-center gap-3 mb-4 reveal">
        <span className="inline-flex w-12 h-12 rounded-xl border border-gold/30 text-gold-2 items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </span>
        <div>
          <p className="text-xs tracking-[0.2em] text-gold uppercase">{m.category}</p>
          <h1 className="font-display text-2xl sm:text-3xl text-ink leading-tight">{m.name}</h1>
        </div>
      </div>
      <p className="text-sm text-ink-3 tracking-wide mb-6">{m.nameEn}</p>

      <p className="text-lg text-ink-2 leading-relaxed mb-8 reveal font-serif-ar italic border-r-2 border-gold/40 pr-4">
        {m.short}
      </p>

      <div className="witcher-prose reveal">
        {m.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Ornament />

      <BackToSection hash="#/magic" label="العودة إلى السحر" />
    </PageShell>
  );
}
