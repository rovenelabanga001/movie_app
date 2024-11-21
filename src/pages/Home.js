import React from "react";
import PageHeader from "../components/PageHeader";
import { Outlet } from "react-router-dom";

const Home = () => {
  const API_KEY = "0e34ed3b0c38a42756307835ae2712c8";
  const baseURL = "https://api.themoviedb.org/3";
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Outlet
        context={{
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
        }}
      />
    </>
  );
};

export default Home;
