import React,{useEffect,useState} from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Admission from "./pages/Admission"
import Navbar from './navbar/Navbar';
import Footer from "./footer/Footer"
import "./preloader.css"
import Page404 from './pages/Page404';
import Motpresident from './pages/Motpresident';

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
        <span className='loader'>Patientez</span>
        </div>
       )
    }
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/admission' element={<Admission/>} />
    <Route path='*' element={<Page404/>}/>
    <Route path="/president/mot" element={<Motpresident/>}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default Preloader
