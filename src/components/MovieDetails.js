import React,{useState,useEffect} from 'react'
import ReactStars from "react-rating-stars-component";

import {useParams} from 'react-router-dom'


const MovieDetails = ({movies}) => {

    const {id} = useParams()
    const [movie,setMovie] = useState(null) 

    //get the movie with the id from the movies array 
 
    useEffect(()=>{
        setMovie(movies.find(movie => movie._id === id)) 
    },[movie,id,movies])
   

  return ( 
    <>
    <div className='w-full min-h-[calc(100vh-70px)] flex flex-col md:flex-row text-slate-50  justify-center items-center bg-[#0c0b0b]  py-10 px-3'>
        <div className='h-[65vh] md:h-[90vh] flex   justify-center items-center w-full bg-slate-900   '>
            {movie && console.log(movie)}
            <img src={movie && movie.image} alt="" className='h-full object-fill w-full' />
        </div>
        
        <div  className='min-h-[80vh] flex flex-col justify-center items-start  w-full md:pl-5 mt-10'>
            <h4 className='text-[#e76363c5] text-3xl md:text-6xl font-bold text-left pb-5' style={{textShadow:"2px 2px 4px #fff"}}>{movie && movie.title}</h4>
            <div className='flex justify-start items-center w-full mt-2'><h6>Release Date {movie && movie.release}</h6></div>
            <div className='w-full flex justify-start items-center'><h6 className='text-xl font-semibold pb-2'>Description</h6></div>
            <p className='textleft '>{movie && movie.description}</p>

            <div> 
            <ReactStars count={5}  size={24}  activeColor="#ffd700" />
            </div>
  
           

<div className='w-full flex justify-start items-center mt-4'><h6 className='text-xl font-semibold pb-2'>Genres</h6></div>
<div className='w-full grid grid-cols-2  lg:grid-cols-4 gap-x-2 gap-y-4 px-2 mt-4'>    
{movie && movie.genres.map((genre)=>{
                return <span key={genre.uuid} className='px-4  text-sm text-center text-slate-200 bg-[#e76363c5] rounded-full py-2'>{genre.name}</span>
            })}
</div>

        </div>
    </div>
    </>
  )
}

export default MovieDetails