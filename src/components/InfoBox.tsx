import { Lightbulb, AlertTriangle, Bookmark, ScrollText } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'didyouknow' | 'note' | 'remember' | 'history';

const config: Record<Variant, { icon: typeof Lightbulb; label: string; border: string; bg: string; iconColor: string }> = {
  didyouknow: { icon: Lightbulb, label: 'هل تعلم؟', border: 'border-gold/30', bg: 'bg-gold/5', iconColor: 'text-gold-2' },
  note: { icon: AlertTriangle, label: 'ملاحظة مهمة', border: 'border-ember/30', bg: 'bg-ember/5', iconColor: 'text-ember-2' },
  remember: { icon: Bookmark, label: 'تذكّر', border: 'border-frost/30', bg: 'bg-frost/5', iconColor: 'text-frost-2' },
  history: { icon: ScrollText, label: 'ملاحظة تاريخية', border: 'border-line-2', bg: 'bg-panel/40', iconColor: 'text-ink-2' },
};

export function InfoBox({
  variant,
  title,
  children,
}: {
  variant: Variant;
  title?: string;
  children: ReactNode;
}) {
  const c = config[variant];
  const Icon = c.icon;
  return (
    <aside className={`my-6 rounded-lg border ${c.border} ${c.bg} p-4 sm:p-5`}>
      <div className="flex items-start gap-3">
        <span className={`flex-shrink-0 mt-0.5 ${c.iconColor}`}>
          <Icon className="w-5 h-5" />
        </span>
        <div className="flex-1 min-w-0">
          <p className={`font-bold text-sm mb-1.5 ${c.iconColor}`}>{title ?? c.label}</p>
          <div className="text-sm text-ink-2 leading-relaxed">{children}</div>
        </div>
      </div>
    </aside>
  );
}
