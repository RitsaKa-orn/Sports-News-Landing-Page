import TrendingNewList from "./TrendingNewList";
export default function TrendingNews() {
  const trendingNews = [
    {
      news: "horse",
      newsImage: "/assets/trending-news1-min.webp",
      date: "Race98 - 03 June 2023",
      headline: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
      context:
        "NEW YORK-A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's",
    },
    {
      news: "cycling",
      newsImage: "/assets/trending-news2.webp",
      date: "Jony.Ls - 03 June 2023",
      headline: "Savilia Blunk Embraces Longer Season with World Cup",
      context:
        "Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some",
    },
    {
      news: "wrestling",
      newsImage: "/assets/trending-news3-min.webp",
      date: "King.F - 03 June 2023",
      headline: "Ryan Garcia is fighting again, this time on social media",
      context:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    },
  ];

  return (
    <div className="trending-news-box">
      <p className="heading head-trending-news">Trending News</p>
      <ul className="trending-news-lists">
        {trendingNews.map((news) => (
          <TrendingNewList trendingNews={news} key={news.news} />
        ))}
      </ul>
    </div>
  );
}
