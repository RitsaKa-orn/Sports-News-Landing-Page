import { useEffect, useState } from "react";

export default function HeroTextBox() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-text-container">
      <p className="hero-text">
        TOP
        <br /> SCORER TO <br />
        THE FINAL <br />
        MATCH
      </p>
      <img
        className={`hero-img ${isVisible ? "show" : ""}`}
        src="/assets/hero-1-min.webp"
        alt="Basketball Player dunk"
      />
    </div>
  );
}
