import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onFavouriteClick }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/default-poster.jpg"}
          alt={movie.Title}
        />
      </Link>
      <div className="movie-card-body">
        <h5>{movie.Title}</h5>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <button onClick={() => onFavouriteClick(movie)}>Add to Favourites</button>
      </div>
    </div>
  );
};

export default MovieCard;
