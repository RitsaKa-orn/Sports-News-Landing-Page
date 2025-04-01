export default function CategoryEven({ category, backgroundImage, sport }) {
  return (
    <div className="categories-box-even">
      <div className="category category-even">
        <div className="category-img-even">
          <img className="category-img" src={backgroundImage} alt={sport} />
        </div>
        <p>
          <span className="category-text">
            {category[0]}
            <br />
            {category[1]}
          </span>
        </p>
      </div>
    </div>
  );
}
