import React from 'react'
import MovieList from '../components/MovieList'


const Home = ({loading,movies}) => {
    
 
  return (
  <>
     {loading && <div className='w-full flex justify-center text-xl'>Loading...</div>}
   <MovieList movies={movies}/>    
  </>
  )
}

export default Home