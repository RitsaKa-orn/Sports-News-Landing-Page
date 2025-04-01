export default function TodayNews({ backgroundImage, date, title }) {
  return (
    <div
      className="today-news"
      style={{ "--bg-image": `url(${backgroundImage})` }}
    >
      <div className="news">
        <p className="news-date">{date}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}
