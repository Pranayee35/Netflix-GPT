
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useEffect,useState } from 'react';
import { API_OPTIONS } from '../utils/constants';
const VideoTrailer = ({id}) => {
   const [trailerId,setrailerId] = useState(null);
    const getMovieVideo = async()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", API_OPTIONS);
      const json = await data.json();
 
      
      const FilteredData = json.results.filter((video)=>video.type==="Trailer");
      const trailer = FilteredData ? FilteredData[0] : json.results[0];
      
      setrailerId(trailer.key);
     
    };
      useEffect(()=>{
      getMovieVideo();
    },[])

  return (
      <div className='w-full h-[90vh] relative mb-0 pb-0'>
    
      <iframe
       className='absolute top-0 left-0 w-full h-full object-cover scale-125 -mt-36 md:-mt-0'
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
   
  </div>
  )
};


export default VideoTrailer;