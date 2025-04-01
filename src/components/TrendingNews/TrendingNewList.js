export default function TrendingNewList({ trendingNews }) {
  return (
    <li className="trending-new-list-box">
      <img
        src={trendingNews.newsImage}
        className="trending-news-list-img"
        alt={trendingNews.news}
      />
      <div className="trending-new-list-text">
        <p className="news-date">{trendingNews.date}</p>
        <p className="news-headline">{trendingNews.headline}</p>
        <p className="news-context">{trendingNews.context}</p>
      </div>
    </li>
  );
}
