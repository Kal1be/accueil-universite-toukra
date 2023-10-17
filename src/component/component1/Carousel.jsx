import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faArrowRight,faPhone} from '@fortawesome/free-solid-svg-icons';
import img1 from "../../img/img1/reel1.jpg"
import img2 from "../../img/img1/reel4.jpg"
import img3 from "../../img/img1/reel5.jpg"



function Carousel() {
  return (
    <div>
      {/* **************le carousel et ses elements en tous affichage******************* */}
      <div classname="container-fluid bg-body-tertiary px-lg-3 px-2">
  <div classname="contenu">
    <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-indicators" id="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1">.</button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" id="carousel-item">
          <img src={img1} className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" id="carousel-caption">
            <p>Bienvenue devant notre E-learning</p>
            <h3>Mahamat Saleh Haggar vous souhaite la bienvenue</h3>
            <button>lire plus..</button>
          </div>
        </div>
        <div className="carousel-item" id="carousel-item">
          <img src={img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" id="carousel-caption">
            <p>Bienvenue devant notre Organisation</p>
            <h3>L'Education est la cles du success de la vie</h3>
            <button>Nos Cours..</button>
          </div>
        </div>
        <div className="carousel-item" id="carousel-item">
          <img src={img3} className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" id="carousel-caption">
            <p>Bienvenue a l'universite de Toukra</p>
            <h3>L'Education est la cles du success d'une nation</h3>
            <button>Nos Cours..</button>
          </div>
        </div>
      </div>
      <div id="btn">
        <button className="carousel-control-prev text-align-center" id="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span classname="text-light">< FontAwesomeIcon icon={faArrowLeft}/></span>
        </button>
        <button className="carousel-control-next text-align-center" id="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span classname="text-light"> < FontAwesomeIcon icon={faArrowRight}/> </span>
        </button>
      </div>
    </div>
  </div></div>
   </div>
   

  )
}

export default Carousel
