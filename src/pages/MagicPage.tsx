import { WideShell, SectionHeading } from '@/components/ui';
import { MAGIC_ENTRIES } from '@/data/magic';
import { useReveal } from '@/hooks';
import { navigate } from '@/router';
import { Sparkles } from 'lucide-react';

export function MagicPage() {
  useReveal();

  const categories = Array.from(new Set(MAGIC_ENTRIES.map((m) => m.category)));

  return (
    <WideShell>
      <SectionHeading
        eyebrow="السحر"
        title="السحر في عالم الويتشر"
        titleEn="Magic of The Witcher"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          من سحر الفوضى الأعظم إلى إشارات الويتشر الخمس، ومن الخيمياء إلى دم القدماء — كل ما يتعلق
          بالقوى الخارقة في العالم.
        </p>
      </SectionHeading>

      {categories.map((cat) => (
        <div key={cat} className="mb-8 reveal">
          <h3 className="font-display text-sm text-gold-2 tracking-wider uppercase mb-3">{cat}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAGIC_ENTRIES.filter((m) => m.category === cat).map((m) => (
              <button
                key={m.id}
                onClick={() => navigate('#/magic/' + m.id)}
                className="group rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 text-right"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex w-9 h-9 rounded-lg border border-gold/30 text-gold-2 items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-base text-ink group-hover:text-gold-2 transition-colors leading-tight">
                      {m.name}
                    </h4>
                    <p className="text-[10px] text-ink-3 tracking-wide">{m.nameEn}</p>
                  </div>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">{m.short}</p>
              </button>
            ))}
          </div>
        </div>
      ))}
    </WideShell>
  );
}
