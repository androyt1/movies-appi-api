import axios from "axios";
import {key,host,url} from "../config/key";


const d_url=url

const config = {
  headers: {
    'X-RapidAPI-Host': host,
    'X-RapidAPI-Key': key 
  } 
}



export const getMovies = async(search) => {
    try{
        const res=await axios.get(d_url+`?query=${search}&sort=title`,config)
        return res.data.results
    }
    catch(error){
        console.log(error);
    }
}