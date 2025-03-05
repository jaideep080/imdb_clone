import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Favourites from "./components/Favourites";
import MoviePage from "./components/MoviePage";
import { fetchMovies } from "./services/omdbAPI";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery).then((data) => {
        setMovies(data.Search || []);
      });
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFavouriteClick = (movie) => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    savedFavourites.push(movie);
    localStorage.setItem("favourites", JSON.stringify(savedFavourites));
  };

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <div className="container mx-auto px-4 py-6">
          {/* Centered Header and Search Bar */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-4">IMDb Movie Search</h1>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for movies..."
              className="px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-80"
            />
          </div>

          <Routes>
            <Route
              path="/"
              element={<MovieList movies={movies} onFavouriteClick={handleFavouriteClick} />}
            />
            <Route path="/movie/:imdbID" element={<MoviePage />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
