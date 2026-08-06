export type NavItem = {
  id: string;
  label: string;
  labelEn: string;
  icon: string;
};

export type Breadcrumb = { label: string; hash?: string };

export type Character = {
  id: string;
  name: string;
  nameEn: string;
  short: string;
  status: string;
  race: string;
  occupation: string;
  affiliation: string;
  relationships: { label: string; target?: string }[];
  bio: string[];
  timeline: { period: string; event: string }[];
  majorEvents: string[];
  appearances: string[];
  quote: { ar: string; en: string };
  trivia: string[];
  faction: 'witcher' | 'mage' | 'royalty' | 'nilfgaard' | 'scoiatael' | 'other';
};

export type Kingdom = {
  id: string;
  name: string;
  nameEn: string;
  short: string;
  capital: string;
  government: string;
  geography: string;
  history: string[];
  importantCharacters: { name: string; target?: string }[];
  roleInStory: string;
  wars: string[];
  relationships: { name: string; type: string }[];
  banner: string;
};

export type Race = {
  id: string;
  name: string;
  nameEn: string;
  short: string;
  origin: string;
  history: string[];
  culture: string[];
  relations: string[];
  individuals: { name: string; target?: string }[];
  elder: boolean;
};

export type Monster = {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  short: string;
  description: string[];
  habitat: string;
  danger: 'low' | 'mid' | 'high' | 'extreme';
  weaknesses: string[];
  combatTips: string[];
  relatedStory: string;
};

export type School = {
  id: string;
  name: string;
  nameEn: string;
  short: string;
  history: string[];
  location: string;
  armor: string;
  combatStyle: string;
  philosophy: string;
  knownWitchers: { name: string; target?: string }[];
  symbol: string;
};

export type MagicEntry = {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  short: string;
  description: string[];
};

export type GlossaryTerm = {
  id: string;
  term: string;
  termEn: string;
  definition: string;
  category: string;
};

export type TimelineEvent = {
  id: string;
  era: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
};

export type StoryChapter = {
  id: number;
  slug: string;
  title: string;
  titleEn: string;
  readingTime: number;
  period: string;
  summary: string;
  body: string[];
  charactersIntroduced: { name: string; target?: string }[];
  placesIntroduced: { name: string; target?: string }[];
  newTerms: { name: string; target?: string }[];
  thingsToRemember: string[];
  didYouKnow?: string;
};

export type WorldGuideTopic = {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  readingTime: number;
  summary: string;
  body: string[];
  relatedTerms: { name: string; target?: string }[];
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export type ReadingOrderItem = {
  order: number;
  title: string;
  titleEn: string;
  hash: string;
  desc: string;
  kind: 'intro' | 'world' | 'story' | 'game' | 'final';
};
