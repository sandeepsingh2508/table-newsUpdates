import { Link } from "react-router-dom";
import "./Navbar.css";
import { ImHome } from "react-icons/im";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <ImHome color="orange" />
        </Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/other-page">
          <button className="button">Page 2</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
