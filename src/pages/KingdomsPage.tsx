import { WideShell, SectionHeading, Card } from '@/components/ui';
import { KINGDOMS } from '@/data/kingdoms';
import { useReveal } from '@/hooks';

export function KingdomsPage() {
  useReveal();

  return (
    <WideShell>
      <SectionHeading
        eyebrow="الممالك"
        title="ممالك القارة"
        titleEn="Kingdoms of the Continent"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          من إمبراطورية نيلفغارد في الجنوب إلى ممالك الشمال المتنافسة، كل مملكة لها تاريخها
          وحاكمها ودورها في القصة. انقر لمعرفة التفاصيل.
        </p>
      </SectionHeading>

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        {KINGDOMS.map((k, i) => (
          <button
            key={k.id}
            onClick={() => (window.location.hash = '#/kingdoms/' + k.id)}
            className="group reveal rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 text-right overflow-hidden relative"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg text-ink group-hover:text-gold-2 transition-colors leading-tight">
                  {k.name}
                </h3>
                <p className="text-xs text-ink-3 tracking-wide mt-0.5">{k.nameEn}</p>
              </div>
              <span className="text-3xl opacity-50">{k.banner}</span>
            </div>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-2 mb-3">{k.short}</p>
            <div className="flex items-center gap-3 text-[10px] text-ink-3">
              <span>العاصمة: {k.capital}</span>
              <span>•</span>
              <span>{k.government}</span>
            </div>
          </button>
        ))}
      </div>
    </WideShell>
  );
}
