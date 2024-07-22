import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchView : false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGptView : (state) => {
            state.gptSearchView = !state.gptSearchView
        },
        addGPTMovies: (state,action) => {
            const {movieNames,movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        },
        clearGPTResults:(state,action) => {
            state.movieNames = null
            state.movieResults = null
        }
    }
})


export const {toggleGptView,addGPTMovies,clearGPTResults} = gptSlice.actions
export default gptSlice.reducer