import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieslice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants';
const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const NowPlayingMovies = useSelector((store)=>store.movies.NowPayingMovies);
  const NowPayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
   
   //when you console log json.results , api call is made two times beacause of react strict mode in index.js file.it just happens twice only in development mode not in production mode.it happens twich to check any errors while rendering. 
   dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(()=>{
    if(!NowPlayingMovies) NowPayingMovies();
  },[])
}
export default useNowPlayingMovies ;