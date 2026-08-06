import { PageShell, SectionHeading, Ornament, Stat, Tag } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { XRefList } from '@/components/XRef';
import { BackToSection } from '@/components/ChapterNav';
import { getKingdom } from '@/data/kingdoms';
import { useReveal } from '@/hooks';
import { MapPin, Castle, Flag, Swords, Users } from 'lucide-react';

export function KingdomPage({ id }: { id: string }) {
  useReveal();
  const k = getKingdom(id);

  if (!k) {
    return (
      <PageShell>
        <p className="text-ink-3">لم يُعثر على المملكة.</p>
        <BackToSection hash="#/kingdoms" label="العودة إلى الممالك" />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', hash: '#/' },
          { label: 'الممالك', hash: '#/kingdoms' },
          { label: k.name },
        ]}
      />

      <div className="mb-8 reveal">
        <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2">مملكة</p>
        <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight">{k.name}</h1>
        <p className="text-base text-ink-3 tracking-wide mt-2 mb-4">{k.nameEn}</p>
        <p className="text-ink-2 leading-relaxed max-w-2xl">{k.short}</p>
        <div className="flex items-center gap-2 flex-wrap mt-4">
          <Tag tone="gold"><Flag className="w-3 h-3 inline ml-1" />{k.government}</Tag>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-8 reveal">
        <Stat label="العاصمة" value={k.capital} />
        <Stat label="نظام الحكم" value={k.government} />
        <Stat label="العلم" value={k.banner} />
      </div>

      <SectionHeading title="الجغرافيا" titleEn="Geography" />
      <div className="witcher-prose reveal">
        <p>{k.geography}</p>
      </div>


      <Ornament />

      <SectionHeading title="التاريخ" titleEn="History" />
      <div className="witcher-prose reveal">
        {k.history.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Ornament />

      <div className="grid sm:grid-cols-2 gap-4 reveal">
        {k.importantCharacters.length > 0 && (
          <div className="rounded-xl border border-line bg-panel/40 p-5">
            <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-3">
              <Users className="w-4 h-4" /> شخصيات مهمة
            </h3>
            <XRefList items={k.importantCharacters} />
          </div>
        )}
        <div className="rounded-xl border border-line bg-panel/40 p-5">
          <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-3">
            <Swords className="w-4 h-4" /> الحروب
          </h3>
          <ul className="space-y-1.5">
            {k.wars.map((w, i) => (
              <li key={i} className="text-sm text-ink-2 flex items-start gap-2">
                <span className="text-ember-2 flex-shrink-0 mt-1">◆</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-panel/40 p-5 mt-4 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-3">
          <MapPin className="w-4 h-4" /> العلاقات
        </h3>
        <div className="space-y-2">
          {k.relationships.map((r, i) => (
            <div key={i} className="flex items-center justify-between text-sm border-b border-line/50 pb-2 last:border-0">
              <span className="text-ink">{r.name}</span>
              <span className="text-ink-3 text-xs">{r.type}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 mt-4 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-2">
          <Castle className="w-4 h-4" /> دور المملكة في القصة
        </h3>
        <p className="text-sm text-ink-2 leading-relaxed">{k.roleInStory}</p>
      </div>

      <BackToSection hash="#/kingdoms" label="العودة إلى جميع الممالك" />
    </PageShell>
  );
}
