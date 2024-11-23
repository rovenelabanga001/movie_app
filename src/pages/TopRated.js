import React from "react";
import PageHeader from "../components/PageHeader";
import { useOutletContext } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const TopRated = () => {
  const {
    baseURL,
    loading,
    API_KEY,
    movies,
    page,
    setMovies,
    handlePageClick,
    handleNextClick,
    handlePreviousClick,
  } = useOutletContext();

  React.useEffect(() => {
    fetch(`${baseURL}/movie/top_rated?api_key=${API_KEY}&page=${page}`)
      .then((r) => r.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.error("Error fetching movies", error));
  }, [baseURL, API_KEY, page]);

  const topRated = movies.map((movie) => {
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
      <PageHeader
        movies={movies}
        setMovies={setMovies}
        API_KEY={API_KEY}
        baseURL={baseURL}
      />
      <main>
        <section className="section-movies-container">
          {!loading ? <Loading /> : topRated}
        </section>
      </main>
      <Footer
        page={page}
        handlePageClick={handlePageClick}
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
      />
    </>
  );
};

export default TopRated;
