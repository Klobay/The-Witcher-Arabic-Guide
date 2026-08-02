import { useEffect, useState } from 'react';
import { useReadingProgress } from '@/hooks';
import { navigate } from '@/router';
import { STORY_CHAPTERS } from '@/data/story';
import { Bookmark, ChevronLeft, X } from 'lucide-react';

export function ProgressWidget() {
  const { progress, recordProgress, clearProgress } = useReadingProgress(STORY_CHAPTERS.length);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/story/') && !hash.includes('?')) {
      const slug = hash.replace('#/story/', '');
      const ch = STORY_CHAPTERS.find((c) => c.slug === slug);
      if (ch) {
        recordProgress(hash, ch.title, ch.id);
      }
    }
  }, [recordProgress]);

  if (!progress.current) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {expanded && (
        <div className="absolute bottom-full mb-2 left-0 w-72 rounded-xl border border-line bg-bg-3 shadow-xl shadow-black/50 p-4 animate-fade-up">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2 text-gold-2">
              <Bookmark className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wide">تقدّم القراءة</span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-ink-3 hover:text-ink"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-ink-3 mb-1">الفصل الحالي</p>
              <p className="text-sm text-ink font-semibold leading-snug">{progress.current.title}</p>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-ink-3">التقدّم</span>
                <span className="text-gold-2 font-semibold">{progress.percentage}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-panel overflow-hidden">
                <div
                  className="h-full bg-gradient-to-l from-gold-dim to-gold-2 rounded-full transition-all"
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-ink-3 mb-1">
                الفصول المقرؤة: {progress.visited.filter((v) => v.startsWith('#/story/')).length} / {STORY_CHAPTERS.length}
              </p>
            </div>
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => {
                  navigate(progress.current!.hash);
                  setExpanded(false);
                }}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gold/10 border border-gold/30 text-gold-2 text-xs font-semibold hover:bg-gold/20 transition-colors"
              >
                <span>تابع</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  clearProgress();
                  setExpanded(false);
                }}
                className="px-3 py-2 rounded-lg border border-line text-ink-3 text-xs hover:text-ink hover:bg-panel transition-colors"
              >
                مسح
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-panel border border-gold/30 text-gold-2 shadow-lg shadow-black/40 hover:bg-gold/10 transition-all"
      >
        <Bookmark className="w-4 h-4" />
        <span className="text-xs font-semibold">{progress.percentage}%</span>
        <span className="hidden sm:inline text-xs text-ink-2">تابع القراءة</span>
      </button>
    </div>
  );
}
