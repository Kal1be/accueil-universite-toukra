import "./slide.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faArrowRight,faArrowLeft,faClock,faBook, faB} from '@fortawesome/free-solid-svg-icons'
import img1 from "../../img/img4/etudiant1.jpeg"
import img2 from "../../img/img4/etudiant2.jpeg"
import img3 from "../../img/img4/etudiant3.jpeg"
import img4 from "../../img/img4/etudiant4.jpeg"
import img5 from "../../img/img4/etudiant5.jpeg"
import img6 from "../../img/img4/etudiant6.jpeg"
import img7 from "../../img/img4/etudiant7.jpeg"
import img8 from "../../img/img4/etudiant8.jpg"
import img9 from "../../img/img4/etudiant9.png"

function Slide() {
  return (
    <div className="container-fluid" id="mycontainelement">
   <h1 className="text-center" id="h1">Parcourez nos listes de cours</h1>
          <p className="text-center " id="p">Jeffrey crikey victoria sponge mush spiffing super arse over tit matie 
            boy smashing. The little rotter off his nut codswallop.!</p>

<div id="carouselExampleControlsNoTouching" class="carousel slide bg-white" data-bs-touch="false">

  <div class="carousel-inner">
    <div class="carousel-item active shadow">
     <div className="cards-wrapper" id="card-wrapper">
      <div className="col-lg-4 col-12">
      <div className="card" >
  <img src={img1} className="card-img-top" alt="..." />
  <div className="card-body">
    <div className="modifie"><h5 className="card-title">Droits juridiques</h5>
    <div>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
</div></div>
    <p className="card-text">Voici en quelques sortes tous le nos meilleurs formations pour tous les etudiants cela les permet de bien les preparer dans leurs carrieres et leurs . </p>
    <hr />
    <div className="modifie">
<span><FontAwesomeIcon icon={faClock} className="bluedifferent"/>Semaines</span>
<span><FontAwesomeIcon icon={faBook} className="bluedifferent"/>Lecon</span>
</div>
  </div>
</div>

        </div>
      <div className="col-lg-4 col-12">
      <div className="card" >
  <img src={img2} className="card-img-top" alt="..." />
  <div className="card-body">
  <div className="modifie"><h5 className="card-title">Sociologie </h5>
    <div>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="nochecked"/>
</div></div>
<p className="card-text">Voici en quelques sortes tous le nos meilleurs formations pour tous les etudiants cela les permet de bien les preparer dans leurs carrieres et leurs . </p>
    <hr />
    <div className="modifie">
<span><FontAwesomeIcon icon={faClock} className="bluedifferent"/>Semaines</span>
<span><FontAwesomeIcon icon={faBook} className="bluedifferent"/>Lecon</span>
</div>
  </div>
</div>

        </div>
      <div className="col-lg-4 col-12">

      <div className="card" >
  <img src={img3} className="card-img-top" alt="..." />
  <div className="card-body">
  <div className="modifie"><h5 className="card-title">Communication</h5>
    <div>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="nochecked"/>
</div></div>
    <p className="card-text">Nous formons les jeunes sur ce domaines de journalisme pour leurs garantir une meilleures avenir sur ce domaines,les preparer sur ce domaine.</p>
    <hr />
   <div className="modifie">
<span><FontAwesomeIcon icon={faClock} className="bluedifferent"/>Semaines</span>
<span><FontAwesomeIcon icon={faBook} className="bluedifferent"/>Lecon</span>
</div>
  </div>
</div>

       </div>
     </div>
    </div>
    <div class="carousel-item">
     <div className="cards-wrapper" id="card-wrapper">
     <div className="col-lg-4 col-12">
     
      <div className="card" >
  <img src={img4} className="card-img-top" alt="..." />
  <div className="card-body">
  <div className="modifie"><h5 className="card-title">Geographie</h5>
    <div>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar}className="checked"/>
</div></div>
    <p className="card-text">Nous formons nos futures geographes sur la meilleures gestion de nos sous sols les preparer a mieux connaitre sur notre pays et celui du monde tout entier</p>
    <hr />
   <div className="modifie">
<span><FontAwesomeIcon icon={faClock} className="bluedifferent"/>Semaines</span>
<span><FontAwesomeIcon icon={faBook} className="bluedifferent"/>Lecon</span>
</div>
  </div>
</div>

        
      </div>
     
      <div className="col-lg-4 col-12">
      <div className="card shadow" >
  <img src={img5} className="card-img-top" alt="..." />
  <div className="card-body">
  <div className="modifie"><h5 className="card-title">Histoire</h5>
    <div>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="nochecked"/>
</div></div>
    <p className="card-text">Nous formons nos futures geographes sur la meilleures gestion de nos sous sols les preparer a mieux connaitre sur notre pays et celui du monde tout entier</p>
    <hr />
   <div className="modifie">
<span><FontAwesomeIcon icon={faClock} className="bluedifferent"/>Semaines</span>
<span><FontAwesomeIcon icon={faBook} className="bluedifferent"/>Lecon</span>
</div>
  </div>
</div>

       
        </div>
     
      <div className="col-lg-4 col-12">
      <div className="card shadow" >
  <img src={img6} className="card-img-top" alt="..." />
  <div className="card-body">
  <div className="modifie"><h5 className="card-title">Englais</h5>
    <div>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="nochecked"/>
</div></div>
    <p className="card-text">Nous formons nos futures geographes sur la meilleures gestion de nos sous sols les preparer a mieux connaitre sur notre pays et celui du monde tout entier</p>
    <hr />
   <div className="modifie">
<span><FontAwesomeIcon icon={faClock} className="bluedifferent"/>Semaines</span>
<span><FontAwesomeIcon icon={faBook} className="bluedifferent"/>Lecon</span>
</div>
  </div>
</div>

    
       </div>
     </div>
    </div>


    <div class="carousel-item">
     <div className="cards-wrapper" id="card-wrapper">

     <div className="col-lg-4 col-12">
      <div className="card shadow" >
  <img src={img7} className="card-img-top" alt="..." />
  <div className="card-body">
  <div className="modifie"><h5 className="card-title">Arabe</h5>
    <div>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="nochecked"/>
</div></div>
    <p className="card-text">Nous formons nos futures geographes sur la meilleures gestion de nos sous sols les preparer a mieux connaitre sur notre pays et celui du monde tout entier</p>
    <hr />
   <div className="modifie">
<span><FontAwesomeIcon icon={faClock} className="bluedifferent"/>Semaines</span>
<span><FontAwesomeIcon icon={faBook} className="bluedifferent"/>Lecon</span>
</div>
  </div>
</div>

       
        </div>
      
      <div className="col-lg-4 col-12">
      <div className="card shadow" >
  <img src={img8} className="card-img-top" alt="..." />
  <div className="card-body">
  <div className="modifie"><h5 className="card-title">Anthropologie</h5>
    <div>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar}/>
