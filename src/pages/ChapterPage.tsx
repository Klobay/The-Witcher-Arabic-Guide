import { PageShell, SectionHeading, Ornament, Stat, Tag, Placeholder } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { InfoBox } from '@/components/InfoBox';
import { XRefList, XRef } from '@/components/XRef';
import { ChapterNav, ContinueButton, BackToSection } from '@/components/ChapterNav';
import { getChapter, STORY_CHAPTERS } from '@/data/story';
import { useReveal } from '@/hooks';
import { navigate } from '@/router';
import { Clock, MapPin, Users, BookMarked, Bookmark, Quote } from 'lucide-react';

export function ChapterPage({ slug }: { slug: string }) {
  useReveal();
  const chapter = getChapter(slug);

  if (!chapter) {
    return (
      <PageShell>
        <p className="text-ink-3">لم يُعثر على الفصل.</p>
        <BackToSection hash="#/story" label="العودة إلى القصة" />
      </PageShell>
    );
  }

  const idx = STORY_CHAPTERS.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? STORY_CHAPTERS[idx - 1] : undefined;
  const next = idx < STORY_CHAPTERS.length - 1 ? STORY_CHAPTERS[idx + 1] : undefined;
  const chapterNum = idx + 1;

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', hash: '#/' },
          { label: 'القصة', hash: '#/story' },
          { label: `الفصل ${chapterNum}` },
        ]}
      />

      {/* Chapter header */}
      <div className="reveal">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-display text-5xl text-gold/30 leading-none">{chapterNum}</span>
          <div>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">فصل {chapterNum} من {STORY_CHAPTERS.length}</p>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight">{chapter.title}</h1>
          </div>
        </div>
        <p className="text-sm text-ink-3 tracking-wide mb-4">{chapter.titleEn}</p>
        <div className="flex items-center gap-4 flex-wrap text-xs text-ink-3 mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> {chapter.readingTime} دقائق قراءة
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> {chapter.period}
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-gold/20 bg-gold/5 px-5 py-4 mb-8 reveal">
        <p className="text-base text-ink-2 leading-relaxed font-serif-ar italic">
          {chapter.summary}
        </p>
      </div>

      {/* Story body */}
      <div className="witcher-prose reveal">
        {chapter.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {chapter.didYouKnow && (
        <InfoBox variant="didyouknow">{chapter.didYouKnow}</InfoBox>
      )}

      <Ornament />

      {/* Meta sections */}
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {chapter.charactersIntroduced.length > 0 && (
          <div className="rounded-xl border border-line bg-panel/40 p-5 reveal">
            <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-3">
              <Users className="w-4 h-4" /> شخصيات ظهرت
            </h3>
            <XRefList items={chapter.charactersIntroduced} />
          </div>
        )}
        {chapter.placesIntroduced.length > 0 && (
          <div className="rounded-xl border border-line bg-panel/40 p-5 reveal">
            <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-3">
              <MapPin className="w-4 h-4" /> أماكن جديدة
            </h3>
            <XRefList items={chapter.placesIntroduced} />
          </div>
        )}
        {chapter.newTerms.length > 0 && (
          <div className="rounded-xl border border-line bg-panel/40 p-5 reveal">
            <h3 className="flex items-center gap-2 text-gold-2 font-display text-base mb-3">
              <BookMarked className="w-4 h-4" /> مصطلحات جديدة
            </h3>
            <XRefList items={chapter.newTerms} />
          </div>
        )}
        <div className="rounded-xl border border-frost/20 bg-frost/5 p-5 reveal">
          <h3 className="flex items-center gap-2 text-frost-2 font-display text-base mb-3">
            <Bookmark className="w-4 h-4" /> أشياء يجب تذكّرها
          </h3>
          <ul className="space-y-1.5">
            {chapter.thingsToRemember.map((t, i) => (
              <li key={i} className="text-sm text-ink-2 flex items-start gap-2">
                <span className="text-frost-2 flex-shrink-0 mt-1">◆</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3 flex-wrap reveal">
        <Tag tone="gold">الفصل {chapterNum}</Tag>
        <Tag>{chapter.period}</Tag>
        {next && <ContinueButton slug={next.slug} />}
      </div>

      <ChapterNav
        prev={prev ? { slug: prev.slug, title: prev.title } : undefined}
        next={next ? { slug: next.slug, title: next.title } : undefined}
      />

      <BackToSection hash="#/story" label="العودة إلى جميع الفصول" />
    </PageShell>
  );
}
