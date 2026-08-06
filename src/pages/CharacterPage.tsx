import { PageShell, SectionHeading, Ornament, Stat, Tag } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { InfoBox } from '@/components/InfoBox';
import { XRefList, XRef } from '@/components/XRef';
import { BackToSection } from '@/components/ChapterNav';
import { getCharacter, CHARACTERS } from '@/data/characters';
import { useReveal } from '@/hooks';
import { Quote, Heart, Calendar, Eye, BookOpen } from 'lucide-react';

export function CharacterPage({ id }: { id: string }) {
  useReveal();
  const char = getCharacter(id);

  if (!char) {
    return (
      <PageShell>
        <p className="text-ink-3">لم يُعثر على الشخصية.</p>
        <BackToSection hash="#/characters" label="العودة إلى الشخصيات" />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', hash: '#/' },
          { label: 'الشخصيات', hash: '#/characters' },
          { label: char.name },
        ]}
      />

      {/* Header */}
      <div className="mb-8 reveal">
        <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2">شخصية</p>
        <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight">{char.name}</h1>
        <p className="text-base text-ink-3 tracking-wide mt-2 mb-4">{char.nameEn}</p>
        <p className="text-ink-2 leading-relaxed mb-5 max-w-2xl">{char.short}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <Tag tone="gold">{char.status}</Tag>
          <Tag>{char.race}</Tag>
          <Tag>{char.occupation}</Tag>
        </div>
      </div>

      {/* Quote */}
      <div className="rounded-xl border-r-4 border-gold bg-panel/40 px-5 py-4 mb-8 reveal">
        <Quote className="w-5 h-5 text-gold/60 mb-2" />
        <p className="font-serif-ar italic text-lg text-ink leading-relaxed">«{char.quote.ar}»</p>
        <p className="text-xs text-ink-3 mt-2 tracking-wide">— {char.nameEn}</p>
      </div>

      {/* Bio */}
      <SectionHeading title="السيرة" titleEn="Biography" />
      <div className="witcher-prose reveal">
        {char.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Ornament />

      {/* Stats grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8 reveal">
        <Stat label="الحالة" value={char.status} />
        <Stat label="العرق" value={char.race} />
        <Stat label="المهنة" value={char.occupation} />
        <Stat label="الانتماء" value={char.affiliation} />
      </div>

      {/* Relationships */}
      <div className="rounded-xl border border-line bg-panel/40 p-5 mb-6 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
          <Heart className="w-5 h-5" /> العلاقات
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {char.relationships.map((r, i) => {
            const target = r.target ? getCharacter(r.target) : undefined;
            return (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="text-ink-3 flex-shrink-0">{r.label}:</span>
                <XRef target={r.target}>{target ? target.name : '—'}</XRef>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-xl border border-line bg-panel/40 p-5 mb-6 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
          <Calendar className="w-5 h-5" /> الخط الزمني
        </h3>
        <div className="space-y-3 relative">
          <div className="absolute right-[7px] top-2 bottom-2 w-px bg-line" />
          {char.timeline.map((t, i) => (
            <div key={i} className="flex items-start gap-3 relative">
              <span className="w-3.5 h-3.5 rounded-full bg-gold/40 border-2 border-bg flex-shrink-0 mt-1 relative z-10" />
              <div>
                <p className="text-xs text-gold-2 font-semibold tracking-wide">{t.period}</p>
                <p className="text-sm text-ink-2 leading-relaxed">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Major events */}
      <div className="rounded-xl border border-line bg-panel/40 p-5 mb-6 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
          <Eye className="w-5 h-5" /> الأحداث الكبرى
        </h3>
        <ul className="space-y-2">
          {char.majorEvents.map((e, i) => (
            <li key={i} className="text-sm text-ink-2 flex items-start gap-2">
              <span className="text-gold flex-shrink-0 mt-0.5">◆</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Appearances */}
      <div className="rounded-xl border border-line bg-panel/40 p-5 mb-6 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
          <BookOpen className="w-5 h-5" /> الظهور
        </h3>
        <div className="flex flex-wrap gap-2">
          {char.appearances.map((a, i) => (
            <Tag key={i}>{a}</Tag>
          ))}
        </div>
      </div>

      {/* Trivia */}
      {char.trivia.length > 0 && (
        <div className="reveal">
          <h3 className="font-display text-lg text-gold-2 mb-3">معلومات طريفة</h3>
          <div className="space-y-2">
            {char.trivia.map((t, i) => (
              <InfoBox key={i} variant="didyouknow">{t}</InfoBox>
            ))}
          </div>
        </div>
      )}

      <BackToSection hash="#/characters" label="العودة إلى جميع الشخصيات" />
    </PageShell>
  );
}
