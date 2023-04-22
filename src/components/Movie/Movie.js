import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

const Movie = (props) => {
  const { ref, focused } = useFocusable();

  return (
    <div ref={ref} className={`movie-details ${focused ? "focused" : ""}`}>
      <div className="movie-box">
        <div className="image-container">
          <img src={props.mov.image.medium} alt="" />
        </div>
      </div>
      <p className="movie-text">{props.mov.name}</p>
    </div>
  );
};

export default Movie;
