import { useEffect, useState, useCallback } from 'react';

const KEY = 'witcher-progress';
const VISITED_KEY = 'witcher-visited';

export type Progress = {
  hash: string;
  title: string;
  chapterNum?: number;
  totalChapters: number;
  timestamp: number;
};

export type ReadingProgress = {
  current: Progress | null;
  visited: string[];
  percentage: number;
};

export function useReadingProgress(totalChapters: number) {
  const [progress, setProgress] = useState<ReadingProgress>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      const visitedRaw = localStorage.getItem(VISITED_KEY);
      const current = raw ? (JSON.parse(raw) as Progress) : null;
      const visited = visitedRaw ? (JSON.parse(visitedRaw) as string[]) : [];
      const percentage = current && current.chapterNum ? Math.round((current.chapterNum / totalChapters) * 100) : 0;
      return { current, visited, percentage };
    } catch {
      return { current: null, visited: [], percentage: 0 };
    }
  });

  const recordProgress = useCallback(
    (hash: string, title: string, chapterNum?: number) => {
      const entry: Progress = {
        hash,
        title,
        chapterNum,
        totalChapters,
        timestamp: Date.now(),
      };
      try {
        localStorage.setItem(KEY, JSON.stringify(entry));
        const visitedRaw = localStorage.getItem(VISITED_KEY);
        const visited = visitedRaw ? (JSON.parse(visitedRaw) as string[]) : [];
        if (!visited.includes(hash)) {
          visited.push(hash);
          localStorage.setItem(VISITED_KEY, JSON.stringify(visited));
        }
        setProgress((prev) => ({
          current: entry,
          visited: visited.includes(hash) ? prev.visited : [...prev.visited, hash],
          percentage: chapterNum ? Math.round((chapterNum / totalChapters) * 100) : prev.percentage,
        }));
      } catch {
        /* ignore */
      }
    },
    [totalChapters],
  );

  const clearProgress = useCallback(() => {
    try {
      localStorage.removeItem(KEY);
      localStorage.removeItem(VISITED_KEY);
      setProgress({ current: null, visited: [], percentage: 0 });
    } catch {
      /* ignore */
    }
  }, []);

  return { progress, recordProgress, clearProgress };
}

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
