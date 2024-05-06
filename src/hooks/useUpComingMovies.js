import { useDispatch } from "react-redux";
import { API_OPTIONS, backendIP } from "../utils/constants";
import { addUpComingMovies } from "../reduxjs/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(backendIP + "/imdb/up_coming_movies", API_OPTIONS);
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useUpComingMovies;
