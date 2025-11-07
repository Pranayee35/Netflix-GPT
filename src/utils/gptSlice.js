import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch : false,
        movieNames:null,
        movieResults:null,
        loading:false,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const{movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults=movieResults;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        clearGptData:(state,action)=>{
            state.movieNames = null;
            state.movieResults = null;
        }
    },
});
export const {toggleGptSearchView,addGptMovieResult,setLoading,clearGptData} = gptSlice.actions;
export default gptSlice.reducer;