import React from "react";
import MovieCard from "../components/MovieCard";
import { useOutletContext } from "react-router-dom";
import arrowBack from "../assets/arrowBack.png";
import arrowForward from "../assets/arrowForward.png";
import PageHeader from "../components/PageHeader";
const Popular = () => {
  const {
    baseURL,
    loading,
    setLoading,
    API_KEY,
    movies,
    page,
    setMovies,
    handlePageClick,
    handleNextClick,
    handlePreviousClick,
  } = useOutletContext();

  React.useEffect(() => {
    fetch(`${baseURL}/movie/popular?api_key=${API_KEY}&page=${page}`)
      .then((r) => r.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, [baseURL, API_KEY, page]);

  const moviesToRender = movies.map((movie) => {
    const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        image={imageURL}
        name={movie.title}
        rating={movie.vote_average}
        releaseDate={movie.release_date}
      />
    );
  });

  return (
    <>
      <PageHeader />
      <main>
        <section className="section-movies-container">
          {!loading ? <p>Loading ....</p> : moviesToRender}
        </section>
      </main>
      <footer className="pagination">
        <button className="category-buttons" onClick={handlePreviousClick}>
          <img className="icon-image" src={arrowBack} alt="arrow back icon" />
        </button>
        <button className="category-buttons" onClick={() => handlePageClick(1)}>
          1
        </button>
        <button className="category-buttons" onClick={() => handlePageClick(2)}>
          2
        </button>
        <button className="category-buttons" onClick={handleNextClick}>
          <img
            className="icon-image"
            src={arrowForward}
            alt="arrow forward icon"
          />
        </button>
      </footer>
    </>
  );
};

export default Popular;
