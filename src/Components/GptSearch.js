import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { background } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
     <img className='h-screen object-cover md:h-full ' src={background} alt='logo'/>
   </div>
    <div>
       
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    </>
   
  )
}

export default GptSearch