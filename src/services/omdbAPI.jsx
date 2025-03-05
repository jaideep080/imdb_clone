import axios from "axios";

const API_KEY = "31e2f7a6";  // Replace with your OMDB API key
const API_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (searchQuery) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        s: searchQuery,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return { Error: "Something went wrong" };
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        i: movieId,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return { Error: "Something went wrong" };
  }
};
