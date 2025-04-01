import CategoryOdd from "./CategoryOdd";
import CategoryEven from "./CategoryEven";

export default function SectionCategory() {
  return (
    <section className="section category-section">
      <div className="heading head-category">
        <p>Category</p>
      </div>
      <div className="category-container">
        <CategoryOdd
          sport="football"
          category="FOOTBALL"
          backgroundImage="/assets/category-football-min.webp"
        />
        <CategoryEven
          sport="basketball"
          category={["BASKET", "BALL"]}
          backgroundImage="/assets/category-basketball-min.webp"
        />
        <CategoryOdd
          sport="car sport"
          category="CAR SPORT"
          backgroundImage="/assets/category-car-min.webp"
        />
        <CategoryEven
          sport="table tennis"
          category={["TABLE", "TENNIS"]}
          backgroundImage="/assets/category-tabletennis-min.webp"
        />
      </div>
    </section>
  );
}
