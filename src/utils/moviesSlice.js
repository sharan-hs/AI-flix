import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        tvSeries: null
    },
    reducers: {
        addNowPLayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
         addPopularMovies : (state,action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload
        },
        addTvSeries : (state,action) => {
            state.tvSeries = action.payload
        },
        addTrailerVideos: (state,action) => {
            state.trailerVideos = action.payload
        }
    }
})

export const {addNowPLayingMovies,addTrailerVideos,addPopularMovies,addTopRatedMovies, addUpcomingMovies, addTvSeries} = moviesSlice.actions

export default moviesSlice.reducer