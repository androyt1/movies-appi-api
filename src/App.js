import React,{useEffect,useState} from 'react'
import Home from './pages/Home'
import MovieDetails from './components/MovieDetails'
import Navbar from './components/Navbar'
import { getMovies } from './api'
import ScrollToTop from './components/ScrollToTop'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {

  const [movies,setMovies] = useState([])
    const [search,setSearch] = useState('')
    const [loading,setLoading] = useState(true)

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
      const loadMovies = async () => {
        setMovies(await getMovies(search))
        setLoading(false)
      } 
      loadMovies()
    },[search]) 
  
 
  console.log("Search Term",search)
 
  return (
   <div>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar search={search} handleSearch={handleSearch}/>   
    <Routes>   
      <Route path="/" element={<Home  loading={loading} movies={movies}/>} />
      <Route path="/movie-details/:id" element={<MovieDetails movies={movies}/>} />
    </Routes>
    </BrowserRouter>     
   </div>  
  ) 
}

export default App