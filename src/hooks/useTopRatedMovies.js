import { useDispatch } from "react-redux";
import { API_OPTIONS, backendIP } from "../utils/constants";
import { addTopRatedMovies } from "../reduxjs/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      backendIP +"/imdb/top_rated_movies",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useTopRatedMovies;
