import React, { useState, useEffect } from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import Movie from "../Movie/Movie";
import "./Grid.css";

const Grid = () => {
  const [movies, setMovies] = useState([]);
  const limit = 36;

  useFocusable({ focusable: true });

  const movieURL = "https://api.tvmaze.com/shows";

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch(movieURL)
      .then((res) => res.json())
      .then((response) => {
        setMovies(response);
        setTimeout(() => {}, 1500);
      });
  };

  return (
    <>
      <div className={`movie-cards-section no-mini-banners`}>
        <div className="main-box">
          {movies.slice(0, limit).map((movie, index) => {
            return <Movie mov={movie} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Grid;
