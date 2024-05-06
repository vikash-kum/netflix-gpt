import { useDispatch } from "react-redux";
import { API_OPTIONS, backendIP } from "../utils/constants";
import {
  addMovieTrailerVideo,
  addNowPlayingMoviesSelected,
} from "../reduxjs/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId, type) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      backendIP+ "/imdb/movie_trailer/" + movieId,
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.lenght ? filterData[0] : json.results[0];
    if (type === "home") {
      dispatch(addMovieTrailerVideo(trailer));
    } else {
      dispatch(addNowPlayingMoviesSelected(trailer));
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
