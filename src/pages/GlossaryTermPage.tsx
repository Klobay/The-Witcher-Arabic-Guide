import { PageShell, SectionHeading, Ornament } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BackToSection } from '@/components/ChapterNav';
import { getGlossaryTerm } from '@/data/glossary';
import { useReveal } from '@/hooks';
import { BookMarked } from 'lucide-react';

export function GlossaryTermPage({ id }: { id: string }) {
  useReveal();
  const g = getGlossaryTerm(id);

  if (!g) {
    return (
      <PageShell>
        <p className="text-ink-3">لم يُعثر على المصطلح.</p>
        <BackToSection hash="#/glossary" label="العودة إلى المصطلحات" />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', hash: '#/' },
          { label: 'المصطلحات', hash: '#/glossary' },
          { label: g.term },
        ]}
      />

      <div className="flex items-center gap-3 mb-4 reveal">
        <span className="inline-flex w-12 h-12 rounded-xl border border-gold/30 text-gold-2 items-center justify-center">
          <BookMarked className="w-6 h-6" />
        </span>
        <div>
          <p className="text-xs tracking-[0.2em] text-gold uppercase">{g.category}</p>
          <h1 className="font-display text-2xl sm:text-3xl text-ink leading-tight">{g.term}</h1>
        </div>
      </div>
      <p className="text-sm text-ink-3 tracking-wide mb-6">({g.termEn})</p>

      <div className="rounded-xl border border-gold/20 bg-gold/5 px-6 py-5 reveal">
        <p className="text-base text-ink leading-relaxed">{g.definition}</p>
      </div>

      <Ornament />

      <BackToSection hash="#/glossary" label="العودة إلى القاموس" />
    </PageShell>
  );
}
