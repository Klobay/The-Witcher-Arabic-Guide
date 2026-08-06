import { WideShell, SectionHeading } from '@/components/ui';
import { RACES } from '@/data/races';
import { useReveal } from '@/hooks';
import { navigate } from '@/router';

export function RacesPage() {
  useReveal();

  return (
    <WideShell>
      <SectionHeading
        eyebrow="الأعراق"
        title="أعراق القارة"
        titleEn="Races of the Continent"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          من الأعراق القدماء (الإلف، الأقزام، الغنوم، الحوريات) إلى البشر الوافدين ومصاصي الدم
          العُلى، كل عرق له أصله وتاريخه وثقافته.
        </p>
      </SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {RACES.map((r, i) => (
          <button
            key={r.id}
            onClick={() => navigate('#/race/' + r.id)}
            className="group reveal rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 text-right"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display text-lg text-ink group-hover:text-gold-2 transition-colors">
                {r.name}
              </h3>
              {r.elder && (
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-gold/30 text-gold-2 bg-gold/5">
                  عرق قديم
                </span>
              )}
            </div>
            <p className="text-xs text-ink-3 tracking-wide mb-2">{r.nameEn}</p>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">{r.short}</p>
          </button>
        ))}
      </div>
    </WideShell>
  );
}
