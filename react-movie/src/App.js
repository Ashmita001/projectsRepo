import { useEffect,useState } from "react";
// b6ca6ef5
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b6ca6ef5";

const movie1 = {
  Title: "The Story of Frozen: Making a Disney Animated Classic",
  Year: "2014",
  imdbID: "tt4007494",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTk0NjAzNjg4NF5BMl5BanBnXkFtZTgwNDQ3NjIwMzE@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovie] = useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  const searchMovies = async (title) => {
    const respose = await fetch(`${API_URL}&s=${title}`);
    const data = await respose.json();

    setMovie(data.Search);
  };

  useEffect(() => {
    searchMovies("Toy Story");
  }, []);
  return (
    <div className="app">
      <h1> Movies</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
