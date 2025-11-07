import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieslice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants';
const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularmovies = useSelector((store)=>store.movies.PopularMovies)
  const PopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
    const json = await data.json(); 
   dispatch(addPopularMovies(json.results));
  };
  useEffect(()=>{
   if(!popularmovies) PopularMovies();
  },[])
}
export default usePopularMovies ;