export type SearchEntry = {  id: string;  title: string;  titleEn: string;  subtitle: string;  hash: string;  category: string;  icon: string;};import { CHARACTERS } from './characters';

import { KINGDOMS } from './kingdoms';

import { RACES } from './races';

import { MONSTERS } from './monsters';

import { SCHOOLS } from './schools';

import { MAGIC_ENTRIES } from './magic';

import { GLOSSARY } from './glossary';

import { TIMELINE } from './timeline';

import { STORY_CHAPTERS } from './story';

import { WORLD_TOPICS } from './world';

import { NAV_ITEMS } from './nav';

export const SEARCH_INDEX: SearchEntry[] = [  ...NAV_ITEMS.map((n) => ({    id: 'nav-' + n.id,    title: n.label,    titleEn: n.labelEn,    subtitle: 'قسم',    hash: n.id === 'home' ? '#/' : '#/' + n.id,    category: 'أقسام',    icon: n.icon,  })),  ...CHARACTERS.map((c) => ({    id: 'char-' + c.id,    title: c.name,    titleEn: c.nameEn,    subtitle: c.short,    hash: '#/characters/' + c.id,    category: 'شخصيات',    icon: 'Users',  })),  ...KINGDOMS.map((k) => ({    id: 'king-' + k.id,    title: k.name,    titleEn: k.nameEn,    subtitle: k.short,    hash: '#/kingdoms/' + k.id,    category: 'ممالك',    icon: 'Castle',  })),  ...RACES.map((r) => ({    id: 'race-' + r.id,    title: r.name,    titleEn: r.nameEn,    subtitle: r.short,    hash: '#/race/' + r.id,    category: 'أعراق',    icon: 'UsersRound',  })),  ...MONSTERS.map((m) => ({    id: 'mon-' + m.id,    title: m.name,    titleEn: m.nameEn,    subtitle: m.short,    hash: '#/monsters/' + m.id,    category: 'وحوش',    icon: 'Skull',  })),  ...SCHOOLS.map((s) => ({    id: 'sch-' + s.id,    title: s.name,    titleEn: s.nameEn,    subtitle: s.short,    hash: '#/school/' + s.id,    category: 'مدارس الويتشر',    icon: 'Swords',  })),  ...MAGIC_ENTRIES.map((m) => ({    id: 'mag-' + m.id,    title: m.name,    titleEn: m.nameEn,    subtitle: m.short,    hash: '#/magic/' + m.id,    category: 'سحر',    icon: 'Sparkles',  })),  ...GLOSSARY.map((g) => ({    id: 'glo-' + g.id,    title: g.term,    titleEn: g.termEn,    subtitle: g.definition.slice(0, 80) + '...',    hash: '#/glossary/' + g.id,    category: 'مصطلحات',    icon: 'BookMarked',  })),  ...TIMELINE.map((t) => ({    id: 'tl-' + t.id,    title: t.title,    titleEn: t.year,    subtitle: t.description.slice(0, 80) + '...',    hash: '#/timeline',    category: 'الخط الزمني',    icon: 'Clock',  })),  ...STORY_CHAPTERS.map((c) => ({    id: 'ch-' + c.id,    title: c.title,    titleEn: c.titleEn,    subtitle: c.summary,    hash: '#/story',    category: 'فصول القصة',    icon: 'ScrollText',  })),  ...WORLD_TOPICS.map((w) => ({    id: 'wor-' + w.id,    title: w.title,    titleEn: w.titleEn,    subtitle: w.summary,    hash: '#/world/' + w.id,    category: 'دليل العالم',    icon: 'Globe',  })),
];