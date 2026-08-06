import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronLeft } from 'lucide-react';
import { NAV_ITEMS } from '@/data/nav';
import { getIcon } from '@/icons';
import { useHashRoute, navigate, buildHash } from '@/router';
import { SearchModal } from './SearchModal';

export function Header() {
  const route = useHashRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [route.path.join('/')]);

  const currentSection = route.path[0] || 'home';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-2/95 backdrop-blur-md border-b border-line shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-bg-2/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              onClick={() => navigate('#/')}
              className="flex items-center gap-3 group flex-shrink-0"
            >
              
              <span className="hidden sm:block">
                <span className="block font-display text-base text-ink leading-tight group-hover:text-gold-2 transition-colors">
                  الدليل العربي
                </span>
                <span className="block text-[10px] text-ink-3 tracking-wider">
                  THE WITCHER
                </span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.slice(0, 8).map((item) => {
                const Icon = getIcon(item.icon);
                const active = currentSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id === 'home' ? '#/' : buildHash(item.id))}
                    className={`relative flex items-center gap-1.5 px-3 py-2 rounded-md text-sm transition-all ${
                      active
                        ? 'text-gold-2 bg-gold/10'
                        : 'text-ink-2 hover:text-ink hover:bg-panel/60'
                    }`}
                  >
                    <Icon className="w-4 h-4 opacity-70" />
                    <span>{item.label}</span>
                    {active && (
                      <span className="absolute -bottom-px left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                    )}
                  </button>
                );
              })}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm text-ink-2 hover:text-gold-2 hover:bg-panel/60 transition-all"
              >
                <Search className="w-4 h-4" />
                <span>بحث</span>
              </button>
            </nav>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-md text-ink-2 hover:text-gold-2 hover:bg-panel/60 transition-colors"
                aria-label="بحث"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-ink-2 hover:text-gold-2 hover:bg-panel/60 transition-colors"
                aria-label="القائمة"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-line bg-bg-2/98 backdrop-blur-md max-h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar">
            <nav className="px-4 py-3 grid grid-cols-2 gap-1">
              {NAV_ITEMS.map((item) => {
                const Icon = getIcon(item.icon);
                const active = currentSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id === 'home' ? '#/' : buildHash(item.id))}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-md text-sm transition-all ${
                      active
                        ? 'text-gold-2 bg-gold/10 border border-gold/20'
                        : 'text-ink-2 hover:text-ink hover:bg-panel/60 border border-transparent'
                    }`}
                  >
                    <Icon className="w-4 h-4 opacity-70 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-bg-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="ornament-divider mb-8">
          <span className="font-display text-gold text-lg">⚜</span>
        </div>
        <div className="text-center space-y-3">
          <p className="font-display text-lg text-gold-2">
            الدليل العربي لعالم الويتشر
          </p>
          <p className="text-sm text-ink-3 max-w-2xl mx-auto leading-relaxed">
            مرجع تفاعلي للمبتدئين في عالم The Witcher. يشرح التاريخ والشخصيات والممالك والوحوش والقصص الروائية وأجزاء اللعبة الأولى والثانية، استعدادًا لـ The Witcher 3.
          </p>
          <p className="text-xs text-ink-3 pt-4">
            هذا الموقع مرجع تعليمي غير رسمي. The Witcher علامة تجارية مملوكة لشركة CD Projekt Red. الروايات من تأليف أندريه سابكوفسكي.
          </p>
        </div>
      </div>
    </footer>
  );
}
