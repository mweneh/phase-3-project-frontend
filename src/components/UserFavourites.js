import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

const url= "http://localhost:9292/games/all/fav";

export default function Home() {
  const [games, setGames] = useState([]);

  // load items from internet
  const gameFetcher = () => {
    fetch(url)
      .then((response) => response.json())
      .then((games) => {
        setGames(games);
      });
  };

  useEffect(gameFetcher, []);

  let gameCards = games.map((game) => (
    <GameCard
      title={game.title}
      image={game.thumbnail}
      id={game.id}
      price ={game.price}
      genre = {game.genre}
      platform = {game.platform}
      key={game.id}
    />
  ));

  return (
    <div className="container">
      User Favourites
      <div className="row">{gameCards}</div>
    </div>
  );
}
