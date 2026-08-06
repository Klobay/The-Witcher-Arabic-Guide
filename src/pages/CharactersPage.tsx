import { useState } from 'react';
import { WideShell, SectionHeading } from '@/components/ui';
import { CHARACTERS } from '@/data/characters';
import { useReveal } from '@/hooks';
import { navigate } from '@/router';


const factions: { id: string; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'witcher', label: 'الويتشرز' },
  { id: 'mage', label: 'الساحرات والويتشرز' },
  { id: 'royalty', label: 'الملوك والأمراء' },
  { id: 'nilfgaard', label: 'نيلفغارد' },
  { id: 'scoiatael', label: 'سكويا تايل' },
  { id: 'other', label: 'أخرى' },
];

const factionColors: Record<string, string> = {
  witcher: 'border-frost/30 text-frost-2',
  mage: 'border-gold/30 text-gold-2',
  royalty: 'border-ember/30 text-ember-2',
  nilfgaard: 'border-blood/30 text-blood-2',
  scoiatael: 'border-gold/30 text-gold-2',
  other: 'border-line text-ink-2',
};

export function CharactersPage() {
  useReveal();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? CHARACTERS : CHARACTERS.filter((c) => c.faction === filter);

  return (
    <WideShell>
      <SectionHeading
        eyebrow="الشخصيات"
        title="شخصيات عالم الويتشر"
        titleEn="Characters of The Witcher"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          كل شخصية مهمة في القصة، بصفحتها الخاصة: السيرة، العلاقات، الأحداث الكبرى، الاقتباسات،
          والظهور. انقر على أي شخصية للتفاصيل.
        </p>
      </SectionHeading>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8 reveal">
        {factions.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3.5 py-1.5 rounded-full text-sm border transition-all ${
              filter === f.id
                ? 'border-gold/40 bg-gold/10 text-gold-2'
                : 'border-line text-ink-3 hover:text-ink hover:bg-panel/60'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c, i) => (
          <button
            key={c.id}
            onClick={() => navigate('#/characters/' + c.id)}
            className="group reveal rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 text-right overflow-hidden"
            style={{ transitionDelay: `${i * 0.04}s` }}
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg text-ink group-hover:text-gold-2 transition-colors leading-tight">
                {c.name}
              </h3>
              <p className="text-sm text-ink-3 tracking-wide mt-1 mb-2">{c.nameEn}</p>
              <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full border ${factionColors[c.faction]} mb-2`}>
                {factions.find((f) => f.id === c.faction)?.label}
              </span>
              <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">{c.short}</p>
            </div>
          </button>
        ))}
      </div>
    </WideShell>
  );
}
