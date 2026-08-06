import { useState } from 'react';
import { PageShell, SectionHeading, Tag } from '@/components/ui';
import { TIMELINE } from '@/data/timeline';
import { useReveal } from '@/hooks';

const eras = Array.from(new Set(TIMELINE.map((t) => t.era)));

export function TimelinePage() {
  useReveal();
  const [activeEra, setActiveEra] = useState<string | 'all'>('all');

  const filtered = activeEra === 'all' ? TIMELINE : TIMELINE.filter((t) => t.era === activeEra);

  return (
    <PageShell>
      <SectionHeading
        eyebrow="الخط الزمني"
        title="التاريخ الكامل للقارة"
        titleEn="The Complete Timeline"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          من تقارب الكرات قبل 1500 سنة حتى بداية The Witcher 3. كل حدث رئيسي في ترتيبه الزمني.
        </p>
      </SectionHeading>

      {/* Era filter */}
      <div className="flex flex-wrap gap-2 mb-10 reveal">
        <button
          onClick={() => setActiveEra('all')}
          className={`px-3.5 py-1.5 rounded-full text-sm border transition-all ${
            activeEra === 'all'
              ? 'border-gold/40 bg-gold/10 text-gold-2'
              : 'border-line text-ink-3 hover:text-ink hover:bg-panel/60'
          }`}
        >
          كل العصور
        </button>
        {eras.map((era) => (
          <button
            key={era}
            onClick={() => setActiveEra(era)}
            className={`px-3.5 py-1.5 rounded-full text-sm border transition-all ${
              activeEra === era
                ? 'border-gold/40 bg-gold/10 text-gold-2'
                : 'border-line text-ink-3 hover:text-ink hover:bg-panel/60'
            }`}
          >
            {era}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute right-[15px] sm:right-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold via-line to-gold/30" />

        <div className="space-y-6">
          {filtered.map((event, i) => (
            <div
              key={event.id}
              className="relative flex items-start gap-4 sm:gap-6 reveal"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              {/* Node */}
              <span className="relative z-10 flex-shrink-0 mt-1">
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gold/40 bg-bg-3 text-gold-2 text-xs font-bold">
                  {i + 1}
                </span>
              </span>

              {/* Content */}
              <div className="flex-1 rounded-xl border border-line bg-panel/40 hover:border-gold/30 transition-colors p-5">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <h3 className="font-display text-base sm:text-lg text-ink leading-tight">
                    {event.title}
                  </h3>
                  <span className="text-[10px] text-gold-2 px-2 py-0.5 rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                    {event.era}
                  </span>
                </div>
                <p className="text-xs text-ink-3 tracking-wide mb-3">{event.year}</p>
                <p className="text-sm text-ink-2 leading-relaxed mb-3">{event.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {event.tags.map((tag, ti) => (
                    <Tag key={ti}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
