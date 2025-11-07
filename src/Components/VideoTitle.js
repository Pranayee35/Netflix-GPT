import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute top-[25%] left-0 md:left-12 text-white z-10'>
        <h1 className='font-bold text-2xl md:text-4xl'>{title}</h1>
        <p className='hidden md:inline-block w-1/4 mt-4 text-s'>{overview}</p>
        <div>
        <button className='bg-white text-black p-2 md:p-4 px-5 md:px-7 m-4 rounded-lg hover:bg-slate-300'> Play</button>
        <button className='hidden md:inline-block bg-slate-500 text-white p-4 px-6 m-4 rounded-lg bg-opacity-50'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle