import React from 'react';



function Footer({pageProp,goBack,goAhead}) {
  
 

  return <>
  <div className='flex justify-center mt-8'>
  
  <button className='px-2 h-8 w-15 border-2 border-sky-400  border-r-0 rounded-l-xl' onClick={goBack}>Pre</button>
 
 <button className='px-2 h-8 w-15 border-2 border-sky-400 bg-gray-200 '>{pageProp}</button>
  <button className='px-2 h-8 w-15 border-2 border-sky-400 border-l-0 rounded-r-xl  ' onClick={goAhead}>Next</button>
 </div>;

  
  </>
}

export default Footer;
