import type { ReactNode } from 'react';

export function Placeholder({
  type,
  label,
  className = '',
  image,
}: {
  type: 'portrait' | 'map' | 'symbol' | 'creature' | 'banner' | 'diagram';
  label: string;
  className?: string;
  image?: string;
}) {
  const icons: Record<string, string> = {
    portrait: '👤',
    map: '🗺️',
    symbol: '⚜',
    creature: '⚔',
    banner: '🛡️',
    diagram: '🕸️',
  };

  const sizes: Record<string, string> = {
    portrait: 'aspect-[3/4]',
    map: 'aspect-[4/3]',
    symbol: 'aspect-square',
    creature: 'aspect-[4/3]',
    banner: 'aspect-[16/5]',
    diagram: 'aspect-[4/3]',
  };

  return (
    <div
      className={`relative ${sizes[type]} ${className} rounded-lg border border-line bg-gradient-to-br from-bg-3 via-panel to-bg-3 flex flex-col items-center justify-center overflow-hidden group`}
    >
      {image ? (
        <>
          <img
            src={image}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
          <div className="absolute inset-0 corner-brackets opacity-60" />
          <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-ink-2 tracking-wide px-2">
            {label}
          </p>
        </>
      ) : (
        <>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(201,162,39,0.15), transparent 60%)' }} />
          <div className="absolute inset-0 corner-brackets opacity-40" />
          <div className="relative text-center px-4">
            <div className="text-4xl sm:text-5xl mb-2 opacity-30">{icons[type]}</div>
            <p className="text-xs text-ink-3 tracking-wide">{label}</p>
          </div>
        </>
      )}
    </div>
  );
}

export function AtmosphericImage({
  src,
  alt,
  className = '',
  overlay = 'from-bg/90 via-bg/40 to-bg/80',
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  overlay?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-line ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  titleEn,
  children,
}: {
  eyebrow?: string;
  title: string;
  titleEn?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2 animate-fade-in">{eyebrow}</p>
      )}
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight animate-fade-up">
        {title}
        {titleEn && (
          <span className="block text-lg sm:text-xl text-ink-2 font-sans font-normal mt-2 tracking-wide">
            {titleEn}
          </span>
        )}
      </h1>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

export function Card({
  title,
  titleEn,
  desc,
  hash,
  icon,
  meta,
}: {
  title: string;
  titleEn?: string;
  desc: string;
  hash: string;
  icon?: string;
  meta?: string;
}) {
  return (
    <button
      onClick={() => (window.location.hash = hash)}
      className="group relative w-full text-right rounded-xl border border-line bg-panel/40 hover:bg-panel hover:border-gold/40 transition-all p-5 overflow-hidden"
    >
      <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-gold/0 via-gold/0 to-gold/0 group-hover:via-gold/60 transition-all duration-500" />
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg text-ink group-hover:text-gold-2 transition-colors leading-tight">
            {title}
          </h3>
          {titleEn && (
            <p className="text-sm text-ink-2 mt-1 tracking-wide">{titleEn}</p>
          )}
        </div>
        {icon && (
          <span className="text-2xl opacity-40 group-hover:opacity-80 group-hover:text-gold transition-all flex-shrink-0">
            {icon}
          </span>
        )}
      </div>
      <p className="text-sm text-ink-2 leading-relaxed line-clamp-2">{desc}</p>
      {meta && (
        <p className="text-[10px] text-ink-3 mt-3 tracking-wide uppercase">{meta}</p>
      )}
    </button>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-panel/40 px-4 py-3">
      <p className="text-[10px] text-ink-3 tracking-wider uppercase mb-0.5">{label}</p>
      <p className="text-sm text-ink font-semibold">{value}</p>
    </div>
  );
}

export function Tag({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'gold' | 'danger' }) {
  const tones = {
    default: 'border-line text-ink-2 bg-panel/40',
    gold: 'border-gold/30 text-gold-2 bg-gold/5',
    danger: 'border-blood/40 text-blood-2 bg-blood/5',
  };
  return (
    <span className={`inline-flex items-center text-xs px-2.5 py-1 rounded-full border ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Ornament() {
  return (
    <div className="ornament-divider my-8">
      <span className="font-display text-gold text-base">⚜</span>
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 animate-fade-in">
      {children}
    </div>
  );
}

export function WideShell({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 animate-fade-in">
      {children}
    </div>
  );
}
