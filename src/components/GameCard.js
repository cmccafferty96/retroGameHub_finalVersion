import { React, useState, useEffect } from "react";

function GameCard({ game, addToFavorites, favoriteGames }) {
  const [favorited, setFavorited] = useState(false);

  
  const handleButtonClick = () => {
    setFavorited(!favorited);
    addToFavorites(game);
  };

  const isGameFavorited = favoriteGames && favoriteGames.some((favGame) => favGame.id === game.id);

  useEffect(() => {
    setFavorited(isGameFavorited);
  }, [isGameFavorited]);


  return (
    <div className="card">
    <img src={game.image} alt={game.name}/>
      <div className="card-details">
         <span>
          <span>{game.name}</span>
          <span>Released: {game.release_year}</span>
          <span>Platform: {game.platform}</span>
          <span>Genre: {game.genre}</span>
          <p>{game.description}</p>
          {favorited ? (
            <button className="favorite-button" onClick={handleButtonClick}> 
              <i className="fas fa-heart" style={{ color: "red" }} ></i>Favorited</button>
          ) : (
            <button onClick={handleButtonClick}> 
            <i className="far fa-heart"></i> Favorite
            </button>
          )} 
         </span>
      </div>
    </div>
  );
}

export default GameCard;
