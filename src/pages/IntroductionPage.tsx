import { PageShell, SectionHeading, Ornament, Card } from '@/components/ui';
import { InfoBox } from '@/components/InfoBox';
import { useReveal } from '@/hooks';
import { navigate } from '@/router';
import { ArrowLeft, BookOpen, Compass, ScrollText } from 'lucide-react';

export function IntroductionPage() {
  useReveal();

  return (
    <PageShell>
      <SectionHeading
        eyebrow="المقدمة"
        title="مرحبًا بك في عالم الويتشر"
        titleEn="Welcome to The Witcher"
      />

      <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-line mb-8 reveal">
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
        <p className="absolute bottom-4 right-4 text-xs text-ink-3 tracking-wide">غابة على أطراف القارة</p>
      </div>

      <div className="witcher-prose reveal">
        <p>
          <span className="text-gold-2 font-semibold">The Witcher</span> سلسلة ألعاب وروايات
          تدور في عالم خيالي مظلم ومعقّد. بطلها <span className="text-gold-2 font-semibold">جيرالت من ريفيا (Geralt of Rivia)</span>،
          ويتشر — أي قاتل وحوش محترف خضع لتحوّلات سحرية تمنحه قوى خارقة. لكن القصة أكبر من جيرالت: فيها
          حروب بين ممالك، سحر وسياسة، أعراق قديمة تتراجع أمام البشر، وتهديد غامض يسمّى الوَحش البري.
        </p>
        <p>
          إذا كنت تنوي لعب <span className="text-gold-2 font-semibold">The Witcher 3</span> —
          وهي إحدى أعظم ألعاب تقمص الأدوار على الإطلاق — فسيكون من الصعب فهم كل ما يجري دون معرفة
          ما سبق. اللعبة تفترض أنك تعرف من هي <span className="text-gold-2 font-semibold">سيري (Ciri)</span>،
          ولماذا يبحث عنها <span className="text-gold-2 font-semibold">الوَحش البري (Wild Hunt)</span>،
          وما هو وضع الممالك بعد الحروب. هذا الموقع يشرح كل ذلك.
        </p>
      </div>

      <Ornament />

      <div className="witcher-prose reveal">
        <h3>لمن هذا الموقع؟</h3>
        <ul>
          <li>من لم يلعب أي جزء من The Witcher من قبل.</li>
          <li>من يريد لعب The Witcher 3 ويفهم القصة.</li>
          <li>من لا يعرف التاريخ أو الشخصيات أو العالم.</li>
          <li>من لا يريد قراءة الروايات الطويلة.</li>
          <li>من يريد كل شيء مشروحًا بالترتيب الزمني.</li>
        </ul>

        <h3>ماذا يغطي الموقع؟</h3>
        <p>الموقع يشرح بالتفصيل، وبأسلوب موسوعي منظم:</p>
        <ul>
          <li>تاريخ القارة من تقارب الكرات حتى الحروب النيلفغاردية.</li>
          <li>الأعراق القدماء (الإلف، الأقزام، الغنوم، الحوريات) والبشر.</li>
          <li>السحر بكل أنواعه: سحر الفوضى، الإشارات، الخيمياء، دم القدماء.</li>
          <li>الويتشرز ومدارسهم وطقوس تحوّلهم.</li>
          <li>الوحوش وأنواعها ونقاط ضعفها.</li>
          <li>الممالك: نيلفغارد، ثيمربرغ، ريدانيا، سينترا، كيدفن، سكيليغ.</li>
          <li>الشخصيات المهمة: جيرالت، ينيفر، سيري، إمهاير، فولتست، رادوفيد وغيرهم.</li>
          <li>القصة الكاملة من الروايات والقصص القصيرة.</li>
          <li>قصة The Witcher (2007) وThe Witcher 2 كاملتين.</li>
        </ul>

        <InfoBox variant="remember" title="تذكّر: لا حرق لـ The Witcher 3">
          الموقع يتوقف تمامًا عند بداية The Witcher 3. كل ما يسبقها مشروح بالتفصيل، لكن أحداث اللعبة
          نفسها لم تُذكر. اقرأ بأمان تام.
        </InfoBox>

        <h3>كيف تقرأ الموقع؟</h3>
        <p>
          الأفضل أن تتبع <span className="text-gold-2 font-semibold">ترتيب القراءة المقترح</span>:
          ابدأ بالمقدمة (أنت هنا)، ثم دليل العالم لتفهم الأساسيات، ثم القصة بالترتيب الزمني. لكنك حرّ
          في التنقل بين الأقسام كما تشاء. كل قسم مستقل بحدّ ذاته.
        </p>
        <p>
          عندما تظهر كلمة باللون الذهبي، فهي رابط قابل للنقر ينقلك إلى صفحة الشخصية أو المملكة أو
          المصطلح المعني. استخدم البحث في الأعلى للوصول السريع لأي شيء.
        </p>

        <InfoBox variant="didyouknow" title="ما هو The Witcher أصلاً؟">
          The Witcher سلسلة روايات بولندية من تأليف <span className="text-ink">أندريه سابكوفسكي (Andrzej Sapkowski)</span>،
          بدأت بقصص قصيرة في التسعينيات. ثم حوّلتها شركة <span className="text-ink">CD Projekt Red</span> البولندية
          إلى سلسلة ألعاب شهيرة بدأت عام 2007. الروايات والألعاب مكملتان لبعضهما، واللعبة الثالثة تكمل
          القصة من حيث انتهت الروايات.
        </InfoBox>
      </div>

      <Ornament />

      {/* Next steps */}
      <div className="grid sm:grid-cols-3 gap-4 mt-8 reveal">
        <Card
          title="ترتيب القراءة"
          titleEn="Reading Order"
          desc="عشرون خطوة منظمة تأخذك من الصفر إلى الجاهزية الكاملة."
          hash="#/reading-order"
          icon="📖"
          meta="الخطوة التالية"
        />
        <Card
          title="دليل العالم"
          titleEn="World Guide"
          desc="ابدأ بفهم القارة والتاريخ والأعراق والسحر قبل القصة."
          hash="#/world"
          icon="🌍"
        />
        <Card
          title="القصة"
          titleEn="Story"
          desc="الروايات واللعبتان الأولى والثانية بالترتيب الزمني."
          hash="#/story"
          icon="📜"
        />
      </div>

      <div className="mt-10 text-center reveal">
        <button
          onClick={() => navigate('#/reading-order')}
          className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-to-l from-gold-dim to-gold text-bg font-bold hover:from-gold hover:to-gold-2 transition-all shadow-lg shadow-gold/20"
        >
          <BookOpen className="w-5 h-5" />
          <span>ابدأ رحلتك الآن</span>
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
    </PageShell>
  );
}
