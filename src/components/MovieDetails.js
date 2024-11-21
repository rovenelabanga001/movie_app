import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState(null);
  const [recommended, setRecommended] = React.useState([]);

  const API_KEY = "0e34ed3b0c38a42756307835ae2712c8";
  const baseURL = "https://api.themoviedb.org/3";

  React.useEffect(() => {
    fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}`)
      .then((r) => r.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((error) => console.error("Error getting movie ", error));
  }, [id]);

  React.useEffect(() => {
    fetch(`${baseURL}/movie/${id}/recommendations?api_key=${API_KEY}`)
      .then((r) => r.json())
      .then((data) => setRecommended(data.results || []))
      .catch((error) => console.error("Error getting movies", error));
  }, [id]);

  const recommendedMovies = recommended.map((movie) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        image={imgUrl}
        name={movie.title}
        rating={movie.vote_average}
        releaseDate={movie.release_date}
      />
    );
  });

  if (!movie) return <p>Loading ...</p>;
  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <section
        className="section-movie-info"
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="movie-info-container">
          <div className="hero-div">
            <div className="hero-image">
              <img src={imageURL} alt={movie.name} />
            </div>
            <div className="hero-info">
              <h1 style={{ color: " rgb(59, 59, 140)" }}>{movie.title}</h1>
              <p style={{ color: "gray" }}>Come together</p>
              <button className="add-to-wishlist">Add to my WatchList</button>
              <p style={{ color: " rgb(59, 59, 140)" }}>{movie.release_date}</p>
              <p className="gray">{movie.overview}</p>
              <p className="gray">
                Genres:
                <span className="yellow">
                  {movie.genres.map((g) => g.name).join(", ")}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="recommended-movies">
          <h1 className="yellow">Recommended Movies</h1>
          <div className="section-movies-container">{recommendedMovies}</div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
