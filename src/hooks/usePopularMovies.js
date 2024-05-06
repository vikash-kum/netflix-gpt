import { useDispatch } from "react-redux";
import { API_OPTIONS, backendIP } from "../utils/constants";
import { addPopularMovies } from "../reduxjs/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      backendIP + "/imdb/popular_movies",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default usePopularMovies;
