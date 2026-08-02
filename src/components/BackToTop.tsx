import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-panel border border-gold/30 text-gold-2 flex items-center justify-center shadow-lg shadow-black/50 hover:bg-gold/10 hover:border-gold transition-all animate-fade-in"
      aria-label="العودة للأعلى"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
