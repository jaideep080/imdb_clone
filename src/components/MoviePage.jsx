import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../services/omdbAPI";  // Assuming the function to fetch movie details

const MoviePage = () => {
  const { imdbID } = useParams(); // Extract the imdbID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchMovieDetails(imdbID);  // Fetch details using imdbID
      setMovie(data);
    };

    fetchDetails();
  }, [imdbID]);  // Re-run the effect when imdbID changes

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          {movie.Trailer && (
            <a href={movie.Trailer} className="btn btn-success" target="_blank" rel="noopener noreferrer">
              Watch Trailer
            </a>
          )}
          <br />
          <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
