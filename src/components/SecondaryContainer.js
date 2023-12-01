import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-44 relative z-20 pl-12">
          <MovieList
            title={"Now Playing Movie"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Top Rated Movie"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular Movie"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movie"} movies={movies.upcomingMovies} />
        </div>
        {/* {
        Movielist - now playing
          MovieCard * n
        MovieList - Treanding
          MovieCard * n
      } */}
      </div>
    )
  );
}

export default SecondaryContainer;
