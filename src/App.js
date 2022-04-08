
import './App.css';
import Navbar from './componets/Navbar';
import Banner from './componets/Banner';
import Movies from './componets/Movies';

import Fav from "./componets/Fav"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path="/movies" element={
      <>
      
    <Banner></Banner>
     <Movies></Movies>
  
     
        </>
    }
    />
    <Route path="/favourites" element={
      <>
      <Fav></Fav>
    
     
        </>
    }
    />
    </Routes>


   

    
    </BrowserRouter>
  
  );
}

export default App;