</div></div>
    <p className="card-text">Nous formons nos futures geographes sur la meilleures gestion de nos sous sols les preparer a mieux connaitre sur notre pays et celui du monde tout entier</p>
    <hr />
   <div className="modifie">
<span><FontAwesomeIcon icon={faClock} className="bluedifferent"/>Semaines</span>
<span><FontAwesomeIcon icon={faBook} className="bluedifferent"/>Lecon</span>
</div>
  </div>
</div>

        
       </div>
      
      <div className="col-lg-4 col-12">
      <div className="card" >
  <img src={img9} className="card-img-top" alt="..." />
  <div className="card-body">
  <div className="modifie"><h5 className="card-title">Education</h5>
    <div>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar} className="checked"/>
  <FontAwesomeIcon icon={faStar}/>
</div></div>
    <p className="card-text">Nous formons nos futures geographes sur la meilleures gestion de nos sous sols les preparer a mieux connaitre sur notre pays et celui du monde tout entier</p>
    <hr />
   <div className="modifie">
<span><FontAwesomeIcon icon={faClock} className="bluedifferent"/>Semaines</span>
<span><FontAwesomeIcon icon={faBook} className="bluedifferent"/>Lecon</span>
</div>
  </div>
</div>

        
     </div>
     </div>
    </div>



  </div>
  <button class="carousel-control-prev" id='btn1' type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
 <span> <FontAwesomeIcon icon={faArrowLeft}/></span>
  </button>
  <button class="carousel-control-next" id='btn2' type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
   <span><FontAwesomeIcon icon={faArrowRight}/></span>
  </button>
</div> 
    </div>
  )
}

export default Slide

