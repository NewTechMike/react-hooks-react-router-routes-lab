import React from "react";
import { actors } from "../data";

function Actors() {
  
  const actorsList = actors.map((actor) => {
    return(
      <div key={actor.name}>
        
        {actor.name}
        <ul>
          <li>
            {actor.movies}
          </li>
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
