import { useReveal } from '@/hooks';
import { navigate } from '@/router';
import { ArrowLeft, BookOpen, ScrollText, Users, Compass, Castle, Skull, Sparkles, BookMarked } from 'lucide-react';

export function HomePage() {
  useReveal();

  const sections = [
    { icon: ScrollText, label: 'القصة', desc: 'الروايات واللعبتان الأولى والثانية، بالترتيب الزمني', hash: '#/story' },
    { icon: Users, label: 'الشخصيات', desc: 'جيرالت، ينيفر، سيري، إمهاير وغيرهم بالتفصيل', hash: '#/characters' },
    { icon: Compass, label: 'العالم', desc: 'افهم القارة والتاريخ والأعراق والسحر قبل القصة', hash: '#/world' },
    { icon: Castle, label: 'الممالك', desc: 'نيلفغارد، ثيمربرغ، ريدانيا، سينترا وغيرها', hash: '#/kingdoms' },
    { icon: Skull, label: 'الوحوش', desc: 'موسوعة الوحوش ونقاط ضعفها وأساليب قتالها', hash: '#/monsters' },
    { icon: Sparkles, label: 'السحر', desc: 'الفوضى، الإشارات، الخيمياء، دم القدماء', hash: '#/magic' },
    { icon: BookMarked, label: 'المصطلحات', desc: 'معجم شامل لمصطلحات عالم الويتشر', hash: '#/glossary' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-2 via-bg to-bg-2" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 30%, rgba(201,162,39,0.10), transparent 60%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center pt-20 pb-12">
          <h1 className="font-display text-4xl sm:text-6xl text-ink leading-[1.8] mb-4 animate-fade-up whitespace-nowrap">
            الدليل العربي لعالم <span className="font-witcher text-gold-2">الويتشر</span>
          </h1>
          <p className="text-base sm:text-lg text-ink-3 font-sans tracking-[0.15em] mb-8 mt-10 animate-fade-in">
            THE WITCHER · ARABIC GUIDE
          </p>
          <p className="text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up">
            كل ما تحتاج معرفته عن عالم <span className="text-gold-2 font-semibold">The Witcher</span> قبل
            أن تبدأ <span className="text-gold-2 font-semibold">The Witcher 3</span> — التاريخ، الشخصيات،
            الممالك، الوحوش، والقصة الكاملة، مشروحة بالترتيب الزمني للمبتدئ تمامًا.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <button
              onClick={() => navigate('#/story')}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-gold text-bg font-bold text-base hover:bg-gold-2 transition-all shadow-lg shadow-gold/20"
            >
              <BookOpen className="w-5 h-5" />
              <span>ابدأ القراءة</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('#/world')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-line text-ink-2 hover:text-gold-2 hover:border-gold/40 transition-all"
            >
              <span>تعلّم عن العالم</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2">الأقسام الرئيسية</p>
          <h2 className="font-display text-2xl sm:text-3xl text-ink">ابدأ من حيث يناسبك</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.label}
                onClick={() => navigate(s.hash)}
                className="group reveal rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 text-right"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="inline-flex w-10 h-10 rounded-lg border border-gold/30 text-gold-2 items-center justify-center mb-3 group-hover:bg-gold/10 transition-all">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg text-ink group-hover:text-gold-2 transition-colors mb-1">
                  {s.label}
                </h3>
                <p className="text-xs text-ink-3 leading-relaxed">{s.desc}</p>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
