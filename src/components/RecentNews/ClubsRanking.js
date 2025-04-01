import ClubRankingList from "./ClubRankingList";

export default function ClubsRanking() {
  const clubs = [
    {
      name: "Manchester City",
      clubImage: "/assets/club-list1-min.webp",
      gp: 38,
      w: 29,
      d: 6,
      l: 3,
      f: 99,
      a: 26,
      gd: 73,
    },
    {
      name: "LiverPool",
      clubImage: "/assets/club-list2-min.webp",
      gp: 38,
      w: 28,
      d: 8,
      l: 2,
      f: 94,
      a: 26,
      gd: 68,
    },
    {
      name: "Chelsea",
      clubImage: "/assets/club-list3-min.webp",
      gp: 38,
      w: 21,
      d: 11,
      l: 6,
      f: 76,
      a: 33,
      gd: 43,
    },
    {
      name: "Tottenham Hotspur",
      clubImage: "/assets/club-list4-min.webp",
      gp: 38,
      w: 22,
      d: 5,
      l: 11,
      f: 69,
      a: 40,
      gd: 29,
    },
    {
      name: "Arsenal",
      clubImage: "/assets/club-list5-min.webp",
      gp: 38,
      w: 22,
      d: 3,
      l: 13,
      f: 61,
      a: 48,
      gd: 13,
    },
    {
      name: "Manchester United",
      clubImage: "/assets/club-list6-min.webp",
      gp: 38,
      w: 16,
      d: 10,
      l: 12,
      f: 57,
      a: 57,
      gd: 0,
    },
  ];

  return (
    <div className="clubs-ranking">
      <div className="clubs-ranking-box">
        <p className="heading heading-clubs-ranking">Clubs Ranking</p>
      </div>
      <div className="clubs-ranking-container">
        <div className="clubs-ranking-lists-box">
          <p>Club</p>
          <p>GP</p>
          <p>W</p>
          <p>D</p>
          <p>L</p>
          <p>F</p>
          <p>A</p>
          <p>GD</p>
        </div>
        <div className="clubs-ranking-lists">
          {clubs.map((club, i) => (
            <ClubRankingList club={club} index={i + 1} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
