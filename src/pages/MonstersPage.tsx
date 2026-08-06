import { useState } from 'react';
import { WideShell, SectionHeading, Tag } from '@/components/ui';
import { MONSTERS } from '@/data/monsters';
import { useReveal } from '@/hooks';
import { navigate } from '@/router';
import { Skull } from 'lucide-react';

const dangerConfig: Record<string, { label: string; cls: string }> = {
  low: { label: 'منخفض', cls: 'danger-low' },
  mid: { label: 'متوسط', cls: 'danger-mid' },
  high: { label: 'عالٍ', cls: 'danger-high' },
  extreme: { label: 'خطر جدًا', cls: 'danger-extreme' },
};

const categories = ['الكل', ...Array.from(new Set(MONSTERS.map((m) => m.category)))];

export function MonstersPage() {
  useReveal();
  const [filter, setFilter] = useState('الكل');

  const filtered = filter === 'الكل' ? MONSTERS : MONSTERS.filter((m) => m.category === filter);

  return (
    <WideShell>
      <SectionHeading
        eyebrow="الوحوش"
        title="موسوعة الوحوش"
        titleEn="Monster Bestiary"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          كل وحش في عالم الويتشر، موثّق بالوصف والموئل ومستوى الخطر ونقاط الضعف وأساليب القتال.
          مرجعك قبل أي مواجهة.
        </p>
      </SectionHeading>

      <div className="flex flex-wrap gap-2 mb-8 reveal">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3.5 py-1.5 rounded-full text-sm border transition-all ${
              filter === c
                ? 'border-gold/40 bg-gold/10 text-gold-2'
                : 'border-line text-ink-3 hover:text-ink hover:bg-panel/60'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((m, i) => {
          const d = dangerConfig[m.danger];
          return (
            <button
              key={m.id}
              onClick={() => navigate('#/monsters/' + m.id)}
              className="group reveal rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 text-right overflow-hidden"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base text-ink group-hover:text-gold-2 transition-colors leading-tight">
                    {m.name}
                  </h3>
                  <p className="text-[10px] text-ink-3 tracking-wide mt-0.5">{m.nameEn}</p>
                </div>
                <span className={`text-[10px] px-2 py-1 rounded border ${d.cls} flex items-center gap-1 flex-shrink-0`}>
                  <Skull className="w-3 h-3" /> {d.label}
                </span>
              </div>
              <p className="text-xs text-ink-2 leading-relaxed line-clamp-3 mb-3">{m.short}</p>
              <p className="text-[10px] text-ink-3 tracking-wider uppercase">{m.category}</p>
            </button>
          );
        })}
      </div>
    </WideShell>
  );
}
