import React from "react";
import { useAuth } from "../context/AuthContext";
import MovieCard from "../components/MovieCard";
import isEmpty from "../assets/empty.png";

const WatchList = () => {
  const { watchlist } = useAuth();
  if (watchlist.length === 0) {
    return (
      <main className="loading-container">
        <div style={{ margin: "auto" }}>
          <img src={isEmpty} /> <br />
          <p>Your WatchList is empty!</p>
        </div>
      </main>
    );
  }
  return (
    <div className="watchlist-container">
      <h1>My Watchlist</h1>
      <div className="section-movies-container">
        {watchlist.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            name={movie.title}
            rating={movie.vote_average}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default WatchList;
