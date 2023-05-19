import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import Header from "./Header";
import GamesList from "./GamesList";
import Favorites from "./Favorites";
import NewGameForm from "./NewGameForm";


function App() {

    const [games, setGames] = useState([]);
    const [favoriteGames, setFavoriteGames] = useState([]);

    const addNewGame = (newGame) => {
        setGames([...games, newGame]);
    };

    const addToFavorites = (game) => {
        if (!favoriteGames.find((favGame) => favGame.id === game.id)){
            setFavoriteGames([...favoriteGames, game]);
        }
    }


    useEffect(() => {
        fetch("http://localhost:3000/games")
        .then(response => response.json())
        .then(gamesData => setGames(gamesData))
    },[]);
    ;


  return (
    <Router> 
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<GamesList games={games} addToFavorites={addToFavorites} favoriteGames={favoriteGames}/>} />
                <Route path="/favorites" element={<Favorites favoriteGames={favoriteGames} />} />
                <Route path="/add-game" element={<NewGameForm addNewGame={addNewGame} />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
    