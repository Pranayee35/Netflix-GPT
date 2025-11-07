import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

  
    
  return (
    <div className='px-6'>
        <h1 className='text-xl md:text-3xl py-1 md:py-4 text-white'>{title}</h1>
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 px-4">
            
        
        {movies?.length > 0 && (
  <div className="flex">
    {movies.map(movie => (
      <MovieCard key={movie.id} posterpath={movie.poster_path} />
    ))}
  </div>
)}
</div>
    </div>
  )
}

export default MovieList