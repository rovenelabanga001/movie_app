import React from "react";
import arrowBack from "../assets/arrowBack.png"
import arrowForward from "../assets/arrowForward.png"

const Footer = ({page, handlePageClick, handlePreviousClick, handleNextClick}) => {
  return (
    <>
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

export default Footer;
