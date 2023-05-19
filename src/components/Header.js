import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Retro Game Hub</h1>
      <nav>
        <span>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/favorites">Favorites</Link>
          </span>
          <span>
            <Link to="/add-game">Add A Game</Link>
          </span>
        </span>
      </nav>
    </header>
  );
}

export default Header;