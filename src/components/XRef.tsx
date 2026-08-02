import { navigate } from '@/router';

export function XRef({
  target,
  children,
}: {
  target?: string;
  children: string;
}) {
  if (!target) {
    return <span className="text-gold-2 font-medium">{children}</span>;
  }
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        const hash = target.includes('/') ? target : target.replace(':', '/');
        navigate('#/' + hash);
      }}
      className="xref"
    >
      {children}
    </button>
  );
}

export function XRefList({ items }: { items: { name: string; target?: string }[] }) {
  if (items.length === 0) return <p className="text-sm text-ink-3">—</p>;
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-ink-2">
          <XRef target={item.target}>{item.name}</XRef>
        </li>
      ))}
    </ul>
  );
}
