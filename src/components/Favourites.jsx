import React, { useState, useEffect } from "react";

const Favourites = ({ onRemoveClick }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  const handleRemoveClick = (movie) => {
    const updatedFavourites = favourites.filter(fav => fav.imdbID !== movie.imdbID);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="container mt-5">
      <h2>My Favourite Movies</h2>
      {favourites.length === 0 ? (
        <p>You haven't added any favourite movies yet!</p>
      ) : (
        <div className="row">
          {favourites.map((movie) => (
            <div className="col-md-4" key={movie.imdbID}>
              <div className="card shadow-sm">
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveClick(movie)}
                  >
                    Remove from Favourites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
