import { PageShell, SectionHeading, Ornament, Tag } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { InfoBox } from '@/components/InfoBox';
import { BackToSection } from '@/components/ChapterNav';
import { getMonster } from '@/data/monsters';
import { useReveal } from '@/hooks';
import { Skull, MapPin, Swords, Shield, BookOpen } from 'lucide-react';

const dangerConfig: Record<string, { label: string; cls: string }> = {
  low: { label: 'منخفض', cls: 'danger-low' },
  mid: { label: 'متوسط', cls: 'danger-mid' },
  high: { label: 'عالٍ', cls: 'danger-high' },
  extreme: { label: 'خطر جدًا', cls: 'danger-extreme' },
};

export function MonsterPage({ id }: { id: string }) {
  useReveal();
  const m = getMonster(id);

  if (!m) {
    return (
      <PageShell>
        <p className="text-ink-3">لم يُعثر على الوحش.</p>
        <BackToSection hash="#/monsters" label="العودة إلى الوحوش" />
      </PageShell>
    );
  }

  const d = dangerConfig[m.danger];

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', hash: '#/' },
          { label: 'الوحوش', hash: '#/monsters' },
          { label: m.name },
        ]}
      />

      <div className="mb-8 reveal">
        <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2">وحش</p>
        <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight">{m.name}</h1>
        <p className="text-base text-ink-3 tracking-wide mt-2 mb-4">{m.nameEn}</p>
        <p className="text-ink-2 leading-relaxed mb-4 max-w-2xl">{m.short}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <Tag>{m.category}</Tag>
          <span className={`text-xs px-2.5 py-1 rounded-full border ${d.cls} flex items-center gap-1`}>
            <Skull className="w-3 h-3" /> خطر: {d.label}
          </span>
        </div>
      </div>

      <SectionHeading title="الوصف" titleEn="Description" />
      <div className="witcher-prose reveal">
        {m.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Ornament />

      <div className="grid sm:grid-cols-2 gap-4 reveal">
        <div className="rounded-xl border border-line bg-panel/40 p-5">
          <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-3">
            <MapPin className="w-4 h-4" /> الموئل
          </h3>
          <p className="text-sm text-ink-2 leading-relaxed">{m.habitat}</p>
        </div>
        <div className="rounded-xl border border-ember/20 bg-ember/5 p-5">
          <h3 className="flex items-center gap-2 text-ember-2 font-display text-base mb-3">
            <Shield className="w-4 h-4" /> نقاط الضعف
          </h3>
          <ul className="space-y-1.5">
            {m.weaknesses.map((w, i) => (
              <li key={i} className="text-sm text-ink-2 flex items-start gap-2">
                <span className="text-ember-2 flex-shrink-0 mt-0.5">◆</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-panel/40 p-5 mt-4 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
          <Swords className="w-5 h-5" /> نصائح القتال
        </h3>
        <ul className="space-y-2">
          {m.combatTips.map((t, i) => (
            <li key={i} className="text-sm text-ink-2 flex items-start gap-2">
              <span className="text-gold flex-shrink-0 mt-0.5">◆</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 mt-4 reveal">
        <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-2">
          <BookOpen className="w-4 h-4" /> في القصة
        </h3>
        <p className="text-sm text-ink-2 leading-relaxed">{m.relatedStory}</p>
      </div>

      <BackToSection hash="#/monsters" label="العودة إلى موسوعة الوحوش" />
    </PageShell>
  );
}
