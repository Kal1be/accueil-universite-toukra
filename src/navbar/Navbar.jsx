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
 <NavLink className='navbar-brand' to="#"><img src={img2} alt="" className='image1'/>Universite de <strong >Toukra</strong><span className="divider"><img src={img1} alt="the problem is there" /></span></NavLink>

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
       <NavLink className="nav-link active" aria-current="page" to="#/">Accueil</NavLink>
      </li>
      <li class="nav-item">
         <NavLink class="nav-link" to="/">
            Recherches
          </NavLink>
        </li>
        
      <li className="nav-item ">
       <NavLink className="nav-link" to="#" >
          Facultes
        </NavLink>
      
      </li>
      <li className="nav-item">
         <NavLink className="nav-link" to="#">Instituts&amp;Centres </NavLink>
      

        </li> 
     
        <li className="nav-item">
         <NavLink className="nav-link " to="#">Nouvelles  </NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="#">Biblioteques  </NavLink>
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
       <NavLink className="nav-link " aria-current="page" to="/accueil">Accueil</NavLink>
      </li>
      <li class="nav-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <NavLink class="nav-link " >
            Recherches
          </NavLink>
          <ul class="dropdown-menu">
            <li className='nav-item'><NavLink class="dropdown-item" to="#/admission">Admission et nouvelles</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="/politiques">Politiques de Confidentialites</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="/librairies">Librairies</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="/politiques">Ecoles Doctorales</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="/librairies">Droits d'auteur</NavLink></li>
          </ul>
        </li>
        
      <li className="nav-item" >
       <NavLink className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Facultes
        </NavLink>
        <ul class="dropdown-menu ">
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Faculte de Communication</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Faculte de science Humaines</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Faculte de Droits</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Facultes de Sciences Politiques</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Facultes de l'Education</NavLink></li>
          </ul>
      
      </li>
      <li className="nav-item" >
         <NavLink className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Instituts&amp;Centres </NavLink>
       
         <ul class=" dropdown-menu">
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Ecoles de doctorat</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Centres de Formation Humaines</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Voir plus ...</NavLink></li>
          </ul>

        </li> 
     
        <li className="nav-item" >
         <NavLink className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false" to="#">Nouvelles </NavLink>
          <ul class="dropdown-menu">
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Action</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Another action</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
        </li>
        <li className="nav-item" >
         <NavLink className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="#">Biblioteques</NavLink>
          <ul class="dropdown-menu">
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Action</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Another action</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
        </li>

        <li className="nav-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <NavLink className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="#">Recherches et Innovations</NavLink>
          <ul class="dropdown-menu">
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Action</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Another action</NavLink></li>
            <li className="nav-item"><NavLink class="dropdown-item" to="#">Something else here</NavLink></li>
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
 <NavLink className='navbar-brand' to="#"><img src={img2} alt="" className='image1'/>Universite de <strong >Toukra</strong><span className="divider"><img src={img1} alt="the problem is there" /></span></NavLink>

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
       <NavLink className="nav-link active" aria-current="page" to="#">Accueil</NavLink>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" to="#">Recherche</NavLink>
      </li>
      <li className="nav-item ">
       <NavLink className="nav-link" to="#" >
          Facultes
        </NavLink>
       
      </li>
      <li className="nav-item">
         <NavLink className="nav-link" to="#">Instituts&amp;Centres </NavLink>
         
        </li> 
        <li className="nav-item">
         <NavLink className="nav-link" to="#">Nouvelles  </NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="#">Biblioteques  </NavLink>
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
