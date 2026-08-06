import { WideShell, SectionHeading, Card } from '@/components/ui';
import { WORLD_TOPICS } from '@/data/world';
import { useReveal } from '@/hooks';
import { getIcon } from '@/icons';

export function WorldGuidePage() {
  useReveal();

  return (
    <WideShell>
      <SectionHeading
        eyebrow="دليل العالم"
        title="افهم العالم قبل القصة"
        titleEn="The World Guide"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          قبل أن تبدأ القصة، تحتاج أن تفهم العالم الذي تجري فيه: القارة وتاريخها، الأعراق التي
          تسكنها، السحر والوحوش، الويتشرز ومدارسهم، والممالك وسياساتها. هذه المقالات تشرح كل ذلك.
        </p>
      </SectionHeading>

      

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {WORLD_TOPICS.map((topic, i) => {
          const Icon = getIcon(topic.icon);
          return (
            <button
              key={topic.id}
              onClick={() => (window.location.hash = '#/world/' + topic.id)}
              className="group reveal rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 text-right overflow-hidden relative"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex w-10 h-10 rounded-lg border border-gold/30 text-gold-2 items-center justify-center group-hover:bg-gold/10 transition-all">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-[10px] text-ink-3 tracking-wider">{topic.readingTime} دقائق قراءة</span>
              </div>
              <h3 className="font-display text-lg text-ink group-hover:text-gold-2 transition-colors mb-1">
                {topic.title}
              </h3>
              <p className="text-xs text-ink-3 mb-2 tracking-wide">{topic.titleEn}</p>
              <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">{topic.summary}</p>
            </button>
          );
        })}
      </div>
    </WideShell>
  );
}
