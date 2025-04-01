import Logo from "./Logo";
import MainNav from "./MainNav";
import NavSearch from "./NavSearch";

export default function SectionHeader() {
  return (
    <header className="header">
      <Logo />
      <MainNav />
      <NavSearch />
    </header>
  );
}
