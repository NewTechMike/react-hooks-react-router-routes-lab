import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "75px",
  padding: "15px",
  margin: "0 10px 10px",
  background: "green",
  textDecoration: "none",
  color: "yellow",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={linkStyles}
      > 
        Movies 
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={linkStyles}
      > 
        Directors 
      </NavLink>
      <NavLink 
        to="/actors"
        exact
        style={linkStyles}
      > 
        Actors 
      </NavLink>
      {/*{code here}*/}
    </div>
  );
}

export default NavBar;
