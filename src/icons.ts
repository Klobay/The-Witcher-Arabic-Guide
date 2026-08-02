import {
  Home, BookOpen, ListOrdered, Globe, ScrollText, Users, Clock, Castle,
  UsersRound, Skull, Swords, Sparkles, BookMarked, HelpCircle,
  Search, Menu, X, ChevronLeft, ChevronRight, ChevronUp,
  ArrowLeft, ArrowRight, Quote, MapPin, Calendar, AlertTriangle,
  Lightbulb, Bookmark, Compass, Crown, Flag, Heart, Eye,
  Shield, Zap, Flame, Snowflake, type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Home, BookOpen, ListOrdered, Globe, ScrollText, Users, Clock, Castle,
  UsersRound, Skull, Swords, Sparkles, BookMarked, HelpCircle,
  Search, Menu, X, ChevronLeft, ChevronRight, ChevronUp,
  ArrowLeft, ArrowRight, Quote, MapPin, Calendar, AlertTriangle,
  Lightbulb, Bookmark, Compass, Crown, Flag, Heart, Eye,
  Shield, Zap, Flame, Snowflake,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? BookOpen;
}
