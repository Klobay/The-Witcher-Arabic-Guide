import { PageShell, SectionHeading } from '@/components/ui';
import { READING_ORDER } from '@/data/readingOrder';
import { useReveal } from '@/hooks';
import { navigate } from '@/router';
import { CheckCircle2, Circle, ArrowLeft } from 'lucide-react';
import { useReadingProgress } from '@/hooks';
import { useState } from 'react';

const kindStyles: Record<string, { color: string; label: string }> = {
  intro: { color: 'border-frost/30 text-frost-2 bg-frost/5', label: 'مقدمة' },
  world: { color: 'border-gold/30 text-gold-2 bg-gold/5', label: 'العالم' },
  story: { color: 'border-ember/30 text-ember-2 bg-ember/5', label: 'قصة' },
  game: { color: 'border-blood/30 text-blood-2 bg-blood/5', label: 'لعبة' },
  final: { color: 'border-gold/40 text-gold-2 bg-gold/10', label: 'ختام' },
};

export function ReadingOrderPage() {
  useReveal();
  const { progress } = useReadingProgress(20);
  const [visited] = useState(() => {
    try {
      const raw = localStorage.getItem('witcher-visited');
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  });

  const completedCount = READING_ORDER.filter((r) => visited.includes(r.hash)).length;
  const pct = Math.round((completedCount / READING_ORDER.length) * 100);

  return (
    <PageShell>
      <SectionHeading
        eyebrow="خارطة الطريق"
        title="ترتيب القراءة المقترح"
        titleEn="Recommended Reading Order"
      />

      <p className="text-ink-2 leading-relaxed mb-6 reveal">
        عشرون خطوة منظمة تأخذك من الصفر إلى الجاهزية الكاملة لـ The Witcher 3. اتبعها بالترتيب
        للحصول على أفضل تجربة. الخطوات المكتملة تُعلَّم تلقائيًا حسب تصفّحك.
      </p>

      {/* Progress bar */}
      <div className="rounded-xl border border-line bg-panel/40 p-4 mb-8 reveal">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-ink-2">تقدّمك في القراءة</span>
          <span className="text-sm font-semibold text-gold-2">{pct}% ({completedCount}/{READING_ORDER.length})</span>
        </div>
        <div className="h-2 rounded-full bg-bg-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-gold-dim to-gold-2 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <ol className="relative space-y-3">
        {/* vertical line */}
        <div className="absolute right-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-line to-transparent" />

        {READING_ORDER.map((item, i) => {
          const kind = kindStyles[item.kind];
          const done = visited.includes(item.hash);
          return (
            <li key={item.order} className="reveal" style={{ transitionDelay: `${i * 0.03}s` }}>
              <button
                onClick={() => navigate(item.hash)}
                className="group w-full flex items-start gap-4 text-right pr-0 relative"
              >
                {/* Number/checkbox */}
                <span className="relative z-10 flex-shrink-0 mt-0.5">
                  {done ? (
                    <CheckCircle2 className="w-9 h-9 text-gold-2" />
                  ) : (
                    <span className="flex items-center justify-center w-9 h-9 rounded-full border border-line bg-bg-3 text-ink-3 text-xs font-bold group-hover:border-gold/40 group-hover:text-gold-2 transition-colors">
                      {item.order}
                    </span>
                  )}
                </span>

                {/* Content */}
                <span className="flex-1 rounded-xl border border-line bg-panel/30 group-hover:bg-panel group-hover:border-gold/30 transition-all p-4">
                  <span className="flex items-center gap-2 mb-1.5">
                    <span className="font-display text-base text-ink group-hover:text-gold-2 transition-colors">
                      {item.title}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${kind.color}`}>
                      {kind.label}
                    </span>
                    {done && (
                      <span className="text-[10px] text-gold-2 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> مكتمل
                      </span>
                    )}
                  </span>
                  {item.titleEn && (
                    <span className="block text-xs text-ink-3 tracking-wide mb-1.5">{item.titleEn}</span>
                  )}
                  <span className="block text-sm text-ink-2 leading-relaxed">{item.desc}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-12 rounded-xl border border-gold/20 bg-gradient-to-br from-panel to-bg-3 p-6 text-center reveal">
        <p className="font-display text-lg text-gold-2 mb-2">جاهز لـ The Witcher 3؟</p>
        <p className="text-sm text-ink-2 mb-4 max-w-xl mx-auto leading-relaxed">
          بعد إكمال هذه الخطوات، ستكون فاهمًا لكل ما تحتاجه. ابدأ اللعبة وكل مرجع وكل شخصية ستكون مألوفة.
        </p>
        <button
          onClick={() => navigate('#/faq')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gold/40 text-gold-2 font-semibold text-sm hover:bg-gold/10 transition-all"
        >
          <span>الأسئلة الشائعة قبل البدء</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </PageShell>
  );
}
