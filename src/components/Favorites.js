import React from "react";

function Favorites({ favoriteGames }){
    return (
        <div>
            <h2>Favorite Games</h2>
            {favoriteGames.length > 0 ? (
                <span>
                    {favoriteGames.map((game) => (
                        <span key={game.id}>
                        <img src={game.image} alt={game.name}/>
                        {game.name}
                        </span>
                    ))}
                </span>
            ) : (
                <p>No Favorite Games Yet</p>
            )}
        </div>
    );
}

export default Favorites;