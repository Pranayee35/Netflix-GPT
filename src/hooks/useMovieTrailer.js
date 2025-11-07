import React from 'react'
import { useState,useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from 'react-redux';

const useMovieTrailer = ({id}) => {
 const videotrailer = useSelector((store)=>store.movies.videoTrailer);
     const [trailerId,setrailerId] = useState(null);
  const getMovieVideo = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    
    
    const FilteredData = json.results.filter((video)=>video.type==="Trailer");
    const trailer = FilteredData ? FilteredData[0] : json.results[0];
    
    setrailerId(trailer.key);
   
  };
    useEffect(()=>{
   !videotrailer && getMovieVideo();
  },[])
  return trailerId;

}

export default useMovieTrailer;