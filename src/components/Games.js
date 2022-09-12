import GameCard from "./GameCard";
import useFetch from "./UseFetch";

const url= "http://localhost:9292/games/all";

export default function Home() {
  // const [games, setGames] = useState([]);

  // // load items from internet
  // const gameFetcher = () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((games) => {
  //       setGames(games);
  //     });
  // };

  // useEffect(gameFetcher, []);
  const { data: games, loading, error } =  useFetch(url)
  
  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);
  // console.log(games)

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
      Games
      <div className="row">{gameCards}</div>
    </div>
  );
}
