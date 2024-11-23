import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ movies = [], setMovies, API_KEY, baseURL }) => {
  const [activeButton, setActiveButton] = React.useState("");
  const [formData, setFormData] = React.useState({ title: "" });
  const [originalMovies, setOriginalMovies] = React.useState(movies);
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    setActiveButton(route);
    navigate(route);
  };

  React.useEffect(() => {
    setOriginalMovies(movies);
  }, [movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() === "") {
      setMovies(originalMovies); // Reset to original movies if input is cleared
      return;
    }

    fetch(`${baseURL}/search/movie?api_key=${API_KEY}&query=${value.trim()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results || []); // Safely set results or empty array
      })
      .catch((error) => {
        console.error("Error fetching the search results", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <input
          placeholder="Search for a movie by title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default PageHeader;
