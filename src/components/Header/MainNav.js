import { useState } from "react";
import MainNavList from "./MainNavList";

export default function MainNav() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleActive(index) {
    setActiveIndex(index);
  }

  const navList = [
    "Home",
    "Category",
    "Trending News",
    "Recent News",
    "Clubs Ranking",
    "Sports Article",
  ];

  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        {navList.map((nav, index) => (
          <MainNavList
            key={index}
            onClick={() => handleActive(index)}
            isActive={activeIndex === index}
          >
            {nav}
          </MainNavList>
        ))}
      </ul>
    </nav>
  );
}
