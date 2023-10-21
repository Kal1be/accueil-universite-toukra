import img4 from "../../img/img5/temoin3.webp"
import img5 from "../../img/img5/temoin4.png"
import img6 from "../../img/img5/temoin2.jpeg"
import img7 from "../../img/img5/temoin5.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "./first.css"

export function First(){
    return(
      <div className="container-fluid" id="footercontainer">
        <h1 className="text-center">Les Evenements a venir</h1>
        <p className="text-center">Suivez nos listes des elements a venir sur la mise a jour et du futures de l'universite de Toukra</p>
   <div className="row">
    <div className="col-lg-3 col-md-6 col-12 d-flex my-md-2">
     <div className="afterdelta">
      <p className="text-center">12</p>
       <p className="border bg-primary py-2">Dec</p>
     </div>
     <div className="openp"><h2>Nouvelle mise a jour du site </h2>
     <p>Voir plus a propos du nouvelle mise a jour du site et voir les systemes qui seront implementer.</p>
      <a href="" className="btn btn-link">lire la suite<FontAwesomeIcon icon={faChevronRight} className="openicon"/></a></div>
    </div>
    <div className="col-lg-3 col-md-6 col-12 d-flex my-md-2">
     <div className="afterdelta ">
      <p className="text-center">03</p>
       <p className="border bg-primary py-2">Mars</p>
     </div>
     <div className="openp"><h2>Rencontre entre les dirigeants de l'universite</h2>
     <p>Une rencontre entre les dirigeants de l'universite est prevu pour mars 2024 avec le president de l'universite.</p>
      <a href="" className="btn btn-link">lire la suite<FontAwesomeIcon icon={faChevronRight} className="openicon"/></a></div>
    </div>
    <div className="col-lg-3 col-md-6 col-12 d-flex my-md-2">
     <div className="afterdelta ">
      <p className="text-center">18</p>
       <p className="border bg-primary py-2">Nov</p>
     </div>
     <div className="openp"><h2>Implementation des depots en ligne</h2>
     <p>Une nouvelle ere est lancer a Ndjamena la capitale selon les depots en ligne a l'universite de Toukra.</p>
      <a href="" className="btn btn-link">Savoir plus<FontAwesomeIcon icon={faChevronRight}className="openicon"/></a></div>
    </div>
    <div className="col-lg-3 col-md-6 col-12 d-flex my-md-2">
     <div className="afterdelta ">
      <p className="text-center f-900">02</p>
       <p className="border bg-primary py-2">Juin</p>
     </div>
     <div className="openp"><h2>Examen dans tous les departements</h2>
     <p>Une nouvelle est annoncer ce matin selon les media que tous les examens universitaires commencerons en juin et pour mettre fin a l'annee.</p>
      <a href="" className="btn btn-link">Suivre<FontAwesomeIcon icon={faChevronRight} className="openicon"/></a></div>
    </div>
   </div>
      </div>
    )
  }