import logo from "../../assets/mom-logo.svg";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="MOM Logo" height="32" />
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/meetings">Meetings</NavLink>
        <NavLink to="/attendance">Attendance</NavLink>
        <NavLink to="/master">Master</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Header;
