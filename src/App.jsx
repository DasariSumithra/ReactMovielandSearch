import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
//ba0a84e1
function App() {
  const [movies, setmovies] = useState([]);
  const [search,setsearch]=useState('');
  const API_URL = "http://www.omdbapi.com?apikey=ba0a84e1";

  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };
  useEffect(() => {
    searchmovies("Passion");
  }, []);

  const movie1 = {
    Title: "The Passion of the Christ",
    Year: "2004",
    imdbID: "tt0335345",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjE2MDNhMzItNmMzNi00NzY1LWIwNTktNmE5ZWE4OTcyNjJhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  };
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <img src="https://icon-library.com/images/search-icon-png-transparent/search-icon-png-transparent-18.jpg" alt="search" 
        onClick={() => searchmovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}
export default App;
