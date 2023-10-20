import img4 from "../../img/img5/temoin3.webp"
import img5 from "../../img/img5/temoin4.png"
import img6 from "../../img/img5/temoin2.jpeg"
import img7 from "../../img/img5/temoin5.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons"
import "./first.css"

export function First(){
    return(
      
      <div className="container-fluid" id="containContainer">
      <div className="row">
        <div className="col-md-5 col-12">
          <h1>Reportage de certain de nos etudiants</h1>
          
        </div>
        <div className="col-md-6 col-12">
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval={2000} id="elemento">
       <div>
  <p>Salut,je suis Adele Orimadji et je suis etudiante a l'universite de Toukra,j'etudie la communication et mon reve c'est de devenir journaliste de Television.Rejoignez moi et etudions ensemble</p>
  <div className="nour">
    <img src={img4} alt="" />
    <p>Adele Orimadji <span>Etudiante</span></p>
  </div>
       </div>
      </div>
  
      <div className="carousel-item" data-bs-interval={2000} id="elemento">
       <div>
       <p>Salut,moi ce Etienne Dingamnodji et je suis etudiant a l'universite de Toukra,j'etudie la Philosophie et mon reve c'est de devenir grand philosophe,Rejoignez nous et etudions ensemble.</p>
  <div  className="nour">
    <img src={img5} alt="" />
    <p>Dingamnodji Etienne<span>Etudiant</span></p>
  </div>
       </div>
      </div>
  
      <div className="carousel-item" data-bs-interval={2000} id="elemento">
       <div>
       <p>Salut,moi ce Koubeube Angele et je suis etudiante a l'universite de Toukra,j'etudie la science sociale et mon reve est de permettre la cohabitation entre les tchadiens,Rejoignez nous et etudions ensemble.</p>
  <div  className="nour">
    <img src={img6} alt="" />
    <p>Koubeube Angele<span>Etudiante</span></p>
  </div>
       </div>
      </div>
  
  
  
  
  
      <div className="carousel-item" id="elemento">
      <div>
       <p>Salut je suis Biampambe Marcelin,je suis etudiant a l'universite de Toukra,j'etudie l'Anthropologie et mon reve ce d'etre Anthropologue et Historien,rejoingnez nous et etudions ensemble.</p>
  <div  className="nour">
    <img src={img7} alt="" />
    <p>Bianpambe Marcelin<span>Etudiant</span></p>
  </div>
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
    )
  }