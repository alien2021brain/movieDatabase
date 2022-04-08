import React,{useState,useEffect} from 'react';

import axios from 'axios';
import { Oval } from 'react-loader-spinner';
// to fetch the api
// import { Oval } from  'react-loader-spinner
import Footer from './Footer';



function Movies() {
  const [movies,setMovies]=useState([]);
  let [pageNum,setPage] = useState(1);
  const [hover,setHover]=useState("");
  const [Fav,setFav]=useState([])

  function goAhead(){
    setPage(pageNum+1);
  }
  function goBehind(){
    if(pageNum>1)
    setPage(pageNum-1);
  }

  
  
  useEffect(function (){
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=751f3537ff2a0b3aeae85747cad5304c&page=${pageNum}`).then((res)=>
    {
  //  console.table(res.data.results)
   setMovies(res.data.results)
   let oldFav=localStorage.getItem("imdb");
   oldFav=JSON.parse(oldFav)
   setFav([...oldFav])
    }
   )

  },[pageNum])
  
  
  let addFav=(movie)=>{
    let newarr=[...Fav,movie];
    setFav([...newarr]);
    console.log(newarr);
    localStorage.setItem("imdb",JSON.stringify(newarr));

  }
  let del=(movie)=>{
    let newArray=Fav.filter((m)=>m.id!==movie.id)
    setFav([...newArray]);
    localStorage.setItem("imdb",JSON.stringify(newArray))
  }
   

  return<>
  <div className='mt-8 font-bold text-2xl text-teal-900 subpixel-antialiased text-center'>Trending Movies</div>


          
  {
     movies.length === 0 ? <div className='flex justify-center mt-8'>
     <Oval
     height="100"
     width="100"
     color='grey'
     ariaLabel='loading'
   />
     </div>
      :<div className='flex flex-wrap justify-center'>
      {
        movies.map((movie)=>(
          <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[15vh] md:h-[20vh] w-[100px] md:w-[150px] bg-cover mt-5 md:mt-10 ml-10 md:ml-20 rounded-xl flex items-end hover:scale-110 ease-out duration-300 relative`}
          onMouseEnter={()=>{setHover(movie.id)}}
          onMouseLeave={()=>{setHover("")}}
           >
           {
             hover===movie.id && <>{ Fav.find((m)=>m.id===movie.id)? <div 
             className='absolute top-2 right-2 p-2
             bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={()=>del(movie)}>❌</div>: <div 
             className='absolute top-2 right-2 p-2
             bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={()=>addFav(movie)}>❤️</div>
            
             }
             </>
           }

           
           
          

          <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold'>{movie.title}</div>
          </div>

          ))
      }
     
      
      </div>

      
      
  
  }
  <Footer pageProp={pageNum} goBack={goBehind} goAhead={goAhead}/> 
  
  
  </>
  
  
  
 


 
 
  
        
        
                
    
        
   
        

  
          
        
     
  
      
        

         
           
            
           

           

           
       

         
            
            
          
        
        
  

  
}

export default Movies;
