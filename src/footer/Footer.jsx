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
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><Link to="/" className="text-decoration-none"><span> Centre de conseil et de developpement
      humain</span></Link></li>
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><Link to="/"  className="text-decoration-none"><span>service de sante universitaires </span></Link></li>
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><Link to="/" className="text-decoration-none"><span>Centre de Sante de nos etudiants</span></Link></li>
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><Link to="/" className="text-decoration-none"><span> Directions des Affaires</span></Link></li>
    </ul>
    </div>
    <div className="col-lg-3 col-md-6 col-12" id="mytopelement">
    <h3 className="mx-md-4 mx-3">Autres liens</h3>
    <ul>
      <li><FontAwesomeIcon icon={faChevronRight} className="differentsicon"/><Link to="/"  className="text-decoration-none"><span>Bibliotheques de l'universitè</span></Link></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><Link to="/" className="text-decoration-none"><span>Politique de confidentialitè</span></Link></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><Link to="/"  className="text-decoration-none"><span>Ecoles Normales superieures</span></Link></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><Link to="/" className="text-decoration-none"><span>Librairies de l'universitè</span></Link></li>
    </ul>
    </div>
    <div className="col-lg-3 col-md-6 col-12" id="mytopelement">
    <h3 className="mx-md-4 mx-3">Facultes</h3>
    <ul>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><Link to="/" className="text-decoration-none"><span>Facultè des Langues et Lettres Arts et Communication</span></Link></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><Link to="/" className="text-decoration-none"><span>Facultès des Sciences et de l'Education</span></Link></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><Link to="/" className="text-decoration-none"><span>Facultes des sciences Humaines et Sociales</span></Link></li>
      <li><FontAwesomeIcon icon={faChevronRight}className="differentsicon"/><Link to="/" className="text-decoration-none"><span>Facultés des Sciences Juridiques et Politique</span></Link></li>
    </ul>
    </div>
  </div>
  <hr />
  <div className="row" id="endfooter">
  <div className="col-md-6 col-12 text-center"><span>Copyright &copy;2023 Universite de Toukra, tous droits reserves.Developpez par <span className="texte"><Link to="/"> DevSoftware Yahoulbo</Link></span></span></div>
  <div className="col-md-6 col-12 d-flex fs-2 justify-content-center">
   <Link to="/"><FontAwesomeIcon icon={faFacebook} className="iconfooterfacebook"/></Link> 
    <Link to="/"><FontAwesomeIcon icon={faWhatsapp} className="iconfooterfacebook"/></Link>
  <Link to="/">  <FontAwesomeIcon icon={faLinkedin} className="iconfooterfacebook"/></Link>
   <Link to="/"> <FontAwesomeIcon icon={faInstagram} className="iconfooterfacebook"/></Link>
  <Link to="/">  <FontAwesomeIcon icon={faTwitter} className="iconfooterfacebook"/></Link>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Footer
