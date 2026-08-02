import { PageShell, SectionHeading, Ornament, Tag, Placeholder } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { XRefList } from '@/components/XRef';
import { BackToSection } from '@/components/ChapterNav';
import { getRace } from '@/data/races';
import { useReveal } from '@/hooks';
import { Sparkles, Users, BookOpen, Handshake } from 'lucide-react';

export function RacePage({ id }: { id: string }) {
  useReveal();
  const r = getRace(id);

  if (!r) {
    return (
      <PageShell>
        <p className="text-ink-3">لم يُعثر على العرق.</p>
        <BackToSection hash="#/races" label="العودة إلى الأعراق" />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', hash: '#/' },
          { label: 'الأعراق', hash: '#/races' },
          { label: r.name },
        ]}
      />

      <div className="grid sm:grid-cols-[200px_1fr] gap-6 mb-8 reveal">
        <Placeholder type="portrait" label={r.nameEn} className="w-full sm:w-48" />
        <div>
          <div className="flex items-center gap-3 mb-2">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">عرق</p>
            {r.elder && <Tag tone="gold">عرق قديم</Tag>}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight">{r.name}</h1>
          <p className="text-sm text-ink-3 tracking-wide mt-1.5 mb-4">{r.nameEn}</p>
          <p className="text-ink-2 leading-relaxed">{r.short}</p>
        </div>
      </div>

      <SectionHeading title="الأصل" titleEn="Origin" />
      <div className="witcher-prose reveal">
        <p>{r.origin}</p>
      </div>

      <Ornament />

      <SectionHeading title="التاريخ" titleEn="History" />
      <div className="witcher-prose reveal">
        {r.history.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Ornament />

      <div className="rounded-xl border border-line bg-panel/40 p-5 mb-6 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
          <Sparkles className="w-5 h-5" /> الثقافة
        </h3>
        <ul className="space-y-2">
          {r.culture.map((c, i) => (
            <li key={i} className="text-sm text-ink-2 flex items-start gap-2">
              <span className="text-gold flex-shrink-0 mt-0.5">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-line bg-panel/40 p-5 mb-6 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
          <Handshake className="w-5 h-5" /> العلاقات
        </h3>
        <ul className="space-y-2">
          {r.relations.map((rel, i) => (
            <li key={i} className="text-sm text-ink-2 flex items-start gap-2">
              <span className="text-frost-2 flex-shrink-0 mt-0.5">◆</span>
              <span>{rel}</span>
            </li>
          ))}
        </ul>
      </div>

      {r.individuals.length > 0 && (
        <div className="rounded-xl border border-line bg-panel/40 p-5 reveal">
          <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
            <Users className="w-5 h-5" /> أفراد بارزون
          </h3>
          <XRefList items={r.individuals} />
        </div>
      )}

      <BackToSection hash="#/races" label="العودة إلى جميع الأعراق" />
    </PageShell>
  );
}
