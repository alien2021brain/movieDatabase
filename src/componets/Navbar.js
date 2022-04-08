import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
    return <div className=" border px-8 space-x-8 flex items-center py-4 px-20">
            <img src="https://cdn-icons.flaticon.com/png/512/3364/premium/3364355.png?token=exp=1646500796~hmac=a385ca801b0f41cf24c4483708ccccad" alt="movieicon"  className="h-[40px] md:h-[75px] w-[40px] md:w-[95px] "/>
            <Link   to="/movies" className="text-cyan-600 font-bold  text-xl md:text-3xl subpixel-antialiased">Movies</Link>
            <Link  to="/favourites" className='text-cyan-600 font-bold text-xl md:text-3xl subpixel-antialiased'>Favourties</Link>

        
        </div>   
}

export default Navbar;
 