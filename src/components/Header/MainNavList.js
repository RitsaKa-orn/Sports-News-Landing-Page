export default function MainNavList({ children, onClick, isActive }) {
  return (
    <li>
      <a
        className={`main-nav-link ${isActive ? "active-nav" : ""}`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    </li>
  );
}
