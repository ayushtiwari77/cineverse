import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(url);
      const data = await response.json();
      await setMovies(data.results);
    }
    getMovies();
  }, [url]);
  return movies;
};
