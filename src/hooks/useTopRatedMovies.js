import { useDispatch,useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieslice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants';
const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topratedmovies = useSelector((store)=>store.movies.PopularMovies)
  const TopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
    const json = await data.json(); 
   dispatch(addTopRatedMovies(json.results));
  };
  useEffect(()=>{
    if(!topratedmovies) TopRatedMovies();
  },[])
}
export default useTopRatedMovies ;