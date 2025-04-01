export default function RecentNewsList({ news }) {
  return (
    <li className="recent-news-list-box">
      <img
        className="recent-news-list-img"
        src={news.newsImage}
        alt={news.id}
      />
      <div className="recent-news-list-text">
        <p className="recent-news-list-date">{news.date}</p>
        <p className="recent-news-list-context">{news.news}</p>
      </div>
    </li>
  );
}
