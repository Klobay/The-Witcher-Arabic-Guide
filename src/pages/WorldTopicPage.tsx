import { PageShell, SectionHeading, Ornament, Stat } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { InfoBox } from '@/components/InfoBox';
import { XRefList } from '@/components/XRef';
import { BackToSection } from '@/components/ChapterNav';
import { getWorldTopic, WORLD_TOPICS } from '@/data/world';
import { getIcon } from '@/icons';
import { useReveal } from '@/hooks';
import { Clock, Link2 } from 'lucide-react';

const WORLD_TOPICS_LIST = WORLD_TOPICS;
const WORLD_INDEX = WORLD_TOPICS.map((t) => t.id);

export function WorldTopicPage({ id }: { id: string }) {
  useReveal();
  const topic = getWorldTopic(id);

  if (!topic) {
    return (
      <PageShell>
        <p className="text-ink-3">لم يُعثر على الموضوع.</p>
        <BackToSection hash="#/world" label="العودة إلى دليل العالم" />
      </PageShell>
    );
  }

  const Icon = getIcon(topic.icon);
  const idx = WORLD_INDEX.indexOf(topic.id);
  const prev = idx > 0 ? WORLD_TOPICS_LIST[idx - 1] : undefined;
  const next = idx < WORLD_TOPICS_LIST.length - 1 ? WORLD_TOPICS_LIST[idx + 1] : undefined;

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', hash: '#/' },
          { label: 'دليل العالم', hash: '#/world' },
          { label: topic.title },
        ]}
      />

      <div className="flex items-center gap-3 mb-4 reveal">
        <span className="inline-flex w-12 h-12 rounded-xl border border-gold/30 text-gold-2 items-center justify-center">
          <Icon className="w-6 h-6" />
        </span>
        <div>
          <p className="text-xs tracking-[0.2em] text-gold uppercase">دليل العالم</p>
          <h1 className="font-display text-2xl sm:text-3xl text-ink leading-tight">{topic.title}</h1>
        </div>
      </div>
      <p className="text-sm text-ink-3 tracking-wide mb-6">{topic.titleEn}</p>

      {topic.image && (
        <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-line mb-8 reveal">
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        </div>
      )}

      <div className="flex items-center gap-3 mb-8 reveal">
        <span className="inline-flex items-center gap-1.5 text-xs text-ink-3">
          <Clock className="w-3.5 h-3.5" /> {topic.readingTime} دقائق قراءة
        </span>
      </div>

      <p className="text-lg text-ink-2 leading-relaxed mb-8 reveal font-serif-ar italic border-r-2 border-gold/40 pr-4">
        {topic.summary}
      </p>

      <div className="witcher-prose reveal">
        {topic.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {topic.relatedTerms.length > 0 && (
        <>
          <Ornament />
          <div className="reveal">
            <h3 className="flex items-center gap-2 text-gold-2 font-display text-lg mb-4">
              <Link2 className="w-5 h-5" /> روابط ذات صلة
            </h3>
            <XRefList items={topic.relatedTerms} />
          </div>
        </>
      )}

      {/* prev/next */}
      <nav className="mt-12 grid gap-3 sm:grid-cols-2">
        {prev ? (
          <button
            onClick={() => (window.location.hash = '#/world/' + prev.id)}
            className="group rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/30 transition-all p-4 text-right"
          >
            <span className="block text-[10px] text-ink-3 tracking-wider uppercase">الموضوع السابق</span>
            <span className="block text-sm text-ink group-hover:text-gold-2 transition-colors truncate">{prev.title}</span>
          </button>
        ) : <span />}
        {next ? (
          <button
            onClick={() => (window.location.hash = '#/world/' + next.id)}
            className="group rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/30 transition-all p-4 text-right"
          >
            <span className="block text-[10px] text-ink-3 tracking-wider uppercase">الموضوع التالي</span>
            <span className="block text-sm text-ink group-hover:text-gold-2 transition-colors truncate">{next.title}</span>
          </button>
        ) : <span />}
      </nav>

      <BackToSection hash="#/world" label="العودة إلى دليل العالم" />
    </PageShell>
  );
}
