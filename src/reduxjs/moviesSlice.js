import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    nowPlayingMoviesSelected: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMovieTrailerVideo: (state, action) => {
      state.movieTrailerVideo = action.payload;
    },
    addNowPlayingMoviesSelected: (state, action) => {
      state.nowPlayingMoviesSelected = action.payload;
    },
    removeNowPlayingMoviesSelected: (state) => {
      state.nowPlayingMoviesSelected = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailerVideo,
  addPopularMovies,
  addUpComingMovies,
  addTopRatedMovies,
  addNowPlayingMoviesSelected,
  removeNowPlayingMoviesSelected,
} = moviesSlice.actions;

export default moviesSlice.reducer;
