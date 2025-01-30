import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold tracking-tight uppercase">
        Star Wars
      </Link>
      <Link
        to="/starships"
        className="text-lg font-semibold uppercase tracking-tight"
      >
        Starships
      </Link>
    </nav>
  );
}

export default Navbar;
