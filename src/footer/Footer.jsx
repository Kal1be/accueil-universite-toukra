import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
 import { faFacebook,faWhatsapp,faLinkedin,faInstagram,faGoogle,faTwitter } from "@fortawesome/free-brands-svg-icons";
 import img1 from "../img/img1/drapeau1.png"
 import img2 from "../img/img1/im6.png"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container-fluid" id="containerfooter">
  <div className="row">
    <div className="col-lg-3 col-md-6 col-12">
    <Link className='navbar-brand' to="#"><img src={img2} alt="" className='image1'/>Universite de <strong >Toukra</strong><span className="divide"><img src={img1} alt="the problem is there" /></span></Link>
            <p> Batîment du Senat, 
              Universitè de Ndjamèna, 
              Campus de Toukra,Ndjamèna, 
              Ndjamèna Tchad.</p>  
                </div>
    <div className="col-lg-3 col-md-6 col-12" id="mytopelement">
    <h3 className="mx-md-4 mx-3">installations et services</h3>
    <ul>
      <li> Centre de conseil et de developpement
      humain</li>
      <li>service de sante universitaires </li>
      <li>Centre de Sante de nos etudiants</li>
      <li> Directions des Affaires</li>
    </ul>
    </div>
    <div className="col-lg-3 col-md-6 col-12" id="mytopelement">
    <h3 className="mx-md-4 mx-3">Autres liens</h3>
    <ul>
      <li>Bibliotheques de l'universitè</li>
      <li>Politique de confidentialitè</li>
      <li>Ecoles Normales superieures</li>
      <li>Librairies de l'universitè</li>
    </ul>
    </div>
    <div className="col-lg-3 col-md-6 col-12" id="mytopelement">
    <h3 className="mx-md-4 mx-3">Facultes</h3>
    <ul>
      <li>Facultè des Langues et Lettres Arts et Communication</li>
      <li>Facultès des Sciences et de l'Education</li>
      <li>Facultes des sciences Humaines et Sociales</li>
      <li>Facultés des Sciences Juridiques et Politique</li>
    </ul>
    </div>
  </div>
  <hr />
  <div className="row" id="endfooter">
  <div className="col-md-6 col-12 text-center"><span>Copyright &copy;2023 Universite de Toukra, tous droits reserves.Developpez par DevSoftware Yahoulbo</span></div>
  <div className="col-md-6 col-12 d-flex fs-2 justify-content-center">
    <FontAwesomeIcon icon={faFacebook} className="iconfooterfacebook"/>
    <FontAwesomeIcon icon={faWhatsapp} className="iconfooterwhatsapp"/>
    <FontAwesomeIcon icon={faLinkedin} className="iconfooterlinke"/>
    <FontAwesomeIcon icon={faInstagram} className="iconfooterinta"/>
    <FontAwesomeIcon icon={faTwitter} className="iconfooterfacebook"/>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Footer
