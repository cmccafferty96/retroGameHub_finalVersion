import React from "react";
import GameCard from "./GameCard";

function GamesList({ games, addToFavorites }) {
  return (
    <span className="games-list">
      {games.map(game => {
        return <GameCard key={game.id} game={game} addToFavorites={addToFavorites}/>
      })}
    </span>
  );
}

export default GamesList;