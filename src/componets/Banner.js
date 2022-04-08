import React,{useState,useEffect} from 'react';
import axios from 'axios';


function Banner() {

  const [movies,setMovies]=useState([]);
  
  
  useEffect(function (){
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=751f3537ff2a0b3aeae85747cad5304c").then((res)=>
    {
  //  console.table(res.data.results)
   setMovies(res.data.results[0])
    }
   )

  })
  
  return <>
  <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] h-[50vh] md:h-[80vh]
  w-[95vw] md:w-[100vw]
 bg-cover flex items-end  `}>
  <div className='text-base md:text-2xl text-white p-4 bg-gray-900 w-full bg-opacity-50 flex justify-center subpixel-antialiased font-mono '>{movies.title}</div>
  
  </div>
  
  </>
  
  
  
  
  
  
  
  
  

}

export default Banner;
