import React,{useEffect,useState} from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Admission from "./pages/Admission"
import Navbar from './navbar/Navbar';
import "./preloader.css"

function Preloader() {
    const [isloaded,setIsloaded]=useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setIsloaded(true)
        },4000);
    },[])
    if(!isloaded){
       return(
        <div className='preloader'>
        <div className="ching"></div>
       <div className="ching"></div>
        <div className="ching"></div>
        <span className='loader'>Toukra</span>
        </div>
       )
    }
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/admission' element={<Admission/>} />
  </Routes>
  </>
  )
}

export default Preloader
