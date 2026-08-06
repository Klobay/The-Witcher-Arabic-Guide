import { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, CornerDownLeft } from 'lucide-react';
import { SEARCH_INDEX } from '@/data/search';
import { getIcon } from '@/icons';
import { navigate } from '@/router';

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return SEARCH_INDEX.filter((e) => {
      return (
        e.title.toLowerCase().includes(q) ||
        e.titleEn.toLowerCase().includes(q) ||
        e.subtitle.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q)
      );
    }).slice(0, 20);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && results[activeIndex]) {
        navigate(results[activeIndex].hash);
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, results, activeIndex, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl bg-bg-3 border border-line-2 rounded-xl shadow-2xl shadow-black/60 overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-line">
          <Search className="w-5 h-5 text-gold flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن شخصية، مملكة، وحش، مصطلح، فصل..."
            className="flex-1 bg-transparent outline-none text-ink placeholder:text-ink-3 text-base"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-ink-3 hover:text-ink hover:bg-panel transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() === '' && (
            <div className="px-4 py-12 text-center text-ink-3 text-sm">
              اكتب للبحث في الموسوعة
            </div>
          )}
          {query.trim() !== '' && results.length === 0 && (
            <div className="px-4 py-12 text-center text-ink-3 text-sm">
              لا توجد نتائج لـ "<span className="text-ink-2">{query}</span>"
            </div>
          )}
          {results.length > 0 && (
            <ul className="py-2">
              {results.map((entry, i) => {
                const Icon = getIcon(entry.icon);
                const active = i === activeIndex;
                return (
                  <li key={entry.id}>
                    <button
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => {
                        navigate(entry.hash);
                        onClose();
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-right transition-colors ${
                        active ? 'bg-gold/10' : 'hover:bg-panel/60'
                      }`}
                    >
                      <span
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border ${
                          active ? 'border-gold/40 text-gold-2' : 'border-line text-ink-3'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="flex items-baseline gap-2">
                          <span className={`text-sm font-semibold truncate ${active ? 'text-gold-2' : 'text-ink'}`}>
                            {entry.title}
                          </span>
                          <span className="text-xs text-ink-3 truncate">({entry.titleEn})</span>
                        </span>
                        <span className="block text-xs text-ink-3 truncate">{entry.subtitle}</span>
                      </span>
                      <span className="text-[10px] text-ink-3 px-1.5 py-0.5 rounded border border-line flex-shrink-0">
                        {entry.category}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-2.5 border-t border-line bg-panel/40 flex items-center justify-between text-[10px] text-ink-3">
          <span className="flex items-center gap-1.5">
            <CornerDownLeft className="w-3 h-3" /> للفتح
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 rounded border border-line bg-bg-3">ESC</kbd> للإغلاق
          </span>
        </div>
      </div>
    </div>
  );
}
