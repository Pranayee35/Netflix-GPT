import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Firstbox from './Firstbox';
import Header from './Header';
import Secondbox from './Secondbox';
import { useDispatch, useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import { useEffect } from 'react';
import { clearGptData } from '../utils/gptSlice';
const Browse = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!showGptSearch){
      dispatch(clearGptData());
    }
  },[showGptSearch]);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  
  return (
    <div>
      <Header/>
      {showGptSearch?(<GptSearch/>):(
        <>
        <Firstbox/>
        <Secondbox/>
        </>
      )}
    </div>
  )
}

export default Browse;