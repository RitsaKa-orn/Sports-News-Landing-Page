export default function SportArticleList({ article }) {
  return (
    <div className="sport-article-box">
      <div className="sport-article-img-box">
        <img
          className="sport-article-img"
          src={article.articleImg}
          alt={article.articleType}
        />
        <p className="sub-heading sub-heading-sport">{article.articleType}</p>
      </div>
      <div className="sport-article-text">
        <div className="sport-article-text-head">
          <img
            className="sport-article-person"
            src={article.articlePersonImg}
            alt={article.articleAlt}
          />
          <p>{article.author}</p>
        </div>
        <div className="sport-article-context">
          <p className="news-date sport-article-date">{article.date}</p>
          <p className="news-headline sport-article-headline">
            {article.headline}
          </p>
          <p className="news-context sport-article-context-content">
            {article.context}
          </p>
        </div>
      </div>
    </div>
  );
}
