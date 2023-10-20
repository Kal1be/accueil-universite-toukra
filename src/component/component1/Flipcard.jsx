import "./flipcard.css"
import img4 from "../../img/img5/temoin3.webp"
import img5 from "../../img/img5/temoin4.png"
import img6 from "../../img/img5/temoin2.jpeg"
import img7 from "../../img/img5/temoin5.png"
// import img7 from "../../img/img2/course1school.png"
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
  <div className="col-md-6 col-12">
    <h4 className="text-center text-white">Reportages de nos Etudiants</h4>
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
       <p>Salut,moi ce Koubeube Angele et je suis etudiante a l'universite de Toukra,j'etudie la science sociale et mon reve est de unir les tchadiens,Rejoignez nous et etudions ensemble.</p>
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
      </div>

      <div className="container-fluid" id="myfliper">
        <div className="row" id="cols">
          <div className="col-md-4 col-12">
            


      <div class="flip-card rounded-3 ">
  <div class="flip-card-inner rounded-2 shadow">
    <div class="flip-card-front  rounded-2 ">
    <h1 className="otp1"><strong>AXE 1</strong></h1>
    <h2>Enseignements</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
      . Veritatis recusandae ratione earum sequi, qui illo doloribus
      autem laborum nemo facilis temporibus necessitatibus dignissimos
      </p>
    </div>
    <div class="flip-card-back  rounded-2 ">
    <h1 className="otp2">Orientations</h1>
    <h2>Centres de conseils</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing
         elit. Placeat deleniti beatae aliquam et odit 
         suscipit veniam eligendi enim corporis reiciendis?</p>
         <button className="btn btn-outline-light">Suivez nous</button>
    </div>
  </div>
</div>


          </div>
          <div className="col-md-4 col-12  ">
      <div class="flip-card  ">
  <div class="flip-card-inner rounded-2 shadow">
    <div class="flip-card-front  rounded-2 ">
    <h1 className="otp1"><strong>AXE 2</strong></h1>
     <h2>Conseils</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
      . Veritatis recusandae ratione earum sequi, qui illo doloribus
      autem laborum nemo facilis temporibus necessitatibus dignissimos
     </p>
    </div>
    <div class="flip-card-back  rounded-2 ">
      <h1 className="otp2">Nos Formations</h1>
      <h2>Liste de nos programmes</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing
         elit. Placeat deleniti beatae aliquam et odit 
         suscipit veniam eligendi enim corporis reiciendis?</p>
         <button className="btn btn-outline-light">Nos formations</button>
    </div>
  </div>
</div>


          </div>
          <div className="col-md-4 col-12 ">

      <div class="flip-card  rounded-2  ">
  <div class="flip-card-inner  rounded-2  shadow">
    <div class="flip-card-front  rounded-2 ">
    <h1 className="otp1"><strong>AXE 3</strong></h1>
    <h2>Developpement</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
      . Veritatis recusandae ratione earum sequi, qui illo doloribus
      autem laborum nemo facilis temporibus necessitatibus dignissimos
      </p>
    </div>
    <div class="flip-card-back  rounded-2 ">
      <h1 className="otp2">Bibliotheques</h1>
    <h2 > Lire plus avec nous</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing
         elit. Placeat deleniti beatae aliquam et odit 
         suscipit veniam eligendi enim corporis reiciendis?</p>
         <button className="btn btn-outline-light">Suivez nous</button>
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
