import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
const MovieCard = ({posterpath}) => {
  if(!posterpath) return null;
  return (
    <div className='flex-none w-56 md:w-72 pr-4'>
        <img className='w-full rounded-lg h-60 md:h-72  hover:scale-110 transition-transform duration-300 p-5' alt='movie card' src={IMG_CDN_URL+posterpath}/>
    </div>
  )
}

export default MovieCard