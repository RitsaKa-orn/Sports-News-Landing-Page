import SectionHeader from "./Header/SectionHeader";
import SectionHero from "./Hero/SectionHero";
import SectionCategory from "./Category/SectionCategory";
import SectionTrendingNews from "./TrendingNews/SectionTrendingNews";
import SectionFootballNews from "./FootballNews/SectionFootballNews";
import SectionRecentNews from "./RecentNews/SectionRecentNews";
import SectionSportsArticle from "./SportsArticle/SectionSportsArticle";
import SectionCallToAction from "./CallToAction/SectionCallToAction";

export default function App() {
  return (
    <div className="App">
      <SectionHeader />
      <main className="main-section">
        <SectionHero />
        <SectionCategory />
        <SectionTrendingNews />
        <SectionFootballNews />
        <SectionRecentNews />
        <SectionSportsArticle />
        <SectionCallToAction />
      </main>
    </div>
  );
}
