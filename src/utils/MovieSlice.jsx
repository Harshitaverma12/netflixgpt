import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowTrendingMovies: null,
    nowUpcomingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addNowTrendingMovies: (state, action) => {
      state.nowTrendingMovies = action.payload;
    },

    addNowUpcomingMovies: (state, action) => {
      state.nowUpcomingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addNowTrendingMovies,
  addNowUpcomingMovies,
  addTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
