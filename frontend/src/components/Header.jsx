import "../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logoo-text">IWB</h1>
      </div>

      <nav className="nav-center">
        <Link to="/home-page">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header-right">
        <button className="logout-btn" onClick={handleLogout}>
          Sign out
        </button>
      </div>
    </header>
  );
};

export default Header;