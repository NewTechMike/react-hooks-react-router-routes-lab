import React from "react";
import { directors } from "../data";

function Directors() {

const listDirectors = directors.map((director)=>{
  return (
    <div key={director.name}>
      {director.name}
      <ul style={{color: "red"}}>
        <li>
          {director.movies}
        </li>
      </ul>
    </div>

  )
})
  return (
    <div>
      <h1>Directors Page</h1>
      {listDirectors}
    </div>
  );
}

export default Directors;
