import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({handleSearch}) => {

    const[scroll,setScroll] = useState(false)

    const handleScroll=()=>{
        window.scrollY > 100 ? setScroll(true) : setScroll(false)
    }

    window.addEventListener('scroll',handleScroll)

  return (
    <>
    <nav className={`w-full h-[70px]  flex justify-between items-center px-3 shadow-lg shadow-[#e76363c5]  sticky top-0 transition-all duration-500 ease-linear z-10 bg-black`}>
        <div>
            <Link to="/" className='text:md md:text-2xl font-extrabold text-[#e76363c5]' style={{textShadow:"2px 2px 2px #e76363c5"}}>Movies</Link>
        </div>
        <div className='w-full md:w-1/2 h-full flex justify-center items-center ml-6 md:ml-0'>
            <input type="text" className='w-full py-3 bg-transparent border-2 border-[#e76363c5] px-2 focus:outline-dotted placeholder-[#ebddddc5] shadow-lg shadow-[#e76363c5]  rounded-lg text-[#fff8f8fb]' placeholder='Type to Search Movies ...' onChange={handleSearch}/>           
        </div>
    </nav>
    </>
  )
}

export default Navbar