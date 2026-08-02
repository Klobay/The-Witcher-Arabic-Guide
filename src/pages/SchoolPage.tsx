import { PageShell, SectionHeading, Ornament, Stat, Placeholder } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { XRefList } from '@/components/XRef';
import { BackToSection } from '@/components/ChapterNav';
import { getSchool } from '@/data/schools';
import { useReveal } from '@/hooks';
import { MapPin, Shield, Swords, Sparkles, Users } from 'lucide-react';

export function SchoolPage({ id }: { id: string }) {
  useReveal();
  const s = getSchool(id);

  if (!s) {
    return (
      <PageShell>
        <p className="text-ink-3">لم يُعثر على المدرسة.</p>
        <BackToSection hash="#/schools" label="العودة إلى المدارس" />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', hash: '#/' },
          { label: 'مدارس الويتشر', hash: '#/schools' },
          { label: s.name },
        ]}
      />

      <div className="grid sm:grid-cols-[200px_1fr] gap-6 mb-8 reveal">
        <Placeholder type="symbol" label={s.nameEn} className="w-full sm:w-48" image={s.image} />
        <div>
          <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2">مدرسة ويتشر</p>
          <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight">{s.name}</h1>
          <p className="text-sm text-ink-3 tracking-wide mt-1.5 mb-4">{s.nameEn}</p>
          <p className="text-ink-2 leading-relaxed">{s.short}</p>
        </div>
      </div>

      <SectionHeading title="التاريخ" titleEn="History" />
      <div className="witcher-prose reveal">
        {s.history.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Ornament />

      <div className="grid sm:grid-cols-2 gap-3 mb-6 reveal">
        <Stat label="الموقع" value={s.location} />
        <Stat label="الرمز" value={s.symbol} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 reveal">
        <div className="rounded-xl border border-line bg-panel/40 p-5">
          <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-3">
            <Shield className="w-4 h-4" /> الدرع
          </h3>
          <p className="text-sm text-ink-2 leading-relaxed">{s.armor}</p>
        </div>
        <div className="rounded-xl border border-line bg-panel/40 p-5">
          <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-3">
            <Swords className="w-4 h-4" /> أسلوب القتال
          </h3>
          <p className="text-sm text-ink-2 leading-relaxed">{s.combatStyle}</p>
        </div>
      </div>

      <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 mt-4 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-2">
          <Sparkles className="w-5 h-5" /> الفلسفة
        </h3>
        <p className="text-sm text-ink-2 leading-relaxed">{s.philosophy}</p>
      </div>

      {s.knownWitchers.length > 0 && (
        <div className="rounded-xl border border-line bg-panel/40 p-5 mt-4 reveal">
          <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
            <Users className="w-5 h-5" /> ويتشرز معروفون
          </h3>
          <XRefList items={s.knownWitchers} />
        </div>
      )}

      <BackToSection hash="#/schools" label="العودة إلى جميع المدارس" />
    </PageShell>
  );
}
