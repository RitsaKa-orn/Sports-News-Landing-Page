import SportArticleList from "./SportArticleList";

export default function SectionSportsArticle() {
  const sportsArticle = [
    {
      articleType: "Basketball",
      date: "04 June 2023",
      author: "Jake Will.",
      headline:
        "5 Exercises Basketball Players Should Be Using To Develop Strength",
      context:
        "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn't all about a massive body mass or ripped muscles.",
      articleImg: "/assets/sports-article1-min.webp",
      articlePersonImg: "/assets/person1-min.webp",
      articleAlt: "Man",
    },
    {
      articleType: "Hockey",
      date: "03 June 2023",
      author: "Foxi.zacon",
      headline:
        "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
      context:
        "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
      articleImg: "/assets/sports-article2-min.webp",
      articlePersonImg: "/assets/person2-min.webp",
      articleAlt: "Girl with curly hair",
    },
    {
      articleType: "Badminton",
      date: "01 June 2023",
      author: "Bong Lozada",
      headline: "'Outdoor' Badminton Gets Support From Local Federation",
      context:
        "The Badminton World Federation is developing Air Badminton and the country's governing body, Philippine Badminton Association.",
      articleImg: "/assets/sports-article3-min.webp",
      articlePersonImg: "/assets/person3-min.webp",
      articleAlt: "Man",
    },
  ];

  return (
    <section className="section section-sports-article">
      <p className="heading heading-sports-article">Sports Article</p>
      <div className="sports-article-container">
        {sportsArticle.map((article) => (
          <SportArticleList article={article} key={article.articleType} />
        ))}
        <div className="sports-article-slider">
          <button className="sports-slider">
            <p>&larr;</p>
          </button>
          <button className="sports-slider">
            <p>&rarr;</p>
          </button>
        </div>
      </div>
    </section>
  );
}
