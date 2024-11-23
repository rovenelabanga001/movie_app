import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import deleteIcon from "../assets/delete.png";

const MovieCard = ({ id, image, releaseDate, rating, name }) => {
  const { removeFromWatchList, watchlist } = useAuth();

  const isInWatchList = watchlist.some((movie) => movie.id === id);

  return (
    <Link to={`/movie/${id}`} className="links">
      <div className="movie-container">
        <div className="movie-image">
          <img src={image} alt={name} />
        </div>
        <div className="movie-details">
          <div className="movie-info">
            <p style={{ color: "gray" }} className="italics">
              {name}
            </p>
            <p style={{ color: "blue" }} className="italics">
              {releaseDate}
            </p>
          </div>
          <div className="movie-rating">
            <p className="yellow">{rating}</p>
          </div>
        </div>
        <div className="remove-from-watchlist-container">
          <button className="remove-from-watchlist">
            <img className="icon-image" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
