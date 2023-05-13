import React from 'react';
import {  Routes,Route } from "react-router-dom";
import {Header, Footer} from './component/Header_Footer'
import Home from "./component/Home";
import About from "./component/About";

function App () {
   return(
    <>
    
    <Header/>
    <Routes>
     <Route exact path='/Home' element={<Home/>}></Route>
     <Route path='/About' element={<About/>}></Route>
     
 </Routes>
    <Footer/>
    </>
   )
}
export default App;
