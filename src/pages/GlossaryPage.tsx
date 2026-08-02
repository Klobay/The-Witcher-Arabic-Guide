import { useState, useMemo } from 'react';
import { WideShell, SectionHeading } from '@/components/ui';
import { GLOSSARY } from '@/data/glossary';
import { useReveal } from '@/hooks';
import { navigate } from '@/router';
import { Search, BookMarked } from 'lucide-react';

export function GlossaryPage() {
  useReveal();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('الكل');

  const categories = ['الكل', ...Array.from(new Set(GLOSSARY.map((g) => g.category)))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GLOSSARY.filter((g) => {
      const matchCat = category === 'الكل' || g.category === category;
      const matchQuery =
        !q ||
        g.term.toLowerCase().includes(q) ||
        g.termEn.toLowerCase().includes(q) ||
        g.definition.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category]);

  return (
    <WideShell>
      <SectionHeading
        eyebrow="المصطلحات"
        title="قاموس عالم الويتشر"
        titleEn="Glossary"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          قاموس قابل للبحث يشرح كل مصطلح مهم في عالم الويتشر، من الويتشر ودم القدماء إلى قانون
          المفاجأة والوَحش البري.
        </p>
      </SectionHeading>

      {/* Search bar */}
      <div className="flex items-center gap-3 rounded-xl border border-line bg-panel/40 px-4 py-3 mb-4 reveal">
        <Search className="w-5 h-5 text-gold flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث في المصطلحات..."
          className="flex-1 bg-transparent outline-none text-ink placeholder:text-ink-3"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 reveal">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
              category === c
                ? 'border-gold/40 bg-gold/10 text-gold-2'
                : 'border-line text-ink-3 hover:text-ink hover:bg-panel/60'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Terms */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((g, i) => (
          <button
            key={g.id}
            onClick={() => navigate('#/glossary/' + g.id)}
            className="group reveal rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 text-right"
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex w-9 h-9 rounded-lg border border-gold/30 text-gold-2 items-center justify-center flex-shrink-0">
                <BookMarked className="w-4 h-4" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="font-display text-base text-ink group-hover:text-gold-2 transition-colors">
                    {g.term}
                  </h3>
                  <span className="text-[10px] text-ink-3 tracking-wide">({g.termEn})</span>
                </div>
                <span className="inline-block text-[10px] text-ink-3 mt-0.5 mb-2">{g.category}</span>
                <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">{g.definition}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-ink-3 py-12">لا توجد مصطلحات مطابقة.</p>
      )}
    </WideShell>
  );
}
