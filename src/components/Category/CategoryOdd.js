export default function CategoryOdd({ category, backgroundImage, sport }) {
  return (
    <div className="categories-box-odd">
      <div className="category category-odd">
        <p>
          <span className="category-text">{category}</span>
        </p>
        <div className="category-img-odd">
          <img className="category-img" src={backgroundImage} alt={sport} />
        </div>
      </div>
    </div>
  );
}
