import "./flipcard.css"
import img7 from "../../img/img2/course1school.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight,faArrowLeft} from "@fortawesome/free-solid-svg-icons"

function Flipcard() {
  return (
    <div>
      <div className="container-fluid" id="mycontain">

<div className="container">
<div className="row" id="myrow">
  <div className="col-md-6 col-12">
    <h3>L'universite Toukra du Tchad</h3>
    <p>Une universite Internationale et qui fait de l'apprentissage son credo</p>
    <button className="mybtn">Decouvrir l'universite <FontAwesomeIcon icon={faArrowRight}/></button>
  </div>
  <div className="col-md-6 col-12" id="play">
<h4 className="text-center text-light">Nos differents formation</h4>
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={3000} id="elemento">
     <div>
      <h2 className="text-center">100%</h2>
   <p className="text-center"><span className="text-center text-white">100% De nos contenus pedagogiques <span className="d-block fs-5"> dedier a nos futures etudiants</span></span> </p> 
     </div>
    </div>

    <div className="carousel-item" data-bs-interval={3000} id="elemento">
      <div>
      <h2 className="text-center">40%</h2>
   <p className="text-center"><span className="text-center text-white">Nous formons a moitier 40% <span className="d-block fs-5">de la population chaque annee</span></span> </p> 
     </div>
    </div>

    <div className="carousel-item" data-bs-interval={3000} id="elemento">
    <div>
      <h2 className="text-center">98%</h2>
   <p className="text-center"><span className="text-center text-white">L'universite de Toukra vous <span className="d-block fs-5">garanti le succes dans son education</span></span> </p> 
     </div>
    </div>
  </div>
  <div className="btnall">
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" id="bton1">
  <span classname="text-light">< FontAwesomeIcon icon={faArrowLeft}/></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" id="bton2">
  <span classname="text-light"> < FontAwesomeIcon icon={faArrowRight}/> </span>
  </button>
  </div>
  
</div>
  </div>
</div>
</div>
      </div>

      <div className="container-fluid" id="myfliper">
        <div className="row" id="cols">
          <div className="col-md-4 col-12">
            


      <div class="flip-card ">
  <div class="flip-card-inner rounded-2 shadow">
    <div class="flip-card-front  rounded-2 ">
    <h1>Kalibe felix</h1>
      <p>Developer</p>
      <p>We love that guy</p>
    </div>
    <div class="flip-card-back  rounded-2 ">
    <h1>Kalibe felix</h1>
      <p>Developer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>


          </div>
          <div className="col-md-4 col-12  ">
      <div class="flip-card  ">
  <div class="flip-card-inner rounded-2 shadow">
    <div class="flip-card-front  rounded-2 ">
    <h1>Kalibe felix</h1>
      <p>Developer</p>
      <p>We love that guy</p>
    </div>
    <div class="flip-card-back  rounded-2 ">
      <h1>Kalibe felix</h1>
      <p>Developer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>


          </div>
          <div className="col-md-4 col-12 ">

      <div class="flip-card  rounded-2  ">
  <div class="flip-card-inner  rounded-2  shadow">
    <div class="flip-card-front  rounded-2 ">
    <h1>Kalibe felix</h1>
      <p>Developer</p>
      <p>We love that guy</p>
    </div>
    <div class="flip-card-back  rounded-2 ">
      <h1>Kalibe felix</h1>
      <p>Developer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Flipcard