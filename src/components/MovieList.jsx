import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onFavouriteClick, isLoading }) => {
  return (
    <div className="movie-list">
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onFavouriteClick={onFavouriteClick} />
        ))
      )}
    </div>
  );
};

export default MovieList;
