import React from 'react'
import { useSelector } from 'react-redux';
import VideoTrailer from './VideoTrailer';
import VideoTitle from './VideoTitle';

const Firstbox = () => {
    const movies = useSelector((store)=>store.movies?.NowPlayingMovies);
        if(!movies) return ;
    const mainmovie = movies[0];
  
    
     const {original_title,overview,id} = mainmovie;
  return (
   
    <div className=''>
        <VideoTitle title={original_title} overview={overview} />
        <VideoTrailer id={id}/>
    </div>
  )
}

export default Firstbox