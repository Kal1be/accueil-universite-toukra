import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom"
import { NavLink } from 'react-router-dom'
import img1 from "../img/img1/drapeau1.png"
import img2 from "../img/img1/im6.png";
import Header from '../header/Header';
function Navbar() {
  return (
    <div>
       <Header/>
     <nav className="navbar navbar-expand-lg px-lg-2 px-0 shadow border bg-white" id='navbar'>
  <div className="container-fluid">
<Link className='navbar-brand' to="#"><img src={img2} alt="" className='image1'/>Universite de <strong >Toukra</strong><span className="divider"><img src={img1} alt="the problem is there" /></span></Link>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="#/">Accueil</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/">
            Recherches
          </Link>
          <div className="mesmenudropdown">
          <ul>
            <li><Link to="/admission">Admission et Nouvelles</Link></li>
            <li><Link to="#">Politique de Confidentialites</Link></li>
            <li><Link to="#">Librairies de l'universite</Link></li>
            <li><Link to="#">Services Disponible</Link></li>
            <li><Link to="#">Ecoles Doctorales</Link></li>
            <li><Link to="#">Ecoles Normales superieur</Link></li>
          </ul>
          </div>
        </li>
        
      <li className="nav-item ">
      <Link className="nav-link" to="#" >
          Facultes
        </Link>
        <div className="mesmenudropdown">
           <div className="row" id='rowmenu'>
           <div className="col-4">
              <h4>Faculte</h4>
             <ul>
              <li><Link to="/faculte/juridique">Facultes de Sciences juridiques</Link></li>
              <li><Link to="/faculte/humaine">Facultes des sciences Humaines</Link></li>
              <li><Link to="/faculte/communicattion">Facultes des Communications</Link></li>
              <li><Link to="/faculte/politique">Facultes des Sciences Politiques</Link></li>
              <li><Link to="/faculte/education">Facultes des Sciences de l'Education</Link></li>
             </ul>
           </div>
           <div className="col-4">
            <h4>Departement</h4>
            <ul>
             <li><Link to="/departement/francais">Departement de Francais</Link></li>
             <li><Link to="/departement/sociologie">Departement de sociologie</Link></li>
             <li><Link to="/departement/anthropologie">Departement d'Anthropologie</Link></li>
             <li><Link to="/departement/communication">Departement de Communication</Link></li>
             <li><Link to="/departement/geographie">Departement de Geographie</Link></li>
             <li><Link to="/departement/histoire">Departement d'Histoire</Link></li>
            </ul>
           </div>
           <div className="col-4">
            <h4>Direction</h4>
            <ul>
              <li><Link to="#">Special Bulletin</Link></li>
              <li><Link to="#">Brochures et Document</Link></li>
              <li><Link to="#">Services</Link></li>
              <li><Link to="/president/mot">Droits d'auteur</Link></li>
            </ul>
           </div>
           </div>
          </div>
      
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Instituts&amp;Centres </Link>
      

        </li> 
     
        <li className="nav-item">
        <Link className="nav-link " to="#">Nouvelles  </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="#">Biblioteques  </Link>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le small screen */}
  <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue a <strong className='text-primary'>Toukra</strong> !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link className="nav-link " aria-current="page" to="/">Accueil</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Recherches
          </Link>
          <ul class="dropdown-menu">
            <li className='nav-item'><Link class="dropdown-item" to="/accueil">Admission et nouvelles</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="/politiques">Politiques de Confidentialites</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="/librairies">Librairies</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="/politiques/ecoles">Ecoles Doctorales</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="/librairies">Droits d'auteur</Link></li>
          </ul>
        </li>
        
      <li className="nav-item" >
      <Link className="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Facultes
        </Link>
        <ul class="dropdown-menu ">
            <li className="nav-item"><Link class="dropdown-item" to="/faculte/communication">Faculte de Communication</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="faculte/humaine">Faculte de science Humaines</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="faculte/droits">Faculte de Droits</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="faculte/politiques">Facultes de Sciences Politiques</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="/faculte/education">Facultes de l'Education</Link></li>
          </ul>
      
      </li>
      <li className="nav-item" >
        <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Instituts&amp;Centres </Link>
       
         <ul class=" dropdown-menu">
            <li className="nav-item"><Link class="dropdown-item" to="/politiques/ecoles">Ecoles de doctorat</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="/formation/toukra">Centres de Formation Humaines</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="/more">Voir plus ...</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="/admission">Mot de prsident</Link></li>
          </ul>

        </li> 
     
        <li className="nav-item" >
        <Link className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false" to="#">Nouvelles </Link>
          <ul class="dropdown-menu">
            <li className="nav-item"><Link class="dropdown-item" to="#">Action</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="#">Another action</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item" >
        <Link className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="#">Biblioteques</Link>
          <ul class="dropdown-menu">
            <li className="nav-item"><Link class="dropdown-item" to="#">Bibliotheques Nationale</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="#">Librairies</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="#">Tous Documents</Link></li>
          </ul>
        </li>

        <li className="nav-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <Link className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="#">Recherches et Innovations</Link>
          <ul class="dropdown-menu">
            <li className="nav-item"><Link class="dropdown-item" to="#">Partenaires Universitaires</Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="#"></Link></li>
            <li className="nav-item"><Link class="dropdown-item" to="#">Recherche et l'internationale</Link></li>
          </ul>
        </li>
    </ul>
   
    </div>
  </div>
</div>

    {/* fin de l'affichage sur le strong screen */}

</nav>



{/* ****************fixes la position si le scroll est a 150px******************* */}



<nav className="navbar navbar-custom navbar-expand-lg px-lg-2 px-sm-0 shadow border " id="nav">
  <div className="container-fluid">
<Link className='navbar-brand' to="#"><img src={img2} alt="" className='image1'/>Universite de <strong >Toukra</strong><span className="divider"><img src={img1} alt="the problem is there" /></span></Link>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="#">Accueil</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="#"> Recherches&amp;Innovations</Link>
      </li>
      <li className="nav-item ">
      <Link className="nav-link" to="#" >
          Facultes
        </Link>
       
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Instituts&amp;Centres </Link>
         
        </li> 
        <li className="nav-item">
        <Link className="nav-link" to="#">Nouvelles  </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="#">Biblioteques  </Link>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le small screen */}
  {/* <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
     
    </div>
  </div> */}
</div>

    {/* fin de l'affichage sur le strong screen */}

</nav>

    </div>
  )
}

export default Navbar
