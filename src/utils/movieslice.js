import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        PopularMovies:null,
        UpcomingMovies:null,
        TopRatedMovies:null,
        videoTrailer:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.NowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.PopularMovies = action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.UpcomingMovies = action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.TopRatedMovies = action.payload;
        },
        addVideoTrailer: (state,action)=>{
            state.videoTrailer = action.payload;
        }
    },

});
export const {addNowPlayingMovies,addVideoTrailer,addPopularMovies,addUpcomingMovies,addTopRatedMovies} = movieslice.actions;
export default movieslice.reducer;