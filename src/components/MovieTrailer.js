import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { Link, useParams } from "react-router-dom";
import { removeNowPlayingMoviesSelected } from "../reduxjs/moviesSlice";

const MovieTrailer = () => {
  const movieId = useParams("movieKey");
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store) => store.movies?.nowPlayingMoviesSelected
  );

  useMovieTrailer(movieId.movieKey, "trailer");

  const handleCloseTrailer = () => {
    dispatch(removeNowPlayingMoviesSelected());
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-end fixed inset-0 z-50 overflow-auto">
        <Link to="/browse">
          <button
            className="text-3xl mx-8 mt-2 text-white "
            onClick={handleCloseTrailer}
          >
            X
          </button>
        </Link>
      </div>

      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&loop=1&vq=hd2160"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
