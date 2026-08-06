import { PageShell, SectionHeading, Ornament } from '@/components/ui';
import { InfoBox } from '@/components/InfoBox';
import { ReadingProgress } from '@/components/ReadingProgress';
import { STORY_CHAPTERS } from '@/data/story';
import { useReveal } from '@/hooks';
import { Clock, MapPin } from 'lucide-react';

export function StoryPage() {
  useReveal();

  return (
    <PageShell>
      <ReadingProgress chapters={STORY_CHAPTERS.map((c) => ({ id: c.id, title: c.title }))} />
      <SectionHeading
        eyebrow="القصة"
        title="القصة الكاملة بالترتيب الزمني"
        titleEn="The Complete Story"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          القصة من الروايات والقصص القصيرة، ثم The Witcher (2007) وThe Witcher 2 — كلها بالترتيب
          الزمني للأحداث. نتوقف تمامًا عند بداية The Witcher 3.
        </p>
      </SectionHeading>

      <InfoBox variant="note" title="ملاحظة عن الحرق">
        هذه القصة تغطي الروايات وأول لعبتين فقط. لا تذكر أحداث The Witcher 3. اقرأ بأمان تام قبل
        لعب اللعبة.
      </InfoBox>

      <Ornament />

      {/* All chapters on one page */}
      <div className="space-y-12">
        {STORY_CHAPTERS.map((chapter, i) => (
          <article key={chapter.id} id={`chapter-${chapter.id}`} className="reveal scroll-mt-24">
            {/* Chapter header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-5xl text-gold/30 leading-none">{chapter.id}</span>
              <div>
                <p className="text-xs tracking-[0.2em] text-gold uppercase">
                  الفصل {chapter.id} من {STORY_CHAPTERS.length}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight">
                  {chapter.title}
                </h2>
              </div>
            </div>

            <p className="text-base text-ink-3 tracking-wide mb-3">{chapter.titleEn}</p>

            <div className="flex items-center gap-4 flex-wrap text-xs text-ink-3 mb-6">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {chapter.readingTime} دقائق قراءة
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> {chapter.period}
              </span>
            </div>

            {/* Summary */}
            <div className="rounded-xl border border-gold/20 bg-gold/5 px-5 py-4 mb-6">
              <p className="text-base text-ink-2 leading-relaxed font-serif-ar italic">
                {chapter.summary}
              </p>
            </div>

            {/* Story body */}
            <div className="witcher-prose">
              {chapter.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>

            {/* Did you know */}
            {chapter.didYouKnow && (
              <InfoBox variant="didyouknow">{chapter.didYouKnow}</InfoBox>
            )}

            {/* Things to remember */}
            {chapter.thingsToRemember.length > 0 && (
              <div className="rounded-xl border border-frost/20 bg-frost/5 p-5 mt-6">
                <h3 className="flex items-center gap-2 text-frost-2 font-display text-base mb-3">
                  أشياء يجب تذكّرها
                </h3>
                <ul className="space-y-1.5">
                  {chapter.thingsToRemember.map((t, k) => (
                    <li key={k} className="text-sm text-ink-2 flex items-start gap-2">
                      <span className="text-frost-2 flex-shrink-0 mt-1">◆</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Separator between chapters */}
            {i < STORY_CHAPTERS.length - 1 && <Ornament />}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
