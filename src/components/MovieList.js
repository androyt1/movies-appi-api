import React,{useState} from 'react'
import MovieCard from './MovieCard'
import BottomBar from './BottomBar'

 
const MovieList = ({movies}) => { 

    const[pageNumber,setPageNumber] = useState(0);
    const moviePerPage = 8;
    const pagesVisited= pageNumber * moviePerPage;
    const display_movie = movies.slice(pagesVisited,pagesVisited + moviePerPage)

    
  const pageCount = Math.ceil(movies.length / moviePerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    const offset = selectedPage * moviePerPage;
    setPageNumber(selectedPage);
    window.scrollTo(0, 0)
  }


  return (
    <>
    <div className='px-5 pt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 bg-black relative min-h-[calc(100vh-100px)] pb-12'>        
        {movies && display_movie.map(movie=>{
            return <MovieCard key={movie._id} movie={movie}/>
        })}
    </div>
    <BottomBar pageCount={pageCount} handlePageClick={handlePageClick}    />
    
    </>
  )
}

export default MovieList