import { WideShell, SectionHeading } from '@/components/ui';
import { SCHOOLS } from '@/data/schools';
import { useReveal } from '@/hooks';
import { navigate } from '@/router';
import { Swords } from 'lucide-react';

export function SchoolsPage() {
  useReveal();

  return (
    <WideShell>
      <SectionHeading
        eyebrow="مدارس الويتشر"
        title="مدارس الويتشرز"
        titleEn="Witcher Schools"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          الويتشرز ينقسمون إلى مدارس متعددة، لكلٍّ فلسفتها وأسلوبها وقلاعها. مدرسة الذئب هي الأبرز
          (جايرالت)، لكن هناك القط والدب والغريفون والثعبان وغيرها.
        </p>
      </SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {SCHOOLS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => navigate('#/school/' + s.id)}
            className="group reveal rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 text-right"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex w-10 h-10 rounded-lg border border-gold/30 text-gold-2 items-center justify-center">
                <Swords className="w-5 h-5" />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base text-ink group-hover:text-gold-2 transition-colors leading-tight">
                  {s.name}
                </h3>
                <p className="text-[10px] text-ink-3 tracking-wide mt-0.5">{s.nameEn}</p>
              </div>
            </div>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">{s.short}</p>
          </button>
        ))}
      </div>
    </WideShell>
  );
}
