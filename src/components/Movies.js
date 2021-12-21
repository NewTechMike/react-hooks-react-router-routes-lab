import React from "react";
import { movies } from "../data";

function Movies() {

const moviesList = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2> Title </h2>
         {movie.title}
         <h4> Time </h4>
         {movie.time}
        <ul>
          <li>
            {movie.genres}
          </li>
        </ul>
      </div>
    )
  })

  return (
  <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>
  );
}

export default Movies;
