import { useEffect, useState } from 'react';

export function ReadingProgress({ chapters }: { chapters: { id: number; title: string }[] }) {
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));

      const elements = chapters.map((c) => document.getElementById(`chapter-${c.id}`));
      let current = chapters[0]?.id ?? 1;
      for (const el of elements) {
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = Number(el.id.replace('chapter-', ''));
        }
      }
      setActiveChapter(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [chapters]);

  return (
    <div className="fixed top-16 lg:top-18 inset-x-0 z-40 pointer-events-none">
      <div className="h-1 bg-bg-2/60">
        <div
          className="h-full bg-gradient-to-l from-gold-dim to-gold-2 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="flex items-center gap-2 flex-wrap">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#chapter-${c.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`chapter-${c.id}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`pointer-events-auto text-xs px-2.5 py-1 rounded-full border transition-all ${
                activeChapter === c.id
                  ? 'border-gold/50 bg-gold/15 text-gold-2'
                  : 'border-line bg-bg-2/80 text-ink-3 hover:text-ink-2 hover:border-gold/30'
              }`}
            >
              {c.id}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
