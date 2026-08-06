import { ChevronLeft } from 'lucide-react';
import { navigate } from '@/router';
import type { Breadcrumb } from '@/types';

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav className="flex items-center flex-wrap gap-1 text-sm text-ink-3 mb-6">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronLeft className="w-3.5 h-3.5 opacity-50" />}
            {item.hash && !last ? (
              <button
                onClick={() => navigate(item.hash!)}
                className="hover:text-gold-2 transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <span className={last ? 'text-gold-2' : ''}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
