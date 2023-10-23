import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
 import { faFacebook,faWhatsapp,faLinkedin,faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons";
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
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><span> Centre de conseil et de developpement
      humain</span></li>
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><span>service de sante universitaires </span></li>
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><span>Centre de Sante de nos etudiants</span></li>
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><span> Directions des Affaires</span></li>
    </ul>
    </div>
    <div className="col-lg-3 col-md-6 col-12" id="mytopelement">
    <h3 className="mx-md-4 mx-3">Autres liens</h3>
    <ul>
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><span>Bibliotheques de l'universitè</span></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><span>Politique de confidentialitè</span></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><span>Ecoles Normales superieures</span></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><span>Librairies de l'universitè</span></li>
    </ul>
    </div>
    <div className="col-lg-3 col-md-6 col-12" id="mytopelement">
    <h3 className="mx-md-4 mx-3">Facultes</h3>
    <ul>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><span>Facultè des Langues et Lettres Arts et Communication</span></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><span>Facultès des Sciences et de l'Education</span></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><span>Facultes des sciences Humaines et Sociales</span></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><span>Facultés des Sciences Juridiques et Politique</span></li>
    </ul>
    </div>
  </div>
  <hr />
  <div className="row" id="endfooter">
  <div className="col-md-6 col-12 text-center"><span>Copyright &copy;2023 Universite de Toukra, tous droits reserves.Developpez par <span className="texte">DevSoftware Yahoulbo</span></span></div>
  <div className="col-md-6 col-12 d-flex fs-2 justify-content-center">
    <FontAwesomeIcon icon={faFacebook} className="iconfooterfacebook"/>
    <FontAwesomeIcon icon={faWhatsapp} className="iconfooterfacebook"/>
    <FontAwesomeIcon icon={faLinkedin} className="iconfooterfacebook"/>
    <FontAwesomeIcon icon={faInstagram} className="iconfooterfacebook"/>
    <FontAwesomeIcon icon={faTwitter} className="iconfooterfacebook"/>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Footer
