import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = () => {
  const [activeButton, setActiveButton] = React.useState("");
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    setActiveButton(route);
    navigate(route);
  };
  return (
    <div className="movie-category-header">
      <header>
        <button
          className={`category-buttons ${activeButton === "/" ? "active" : ""}`}
          onClick={() => handleNavigation("/")}
        >
          Popular
        </button>
        <button
          className={`category-buttons ${
            activeButton === "/now-playing" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/now-playing")}
        >
          Now playing
        </button>
        <button
          className={`category-buttons ${
            activeButton === "/top-rated" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/top-rated")}
        >
          Top rated
        </button>
        <button
          className={`category-buttons ${
            activeButton === "/upcoming" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/upcoming")}
        >
          Upcoming
        </button>
      </header>
      <form>
        <input placeholder="search for movie by title" name="search" />
      </form>
    </div>
  );
};

export default PageHeader;
