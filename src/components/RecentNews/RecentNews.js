import RecentNewsList from "./RecentNewsList";

export default function RecentNews() {
  const recentNewsLists = [
    {
      news: "Baku 2023 Taekwondo Championships",
      date: "#Pollar. 87 - 12 July 2023",
      id: "Taekwondo",
      newsImage: "/assets/recent-news-list1.webp",
    },
    {
      news: "Open Championship Royal Liverpool Golf",
      date: "#Goft. Toni - 20 July 2023",
      id: "Golf",
      newsImage: "/assets/recent-news-list2-min.webp",
    },
    {
      news: "Ireland Tour of England Test 2023",
      date: "#Cricket. Toni - 27 July 2023",
      id: "Cricket",
      newsImage: "/assets/recent-news-list3-min.webp",
    },
  ];

  return (
    <div className="recent-news-box">
      <div className="recent-news-heading-box">
        <p className="heading heading-recent-news">Recent News</p>
      </div>
      <div className="recent-news">
        <div className="recent-news-highlight">
          <div className="main-recent-news">
            <div className="main-recent-news-text">
              <p className="highlight-date highlight-date-taekwondo">
                Day 5 highlights
              </p>
              <p className="highlight-head highlight-head-taekwondo">
                Baku 2023 World Taekwondo Championships
              </p>
            </div>
          </div>
        </div>
        <ul className="recent-news-lists">
          {recentNewsLists.map((news) => (
            <RecentNewsList news={news} key={news.id} />
          ))}
          <button className="btn-read-more">More &rarr;</button>
        </ul>
      </div>
    </div>
  );
}
