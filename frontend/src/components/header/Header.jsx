import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ toogleForm }) => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to="/">
          <img src="https://rb.gy/hpbqpc" alt="logo" />
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/about" className="remove-link">
          About
        </Link>
        <Link to="/contact" className="remove-link">
          Contact
        </Link>
        <Link to={`/${toogleForm}`} className="remove-link">
          Login/SignUp
        </Link>
      </div>
    </nav>
  );
};

export default Header;
