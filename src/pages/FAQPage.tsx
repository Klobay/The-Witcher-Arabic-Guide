import { useState } from 'react';
import { PageShell, SectionHeading } from '@/components/ui';
import { FAQ as FAQ_DATA } from '@/data/faq';
import { useReveal } from '@/hooks';
import { ChevronLeft, HelpCircle } from 'lucide-react';

const categories = ['الكل', ...Array.from(new Set(FAQ_DATA.map((f) => f.category)))];

export function FAQPage() {
  useReveal();
  const [category, setCategory] = useState('الكل');
  const [open, setOpen] = useState<string | null>(null);

  const filtered = category === 'الكل' ? FAQ_DATA : FAQ_DATA.filter((f) => f.category === category);

  return (
    <PageShell>
      <SectionHeading
        eyebrow="الأسئلة الشائعة"
        title="قبل أن تبدأ The Witcher 3"
        titleEn="Frequently Asked Questions"
      >
        <p className="text-ink-2 leading-relaxed max-w-2xl">
          إجابات لأهم الأسئلة التي قد تخطر لك قبل بدء اللعبة. كل ما تحتاج معرفته في مكان واحد.
        </p>
      </SectionHeading>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 reveal">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setOpen(null);
            }}
            className={`px-3.5 py-1.5 rounded-full text-sm border transition-all ${
              category === c
                ? 'border-gold/40 bg-gold/10 text-gold-2'
                : 'border-line text-ink-3 hover:text-ink hover:bg-panel/60'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* FAQ list */}
      <div className="space-y-3">
        {filtered.map((item, i) => {
          const isOpen = open === item.id;
          return (
            <div
              key={item.id}
              className="reveal rounded-xl border border-line bg-panel/40 overflow-hidden"
              style={{ transitionDelay: `${i * 0.03}s` }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="w-full flex items-start gap-4 p-5 text-right hover:bg-panel/60 transition-colors"
              >
                <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isOpen ? 'text-gold-2' : 'text-ink-3'}`} />
                <span className="flex-1 font-semibold text-sm sm:text-base text-ink leading-relaxed">
                  {item.question}
                </span>
                <ChevronLeft
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 text-ink-3 transition-transform ${
                    isOpen ? '-rotate-90' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pr-14 animate-fade-in">
                  <p className="text-sm text-ink-2 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Final CTA */}
      <div className="mt-12 rounded-2xl border border-gold/20 bg-gradient-to-br from-panel via-bg-3 to-panel p-8 text-center reveal">
        <p className="font-display text-xl text-gold-2 mb-2">أنت جاهز</p>
        <p className="text-sm text-ink-2 max-w-xl mx-auto leading-relaxed">
          إذا قرأت الموقع وفهمت الأساسيات والقصة، فأنت جاهز لبدء The Witcher 3 بثقة. كل مرجع وكل
          شخصية ستكون مألوفة. استمتع بالرحلة.
        </p>
      </div>
    </PageShell>
  );
}
