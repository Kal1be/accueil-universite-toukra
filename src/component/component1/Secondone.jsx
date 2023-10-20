

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faClock,faLocation} from "@fortawesome/free-solid-svg-icons"
import img1 from "../../img/img5/class2.jpg"
import img2 from "../../img/img5/class4.jpeg"
import img3 from "../../img/img5/class3.jpg"
import "./second.css"
const SecondOne=()=>{
  
    return(
      <>
      <div className="container-fluid bg-white" id="containelement">
        <div className="container">
          <h1 className="text-center" id="h1">Nos Evenements a venir</h1>
          <p className="text-center " id="p">Jeffrey crikey victoria sponge mush spiffing super arse over tit matie 
            boy smashing. The little rotter off his nut codswallop.!</p>
          <div className="row shadow" id="contenuimg">
            <div className="col-sm-5 col-12">
             <div className="direction"> <img src={img1} alt="" /></div>
            </div>
            <div className="col-sm-7 col-12" id="identifiant">
              <p className="text-warning fs-lg-4 fs-5 my-3">27 Avril,2024</p>
              <h1 id="h1a">Remise de Diplome de finalisation pour nos Laureats</h1>
              <div className="modifiant my-2">
               <span> <FontAwesomeIcon icon={faClock} className="colorblue"/>12:00min</span>
              <span>  <FontAwesomeIcon icon={faLocation} className="colorblue"/>Maison de la Femme</span>
              </div>
              <p id="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus quasi
               culpa officia esse quia dicta fugiat, natus facere laboriosam ipsam sit aliquam.</p>
            </div>
          </div>
          <div className="row shadow" id="contenuimg">
            <div className="col-sm-5 col-12">
             <div className="direction"> <img src={img2} alt="" /></div>
            </div>
            <div className="col-sm-7 col-12" id="identifiant">
              <p className="text-warning fs-4 my-3">27 Janvier,2024</p>
              <h1 id="h1a">Championat entre l'universite de Toukra et celui de Gassi</h1>
              <div className="modifiant my-2">
              <span> <FontAwesomeIcon icon={faClock} className="colorblue"/>15:00min</span>
              <span>  <FontAwesomeIcon icon={faLocation} className="colorblue"/>12 Avenue de Gaulle</span>
              </div>
              <p id="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus quasi
               culpa officia esse quia dicta fugiat, natus facere laboriosam ipsam sit aliquam.</p>
            </div>
          </div>
          <div className="row shadow" id="contenuimg">
            <div className="col-sm-5 col-12">
             <div className="direction"> <img src={img3} alt="" /></div>
            </div>
            <div className="col-sm-7 col-12" id="identifiant">
              <p className="text-warning fs-4 my-3">27 Decembre,2024</p>
              <h1 id="h1a"> Des Concours organiser pour cette fin d'annee 2023-2024</h1>
              <div className="modifiant my-2">
              <span> <FontAwesomeIcon icon={faClock} className="colorblue"/>12:00min</span>
              <span>  <FontAwesomeIcon icon={faLocation} className="colorblue"/>12 Avenue Bokassa</span>
              </div>
              <p id="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus quasi
               culpa officia esse quia dicta fugiat, natus facere laboriosam ipsam sit aliquam.</p>
            </div>
          </div>
        </div>
       <button className="btn btn-outline-primary fs-3 my-4" id="mybtn">Lire plus..</button>
       </div>
      
      </>
    )
  }

  export default SecondOne