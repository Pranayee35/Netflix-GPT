import React from 'react'
import MovieList from "./MovieList";
import {useSelector} from "react-redux"
const Secondbox = () => {
  const movies = useSelector((store)=>store.movies);

  return (
 <div className="bg-black">
     <div className="-mt-[440px] md:-mt-32 pl-0 md:pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies}/>
    <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
    <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
  <MovieList title={"Popular"} movies={movies.PopularMovies}/>
    
    </div>
  </div>
  )
}

export default Secondbox;