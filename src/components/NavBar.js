import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useAuth();
  const handleLoginClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      navigate("/login");
    }
  };
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Watchlist
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        About
      </NavLink>
      <button className="category-buttons" onClick={handleLoginClick}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default NavBar;
