import { useHashRoute } from '@/router';
import { Header, Footer } from '@/components/Layout';
import { BackToTop } from '@/components/BackToTop';
import { HomePage } from '@/pages/HomePage';
import { WorldGuidePage } from '@/pages/WorldGuidePage';
import { WorldTopicPage } from '@/pages/WorldTopicPage';
import { StoryPage } from '@/pages/StoryPage';
import { CharactersPage } from '@/pages/CharactersPage';
import { CharacterPage } from '@/pages/CharacterPage';
import { KingdomsPage } from '@/pages/KingdomsPage';
import { KingdomPage } from '@/pages/KingdomPage';
import { MonstersPage } from '@/pages/MonstersPage';
import { MonsterPage } from '@/pages/MonsterPage';
import { MagicPage } from '@/pages/MagicPage';
import { MagicEntryPage } from '@/pages/MagicEntryPage';
import { GlossaryPage } from '@/pages/GlossaryPage';
import { GlossaryTermPage } from '@/pages/GlossaryTermPage';

function App() {
  const route = useHashRoute();
  const [section, param] = route.path;

  let page: React.ReactNode;

  switch (section) {
    case undefined:
    case 'home':
      page = <HomePage />;
      break;
    case 'world':
      page = param ? <WorldTopicPage id={param} /> : <WorldGuidePage />;
      break;
    case 'story':
      page = <StoryPage />;
      break;
    case 'characters':
      page = param ? <CharacterPage id={param} /> : <CharactersPage />;
      break;
    case 'kingdoms':
      page = param ? <KingdomPage id={param} /> : <KingdomsPage />;
      break;
    case 'monsters':
      page = param ? <MonsterPage id={param} /> : <MonstersPage />;
      break;
    case 'magic':
      page = param ? <MagicEntryPage id={param} /> : <MagicPage />;
      break;
    case 'glossary':
      page = param ? <GlossaryTermPage id={param} /> : <GlossaryPage />;
      break;
    default:
      page = <HomePage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Header />
      <main className="flex-1">{page}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
