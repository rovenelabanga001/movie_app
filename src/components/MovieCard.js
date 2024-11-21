import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, image, releaseDate, rating, name }) => {
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
      </div>
    </Link>
  );
};

export default MovieCard;
