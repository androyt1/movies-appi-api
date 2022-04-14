import React from 'react'
import { Link } from 'react-router-dom'


const MovieCard = ({movie}) => {
  return (
    <>
    <Link to={`/movie-details/${movie._id}`}>
    <div className=' py-5 shadow-md shadow-[#e76363c5] flex flex-col justify-center items-center rounded-2xl px-2 bg-[#ffffff00] cursor-pointer transition-all duration-300 ease-linear hover:scale-100 hover:bg-slate-900 '>
      
        <h5 className='text-sm md:text-xl text-center font-normal text-[#f5bebe] pb-1'>{movie.title}</h5>
       <div className='w-full h-4/5 flex justify-center items-center'>
       <img src={movie.image} alt='movie poster' className=' w-full max-h-[65vh] md:max-h-[45vh]'/>      
       </div>
    </div>
    </Link>
    </>
  )
}

export default MovieCard