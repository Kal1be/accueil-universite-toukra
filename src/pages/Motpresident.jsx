import React from 'react'
import Mot from '../component/component2/Mot'
import Apropos from '../component/component2/Apropos'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
function Motpresident() {
  return (
    <div>
      <Navbar/>
      <h5>le mot du president</h5>
      <Mot/>
      <Apropos/>
      <Footer/>
    </div>
  )
}

export default Motpresident
