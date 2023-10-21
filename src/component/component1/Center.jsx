import "./center.css"
import img1 from "../../img/img3/etudian.jpg"
import img2 from "../../img/img3/icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

function Center() {
  return (
    <div className="container-fluid" id="image1">
     <div className="container">
     <div className="row">
        <div className="col-md-6 col-12">
            <div >
            <img src={img2} alt="" className="img1"/>
              <div className="animation">
              <p>A former plus <span>3M+</span></p>
              </div>
               
            </div>
            <img src={img1} alt="" className="image2"/>
        </div>
        <div className="col-md-6 col-12" id="dernier">
            <h3>
Nous sommes une institution d'apprentissage et d'expertisme</h3>
            <h6>50ans d'expertiste et d'experience</h6>
             <p>
               
             "L'Université de Toukra est une grande Université comparable
              à tout autre Université, engager dans la transmission de la
               connaissance contemporaine, en utilisant des installations
                et methodes de haut qualité et des appproches multi-disciplinaires,
                 permettant hommes et femmes de toutes races,ainsi que la generation
                  future d'avoir des nouvelles idees et pratiques intellectuelles
                   pertinentes repondant aux besoins de la communaute du Tchad et du monde en general.
              Notre mission est que chaque étudiant réfléchisse de manière critique,
              raisonne avec sagesse et agisse avec humanité tout en cultivant une
              vie pleine de sens". 
             </p>
            <h6><FontAwesomeIcon icon={faPhone}/> contact:+235 66 93 93 77  <button className=" mx-lg-5 ms-3 my-2 justify-content-end btn btn-primary">Lire plus</button></h6>
           
        </div>
      </div>
     </div>
    </div>
  )
}

export default Center
