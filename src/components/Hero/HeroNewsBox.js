import TodayNews from "./TodayNews";

export default function HeroNewsBox() {
  const news = [
    {
      id: 1,
      backgroundImage: "/assets/hero-bg-news1-min.webp",
      date: "Race98 - 03 June 2023",
      title: "Ethiopian runners took the top four spots.",
    },
    {
      id: 2,
      backgroundImage: "/assets/hero-bg-news2-min.webp",
      date: "INDYCAR - 03 June 2023",
      title: "IndyCar Detroit: Dixon quickest in second practice",
    },
  ];

  return (
    <div className="today-news-box">
      <div className="today-news-head">
        <p>Today</p>
      </div>
      {news.map((newItem) => (
        <TodayNews
          key={newItem.id}
          backgroundImage={newItem.backgroundImage}
          date={newItem.date}
          title={newItem.title}
        />
      ))}
    </div>
  );
}
