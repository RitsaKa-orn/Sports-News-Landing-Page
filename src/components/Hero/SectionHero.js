import HeroTextBox from "./HeroTextBox";
import HeroHookBox from "./HeroHookBox";
import HeroNewsBox from "./HeroNewsBox";

export default function SectionHero() {
  return (
    <section className="section section-hero">
      <div className="hero">
        <HeroTextBox />
        <HeroHookBox />
        <HeroNewsBox />
      </div>
    </section>
  );
}
