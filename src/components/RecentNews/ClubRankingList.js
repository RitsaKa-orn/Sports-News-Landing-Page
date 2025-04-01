export default function ClubRankingList({ club, index }) {
  return (
    <div className="club-list-box">
      <div className="club-list-name">
        <p>
          {index}
          <img className="club-list-img" src={club.clubImage} alt={club.name} />
          <span>{club.name}</span>
        </p>
      </div>

      <p>{club.gp}</p>
      <p>{club.w}</p>
      <p>{club.d}</p>
      <p>{club.l}</p>
      <p>{club.f}</p>
      <p>{club.a}</p>
      <p>{club.gd}</p>
    </div>
  );
}
